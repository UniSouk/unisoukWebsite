import "./uni-agents-landing.css";

import { UniAgentsAgentShowcase } from "./uni-agents-landing-agent-showcase";
import { UniAgentsLandingDurable } from "./uni-agents-landing-durable";
import {
  UniAgentsLandingAudiences,
  UniAgentsLandingDemoCta,
  UniAgentsLandingFaq,
  UniAgentsLandingIntegrations,
} from "./uni-agents-landing-faq-cta";
import { UniAgentsLandingHero } from "./uni-agents-landing-hero";
import {
  UniAgentsLandingManifesto,
  UniAgentsLandingWorkflow,
} from "./uni-agents-landing-manifesto-workflow";

/**
 * Faithful React port of the unisouk-agents-landing static reference
 * (index.html + styles.css + ecosystem.css + script.js). Renders inside
 * the site's shared `NativeSiteShell` header/footer; this component owns
 * everything between the hero and the FAQ/demo CTA sections.
 */
export function UniAgentsLanding() {
  return (
    <div className="uni-agents-landing">
      <UniAgentsLandingHero />
      <UniAgentsLandingManifesto />
      <UniAgentsLandingWorkflow />

      <section className="ual-agents ual-section" id="agents">
        <div className="ual-container">
          <UniAgentsAgentShowcase />
        </div>
      </section>

      <UniAgentsLandingDurable />
      <UniAgentsLandingIntegrations />
      <UniAgentsLandingAudiences />
      <UniAgentsLandingFaq />
      <UniAgentsLandingDemoCta />
    </div>
  );
}
