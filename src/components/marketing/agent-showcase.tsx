"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { useState } from "react";

const agents = [
  {
    id: "listing",
    name: "SoukList",
    role: "Listing Agent",
    image: "/images/agents/listing-agent-robot.png",
    description:
      "Finds content gaps and prepares stronger titles, attributes and descriptions for every selling channel.",
  },
  {
    id: "analytics",
    name: "SoukSense",
    role: "Analytics Agent",
    image: "/images/agents/analytics-agent-robot.png",
    description:
      "Turns commerce activity into clear performance signals and the next useful action.",
  },
  {
    id: "image",
    name: "SoukStudio",
    role: "Image Generation Agent",
    image: "/images/agents/image-generation-agent-robot.png",
    description:
      "Creates channel ready product visuals that stay aligned with your catalogue and brand.",
  },
  {
    id: "marketing",
    name: "SoukBoost",
    role: "Marketing Agent",
    image: "/images/agents/marketing-agent-robot.png",
    description:
      "Reads campaign performance and helps focus spend on profitable demand.",
  },
  {
    id: "financial",
    name: "SoukLedger",
    role: "Financial Agent",
    image: "/images/agents/financial-agent-robot.png",
    description:
      "Connects payments, settlements and profitability signals for clearer financial decisions.",
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
            Swipe to explore <span aria-hidden="true">→</span>
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
