import { ArrowRightIcon, CheckIcon, DisclosureIcons } from "@/components/ui/icon";
import { DASHBOARD_URL } from "@/constants/site";
import { PricingPlansSection } from "./pricing-plans-section";
import { comparisonRows, faqs } from "./pricing-reference-data";

export function PricingReference() {
  return (<>
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
      <PricingPlansSection />
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
