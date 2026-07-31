import { AgentProfilesReference } from "@/components/marketing/agent-profiles-reference";
import { AgentStage } from "@/components/marketing/agent-stage";

const demoUrl = "https://calendar.app.google/NLwZ5g1RJvigqR4c6";

const agentRoles = [
  ["SoukList", "Finds content gaps and prepares stronger product listings."],
  ["SoukSense", "Explains performance movement and identifies the next useful action."],
  ["SoukStudio", "Creates channel ready product visuals that stay aligned with your catalogue and brand."],
  ["SoukBoost", "Reads campaign performance and helps focus spend on profitable demand."],
  ["SoukLedger", "Organizes payment, settlement and profitability signals for clearer financial decisions."],
];

export function AiAgentsReference() {
  return (
    <>
      <section className="agents-hero" id="top" aria-labelledby="agents-title">
        <div className="container agents-hero__inner">
          <div className="agents-hero__copy">
            <h1 id="agents-title">Every Part of Commerce. <span>Powered by AI.</span></h1>
            <p>Five specialized agents help your team manage listings, analytics, image generation, marketing and financial workflows inside one connected commerce context.</p>
            <div className="agents-hero__actions">
              <a className="button button--orange" href={demoUrl}>Book a free demo</a>
              <a className="text-link text-link--arrow" href="#agent-lab">Meet the agents</a>
            </div>
          </div>
          <AgentStage />
        </div>
      </section>

      <section className="agent-lab-section" id="agent-lab" aria-labelledby="agent-lab-title">
        <div className="container agent-lab-section__inner">
          <header className="agent-lab-section__heading">
            <h2 id="agent-lab-title">Meet Your AI Commerce Team</h2>
            <p>Each AI specialist has a clear role across your commerce operations, while shared context keeps every recommendation connected.</p>
          </header>
          <AgentProfilesReference />
        </div>
      </section>

      <section className="agent-roles" aria-labelledby="agent-roles-title">
        <div className="container agent-roles__inner">
          <header>
            <h2 id="agent-roles-title">The right specialist for each kind of commerce work.</h2>
            <p>Every agent has a defined role. Together, they reduce the distance between noticing an opportunity and preparing the next move.</p>
          </header>
          <div className="agent-role-list">
            {agentRoles.map(([name, copy], index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{name}</h3><p>{copy}</p><em aria-hidden="true">↗</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-cta" aria-labelledby="agents-cta-title">
        <div className="container agents-cta__inner">
          <h2 id="agents-cta-title">Put specialized AI inside your everyday commerce workflow.</h2>
          <div className="agents-cta__copy">
            <p>See how UniSouk brings your operations and AI agents into one connected platform.</p>
          </div>
        </div>
      </section>
    </>
  );
}
