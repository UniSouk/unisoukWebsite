"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icon";
import {
  ACCOUNT_MANAGEMENT_BOOKING_URL,
  DASHBOARD_URL,
  DEMO_BOOKING_URL,
} from "@/constants/site";
import { managementFeatures, websiteFeatures } from "./pricing-reference-data";
import type { BillingCycle, SaasPlanCategory, SaasPlanPricing } from "@/lib/plans";

function FeatureList({
  items,
  footnote,
}: {
  items: string[];
  footnote: string;
}) {
  return (
    <div className="plan-card__features">
      <h4>Includes</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true"><CheckIcon /></span>
            {item}
          </li>
        ))}
      </ul>
      <small className="plan-card__footnote">{footnote}</small>
    </div>
  );
}

function formatPrice(price: number) {
  return price.toLocaleString("en-IN");
}

function getPriceForCycle(
  prices: SaasPlanPricing["agents"]["prices"],
  billingCycle: BillingCycle,
) {
  return (
    prices.find((entry) => entry.billingCycle === billingCycle) || prices[0]
  );
}

const SUBSCRIPTION_LABELS: Record<SaasPlanCategory, string> = {
  agents: "AI Agents Only",
  platform: "Platform Only",
  bundle: "Platform + AI Tools",
};

const SUBSCRIPTION_ORDER: SaasPlanCategory[] = ["platform", "agents", "bundle"];

export function PricingPlansSection({
  saasPlanPricing,
}: {
  saasPlanPricing: SaasPlanPricing;
}) {
  const [subscription, setSubscription] = useState<SaasPlanCategory>(
    "platform",
  );
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("ANNUAL");

  const showAnnualToggle = SUBSCRIPTION_ORDER.some((category) =>
    saasPlanPricing[category].prices.some(
      (entry) => entry.billingCycle === "ANNUAL",
    ),
  );

  const activePlan = saasPlanPricing[subscription];
  const activePrice = getPriceForCycle(activePlan.prices, billingCycle);
  const cycleSuffix = billingCycle === "ANNUAL" ? "/year + GST" : "/month + GST";

  const activeAnnualSavingsPercent = (() => {
    if (billingCycle !== "ANNUAL") return 0;
    const monthly = activePlan.prices.find(
      (entry) => entry.billingCycle === "MONTHLY",
    );
    const annual = activePlan.prices.find(
      (entry) => entry.billingCycle === "ANNUAL",
    );
    if (!monthly || !annual) return 0;
    const yearlyMonthlyTotal = monthly.price * 12;
    return Math.round(
      ((yearlyMonthlyTotal - annual.price) / yearlyMonthlyTotal) * 100,
    );
  })();

  return (
      <section
        className="pricing-plans"
        id="plans"
        aria-labelledby="plans-title"
      >
        <div className="container pricing-plans__inner">
          <header className="pricing-section-heading">
            <div>
              <h2 className="pricing-section-heading__title" id="plans-title">
                <span>Choose how UniSouk</span>
                <span>works for you.</span>
              </h2>
            </div>
            <p>
              Start with software, add hands on operations, or launch a
              complete storefront. Each model has one clear path forward.
            </p>
          </header>

          <div className="plan-grid">
            <article className="plan-card plan-card--saas">
              <div className="plan-card__flag">Best for self serve sellers</div>
              <div className="plan-card__head">
                <div className="plan-card__identity">
                  <span className="plan-card__index">01</span>
                  <p>Software subscription</p>
                </div>
                <h3>
                  SaaS
                  <br />
                  Subscription
                </h3>
                <p>
                  Choose intelligent assistants, the platform, or connect the
                  complete commerce stack.
                </p>
              </div>
              <div className="plan-card__price">
                <div>
                  <small>Starting from</small>
                  <span className="flex min-w-0 flex-wrap items-center gap-2">
                    <p>
                      <span>₹</span>{formatPrice(activePrice.price)}
                    </p>
                    {activeAnnualSavingsPercent > 0 && (
                      <span className="-translate-y-1 inline-block shrink-0 whitespace-nowrap rounded-full bg-[var(--orange)] px-2.5 py-1 font-[family-name:var(--font-body)] text-[0.7rem] font-semibold text-white">
                        Save {activeAnnualSavingsPercent}%
                      </span>
                    )}
                  </span>
                </div>
                <small> {billingCycle === "ANNUAL" ? "yearly" : "monthly"} billing + GST</small>
              </div>
              <a className="button button--primary" href={DASHBOARD_URL}>
                Start Your Journey
                <ArrowRightIcon />
              </a>
              <div className="plan-card__body">
                {showAnnualToggle && (
                  <fieldset className="billing-cycle-toggle">
                    <legend className="visually-hidden">
                      Choose a billing cycle
                    </legend>
                    <label className="billing-cycle-toggle__option">
                      <input
                        type="radio"
                        name="saas-billing-cycle"
                        checked={billingCycle === "MONTHLY"}
                        onChange={() => setBillingCycle("MONTHLY")}
                      />
                      <span>Monthly</span>
                    </label>
                    <label className="billing-cycle-toggle__option">
                      <input
                        type="radio"
                        name="saas-billing-cycle"
                        checked={billingCycle === "ANNUAL"}
                        onChange={() => setBillingCycle("ANNUAL")}
                      />
                      <span>Yearly</span>
                    </label>
                  </fieldset>
                )}
                <fieldset className="subscription-options">
                  <legend className="visually-hidden">
                    Choose a SaaS subscription
                  </legend>
                  {SUBSCRIPTION_ORDER.map((category) => {
                    const price = getPriceForCycle(
                      saasPlanPricing[category].prices,
                      billingCycle,
                    );
                    return (
                      <label className="subscription-option" key={category}>
                        <input
                          type="radio"
                          name="saas-subscription"
                          checked={subscription === category}
                          onChange={() => setSubscription(category)}
                        />
                        <span>{SUBSCRIPTION_LABELS[category]}</span>
                        <strong>
                          ₹{formatPrice(price.price)}<small>{cycleSuffix}</small>
                        </strong>
                      </label>
                    );
                  })}
                </fieldset>
                <FeatureList
                  items={activePlan.features}
                  footnote="Terms and conditions apply."
                />
              </div>
            </article>

            <article className="plan-card plan-card--management">
              <div className="plan-card__flag plan-card__flag--quiet">
                Built around your scope
              </div>
              <div className="plan-card__head">
                <div className="plan-card__identity">
                  <span className="plan-card__index">02</span>
                  <p>Managed operations</p>
                </div>
                <h3>Account Management</h3>
                <p>
                  Work with a dedicated team for marketplace and quick commerce
                  execution.
                </p>
              </div>
              <div className="plan-card__price plan-card__price--custom">
                <div>
                  <small>Pricing</small>
                  <p>Custom offer</p>
                </div>
                <small>Based on your channels and requirements</small>
              </div>
              <a
                className="button button--secondary"
                href={ACCOUNT_MANAGEMENT_BOOKING_URL}
              >
                Schedule a call
                <ArrowRightIcon />
              </a>
              <div className="plan-card__body">
                <FeatureList
                  items={managementFeatures}
                  footnote="Terms and conditions apply."
                />
              </div>
            </article>

            <article className="plan-card plan-card--website">
              <div className="plan-card__flag plan-card__flag--quiet">
                One time website project
              </div>
              <div className="plan-card__head">
                <div className="plan-card__identity">
                  <span className="plan-card__index">03</span>
                  <p>Commerce storefront</p>
                </div>
                <h3>
                  Website
                  <br />
                  Creation
                </h3>
                <p>
                  Launch a commerce ready website shaped around your brand and
                  requirements.
                </p>
              </div>
              <div className="plan-card__price">
                <div>
                  <small>Starting from</small>
                  <p>
                    <span>₹</span>9,999
                  </p>
                </div>
                <small>one time starting price</small>
              </div>
              <a className="button button--secondary" href={DEMO_BOOKING_URL}>
                Discuss your website
                <ArrowRightIcon />
              </a>
              <div className="plan-card__body">
                <FeatureList
                  items={websiteFeatures}
                  footnote="Final pricing increases according to project requirements. Terms and conditions apply."
                />
              </div>
            </article>
          </div>
          <p className="plan-integrations-note">
            <strong>SaaS connections include</strong> Amazon, Meesho, ONDC,
            Shopify, WooCommerce, Shiprocket, Cashfree Payments and Razorpay.
            Flipkart is coming soon.
          </p>
        </div>
      </section>
  );
}
