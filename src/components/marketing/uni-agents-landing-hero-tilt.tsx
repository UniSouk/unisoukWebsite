"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface UniAgentsHeroTiltProps {
  children: ReactNode;
  className?: string;
}

const SURFACE_SELECTOR = ".ual-app-window";

/**
 * Reproduces the static reference's fine-pointer-only hero tilt effect
 * (script.js `pointermove`/`pointerleave` on `[data-hero-demo]`, applying a
 * small perspective rotation to `[data-tilt-surface]`, i.e. `.app-window`).
 * Finds the surface element by selector rather than introducing an extra
 * wrapper div, so the existing CSS grid/positioning is untouched.
 */
export function UniAgentsHeroTilt({
  children,
  className,
}: UniAgentsHeroTiltProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    function handlePointerMove(event: PointerEvent) {
      const surface = container!.querySelector<HTMLElement>(
        SURFACE_SELECTOR,
      );
      if (!surface || reducedMotion.matches) return;
      const bounds = container!.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      surface.style.transform = `perspective(1100px) rotateX(${-y * 2.2}deg) rotateY(${x * 2.4}deg) translateY(-2px)`;
    }

    function handlePointerLeave() {
      const surface = container!.querySelector<HTMLElement>(
        SURFACE_SELECTOR,
      );
      if (surface) surface.style.transform = "";
    }

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}
