import type { Metadata } from "next";

import {
  EditorialSection,
  IndexedList,
  PageHero,
  SplitIntro,
} from "@/components/marketing/marketing-primitives";
import { RotatingShowcase } from "@/components/marketing/rotating-showcase";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { COMMERCE_AGENTS_BY_ID } from "@/constants/agents";

export const metadata: Metadata = {
  title: { absolute: "AI Agent Visual Directions | UniSouk" },
  robots: { index: false, follow: false },
  alternates: { canonical: "/agent-visual-options/" },
};

const agents = [
  {
    title: COMMERCE_AGENTS_BY_ID.listing.name,
    copy: "Audits product content and prepares clearer listings for every channel.",
    image: COMMERCE_AGENTS_BY_ID.listing.image,
    alt: "SoukList AI agent",
  },
  {
    title: COMMERCE_AGENTS_BY_ID.analytics.name,
    copy: "Turns connected performance signals into useful next actions.",
    image: COMMERCE_AGENTS_BY_ID.analytics.image,
    alt: "SoukSense AI agent",
  },
  {
    title: COMMERCE_AGENTS_BY_ID.image.name,
    copy: "Creates product visual directions for important commerce channels.",
    image: COMMERCE_AGENTS_BY_ID.image.image,
    alt: "SoukStudio AI agent",
  },
  {
    title: COMMERCE_AGENTS_BY_ID.marketing.name,
    copy: "Finds campaign opportunities and smarter places to focus spend.",
    image: COMMERCE_AGENTS_BY_ID.marketing.image,
    alt: "SoukBoost AI agent",
  },
  {
    title: COMMERCE_AGENTS_BY_ID.financial.name,
    copy: "Makes fees, payments and profitability easier to understand.",
    image: COMMERCE_AGENTS_BY_ID.financial.image,
    alt: "SoukLedger AI agent",
  },
];

export default function AgentVisualOptionsPage() {
  return (
    <NativeSiteShell>
      <main id="main-content">
        <PageHero
          eyebrow="Visual directions"
          title="Four ways to show one"
          accent="connected AI team."
          description="Each direction uses the same five UniSouk specialists while changing structure, density and motion language."
          actions={[
            {
              label: "Back to AI Agents",
              href: "/solutions/ai-agents/",
              variant: "text",
            },
          ]}
          tone="mist"
        />
        <EditorialSection tone="dark">
          <SplitIntro
            eyebrow="Option A · Recommended"
            title="Agent Compass"
            copy="One precise system, generous spacing and only the information that matters."
            dark
          />
          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <RotatingShowcase
              items={agents}
              ariaLabel="Explore the five UniSouk AI specialists"
            />
          </div>
        </EditorialSection>
        {[
          {
            eyebrow: "Option B",
            title: "Connected Five",
            copy: "Each specialist has a defined place while shared commerce context keeps the composition unified.",
          },
          {
            eyebrow: "Option C",
            title: "Specialist Dial",
            copy: "A precise expression using segmented roles and one central operating rhythm.",
          },
          {
            eyebrow: "Option D",
            title: "Agent Profiles",
            copy: "A friendly direction that gives each specialist a distinct identity without crowding the story.",
          },
        ].map((option, index) => (
          <EditorialSection tone={index % 2 ? "mist" : "white"} key={option.title}>
            <SplitIntro {...option} />
            <div className="mt-[clamp(3rem,6vw,5rem)]">
              <IndexedList
                items={agents.map((agent) => ({
                  title: agent.title,
                  copy: agent.copy,
                }))}
                columns={3}
              />
            </div>
          </EditorialSection>
        ))}
      </main>
    </NativeSiteShell>
  );
}
