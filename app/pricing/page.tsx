import type { Metadata } from "next";

import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { PricingReference } from "@/components/marketing/pricing-reference";
import { fallbackSaasPlanPricing } from "@/components/marketing/pricing-reference-data";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { extractSaasPlanPricing, getPublicPlans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Pricing for Commerce Tools and Services",
  description:
    "Get started with UniSouk AI agents or bring integrations and commerce operations together with the Integrations + AI Tools plan.",
  alternates: { canonical: "/pricing/" },
};

export default async function PricingPage() {
  const publicPlansResult = await getPublicPlans();
  const saasPlanPricing =
    extractSaasPlanPricing(publicPlansResult) || fallbackSaasPlanPricing;

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
        <PricingReference saasPlanPricing={saasPlanPricing} />
      </main>
    </NativeSiteShell>
  );
}
