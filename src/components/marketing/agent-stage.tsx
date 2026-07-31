"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const heroAgents = [
  { name: "SoukList", image: "/images/agents/listing-agent-robot.png", tint: "#e9f2ff", accent: "#176fe5" },
  { name: "SoukSense", image: "/images/agents/analytics-agent-robot.png", tint: "#fff0dd", accent: "#dc7b10" },
  { name: "SoukStudio", image: "/images/agents/image-generation-agent-robot.png", tint: "#e3f8fc", accent: "#078aa5" },
  { name: "SoukBoost", image: "/images/agents/marketing-agent-robot.png", tint: "#fff6cf", accent: "#a97800" },
  { name: "SoukLedger", image: "/images/agents/financial-agent-robot.png", tint: "#f2eaff", accent: "#7550bd" },
];

export function AgentStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % heroAgents.length), 3000);
    return () => window.clearInterval(timer);
  }, [visible]);

  return (
    <div className="agent-stage" ref={stageRef} aria-label="Meet UniSouk's five AI specialists">
      <div className="agent-stage__viewport">
        {heroAgents.map((agent, index) => (
          <article
            className={`agent-stage__panel${index === activeIndex ? " is-active" : ""}`}
            aria-hidden={index !== activeIndex}
            style={{ "--agent-tint": agent.tint, "--agent-accent": agent.accent } as CSSProperties}
            key={agent.name}
          >
            <div className="agent-stage__portrait">
              <span className="agent-stage__signal agent-stage__signal--one" />
              <span className="agent-stage__signal agent-stage__signal--two" />
              <span className="agent-stage__signal agent-stage__signal--three" />
              <img src={agent.image} alt="" width="240" height="240" loading={index === 0 ? "eager" : "lazy"} />
            </div>
          </article>
        ))}
      </div>
      <div className="agent-stage__controls" role="tablist" aria-label="Choose an AI specialist">
        {heroAgents.map((agent, index) => (
          <button
            type="button"
            role="tab"
            className={`agent-stage__control${index === activeIndex ? " is-active" : ""}`}
            aria-selected={index === activeIndex}
            aria-label={`Show ${agent.name}`}
            style={{ "--agent-accent": agent.accent } as CSSProperties}
            onClick={() => setActiveIndex(index)}
            key={agent.name}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
