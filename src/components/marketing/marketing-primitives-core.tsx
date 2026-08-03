import Image from "next/image";
import type { ReactNode } from "react";

import {
  buttonPrimaryClass,
  buttonSecondaryClass,
  siteContainerClass,
} from "@/components/layout/site-shell-styles";
import { ArrowRightIcon } from "@/components/ui/icon";

export type Action = {
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

export function ActionLink({ action }: { action: Action }) {
  const className =
    action.variant === "secondary"
      ? buttonSecondaryClass
      : action.variant === "text"
        ? "inline-flex min-h-11 items-center gap-3 border-b-2 border-[var(--orange-ink)] font-semibold no-underline"
        : buttonPrimaryClass;

  return (
    <a className={className} href={action.href}>
      {action.label}
      <ArrowRightIcon />
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
        className={`${siteContainerClass} page-hero__inner grid grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)] gap-[clamp(3rem,7vw,7rem)]`}
      >
        <div className="grid justify-items-start gap-6">
          {eyebrow && (
            <p className="m-0 text-xs font-semibold tracking-[0.09em] text-[var(--orange-ink)] uppercase">
              {eyebrow}
            </p>
          )}
          <h1
            className="m-0 max-w-[11ch] !text-[var(--text-hero-heading)] !leading-[0.91] !tracking-[-0.035em]"
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
