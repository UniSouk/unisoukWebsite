import type { Metadata } from "next";

import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { UnifiedCommerceReference } from "@/components/marketing/unified-commerce-reference";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Unified Commerce",
  description:
    "Connect product listings, inventory, orders, fulfilment, payments and analytics in one commerce operating flow built for Indian sellers.",
  alternates: { canonical: "/solutions/unified-commerce/" },
};

export default function UnifiedCommercePage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Unified Commerce | UniSouk",
          description:
            "Connect product listings, inventory, orders, fulfilment, payments and analytics in one commerce operating flow.",
        }}
      />
      <main id="main-content">
        <UnifiedCommerceReference />
      </main>
    </NativeSiteShell>
  );
}
