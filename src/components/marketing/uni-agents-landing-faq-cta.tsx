import Image from "next/image";

import { ArrowRightIcon } from "@/components/ui/icon";
import { DEMO_BOOKING_URL } from "@/constants/site";
import {
  UNI_AGENTS_AUDIENCES,
  UNI_AGENTS_CTA,
  UNI_AGENTS_INTEGRATIONS,
} from "@/constants/uni-agents";
import { UniAgentsFaqAccordion } from "./uni-agents-landing-faq-accordion";
import { UniAgentsIntegrationMap } from "./uni-agents-landing-integration-map";
import { UniAgentsReveal } from "./uni-agents-landing-reveal";

/**
 * Optional module, parked rather than deleted: mirrors `index.html`'s
 * `[data-optional-section="integrations"]`, which stays `hidden` unless
 * `sectionVisibility.integrations` is set to `true` in the static
 * reference's `script.js`. Kept inert here to match that default.
 */
export function UniAgentsLandingIntegrations() {
  return (
    <section className="ual-integrations ual-section" id="integrations" hidden>
      <div className="ual-container">
        <div className="ual-section-heading">
          <div>
            <h2>{UNI_AGENTS_INTEGRATIONS.title}</h2>
          </div>
          <p>{UNI_AGENTS_INTEGRATIONS.copy}</p>
        </div>
        <UniAgentsIntegrationMap />
        <p className="ual-integration-note">{UNI_AGENTS_INTEGRATIONS.note}</p>
      </div>
    </section>
  );
}

/**
 * Optional module, parked rather than deleted: mirrors `index.html`'s
 * `[data-optional-section="audiences"]`, hidden by default in the static
 * reference.
 */
export function UniAgentsLandingAudiences() {
  return (
    <section className="ual-audiences ual-section" hidden>
      <div className="ual-container ual-audience-grid">
        <div className="ual-audience-heading">
          <h2>{UNI_AGENTS_AUDIENCES.title}</h2>
        </div>
        <div className="ual-audience-list">
          {UNI_AGENTS_AUDIENCES.list.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UniAgentsLandingFaq() {
  return (
    <section className="ual-faq ual-section" id="faq">
      <div className="ual-container ual-faq-grid">
        <div className="ual-faq-heading">
          <h2>Clear before you commit.</h2>
          <p>
            Uni Agents is designed to make seller actions, evidence, and
            costs understandable.
          </p>
        </div>
        <UniAgentsFaqAccordion />
      </div>
    </section>
  );
}

export function UniAgentsLandingDemoCta() {
  return (
    <section className="ual-demo-cta" id="demo">
      <UniAgentsReveal as="div" className="ual-container ual-cta-shell">
        <div className="ual-cta-mark" aria-hidden="true">
          <Image
            src="/unisouk-mark.svg"
            alt=""
            width={110}
            height={55}
          />
        </div>
        <div className="ual-cta-copy">
          <p className="ual-eyebrow">
            <span className="ual-eyebrow-dot" />
            {UNI_AGENTS_CTA.eyebrow}
          </p>
          <h2>
            {UNI_AGENTS_CTA.title}
            <br />
            <span>{UNI_AGENTS_CTA.titleAccent}</span>
          </h2>
          <p>{UNI_AGENTS_CTA.copy}</p>
        </div>
        <div className="ual-cta-actions">
          <a
            className="ual-button ual-button-light ual-button-large"
            href={DEMO_BOOKING_URL}
          >
            Book a free demo
            <ArrowRightIcon />
          </a>
          <a className="ual-cta-text-link" href="#workflow">
            Review how it works
          </a>
        </div>
      </UniAgentsReveal>
    </section>
  );
}
