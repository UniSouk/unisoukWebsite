"use client";

import { useState } from "react";

import {
  ArrowRightIcon,
  CheckIcon,
  DisclosureIcons,
} from "@/components/ui/icon";
import { COMMERCE_AGENTS } from "@/constants/agents";
import { DASHBOARD_URL, DEMO_BOOKING_URL } from "@/constants/site";

const agentFeatures = COMMERCE_AGENTS.map(({ name }) => name);

const platformFeatures = [
  "Marketplace integrations",
  "Storefront integrations",
  "Unified listings",
  "Inventory management",
  "Order management",
  "Shipping and fulfilment",
  "Payments and settlements",
];

const comparisonRows = [
  ...agentFeatures.map((feature) => ({
    feature,
    agents: true,
    platform: true,
  })),
  ...platformFeatures.map((feature) => ({
    feature,
    agents: false,
    platform: true,
  })),
];

const faqs = [
  {
    question: "Which AI agents are included in the AI Agents Only plan?",
    answer:
      "The plan includes all five UniSouk agents: SoukList, SoukSense, SoukStudio, SoukBoost and SoukLedger.",
  },
  {
    question: "Does the free trial apply to both SaaS plans?",
    answer:
      "Yes. Both AI Agents Only and Integrations + AI Tools include a one month free trial.",
  },
  {
    question: "Are taxes included in the displayed subscription prices?",
    answer:
      "The displayed monthly prices exclude GST. Applicable GST is added to the final subscription amount.",
  },
  {
    question: "Is Account Management included in the ₹2,999 plan?",
    answer:
      "Account Management is a separate hands on service with pricing based on your channels, catalogue and operating requirements.",
  },
  {
    question: "Is ₹9,999 the fixed price for website creation?",
    answer:
      "₹9,999 is the one time starting price. The final quote increases according to your design, catalogue, integration and customization requirements.",
  },
];

const managementFeatures = [
  "Dedicated operational guidance",
  "Marketplace and quick commerce support",
  "Catalogue and day to day execution",
  "Account Setup, Shipping & GST",
  "Catalogue Management",
  "Listing Optimization & Visibility",
  "Image Generation",
  "Pricing Strategy",
  "A+ Content and Brand Store Creation",
  "Promotional Planning",
  "Ads Management",
  "Inventory & Supply Chain",
  "Operations & Performance Tracking",
  "Customer Support",
  "Dedicated Support",
];

const websiteFeatures = [
  "Free domain for the first year",
  "Three months of Shopify included",
  "SEO setup and branding guidelines",
  "Shopify, WooCommerce, Wix or custom build",
  "Custom UI/UX and brand design",
  "Complete website and ecommerce setup",
];

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

export function PricingReference() {
  const [subscription, setSubscription] = useState<"agents" | "integrations">(
    "agents",
  );

  return (
    <>
      <section className="pricing-hero" aria-labelledby="pricing-title">
        <div className="container pricing-hero__inner">
          <p className="pricing-hero__note">
            <span aria-hidden="true" /> One month free on both SaaS plans
          </p>
          <h1 id="pricing-title">
            Simple pricing.
            <br />
            <span>Serious commerce.</span>
          </h1>
          <p className="pricing-hero__lede">
            Choose intelligent tools on their own, or connect your entire
            selling operation through UniSouk.
          </p>
          <div className="pricing-hero__actions">
            <a className="button button--primary" href={DASHBOARD_URL}>
              Start your 1 month free trial
              <ArrowRightIcon />
            </a>
            <a
              className="text-link text-link--arrow text-link--black"
              href="#plans"
            >
              Compare the plans
            </a>
          </div>
        </div>
      </section>

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
                  Choose intelligent assistants on their own, or connect the
                  complete commerce platform.
                </p>
              </div>
              <div className="plan-card__price">
                <div>
                  <small>Starting from</small>
                  <p>
                    <span>₹</span>1,499
                  </p>
                </div>
                <small>One month free, then monthly billing + GST</small>
              </div>
              <a className="button button--primary" href={DASHBOARD_URL}>
                Start your free trial
                <ArrowRightIcon />
              </a>
              <div className="plan-card__body">
                <fieldset className="subscription-options">
                  <legend className="visually-hidden">
                    Choose a SaaS subscription
                  </legend>
                  <label className="subscription-option">
                    <input
                      type="radio"
                      name="saas-subscription"
                      checked={subscription === "agents"}
                      onChange={() => setSubscription("agents")}
                    />
                    <span>AI Agents Only</span>
                    <strong>
                      ₹1,499<small>/month + GST</small>
                    </strong>
                  </label>
                  <label className="subscription-option">
                    <input
                      type="radio"
                      name="saas-subscription"
                      checked={subscription === "integrations"}
                      onChange={() => setSubscription("integrations")}
                    />
                    <span>Integrations + AI Tools</span>
                    <strong>
                      ₹2,999<small>/month + GST</small>
                    </strong>
                  </label>
                </fieldset>
                <FeatureList
                  items={[
                    ...agentFeatures,
                    "One month free trial",
                    ...(subscription === "integrations"
                      ? ["Connected operations on the ₹2,999 plan"]
                      : []),
                  ]}
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
              <a className="button button--secondary" href={DEMO_BOOKING_URL}>
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

      <section
        className="plan-comparison"
        aria-labelledby="comparison-title"
      >
        <div className="container plan-comparison__inner">
          <header>
            <h2 id="comparison-title">Inside the SaaS subscription.</h2>
            <p>
              Both SaaS choices share the same AI foundation. Operational
              connections are added in the ₹2,999 plan.
            </p>
          </header>
          <div
            className="comparison-table"
            role="table"
            aria-label="UniSouk SaaS plan feature comparison"
          >
            <div
              className="comparison-row comparison-row--head"
              role="row"
            >
              <span role="columnheader">Capability</span>
              <span role="columnheader">AI Agents Only</span>
              <span role="columnheader">Integrations + AI Tools</span>
            </div>
            {comparisonRows.map((row) => (
              <div className="comparison-row" role="row" key={row.feature}>
                <strong role="rowheader">{row.feature}</strong>
                <span role="cell" data-label="AI Agents Only">
                  {row.agents ? (
                    <i className="comparison-check" aria-label="Included">
                      <CheckIcon />
                    </i>
                  ) : (
                    <i className="comparison-dash" aria-label="Not included">
                      No
                    </i>
                  )}
                </span>
                <span role="cell" data-label="Integrations + AI Tools">
                  <i className="comparison-check" aria-label="Included">
                    <CheckIcon />
                  </i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq" aria-labelledby="pricing-faq-title">
        <div className="container pricing-faq__inner">
          <div className="pricing-faq__intro">
            <h2 id="pricing-faq-title">A few useful answers.</h2>
            <p>
              Still deciding? These answers can help you choose the right
              starting point.
            </p>
          </div>
          <div className="pricing-faq__list">
            {faqs.map((faq, index) => (
              <details open={index === 0} key={faq.question}>
                <summary>
                  {faq.question}
                  <DisclosureIcons />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
