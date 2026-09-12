"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import styles from "@/components/marketing/uni-agents-hero-reveal.module.css";

/**
 * Page-scoped entrance wrapper for the Uni Agents hero.
 *
 * The shared `PageHero` primitive has no entrance animation and is used
 * unanimated site-wide, so this wrapper adds a finite, staggered
 * "waterfall" reveal (eyebrow -> heading -> description -> actions) scoped
 * to this page only, without modifying the shared primitive.
 */
export function UniAgentsHeroReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.reveal} ${isVisible ? styles.isVisible : ""}`}
      ref={rootRef}
    >
      {children}
    </div>
  );
}
