import type { Metadata } from "next";

import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { PricingReference } from "@/components/marketing/pricing-reference";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Pricing for Commerce Tools and Services",
  description:
    "Start free with UniSouk AI agents or bring integrations and commerce operations together for ₹2,999 per month plus GST.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "UniSouk Pricing",
          description:
            "Compare UniSouk SaaS plans and managed commerce offerings for Indian sellers.",
        }}
      />
      <main id="main-content">
        <PricingReference />
      </main>
    </NativeSiteShell>
  );
}
