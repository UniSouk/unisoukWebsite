"use client";

import { useEffect, useRef, useState } from "react";

import { UNI_AGENTS_WORKFLOW } from "@/constants/uni-agents";
import styles from "@/components/marketing/uni-agents-workflow.module.css";

const { steps } = UNI_AGENTS_WORKFLOW;

export function UniAgentsWorkflow() {
  const stageRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = stepRefs.current.findIndex(
          (node) => node === visible.target,
        );
        if (index !== -1) setActiveIndex(index);
      },
      { threshold: [0.3, 0.6], rootMargin: "-20% 0px -20% 0px" },
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      setScrollProgress(1);
      return;
    }

    let frame: number | null = null;

    function updateProgress() {
      frame = null;
      const stage = stageRef.current;
      if (!stage) return;
      const bounds = stage.getBoundingClientRect();
      const start = window.innerHeight * 0.65;
      const travel = Math.max(1, bounds.height - window.innerHeight * 0.35);
      const progress = Math.min(1, Math.max(0, (start - bounds.top) / travel));
      setScrollProgress(progress);
    }

    function scheduleUpdate() {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateProgress);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    function handleMotionChange() {
      if (reducedMotion.matches) {
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
        setScrollProgress(1);
      } else {
        scheduleUpdate();
      }
    }
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const progressPercent = scrollProgress * 100;

  return (
    <div className="grid gap-16" ref={stageRef}>
      <div
        className="relative grid gap-16 pl-8 max-[45rem]:pl-6"
        aria-hidden="true"
      >
        <span
          className="absolute top-0 bottom-0 left-0 w-px bg-[var(--grey)]"
          aria-hidden="true"
        />
        <span
          className="absolute top-0 left-0 w-px bg-[var(--orange)] motion-safe:transition-[height] motion-safe:duration-150 motion-safe:ease-out"
          style={{ height: `${progressPercent}%` }}
          aria-hidden="true"
        />
      </div>
      <ol className="col-start-1 col-end-1 row-start-1 m-0 grid gap-16 p-0 pl-8 max-[45rem]:pl-6">
        {steps.map((step, index) => (
          <li
            className="grid grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] items-start gap-10 max-[50rem]:grid-cols-1"
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
            key={step.number}
            style={{ listStyle: "none" }}
          >
            <div>
              <span
                className={`mb-3 inline-flex text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-300 motion-reduce:transition-none ${
                  index <= activeIndex
                    ? "text-[var(--orange-ink)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {step.number} · {step.label}
              </span>
              <h3 className="m-0 !text-[clamp(1.5rem,2.4vw,2.1rem)]">
                {step.title}
              </h3>
              <p className="mt-3 mb-0 max-w-[46ch] leading-[1.65] text-[var(--text-muted)]">
                {step.copy}
              </p>
            </div>
            <StepVisual stepNumber={step.number} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function StepVisual({ stepNumber }: { stepNumber: string }) {
  if (stepNumber === "01") {
    return (
      <div className="rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--mist)] p-5">
        <label className="text-xs font-medium text-[var(--text-muted)]">
          Marketplace product URL
        </label>
        <div className="mt-2 flex items-center justify-between gap-3 rounded-full border border-[var(--grey)] bg-[var(--white)] px-4 py-2">
          <span className="truncate text-sm text-[var(--text-muted)]">
            https://flipkart.com/...
          </span>
          <button
            className="shrink-0 rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-medium text-[var(--white)]"
            type="button"
            tabIndex={-1}
          >
            Collect product
          </button>
        </div>
        <p className="m-0 mt-3 text-xs text-[var(--orange-ink)]">
          <span aria-hidden="true">✓ </span>Product found · ready to add
        </p>
      </div>
    );
  }

  if (stepNumber === "02") {
    return (
      <div className="rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--mist)] p-5">
        <div className="flex items-center gap-3">
          <span
            className="h-10 w-10 shrink-0 rounded-[var(--radius-sm)] bg-[var(--grey)]"
            aria-hidden="true"
          />
          <div>
            <strong className="text-sm font-medium">
              Preparing product data
            </strong>
            <p className="m-0 text-xs text-[var(--text-muted)]">
              Updated a few seconds ago
            </p>
          </div>
        </div>
        <div
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--grey)]"
          role="progressbar"
          aria-label="Collecting product data"
        >
          <i className={`block h-full w-1/3 rounded-full bg-[var(--orange)] ${styles.indeterminate}`} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
          {["Listing content", "Images", "Offer", "Trust signals"].map(
            (label) => (
              <span
                className="rounded-full border border-[var(--grey)] bg-[var(--white)] px-3 py-1"
                key={label}
              >
                {label}
              </span>
            ),
          )}
        </div>
        <p className="m-0 mt-3 text-xs text-[var(--text-muted)]">
          Safe to leave. Work continues in the background.
        </p>
      </div>
    );
  }

  if (stepNumber === "03") {
    return (
      <div className="flex items-center gap-6 rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--mist)] p-5">
        <div className="grid place-items-center gap-1 rounded-full border border-[var(--grey)] bg-[var(--white)] p-5 text-center">
          <strong className="!text-2xl">82</strong>
          <span className="text-xs text-[var(--text-muted)]">/100</span>
        </div>
        <div>
          <span className="text-xs font-medium text-[var(--text-muted)]">
            Listing health
          </span>
          <strong className="block text-sm">Strong foundation</strong>
          <p className="m-0 mt-1 text-xs text-[var(--text-muted)]">
            Two improvements can make the product easier to understand.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-2 rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--mist)] p-5">
      {[
        { icon: "↗", label: "Improve listing copy", meta: "3 suggestions ready" },
        { icon: "▧", label: "Create product images", meta: "Start from collected media" },
        { icon: "⌁", label: "Compare the category", meta: "Same-marketplace cohort" },
      ].map((action) => (
        <button
          className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--grey)] bg-[var(--white)] px-4 py-3 text-left"
          type="button"
          tabIndex={-1}
          key={action.label}
        >
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--mist)] text-sm"
            aria-hidden="true"
          >
            {action.icon}
          </span>
          <span className="min-w-0">
            <strong className="block text-sm">{action.label}</strong>
            <span className="text-xs text-[var(--text-muted)]">
              {action.meta}
            </span>
          </span>
          <b className="ml-auto text-[var(--orange-ink)]" aria-hidden="true">
            →
          </b>
        </button>
      ))}
    </div>
  );
}
