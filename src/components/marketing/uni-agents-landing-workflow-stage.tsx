"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface UniAgentsWorkflowStageProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reproduces the static reference's scroll-driven workflow progress line
 * and "current step" highlighting (script.js `updateWorkflowProgress` +
 * IntersectionObserver over `.workflow-step`).
 */
export function UniAgentsWorkflowStage({
  children,
  className,
}: UniAgentsWorkflowStageProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const steps = Array.from(
      stage.querySelectorAll<HTMLElement>(".ual-workflow-step"),
    );

    function updateProgress() {
      frameRef.current = null;
      const bounds = stage!.getBoundingClientRect();
      const start = window.innerHeight * 0.65;
      const travel = Math.max(1, bounds.height - window.innerHeight * 0.35);
      const progress = Math.min(
        1,
        Math.max(0, (start - bounds.top) / travel),
      );
      stage!.style.setProperty(
        "--flow-progress",
        String(reducedMotion.matches ? 1 : progress),
      );
    }

    function scheduleUpdate() {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateProgress);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateProgress();

    let observer: IntersectionObserver | null = null;
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      steps.forEach((step) => step.classList.add("is-current"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          steps.forEach((step) =>
            step.classList.toggle("is-current", step === visible.target),
          );
        },
        { rootMargin: "-25% 0px -40%", threshold: [0.08, 0.25, 0.5] },
      );
      steps.forEach((step) => observer!.observe(step));
    }

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className={className} ref={stageRef}>
      {children}
    </div>
  );
}
