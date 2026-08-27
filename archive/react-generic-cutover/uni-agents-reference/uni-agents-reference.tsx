import Image from "next/image";

import {
  EditorialSection,
  FinalCta,
  PageHero,
} from "@/components/marketing/marketing-primitives";
import { UniAgentsAgentShowcase } from "@/components/marketing/uni-agents-agent-showcase";
import { UniAgentsHeroDemo } from "@/components/marketing/uni-agents-hero-demo";
import { UniAgentsHeroReveal } from "@/components/marketing/uni-agents-hero-reveal";
import { UniAgentsOrbit } from "@/components/marketing/uni-agents-orbit";
import { UniAgentsWorkflow } from "@/components/marketing/uni-agents-workflow";
import { WordRevealHeading } from "@/components/marketing/uni-agents-word-reveal";
import { DEMO_BOOKING_URL, SIGN_IN_URL } from "@/constants/site";
import {
  UNI_AGENTS_CTA,
  UNI_AGENTS_DURABLE,
  UNI_AGENTS_HERO,
  UNI_AGENTS_MANIFESTO,
  UNI_AGENTS_MARKETPLACE_RAIL,
  UNI_AGENTS_WORKFLOW,
} from "@/constants/uni-agents";

export function UniAgentsReference() {
  return (
    <>
      <UniAgentsHeroReveal>
        <PageHero
          eyebrow={UNI_AGENTS_HERO.eyebrow}
          title={UNI_AGENTS_HERO.title}
          accent={UNI_AGENTS_HERO.accent}
          description={UNI_AGENTS_HERO.lede}
          actions={[
            { label: "Book a free demo", href: DEMO_BOOKING_URL },
            { label: "Sign in", href: SIGN_IN_URL, variant: "text" },
          ]}
          visual={<UniAgentsHeroDemo />}
        />
      </UniAgentsHeroReveal>
      <UniAgentsHeroProof />
      <UniAgentsMarketplaceRail />
      <UniAgentsManifesto />
      <EditorialSection tone="mist" id="workflow">
        <header className="mb-16 max-w-[52ch]">
          <p className="mb-4 text-xs font-semibold tracking-[0.09em] text-[var(--orange-ink)] uppercase">
            {UNI_AGENTS_WORKFLOW.eyebrow}
          </p>
          <WordRevealHeading
            as="h2"
            text={UNI_AGENTS_WORKFLOW.title}
            className="m-0 !text-[clamp(2.4rem,4.4vw,3.75rem)] !leading-[1.02] !tracking-[-0.032em]"
          />
          <p className="mt-4 mb-0 text-[1.05rem] leading-[1.65] text-[var(--text-muted)]">
            {UNI_AGENTS_WORKFLOW.copy}
          </p>
        </header>
        <UniAgentsWorkflow />
      </EditorialSection>
      <EditorialSection id="agents">
        <header className="mb-16 max-w-[58ch]">
          <WordRevealHeading
            as="h2"
            text="One workspace. Three ways forward."
            className="m-0 !text-[clamp(2.4rem,4.4vw,3.75rem)] !leading-[1.02] !tracking-[-0.032em]"
          />
          <p className="mt-4 mb-0 text-[1.05rem] leading-[1.65] text-[var(--text-muted)]">
            Each agent owns one clear seller outcome and keeps the product
            context that started the work.
          </p>
        </header>
        <UniAgentsAgentShowcase />
      </EditorialSection>
      <EditorialSection tone="dark">
        <div className="grid grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] items-center gap-[clamp(3rem,7vw,6rem)] max-[55rem]:grid-cols-1">
          <UniAgentsOrbit />
          <div>
            <WordRevealHeading
              as="h2"
              text={UNI_AGENTS_DURABLE.title}
              className="m-0 max-w-[18ch] !text-[clamp(2.4rem,4.4vw,3.75rem)] !leading-[1.02] !tracking-[-0.032em]"
            />
            <p className="mt-4 mb-0 max-w-[48ch] text-[1.05rem] leading-[1.65] text-white/65">
              {UNI_AGENTS_DURABLE.copy}
            </p>
            <ul className="mt-10 grid list-none gap-6 p-0">
              {UNI_AGENTS_DURABLE.list.map((item) => (
                <li
                  className="border-t border-white/20 pt-6"
                  key={item.title}
                >
                  <strong className="font-[family-name:var(--font-heading)] text-lg font-medium">
                    {item.title}
                  </strong>
                  <p className="mt-1 mb-0 text-sm leading-[1.6] text-white/65">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </EditorialSection>
      <FinalCta
        title={UNI_AGENTS_CTA.title}
        copy={UNI_AGENTS_CTA.copy}
        action={{ label: "Book a free demo", href: DEMO_BOOKING_URL }}
      />
    </>
  );
}

function UniAgentsHeroProof() {
  return (
    <div className="bg-[var(--mist)]">
      <ul className="m-0 flex list-none flex-wrap gap-x-8 gap-y-3 px-[var(--gutter)] pb-10 text-sm text-[var(--text-muted)]">
        {UNI_AGENTS_HERO.proof.map((item) => (
          <li key={item.label}>
            <span className="font-semibold text-[var(--orange-ink)]">
              {item.label}
            </span>{" "}
            {item.copy}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UniAgentsMarketplaceRail() {
  return (
    <div className="border-y border-[var(--grey)] bg-[var(--white)]">
      <div className="mx-auto flex w-full max-w-[var(--container)] flex-wrap items-center gap-x-10 gap-y-4 px-[var(--gutter)] py-6">
        <span className="text-xs font-semibold tracking-[0.08em] text-[var(--text-muted)] uppercase">
          {UNI_AGENTS_MARKETPLACE_RAIL.label}
        </span>
        {UNI_AGENTS_MARKETPLACE_RAIL.items.map((item) => (
          <div
            className="flex items-center gap-2 text-sm font-medium text-[var(--ink)]"
            key={item.name}
          >
            <Image
              className="h-5 w-5 object-contain"
              src={item.logo}
              width={20}
              height={20}
              alt=""
            />
            {item.name}
          </div>
        ))}
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
          <span
            className="grid h-5 w-5 place-items-center rounded-full border border-[var(--orange-ink)] text-xs text-[var(--orange-ink)]"
            aria-hidden="true"
          >
            ↻
          </span>
          {UNI_AGENTS_MARKETPLACE_RAIL.scheduled}
        </div>
      </div>
    </div>
  );
}

function UniAgentsManifesto() {
  return (
    <EditorialSection id="product">
      <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] gap-[clamp(3rem,8vw,8rem)] max-[55rem]:grid-cols-1">
        <WordRevealHeading
          as="h2"
          text={UNI_AGENTS_MANIFESTO.title}
          className="m-0 max-w-[22ch] !text-[clamp(2.2rem,4.2vw,3.5rem)] !leading-[1.05] !tracking-[-0.032em]"
          trailingLabel={UNI_AGENTS_MANIFESTO.titleAccent}
          trailing={
            <>
              {" "}
              <em className="text-[var(--orange-ink)] not-italic">
                {UNI_AGENTS_MANIFESTO.titleAccent}
              </em>
            </>
          }
        />
        <div>
          <p className="m-0 max-w-[46ch] text-[1.05rem] leading-[1.65] text-[var(--text-muted)]">
            {UNI_AGENTS_MANIFESTO.copy}
          </p>
          <ol className="mt-8 grid list-none gap-6 p-0">
            {UNI_AGENTS_MANIFESTO.points.map((point, index) => (
              <li
                className="grid grid-cols-[2rem_1fr] gap-4 border-t border-[var(--grey)] pt-6"
                key={point.title}
              >
                <span className="text-xs font-semibold text-[var(--orange-ink)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong className="font-[family-name:var(--font-heading)] text-base font-medium">
                    {point.title}
                  </strong>
                  <p className="mt-1 mb-0 text-sm leading-[1.6] text-[var(--text-muted)]">
                    {point.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </EditorialSection>
  );
}
