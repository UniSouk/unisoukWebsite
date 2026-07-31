import type { Metadata } from "next";

import { IntegrationsReference } from "@/components/marketing/integrations-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { INTEGRATIONS } from "@/constants/integrations";

export const metadata: Metadata = {
  title: { absolute: "Commerce Integrations Directory | UniSouk" },
  description:
    "Explore UniSouk connections for marketplaces, websites, payments and order fulfilment.",
  alternates: { canonical: "/integrations/" },
};

export default function IntegrationsPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "UniSouk Integrations Directory",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: INTEGRATIONS.map((integration, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: integration.name,
            })),
          },
        }}
      />
      <main id="main-content">
        <IntegrationsReference />
      </main>
    </NativeSiteShell>
  );
}
