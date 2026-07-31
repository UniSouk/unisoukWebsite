import type { Metadata } from "next";

import {
  EditorialSection,
  FaqSection,
  FinalCta,
  IndexedList,
  PageHero,
  PageStructuredData,
  SplitIntro,
  type FaqItem,
} from "@/components/marketing/marketing-primitives";
import { PricingPlans } from "@/components/marketing/pricing-plans";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { DEMO_BOOKING_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: { absolute: "Pricing for Commerce Tools and Services | UniSouk" },
  description:
    "Start free with UniSouk AI agents or bring integrations and commerce operations together for ₹2,999 per month plus GST.",
  alternates: { canonical: "/pricing/" },
};

const faqs: FaqItem[] = [
  {
    question: "Which AI agents are included?",
    answer:
      "The AI Agents Only plan includes SoukList, SoukSense, SoukStudio, SoukBoost and SoukLedger.",
  },
  {
    question: "Does the free trial apply to both SaaS plans?",
    answer:
      "Yes. Both AI Agents Only and Integrations + AI Tools include a one-month free trial.",
  },
  {
    question: "Are taxes included in the displayed prices?",
    answer:
      "The displayed monthly prices exclude GST. Applicable GST is added to the final subscription amount.",
  },
  {
    question: "Is Account Management included?",
    answer:
      "Account Management is a separate hands-on service priced around your channels, catalogue and operating requirements.",
  },
  {
    question: "Is ₹9,999 the fixed website-creation price?",
    answer:
      "₹9,999 is the starting price. The final quote depends on design, catalogue, integrations and customization.",
  },
];

export default function PricingPage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebPage", name: "UniSouk Pricing" },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />
      <main id="main-content">
        <PageHero
          eyebrow="One month free on both SaaS plans"
          title="Simple pricing."
          accent="Serious commerce."
          description="Choose intelligent tools on their own, or connect your selling operation through UniSouk."
          actions={[
            {
              label: "Start your free trial",
              href: "https://dashboard.unisouk.com/",
            },
            { label: "Compare plans", href: "#plans", variant: "text" },
          ]}
          tone="white"
        />
        <EditorialSection id="plans" tone="mist">
          <SplitIntro
            title="Choose how UniSouk works for you."
            copy="Start with software, add hands-on operations, or launch a complete storefront. Each model has one clear path forward."
          />
          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <PricingPlans />
          </div>
        </EditorialSection>
        <EditorialSection>
          <SplitIntro
            title="Services that fit around the platform."
            copy="For sellers who need people as well as software, UniSouk offers focused operating and website services."
          />
          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <IndexedList
              items={[
                {
                  title: "Account Management",
                  copy: "Hands-on marketplace and quick-commerce operations shaped around your catalogue and channels.",
                  meta: "Custom pricing",
                },
                {
                  title: "Website Creation",
                  copy: "A commerce storefront built around your brand, catalogue and customer journey.",
                  meta: "From ₹9,999",
                },
              ]}
            />
          </div>
        </EditorialSection>
        <FaqSection items={faqs} />
        <FinalCta
          title="Choose the operating model that fits now."
          copy="Start with software or talk to the team about hands-on support."
          action={{ label: "Book a free demo", href: DEMO_BOOKING_URL }}
        />
      </main>
    </NativeSiteShell>
  );
}
