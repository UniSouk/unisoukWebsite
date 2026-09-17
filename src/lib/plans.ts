import "server-only";

import { DEFAULT_PLANS_SERVICE_URL } from "@/constants/plans";

export type PublicPlansResult =
  | { ok: true; data: unknown }
  | { ok: false; error: string };

type RawPlanPrice = {
  currency?: unknown;
  billingCycle?: unknown;
  originalPrice?: unknown;
  price?: unknown;
};

type RawPlan = {
  name?: unknown;
  description?: unknown;
  type?: unknown;
  displayCardItems?: unknown;
  planPrices?: unknown;
};

export type BillingCycle = "MONTHLY" | "ANNUAL";

export type SaasPlanPrice = {
  billingCycle: BillingCycle;
  price: number;
  currency: string;
};

export type SaasPlanCategory = "agents" | "platform" | "bundle";

export type SaasPlan = {
  name: string;
  description: string;
  features: string[];
  prices: SaasPlanPrice[];
};

export type SaasPlanPricing = Record<SaasPlanCategory, SaasPlan>;

const PLAN_TYPE_BY_CATEGORY: Record<SaasPlanCategory, string> = {
  agents: "AGENTS",
  platform: "PRO",
  bundle: "BUNDLE",
};

function getPlansServiceUrl() {
  return (process.env.PLANS_SERVICE_URL || DEFAULT_PLANS_SERVICE_URL).replace(
    /\/$/,
    "",
  );
}

export async function getPublicPlans(): Promise<PublicPlansResult> {
  const endpoint = new URL("/plan/public", getPlansServiceUrl());

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return {
        ok: false,
        error: `Plans service request failed with status ${response.status}`,
      };
    }

    const data = (await response.json()) as unknown;
    return { ok: true, data };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Unknown error while fetching public plans",
    };
  }
}

function isValidBillingCycle(value: unknown): value is BillingCycle {
  return value === "MONTHLY" || value === "ANNUAL";
}

function parsePlanPrices(rawPrices: unknown): SaasPlanPrice[] {
  if (!Array.isArray(rawPrices)) return [];

  const prices: SaasPlanPrice[] = [];
  for (const entry of rawPrices as RawPlanPrice[]) {
    if (
      isValidBillingCycle(entry.billingCycle) &&
      typeof entry.price === "number" &&
      typeof entry.currency === "string"
    ) {
      prices.push({
        billingCycle: entry.billingCycle,
        price: entry.price,
        currency: entry.currency,
      });
    }
  }
  return prices;
}

function parseDisplayCardItems(rawItems: unknown): string[] {
  if (!Array.isArray(rawItems)) return [];
  return rawItems.filter((item): item is string => typeof item === "string");
}

/**
 * Extracts the three SaaS subscription categories (AI Agents Only,
 * Platform Only, and the Integrations + AI Tools bundle) from a
 * /plan/public response, matching plans by their `type` field
 * ("AGENTS", "PRO", and "BUNDLE").
 * Returns null if the response does not contain all three plans in the
 * expected shape, so callers can fall back to known-good static pricing.
 */
export function extractSaasPlanPricing(
  result: PublicPlansResult,
): SaasPlanPricing | null {
  if (!result.ok) return null;
  const payload = result.data as { data?: unknown } | null;
  if (!payload || !Array.isArray(payload.data)) return null;

  const plans = payload.data as RawPlan[];
  const categories: Partial<SaasPlanPricing> = {};

  for (const category of Object.keys(
    PLAN_TYPE_BY_CATEGORY,
  ) as SaasPlanCategory[]) {
    const rawPlan = plans.find(
      (plan) => plan.type === PLAN_TYPE_BY_CATEGORY[category],
    );
    if (!rawPlan) return null;

    const prices = parsePlanPrices(rawPlan.planPrices);
    if (prices.length === 0) return null;

    categories[category] = {
      name: typeof rawPlan.name === "string" ? rawPlan.name : "",
      description:
        typeof rawPlan.description === "string" ? rawPlan.description : "",
      features: parseDisplayCardItems(rawPlan.displayCardItems),
      prices,
    };
  }

  return categories as SaasPlanPricing;
}

