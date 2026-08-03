"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { COMMERCE_AGENTS } from "@/constants/agents";

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
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % COMMERCE_AGENTS.length), 3000);
    return () => window.clearInterval(timer);
  }, [visible]);

  return (
    <div className="agent-stage" ref={stageRef} aria-label="Meet UniSouk's five AI specialists">
      <div className="agent-stage__viewport">
        {COMMERCE_AGENTS.map((agent, index) => (
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
              <Image src={agent.image} alt="" width={240} height={240} loading={index === 0 ? "eager" : "lazy"} />
            </div>
          </article>
        ))}
      </div>
      <div className="agent-stage__controls" role="tablist" aria-label="Choose an AI specialist">
        {COMMERCE_AGENTS.map((agent, index) => (
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
