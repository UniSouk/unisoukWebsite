import type { Metadata } from "next";

import { AiAgentsReference } from "@/components/marketing/ai-agents-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: { absolute: "AI Agents for Ecommerce | UniSouk" },
  description:
    "Meet UniSouk AI specialists for product listings, analytics, imagery, marketing and commerce finance.",
  alternates: { canonical: "/solutions/ai-agents/" },
};

export default function AiAgentsPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "UniSouk AI Agents for Commerce",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Commerce AI agents for product listings, analytics, image generation, marketing and financial workflows.",
          provider: { "@type": "Organization", name: "UniSouk" },
        }}
      />
      <main id="main-content">
        <AiAgentsReference />
      </main>
    </NativeSiteShell>
  );
}
