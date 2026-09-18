"use client";

import { useState } from "react";
import Image from "next/image";

import { ArrowDownLeftIcon, ArrowUpRightIcon } from "@/components/ui/icon";
import { COMMERCE_AGENTS_BY_ID } from "@/constants/agents";

const agents = [
  {
    ...COMMERCE_AGENTS_BY_ID.listing,
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
    ...COMMERCE_AGENTS_BY_ID.analytics,
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
    ...COMMERCE_AGENTS_BY_ID.image,
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
    ...COMMERCE_AGENTS_BY_ID.marketing,
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
    ...COMMERCE_AGENTS_BY_ID.financial,
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
  // Pointer hover reveals the details on devices that can hover, while the click
  // and keyboard toggle keeps the same details reachable on touch and keyboards.
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="agent-profiles">
      <ul className="agent-profiles__track" role="list">
        {agents.map((agent) => {
          const pinned = pinnedId === agent.id;
          const flipped = hoveredId === agent.id || pinned;
          return (
            <li className={`agent-profile agent-profile--${agent.id}${flipped ? " is-flipped" : ""}`} key={agent.id}>
              <button
                className="agent-profile__trigger"
                type="button"
                aria-pressed={pinned}
                aria-label={flipped ? `Return to ${agent.name} profile` : `View ${agent.name} capabilities`}
                onClick={() => setPinnedId(pinned ? null : agent.id)}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setHoveredId(agent.id);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === "mouse") setHoveredId(null);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setPinnedId(null);
                    setHoveredId(null);
                  }
                }}
              >
                <span className="agent-profile__inner">
                  <span className="agent-profile__face agent-profile__front">
                    <span className="agent-profile__visual">
                      <Image
                        src={agent.image}
                        alt={agent.alt}
                        width={180}
                        height={180}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <strong>{agent.name}</strong>
                    <span className="agent-profile__copy">{agent.frontCopy[0]}<br />{agent.frontCopy[1]}</span>
                    <span className="agent-profile__action" aria-hidden="true"><ArrowUpRightIcon /></span>
                  </span>
                  <span className="agent-profile__face agent-profile__back">
                    <span className="agent-profile__back-top"><strong>{agent.name}</strong><i aria-hidden="true"><ArrowDownLeftIcon /></i></span>
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
