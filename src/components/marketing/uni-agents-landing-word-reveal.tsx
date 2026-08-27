"use client";

import { useEffect, useRef, type CSSProperties, type ElementType } from "react";

interface UniAgentsWordRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
}

/**
 * Reproduces the static reference's word-by-word heading reveal
 * (script.js `prepareTextReveal` + IntersectionObserver over
 * `[data-reveal-text]`). Splits `text` into masked word spans via refs
 * (no `dangerouslySetInnerHTML`), keeping the original text available as
 * an accessible label on the wrapping element.
 */
export function UniAgentsWordReveal({
  text,
  as: Component = "h2",
  className,
}: UniAgentsWordRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      element.classList.add("is-text-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-text-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const words = text.split(/(\s+)/).filter((part) => part.length > 0);
  let wordIndex = 0;

  const ElementTag = Component as ElementType;

  return (
    <ElementTag
      className={["ual-text-reveal-prepared", className]
        .filter(Boolean)
        .join(" ")}
      aria-label={text}
      ref={ref}
    >
      {words.map((part, partIndex) => {
        if (/^\s+$/.test(part)) {
          return <span key={partIndex}>{part}</span>;
        }
        const currentIndex = wordIndex++;
        return (
          <span
            className="ual-reveal-word-mask"
            aria-hidden="true"
            key={partIndex}
          >
            <span
              className="ual-reveal-word"
              style={{ "--word-index": currentIndex } as CSSProperties}
            >
              {part}
            </span>
          </span>
        );
      })}
    </ElementTag>
  );
}
