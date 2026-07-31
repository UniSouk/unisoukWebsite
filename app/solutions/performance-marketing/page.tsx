import type { Metadata } from "next";

import { PerformanceMarketingReference } from "@/components/marketing/performance-marketing-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: { absolute: "Performance Marketing for Commerce Brands | UniSouk" },
  description:
    "Plan, launch and improve Meta and Google campaigns with catalogue, creative and commerce context working together.",
  alternates: { canonical: "/solutions/performance-marketing/" },
};

export default function PerformanceMarketingPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "UniSouk Performance Marketing",
          provider: { "@type": "Organization", name: "UniSouk" },
          areaServed: "India",
          description:
            "Performance advertising and campaign management for commerce brands across Meta and Google.",
        }}
      />
      <main id="main-content">
        <PerformanceMarketingReference />
      </main>
    </NativeSiteShell>
  );
}
