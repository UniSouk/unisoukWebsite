"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import styles from "@/components/marketing/uni-agents-word-reveal.module.css";

/**
 * Page-scoped word-by-word heading reveal, matching the source reference's
 * `data-reveal-text` treatment. Splits `text` into per-word masked spans
 * that animate in on scroll-into-view, staggered ~38ms per word. The
 * heading remains a single accessible string via `aria-label`.
 *
 * Scoped to this page only -- does not modify EditorialSection or any
 * shared heading primitive.
 */
export function WordRevealHeading({
  as = "h2",
  text,
  className,
  trailing,
  trailingLabel,
}: {
  as?: "h1" | "h2" | "h3";
  text: string;
  className?: string;
  trailing?: ReactNode;
  /** Plain-text equivalent of `trailing`, appended to the accessible name. */
  trailingLabel?: string;
}) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");
  const Tag = as;
  const accessibleLabel = trailingLabel ? `${text} ${trailingLabel}` : text;

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
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      className={`${styles.heading} ${className ?? ""}`}
      aria-label={accessibleLabel}
      ref={rootRef}
    >
      {words.map((word, index) => (
        <span className={styles.wordMask} aria-hidden="true" key={`${word}-${index}`}>
          <span
            className={`${styles.word} ${isVisible ? styles.isVisible : ""}`}
            style={{ "--word-index": index } as CSSProperties}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
      {trailing ? <span aria-hidden="true">{trailing}</span> : null}
    </Tag>
  );
}
