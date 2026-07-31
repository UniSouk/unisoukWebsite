import type { Metadata } from "next";

import { ContactReference } from "@/components/marketing/contact-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: { absolute: "Contact UniSouk | Talk to Ecommerce Experts" },
  description:
    "Contact UniSouk for seller onboarding, marketplace connections, inventory automation, analytics, fulfilment support and custom commerce requirements.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact UniSouk",
          mainEntity: {
            "@type": "Organization",
            name: "UniSouk",
            email: "support@unisouk.com",
            telephone: "+919033151267",
          },
        }}
      />
      <main id="main-content">
        <ContactReference />
      </main>
    </NativeSiteShell>
  );
}
