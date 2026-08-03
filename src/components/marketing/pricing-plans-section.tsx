"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icon";
import { DASHBOARD_URL, DEMO_BOOKING_URL } from "@/constants/site";
import { agentFeatures, managementFeatures, websiteFeatures } from "./pricing-reference-data";

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


export function PricingPlansSection() {
  const [subscription, setSubscription] = useState<"agents" | "integrations">(
    "agents",
  );
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
  );
}
