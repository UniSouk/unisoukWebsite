"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { useState } from "react";

import { ArrowRightIcon } from "@/components/ui/icon";
import {
  COMMERCE_AGENTS_BY_ID,
  type CommerceAgentId,
} from "@/constants/agents";

const agentDetails: Record<
  CommerceAgentId,
  { role: string; description: string }
> = {
  listing: {
    role: "Listing Agent",
    description:
      "Finds content gaps and prepares stronger titles, attributes and descriptions for every selling channel.",
  },
  analytics: {
    role: "Analytics Agent",
    description:
      "Turns commerce activity into clear performance signals and the next useful action.",
  },
  image: {
    role: "Image Generation Agent",
    description:
      "Creates channel ready product visuals that stay aligned with your catalogue and brand.",
  },
  marketing: {
    role: "Marketing Agent",
    description:
      "Reads campaign performance and helps focus spend on profitable demand.",
  },
  financial: {
    role: "Financial Agent",
    description:
      "Connects payments, settlements and profitability signals for clearer financial decisions.",
  },
};

const agents = [
  {
    ...COMMERCE_AGENTS_BY_ID.listing,
    ...agentDetails.listing,
  },
  {
    ...COMMERCE_AGENTS_BY_ID.analytics,
    ...agentDetails.analytics,
  },
  {
    ...COMMERCE_AGENTS_BY_ID.image,
    ...agentDetails.image,
  },
  {
    ...COMMERCE_AGENTS_BY_ID.marketing,
    ...agentDetails.marketing,
  },
  {
    ...COMMERCE_AGENTS_BY_ID.financial,
    ...agentDetails.financial,
  },
];

export function AgentShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  function moveFocus(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (
      !["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(event.key)
    ) {
      return;
    }

    event.preventDefault();
    const direction =
      event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + agents.length) % agents.length;
    setActiveIndex(nextIndex);
    document
      .querySelector<HTMLButtonElement>(
        `[data-native-agent-button="${agents[nextIndex].id}"]`,
      )
      ?.focus();
  }

  return (
    <section
      className="agent-showcase"
      id="ai-assistants"
      aria-labelledby="agent-showcase-title"
    >
      <div className="container agent-showcase__inner">
        <header className="agent-showcase__heading">
          <h2 id="agent-showcase-title">
            One Platform.
            <br />
            <span>Multiple AI Specialists.</span>
          </h2>
          <p>
            Each agent handles a different part of commerce. Together, they
            turn seller work into one connected flow.
          </p>
        </header>
        <div className="agent-showcase__body">
          <p className="agent-showcase__scroll-hint">
            Swipe to explore <span aria-hidden="true"><ArrowRightIcon /></span>
          </p>
          <div className="agent-stack" aria-label="Choose an AI agent">
            {agents.map((agent, index) => (
              <button
                className={`agent-card ${activeIndex === index ? "is-active" : ""}`}
                key={agent.id}
                type="button"
                aria-pressed={activeIndex === index}
                data-native-agent-button={agent.id}
                onClick={() => setActiveIndex(index)}
                onPointerEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={(event) => moveFocus(event, index)}
                style={{
                  "--agent-rise": `${(agents.length - index - 1) * 2.15}rem`,
                  "--agent-link": `${index * 2.15 + 2.25}rem`,
                  "--agent-order": index,
                } as CSSProperties}
              >
                <span className="agent-card__icon" aria-hidden="true">
                  <img
                    src={agent.image}
                    alt=""
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="agent-card__index">{agent.role}</span>
                <span className="agent-card__name">{agent.name}</span>
                <span className="agent-card__description">
                  {agent.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
