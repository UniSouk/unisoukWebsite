"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

interface UniAgentsRevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  [key: `aria-${string}`]: unknown;
}

/**
 * Reproduces the static reference's `.reveal` fade-up-on-scroll behavior
 * (script.js `revealItems` + IntersectionObserver) as a native React
 * Client Component. Renders visible immediately if IntersectionObserver is
 * unavailable or the user prefers reduced motion, matching the source
 * behavior exactly.
 */
export function UniAgentsReveal({
  children,
  className,
  as: Component = "div",
  ...rest
}: UniAgentsRevealProps & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ["ual-reveal", className].filter(Boolean).join(" ");

  const ElementTag = Component as ElementType;

  return (
    <ElementTag className={classes} ref={ref} {...rest}>
      {children}
    </ElementTag>
  );
}
