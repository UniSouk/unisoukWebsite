import type { FaqItem } from "@/components/marketing/marketing-primitives-core";

/**
 * Builds a schema.org FAQPage JSON-LD object from the same FAQ data a page
 * renders, so structured data never drifts from what is actually visible.
 */
export function buildFaqPageSchema(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
