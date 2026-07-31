import Image from "next/image";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/json-ld";
import {
  buttonPrimaryClass,
  buttonSecondaryClass,
  siteContainerClass,
} from "@/components/layout/site-shell-styles";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

export type IndexedItem = {
  title: string;
  copy: string;
  meta?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

function ActionLink({ action }: { action: Action }) {
  const className =
    action.variant === "secondary"
      ? buttonSecondaryClass
      : action.variant === "text"
        ? "inline-flex min-h-11 items-center gap-3 border-b-2 border-[var(--orange-ink)] font-semibold no-underline"
        : buttonPrimaryClass;

  return (
    <a className={className} href={action.href}>
      {action.label}
      {action.variant === "text" && <span aria-hidden="true">→</span>}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  actions = [],
  visual,
  tone = "mist",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  actions?: Action[];
  visual?: ReactNode;
  tone?: "mist" | "white" | "dark";
}) {
  const surface =
    tone === "dark"
      ? "bg-[var(--ink)] text-[var(--white)]"
      : tone === "white"
        ? "bg-[var(--white)] text-[var(--ink)]"
        : "bg-[var(--mist)] text-[var(--ink)]";
  const muted = tone === "dark" ? "text-white/65" : "text-[var(--text-muted)]";

  return (
    <section className={`${surface} overflow-hidden`} aria-labelledby="page-title">
      <div
        className={`${siteContainerClass} grid min-h-[calc(100svh-var(--header-height))] grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)] items-center gap-[clamp(3rem,7vw,7rem)] py-[clamp(4rem,8vw,7rem)] max-[65rem]:min-h-0 max-[65rem]:grid-cols-1`}
      >
        <div className="grid justify-items-start gap-6">
          {eyebrow && (
            <p className="m-0 text-xs font-semibold tracking-[0.09em] text-[var(--orange-ink)] uppercase">
              {eyebrow}
            </p>
          )}
          <h1
            className="m-0 max-w-[11ch] !text-[clamp(3.8rem,7vw,6.75rem)] !leading-[0.91] !tracking-[-0.035em] max-[47.99rem]:!text-[clamp(3.35rem,15vw,4.8rem)]"
            id="page-title"
          >
            {title}{" "}
            {accent && <span className="text-[var(--orange-ink)]">{accent}</span>}
          </h1>
          <p className={`m-0 max-w-[46ch] text-[clamp(1.05rem,1.45vw,1.3rem)] leading-[1.65] ${muted}`}>
            {description}
          </p>
          {actions.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 pt-2 max-[47.99rem]:grid max-[47.99rem]:w-full max-[47.99rem]:max-w-96">
              {actions.map((action) => (
                <ActionLink action={action} key={`${action.href}-${action.label}`} />
              ))}
            </div>
          )}
        </div>
        {visual && <div className="min-w-0">{visual}</div>}
      </div>
    </section>
  );
}

export function OrbitVisual({
  label,
  items,
}: {
  label: string;
  items: Array<{ name: string; logo?: string; mark?: string }>;
}) {
  return (
    <figure
      className="relative mx-auto aspect-square w-full max-w-[38rem] rounded-full border border-[var(--grey)] bg-[var(--white)] text-[var(--ink)] shadow-[0_8px_8px_rgb(17_17_17/8%)]"
      aria-label={label}
    >
      <div className="absolute inset-[13%] rounded-full border border-dashed border-[var(--grey-dark)] opacity-45" />
      <div className="absolute inset-[30%] grid place-items-center rounded-full bg-[var(--ink)] p-[18%] shadow-[0_8px_8px_rgb(17_17_17/12%)]">
        <Image
          src="/unisouk-mark-on-dark.svg"
          width={96}
          height={48}
          alt=""
        />
      </div>
      {items.map((item, index) => {
        const angle = (360 / items.length) * index - 90;
        return (
          <span
            className="absolute top-1/2 left-1/2 grid h-15 w-15 -translate-1/2 place-items-center rounded-[var(--radius-md)] border border-[var(--grey)] bg-white p-3 shadow-[0_5px_8px_rgb(17_17_17/9%)]"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(clamp(8.3rem, 17vw, 13rem)) rotate(${-angle}deg)`,
            }}
            title={item.name}
            key={item.name}
          >
            {item.logo ? (
              <Image
                className="h-full w-full object-contain"
                src={item.logo}
                width={48}
                height={48}
                alt=""
              />
            ) : (
              <strong className="text-xs">{item.mark}</strong>
            )}
          </span>
        );
      })}
    </figure>
  );
}

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
