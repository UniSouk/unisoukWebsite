import type { ReactNode } from "react";

import { JsonLd } from "@/components/json-ld";
import { siteContainerClass } from "@/components/layout/site-shell-styles";
import { ActionLink, type Action, type FaqItem, type IndexedItem } from "./marketing-primitives-core";

export function SplitIntro({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  dark?: boolean;
}) {
  return (
    <header className="grid grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] items-end gap-[clamp(3rem,8vw,8rem)] max-[55rem]:grid-cols-1">
      <div>
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold tracking-[0.09em] text-[var(--orange-ink)] uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="m-0 max-w-[13ch] !text-[clamp(2.8rem,5.4vw,5rem)] !leading-[0.98] !tracking-[-0.035em]">
          {title}
        </h2>
      </div>
      <p
        className={`m-0 max-w-[48ch] text-[1.1rem] leading-[1.65] ${
          dark ? "text-white/65" : "text-[var(--text-muted)]"
        }`}
      >
        {copy}
      </p>
    </header>
  );
}

export function IndexedList({
  items,
  columns = 2,
  dark = false,
}: {
  items: IndexedItem[];
  columns?: 1 | 2 | 3;
  dark?: boolean;
}) {
  const grid =
    columns === 3
      ? "grid-cols-3 max-[62rem]:grid-cols-2 max-[42rem]:grid-cols-1"
      : columns === 2
        ? "grid-cols-2 max-[47.99rem]:grid-cols-1"
        : "grid-cols-1";
  const rule = dark ? "border-white/20" : "border-[var(--grey)]";
  const muted = dark ? "text-white/62" : "text-[var(--text-muted)]";

  return (
    <div className={`grid ${grid} border-t ${rule}`}>
      {items.map((item, index) => (
        <article
          className={`grid min-h-56 content-start gap-5 border-b ${rule} py-8 pr-8 odd:border-r max-[47.99rem]:border-r-0`}
          key={`${item.title}-${index}`}
        >
          <span className="text-xs font-semibold text-[var(--orange-ink)]">
            {item.meta || String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="m-0 !text-[clamp(1.65rem,2.6vw,2.5rem)]">
            {item.title}
          </h3>
          <p className={`m-0 max-w-[43ch] leading-[1.65] ${muted}`}>
            {item.copy}
          </p>
        </article>
      ))}
    </div>
  );
}

export function EditorialSection({
  children,
  tone = "white",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "mist" | "dark" | "orange";
  id?: string;
}) {
  const surface = {
    white: "bg-[var(--white)] text-[var(--ink)]",
    mist: "bg-[var(--mist)] text-[var(--ink)]",
    dark: "bg-[var(--ink)] text-[var(--white)]",
    orange: "bg-[var(--orange)] text-[var(--ink)]",
  }[tone];

  return (
    <section className={surface} id={id}>
      <div className={`${siteContainerClass} py-[clamp(5rem,10vw,8rem)]`}>
        {children}
      </div>
    </section>
  );
}

export function FaqSection({
  items,
  title = "A few useful answers.",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <EditorialSection tone="dark">
      <div className="grid grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] gap-[clamp(4rem,9vw,9rem)] max-[60rem]:grid-cols-1">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.09em] text-[var(--orange)] uppercase">
            Frequently asked questions
          </p>
          <h2 className="m-0 max-w-[10ch] !text-[clamp(3rem,5.4vw,5rem)] !leading-[0.96]">
            {title}
          </h2>
        </div>
        <div className="border-t border-white/35">
          {items.map((item, index) => (
            <details
              className="group border-b border-white/20 py-1"
              open={index === 0}
              key={item.question}
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-4 font-[family-name:var(--font-heading)] text-xl [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="text-2xl text-[var(--orange)] group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-0 mb-6 max-w-[58ch] leading-[1.7] text-white/65">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </EditorialSection>
  );
}

export function FinalCta({
  title,
  copy,
  action,
}: {
  title: string;
  copy: string;
  action: Action;
}) {
  return (
    <EditorialSection tone="orange">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-10 max-[52rem]:grid-cols-1 max-[52rem]:items-start">
        <div>
          <h2 className="m-0 max-w-[14ch] !text-[clamp(3rem,6vw,5.7rem)] !leading-[0.94] !tracking-[-0.035em]">
            {title}
          </h2>
          <p className="mt-6 mb-0 max-w-[48ch] text-lg leading-[1.65]">
            {copy}
          </p>
        </div>
        <ActionLink action={action} />
      </div>
    </EditorialSection>
  );
}

export function PageStructuredData({
  value,
}: {
  value: Record<string, unknown> | Record<string, unknown>[];
}) {
  return <JsonLd value={value} />;
}
