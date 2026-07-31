"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ShowcaseItem = {
  title: string;
  copy: string;
  label?: string;
  image?: string;
  alt?: string;
};

export function RotatingShowcase({
  items,
  ariaLabel,
}: {
  items: ShowcaseItem[];
  ariaLabel: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (
      reducedMotion.matches ||
      isInteracting ||
      !isVisible ||
      document.hidden
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [isInteracting, isVisible, items.length]);

  const active = items[activeIndex];

  return (
    <div
      ref={rootRef}
      className="grid overflow-hidden rounded-[var(--radius-md)] bg-[var(--ink)] text-[var(--white)] shadow-[0_8px_8px_rgb(17_17_17/14%)]"
      aria-label={ariaLabel}
      onPointerEnter={() => setIsInteracting(true)}
      onPointerLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsInteracting(false);
        }
      }}
    >
      <div className="relative grid min-h-[28rem] place-items-center overflow-hidden border-b border-white/15 bg-[oklch(23%_0_0)] p-8">
        {active.image ? (
          <Image
            className="h-full max-h-[24rem] w-full object-contain"
            src={active.image}
            width={720}
            height={540}
            alt={active.alt || ""}
          />
        ) : (
          <div
            className="grid aspect-square w-[min(70%,20rem)] place-items-center rounded-full border border-[var(--orange)] bg-[radial-gradient(circle_at_center,rgb(255_150_0/18%),transparent_68%)]"
            aria-hidden="true"
          >
            <span className="grid aspect-square w-2/3 place-items-center rounded-full border border-dashed border-white/35 p-8 text-center font-[family-name:var(--font-heading)] text-3xl">
              {active.title}
            </span>
          </div>
        )}
        <span className="absolute top-5 left-5 text-xs tracking-[0.08em] text-[var(--orange)] uppercase">
          {active.label || String(activeIndex + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-8 p-7 max-[40rem]:grid-cols-1">
        <div>
          <h3 className="m-0 !text-[clamp(1.8rem,3vw,2.75rem)]">
            {active.title}
          </h3>
          <p className="mt-3 mb-0 max-w-[48ch] leading-[1.65] text-white/65">
            {active.copy}
          </p>
        </div>
        <div
          className="flex items-end gap-2"
          role="tablist"
          aria-label={ariaLabel}
        >
          {items.map((item, index) => (
            <button
              className="grid h-11 min-w-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-transparent text-xs text-white aria-selected:border-[var(--orange)] aria-selected:bg-[var(--orange)] aria-selected:text-[var(--ink)]"
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              key={item.title}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
