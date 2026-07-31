import type { Metadata } from "next";

import { AccountManagementReference } from "@/components/marketing/account-management-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Account Management for Marketplaces & Quick Commerce",
  description:
    "A dedicated UniSouk commerce team to manage marketplace and quick commerce listings, operations, promotions and performance.",
  alternates: { canonical: "/solutions/account-management/" },
};

export default function AccountManagementPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "UniSouk Account Management",
          provider: { "@type": "Organization", name: "UniSouk" },
          areaServed: "India",
          description:
            "Managed marketplace and quick commerce operations for Indian brands and sellers.",
        }}
      />
      <main id="main-content">
        <AccountManagementReference />
      </main>
    </NativeSiteShell>
  );
}
