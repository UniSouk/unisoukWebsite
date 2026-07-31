import Image from "next/image";

import {
  EditorialSection,
  FinalCta,
  IndexedList,
  OrbitVisual,
  PageHero,
  PageStructuredData,
  SplitIntro,
  type IndexedItem,
} from "@/components/marketing/marketing-primitives";
import {
  RotatingShowcase,
  type ShowcaseItem,
} from "@/components/marketing/rotating-showcase";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { DEMO_BOOKING_URL } from "@/constants/site";

export type SolutionPageData = {
  name: string;
  heroTitle: string;
  heroAccent: string;
  heroCopy: string;
  heroAction?: { label: string; href: string };
  introTitle: string;
  introCopy: string;
  capabilities: IndexedItem[];
  workflowTitle: string;
  workflowCopy: string;
  workflow: IndexedItem[];
  showcase?: ShowcaseItem[];
  logos?: Array<{ name: string; logo?: string; mark?: string }>;
  ctaTitle: string;
  ctaCopy: string;
  ctaLabel?: string;
  ctaHref?: string;
  structuredDescription: string;
};

export function SolutionPage({ data }: { data: SolutionPageData }) {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          provider: { "@type": "Organization", name: "UniSouk" },
          areaServed: "India",
          description: data.structuredDescription,
        }}
      />
      <main id="main-content">
        <PageHero
          eyebrow={data.name}
          title={data.heroTitle}
          accent={data.heroAccent}
          description={data.heroCopy}
          actions={[
            data.heroAction || {
              label: "Book a free demo",
              href: DEMO_BOOKING_URL,
            },
            {
              label: "Explore how it works",
              href: "#capabilities",
              variant: "text",
            },
          ]}
          visual={
            data.showcase ? (
              <RotatingShowcase
                items={data.showcase}
                ariaLabel={`${data.name} capabilities`}
              />
            ) : data.logos ? (
              <OrbitVisual
                items={data.logos}
                label={`Channels connected through ${data.name}`}
              />
            ) : (
              <CommerceFlowVisual name={data.name} />
            )
          }
        />
        <EditorialSection id="capabilities">
          <SplitIntro title={data.introTitle} copy={data.introCopy} />
          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <IndexedList items={data.capabilities} columns={2} />
          </div>
        </EditorialSection>
        <EditorialSection tone="dark">
          <SplitIntro
            title={data.workflowTitle}
            copy={data.workflowCopy}
            dark
          />
          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <IndexedList items={data.workflow} columns={3} dark />
          </div>
        </EditorialSection>
        {data.logos && (
          <EditorialSection tone="mist">
            <SplitIntro
              eyebrow="Connected channels"
              title="Sell where customers already shop."
              copy="Bring supported channels into a clearer operating view while keeping each channel’s role understandable."
            />
            <div className="mt-[clamp(3rem,6vw,5rem)] grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-md)] bg-[var(--grey)] max-[45rem]:grid-cols-2">
              {data.logos.map((item) => (
                <div
                  className="grid min-h-36 place-items-center bg-white p-8"
                  key={item.name}
                >
                  {item.logo ? (
                    <Image
                      className="h-12 w-28 object-contain"
                      src={item.logo}
                      width={112}
                      height={48}
                      alt={item.name}
                    />
                  ) : (
                    <strong>{item.mark || item.name}</strong>
                  )}
                </div>
              ))}
            </div>
          </EditorialSection>
        )}
        <FinalCta
          title={data.ctaTitle}
          copy={data.ctaCopy}
          action={{
            label: data.ctaLabel || "Book a free demo",
            href: data.ctaHref || DEMO_BOOKING_URL,
          }}
        />
      </main>
    </NativeSiteShell>
  );
}

function CommerceFlowVisual({ name }: { name: string }) {
  const steps = ["Plan", "Connect", "Operate", "Improve"];
  return (
    <figure
      className="grid min-h-[30rem] content-center gap-8 rounded-[var(--radius-md)] bg-[var(--ink)] p-[clamp(2rem,5vw,4rem)] text-white shadow-[0_8px_8px_rgb(17_17_17/14%)]"
      aria-label={`${name} workflow`}
    >
      <figcaption className="text-xs tracking-[0.08em] text-[var(--orange)] uppercase">
        One connected workflow
      </figcaption>
      <ol className="m-0 grid list-none p-0">
        {steps.map((step, index) => (
          <li
            className="grid min-h-16 grid-cols-[2rem_1fr_auto] items-center gap-4 border-b border-white/20"
            key={step}
          >
            <span className="text-xs text-[var(--orange)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong className="font-[family-name:var(--font-heading)] text-xl font-medium">
              {step}
            </strong>
            <span aria-hidden="true">→</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
