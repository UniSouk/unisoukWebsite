import type { Metadata } from "next";

import { ContactReference } from "@/components/marketing/contact-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { SUPPORT_EMAIL, SUPPORT_PHONE_E164 } from "@/constants/contact";

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
            email: SUPPORT_EMAIL,
            telephone: SUPPORT_PHONE_E164,
          },
        }}
      />
      <main id="main-content">
        <ContactReference />
      </main>
    </NativeSiteShell>
  );
}
