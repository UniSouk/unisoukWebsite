"use client";

import { useState } from "react";

import { buttonPrimaryClass } from "@/components/layout/site-shell-styles";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icon";
import { COMMERCE_AGENTS } from "@/constants/agents";
import { DASHBOARD_URL } from "@/constants/site";

const plans = [
  {
    name: "AI Agents Only",
    price: "₹1,499",
    description:
      "Focused intelligent assistants for listings, analytics, imagery, marketing and finance.",
    features: COMMERCE_AGENTS.map(({ name }) => name),
  },
  {
    name: "Integrations + AI Tools",
    price: "₹2,999",
    description:
      "AI assistants plus the connected commerce workflows needed to operate across channels.",
    features: [
      "All five AI agents",
      "Marketplace connections",
      "Storefront connections",
      "Unified listings",
      "Inventory and orders",
      "Shipping and fulfilment",
      "Payments and settlements",
    ],
  },
] as const;

export function PricingPlans() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = plans[activeIndex];

  return (
    <div className="grid grid-cols-[minmax(17rem,0.65fr)_minmax(0,1.35fr)] overflow-hidden rounded-[var(--radius-md)] border border-[var(--ink)] max-[56rem]:grid-cols-1">
      <div
        className="grid content-start bg-[var(--ink)] p-4 text-white"
        role="tablist"
        aria-label="SaaS pricing plans"
      >
        {plans.map((plan, index) => (
          <button
            className="grid min-h-28 cursor-pointer grid-cols-[2rem_1fr] items-center gap-4 border-0 border-b border-white/20 bg-transparent p-4 text-left text-white aria-selected:bg-white aria-selected:text-[var(--ink)]"
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            key={plan.name}
          >
            <span className="text-xs text-[var(--orange)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong className="font-[family-name:var(--font-heading)] text-xl font-medium">
              {plan.name}
            </strong>
          </button>
        ))}
      </div>
      <div className="grid content-start gap-8 bg-white p-[clamp(2rem,5vw,5rem)]">
        <p className="m-0 text-xs tracking-[0.08em] text-[var(--orange-ink)] uppercase">
          One month free
        </p>
        <div>
          <h3 className="m-0 !text-[clamp(2.4rem,4vw,4rem)]">{active.name}</h3>
          <p className="mt-4 mb-0 max-w-[48ch] leading-[1.65] text-[var(--text-muted)]">
            {active.description}
          </p>
        </div>
        <p className="m-0 font-[family-name:var(--font-heading)] text-[clamp(3rem,6vw,5.5rem)] leading-none">
          {active.price}
          <span className="ml-2 font-[family-name:var(--font-body)] text-sm text-[var(--text-muted)]">
            / month + GST
          </span>
        </p>
        <ul className="m-0 grid list-none grid-cols-2 gap-x-8 p-0 max-[40rem]:grid-cols-1">
          {active.features.map((feature) => (
            <li
              className="flex items-center gap-3 border-b border-[var(--grey)] py-3"
              key={feature}
            >
              <CheckIcon className="shrink-0 text-[var(--orange-ink)]" />
              {feature}
            </li>
          ))}
        </ul>
        <a className={`${buttonPrimaryClass} w-fit`} href={DASHBOARD_URL}>
          Start your free trial
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
}
