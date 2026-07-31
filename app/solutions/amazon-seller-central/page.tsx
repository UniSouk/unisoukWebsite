import type { Metadata } from "next";

import { AmazonSellerReference } from "@/components/marketing/amazon-seller-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Amazon Seller Central Management",
  description:
    "Manage Amazon listings, pricing, inventory, FBA, orders, analytics and finance through one connected UniSouk solution.",
  alternates: { canonical: "/solutions/amazon-seller-central/" },
};

export default function AmazonSellerCentralPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Amazon Seller Central Management",
          description:
            "Unified Amazon Seller Central operations for listings, pricing, inventory, FBA, orders, analytics and finance.",
          provider: { "@type": "Organization", name: "UniSouk" },
        }}
      />
      <main id="main-content">
        <AmazonSellerReference />
      </main>
    </NativeSiteShell>
  );
}
