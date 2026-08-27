import type { Metadata } from "next";

import { UniAgentsLanding } from "@/components/marketing/uni-agents-landing";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: { absolute: "Uni Agents | AI agents for commerce | UniSouk" },
  description:
    "Uni Agents turns marketplace product data into clear, evidence-backed next actions for online sellers.",
  alternates: { canonical: "/solutions/uni-agents/" },
};

export default function UniAgentsPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Uni Agents",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Uni Agents is UniSouk's seller intelligence and execution workspace. It helps online sellers bring marketplace products into one portfolio, understand listing readiness, run focused agents, and move from evidence to the next useful action.",
          provider: { "@type": "Organization", name: "UniSouk" },
        }}
      />
      <main id="main-content">
        <UniAgentsLanding />
      </main>
    </NativeSiteShell>
  );
}
