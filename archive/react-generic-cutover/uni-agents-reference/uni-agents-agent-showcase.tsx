"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { UNI_AGENTS_SHOWCASE } from "@/constants/uni-agents";
import styles from "@/components/marketing/uni-agents-agent-showcase.module.css";

const agents = UNI_AGENTS_SHOWCASE;
const ROTATE_INTERVAL_MS = 4200;

export function UniAgentsAgentShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    setIsReducedMotion(reducedMotion.matches);
    const handleChange = () => setIsReducedMotion(reducedMotion.matches);
    reducedMotion.addEventListener("change", handleChange);
    return () => reducedMotion.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const isCycling = !isReducedMotion && !isInteracting && isVisible;

  useEffect(() => {
    if (
      isReducedMotion ||
      isInteracting ||
      !isVisible ||
      document.hidden
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % agents.length);
      setCycleKey((current) => current + 1);
    }, ROTATE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isInteracting, isVisible, isReducedMotion]);

  function moveFocus(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + agents.length) % agents.length;
    setActiveIndex(nextIndex);
    setCycleKey((current) => current + 1);
    document
      .querySelector<HTMLButtonElement>(
        `[data-uni-agents-showcase-tab="${agents[nextIndex].id}"]`,
      )
      ?.focus();
  }

  function selectAgent(index: number) {
    setActiveIndex(index);
    setCycleKey((current) => current + 1);
  }

  const active = agents[activeIndex];

  return (
    <div
      ref={rootRef}
      onPointerEnter={() => setIsInteracting(true)}
      onPointerLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsInteracting(false);
        }
      }}
    >
      <div
        className="flex flex-wrap gap-3"
        role="tablist"
        aria-label="Explore Uni Agents capabilities"
      >
        {agents.map((agent, index) => (
          <button
            className={`${styles.tab} inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-150 motion-reduce:transition-none ${
              activeIndex === index
                ? "border-transparent bg-[var(--ink)] text-[var(--white)]"
                : "border-[var(--grey)] bg-[var(--white)] text-[var(--text-muted)] hover:text-[var(--ink)]"
            }`}
            type="button"
            role="tab"
            id={`uni-agents-showcase-tab-${agent.id}`}
            aria-selected={activeIndex === index}
            aria-controls={`uni-agents-showcase-panel-${agent.id}`}
            tabIndex={activeIndex === index ? 0 : -1}
            data-uni-agents-showcase-tab={agent.id}
            onClick={() => selectAgent(index)}
            onKeyDown={(event) => moveFocus(event, index)}
            key={agent.id}
          >
            <span
              className="text-xs opacity-60"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {agent.name}
            {activeIndex === index ? (
              <span
                className={`${styles.progress} ${isCycling ? styles.isCycling : ""} ${isInteracting ? styles.isPaused : ""}`}
                aria-hidden="true"
                key={cycleKey}
              />
            ) : null}
          </button>
        ))}
      </div>

      <div
        className="mt-8 grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] gap-10 rounded-[var(--radius-md)] border border-[var(--grey)] bg-[var(--white)] p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_8px_8px_rgb(17_17_17/8%)] max-[50rem]:grid-cols-1"
        role="tabpanel"
        id={`uni-agents-showcase-panel-${active.id}`}
        aria-labelledby={`uni-agents-showcase-tab-${active.id}`}
      >
        <div>
          <div className="flex items-center gap-4">
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full"
              style={{ background: active.tint }}
              aria-hidden="true"
            >
              <Image src={active.image} alt="" width={36} height={36} />
            </span>
            <div>
              <span className="text-xs font-medium text-[var(--text-muted)]">
                {active.label}
              </span>
              <h3 className="m-0 !text-[clamp(1.5rem,2.4vw,2rem)]">
                {active.title}
              </h3>
            </div>
          </div>
          <p className="mt-4 mb-0 max-w-[48ch] leading-[1.65] text-[var(--text-muted)]">
            {active.description}
          </p>
          <ul className="mt-6 grid list-none gap-2 p-0 text-sm text-[var(--text-muted)]">
            {active.points.map((point) => (
              <li className="flex items-center gap-2" key={point}>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: active.accent }}
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <AgentMiniDemo agent={active} />
      </div>
    </div>
  );
}

function AgentMiniDemo({ agent }: { agent: (typeof agents)[number] }) {
  return (
    <div className="grid gap-4 self-start rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--mist)] p-5">
      {agent.score !== null ? (
        <div className="flex items-center gap-3">
          <div className="grid place-items-center gap-0.5 rounded-full border border-[var(--grey)] bg-[var(--white)] px-4 py-3 text-center">
            <strong className="!text-2xl">{agent.score}</strong>
            <span className="text-xs text-[var(--text-muted)]">
              Listing score
            </span>
          </div>
        </div>
      ) : null}
      {agent.axes.length > 0 ? (
        <div className="flex items-end gap-1.5" aria-hidden="true">
          {agent.axes.map((axis) => (
            <span
              className="w-4 rounded-sm bg-[var(--orange)]"
              style={{ height: `${Math.max(axis.value, 8) * 0.4}px` }}
              key={axis.label}
            />
          ))}
        </div>
      ) : null}
      <div className="border-t border-[var(--grey)] pt-4">
        <span className="text-xs font-medium text-[var(--text-muted)]">
          {agent.result.label}
        </span>
        <strong className="block text-sm">{agent.result.title}</strong>
        <span className="text-xs text-[var(--text-muted)]">
          {agent.result.note}
        </span>
      </div>
      {"optimize" in agent && agent.optimize ? (
        <div className="border-t border-[var(--grey)] pt-4">
          <span className="inline-flex rounded-full bg-[var(--orange)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
            {agent.optimize.label}
          </span>
          <strong className="mt-3 block text-sm">
            {agent.optimize.title}
          </strong>
          <div className="mt-3 grid gap-2">
            <div className="rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--white)] p-3">
              <span className="text-xs font-medium text-[var(--text-muted)]">
                Current
              </span>
              <p className="m-0 mt-1 text-xs text-[var(--text-muted)]">
                {agent.optimize.before}
              </p>
            </div>
            <div className="rounded-[var(--radius-sm)] border border-[var(--orange)] bg-[var(--white)] p-3">
              <span className="text-xs font-medium text-[var(--orange-ink)]">
                Suggested
              </span>
              <p className="m-0 mt-1 text-xs text-[var(--ink)]">
                {agent.optimize.after}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
