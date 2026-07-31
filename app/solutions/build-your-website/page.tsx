import type { Metadata } from "next";

import { BuildWebsiteReference } from "@/components/marketing/build-website-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Website Design and Development | UniSouk" },
  description:
    "Build a responsive commerce website around your brand, catalogue, customers and operating requirements.",
  alternates: { canonical: "/solutions/build-your-website/" },
};

export default function BuildYourWebsitePage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "UniSouk Commerce Website Design and Development",
          provider: { "@type": "Organization", name: "UniSouk" },
          areaServed: "India",
          description:
            "D2C storefront and custom commerce website design, development and operational integration.",
        }}
      />
      <main id="main-content">
        <BuildWebsiteReference />
      </main>
    </NativeSiteShell>
  );
}
