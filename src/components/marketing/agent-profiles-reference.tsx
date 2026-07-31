"use client";

import { useState } from "react";

const agents = [
  {
    id: "listing",
    name: "SoukList",
    image: "/images/agents/listing-agent-robot.png",
    alt: "Blue SoukList robot",
    copy: "Audits product content and prepares clearer, channel-ready listings.",
    frontCopy: ["Create stronger listings for", "every connected sales channel."],
    features: [
      "Audits titles, attributes, and descriptions",
      "Finds missing information and quality gaps",
      "Prepares improvements for each sales channel",
    ],
  },
  {
    id: "analytics",
    name: "SoukSense",
    image: "/images/agents/analytics-agent-robot.png",
    alt: "Orange SoukSense robot",
    copy: "Turns connected performance signals into useful insights and next actions.",
    frontCopy: ["Turn performance signals into", "clearer decisions and next steps."],
    features: [
      "Connects sales, returns, and inventory signals",
      "Explains meaningful performance movement",
      "Highlights the next useful action for your team",
    ],
  },
  {
    id: "image",
    name: "SoukStudio",
    image: "/images/agents/image-generation-agent-robot.png",
    alt: "Cyan SoukStudio robot",
    copy: "Creates product visual directions for every important sales channel.",
    frontCopy: ["Create channel-ready visuals", "from one shared brand context."],
    features: [
      "Builds catalogue and campaign image directions",
      "Keeps visuals aligned with product information",
      "Prepares channel-ready options for review",
    ],
  },
  {
    id: "marketing",
    name: "SoukBoost",
    image: "/images/agents/marketing-agent-robot.png",
    alt: "Yellow SoukBoost robot",
    copy: "Finds stronger campaign opportunities and smarter places to spend.",
    frontCopy: ["Find smarter places to spend", "and stronger campaign returns."],
    features: [
      "Reviews campaign performance across channels",
      "Identifies products and campaigns driving return",
      "Suggests smarter budget priorities for review",
    ],
  },
  {
    id: "financial",
    name: "SoukLedger",
    image: "/images/agents/financial-agent-robot.png",
    alt: "Purple SoukLedger robot",
    copy: "Makes fees, payments, and profitability easier to understand.",
    frontCopy: ["Understand fees and payments", "with clearer profitability."],
    features: [
      "Summarizes payment activity and marketplace fees",
      "Makes channel profitability easier to read",
      "Surfaces financial movement needing attention",
    ],
  },
];

export function AgentProfilesReference() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <div className="agent-profiles">
      <ul className="agent-profiles__track" role="list">
        {agents.map((agent) => {
          const flipped = flippedId === agent.id;
          return (
            <li className={`agent-profile agent-profile--${agent.id}${flipped ? " is-flipped" : ""}`} key={agent.id}>
              <button
                className="agent-profile__trigger"
                type="button"
                aria-pressed={flipped}
                aria-label={flipped ? `Return to ${agent.name} profile` : `View ${agent.name} capabilities`}
                onClick={() => setFlippedId(flipped ? null : agent.id)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setFlippedId(null);
                }}
              >
                <span className="agent-profile__inner">
                  <span className="agent-profile__face agent-profile__front">
                    <span className="agent-profile__visual">
                      <img
                        src={agent.image}
                        alt={agent.alt}
                        width="180"
                        height="180"
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
                      />
                    </span>
                    <strong>{agent.name}</strong>
                    <span className="agent-profile__copy">{agent.frontCopy[0]}<br />{agent.frontCopy[1]}</span>
                    <span className="agent-profile__action" aria-hidden="true">↗</span>
                  </span>
                  <span className="agent-profile__face agent-profile__back">
                    <span className="agent-profile__back-top"><strong>{agent.name}</strong><i aria-hidden="true">↙</i></span>
                    <span className="agent-profile__back-copy">{agent.copy}</span>
                    <span className="agent-profile__features">
                      {agent.features.map((feature) => (
                        <span key={feature}><i aria-hidden="true" />{feature}</span>
                      ))}
                    </span>
                    <span className="agent-profile__return">Return to profile</span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
