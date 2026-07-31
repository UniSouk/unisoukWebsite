import type { Metadata } from "next";
import { AboutReference, aboutFaqs } from "@/components/marketing/about-reference";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: { absolute: "About UniSouk | India’s Unified Seller Platform" },
  description:
    "Meet UniSouk, India’s unified ecommerce platform built to help D2C brands and marketplace sellers simplify online selling and scale.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "UniSouk",
      url: SITE_URL,
      logo: `${SITE_URL}/unisouk-logo.svg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: aboutFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <NativeSiteShell>
      <PageStructuredData value={structuredData} />
      <main id="main-content">
        <AboutReference />
      </main>
    </NativeSiteShell>
  );
}
