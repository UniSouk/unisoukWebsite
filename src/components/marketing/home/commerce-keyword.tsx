"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

const keywords = [
  "Listings",
  "Inventory",
  "Orders",
  "Shipping",
  "Returns",
  "Payments",
  "Analytics",
];

const rotationInterval = 2800;
const transitionDuration = 520;
const fixedKeywordWidth = "9ch";

export function CommerceKeyword() {
  const rootRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const nextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const current = currentRef.current;
    const next = nextRef.current;

    if (!root || !current || !next) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let activeIndex = 0;
    let intervalId: number | undefined;
    let transitionId: number | undefined;
    let isVisible = !("IntersectionObserver" in window);
    let isTransitioning = false;

    const cancelWordAnimations = () => {
      current.getAnimations().forEach((animation) => animation.cancel());
      next.getAnimations().forEach((animation) => animation.cancel());
    };

    const stopRotation = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const rotateKeyword = () => {
      if (isTransitioning || reducedMotion.matches) return;

      isTransitioning = true;
      const nextIndex = (activeIndex + 1) % keywords.length;
      const nextKeyword = keywords[nextIndex];

      next.textContent = nextKeyword;
      cancelWordAnimations();
      current.animate(
        [
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
          { transform: "translate3d(0, -115%, 0)", opacity: 0 },
        ],
        {
          duration: 420,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "forwards",
        },
      );
      next.animate(
        [
          { transform: "translate3d(0, 115%, 0)", opacity: 0 },
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
        ],
        {
          duration: 480,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        },
      );

      transitionId = window.setTimeout(() => {
        current.textContent = nextKeyword;
        cancelWordAnimations();
        next.textContent = "";
        activeIndex = nextIndex;
        isTransitioning = false;
        transitionId = undefined;
      }, transitionDuration);
    };

    const syncRotation = () => {
      stopRotation();
      if (isVisible && !document.hidden && !reducedMotion.matches) {
        intervalId = window.setInterval(rotateKeyword, rotationInterval);
      }
    };

    const handleReducedMotionChange = () => {
      if (reducedMotion.matches && isTransitioning) {
        if (transitionId !== undefined) window.clearTimeout(transitionId);
        cancelWordAnimations();
        current.textContent = keywords[activeIndex];
        next.textContent = "";
        isTransitioning = false;
        transitionId = undefined;
      }
      syncRotation();
    };

    const intersectionObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              isVisible = entry.isIntersecting;
              syncRotation();
            },
            { threshold: 0.35 },
          )
        : undefined;
    intersectionObserver?.observe(root);

    document.addEventListener("visibilitychange", syncRotation);
    reducedMotion.addEventListener("change", handleReducedMotionChange);
    syncRotation();

    return () => {
      stopRotation();
      if (transitionId !== undefined) window.clearTimeout(transitionId);
      cancelWordAnimations();
      intersectionObserver?.disconnect();
      document.removeEventListener("visibilitychange", syncRotation);
      reducedMotion.removeEventListener("change", handleReducedMotionChange);
    };
  }, []);

  return (
    <span
      ref={rootRef}
      className="commerce-keyword"
      style={{
        "--keyword-width": fixedKeywordWidth,
        width: fixedKeywordWidth,
      } as CSSProperties}
      aria-hidden="true"
    >
      <span className="commerce-keyword__background" />
      <span className="commerce-keyword__clip">
        <span
          ref={currentRef}
          className="commerce-keyword__word is-current"
        >
          Listings
        </span>
        <span ref={nextRef} className="commerce-keyword__word is-next" />
      </span>
    </span>
  );
}
