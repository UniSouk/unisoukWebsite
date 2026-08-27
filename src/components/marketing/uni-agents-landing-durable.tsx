import Image from "next/image";

import { UNI_AGENTS_DURABLE } from "@/constants/uni-agents";
import { UniAgentsReveal } from "./uni-agents-landing-reveal";
import { UniAgentsWordReveal } from "./uni-agents-landing-word-reveal";

export function UniAgentsLandingDurable() {
  return (
    <section className="ual-durable ual-section">
      <div className="ual-container ual-durable-grid">
        <UniAgentsReveal className="ual-durable-visual" aria-hidden="true">
          <div className="ual-orbit-map">
            <span className="ual-orbit-center">
              <Image src="/unisouk-mark.svg" alt="" width={56} height={28} />
            </span>
            <i className="ual-orbit-ring r1" />
            <i className="ual-orbit-ring r2" />
            {UNI_AGENTS_DURABLE.nodes.map((node) => (
              <b className={`ual-orbit-node ${node.id}`} key={node.id}>
                {node.label}
              </b>
            ))}
          </div>
        </UniAgentsReveal>
        <UniAgentsReveal className="ual-durable-copy">
          <UniAgentsWordReveal text={UNI_AGENTS_DURABLE.title} />
          <p>{UNI_AGENTS_DURABLE.copy}</p>
          <div className="ual-durable-list">
            {UNI_AGENTS_DURABLE.list.map((item) => (
              <article key={item.title}>
                <span>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </UniAgentsReveal>
      </div>
    </section>
  );
}
