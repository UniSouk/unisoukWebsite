import type { Metadata } from "next";

import { AgentShowcase } from "@/components/marketing/agent-showcase";
import {
  AccountManagementStory,
  CommerceEcosystem,
  CommerceOrbit,
} from "@/components/marketing/home-reference-sections";
import { PageStructuredData } from "@/components/marketing/marketing-primitives";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { ArrowRightIcon, DisclosureIcons } from "@/components/ui/icon";
import { HomeHero } from "@/components/marketing/home/home-hero";
import { ChooseHowItWorks } from "@/components/marketing/home/choose-how-it-works";
import { CustomerProof } from "@/components/marketing/home/customer-proof";
import {
  CONSULTATION_BOOKING_URL,
  DEMO_BOOKING_URL,
  SIGN_UP_URL,
  SITE_URL,
} from "@/constants/site";

export const metadata: Metadata = {
  title: {
    absolute: "Unified Commerce Platform for Indian Sellers | UniSouk",
  },
  description:
    "Improve every listing, sell across connected channels and know your next move with UniSouk.",
  alternates: { canonical: "/" },
};

const accountManagerCalendarUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ27oiN5SQCdY_igGWRLCCzNNq2yR1qO5lXm9nTBi_BajecHLmlgGsalXAVVXTYyxRb7rbVSIL4S";

const faqs = [
  {
    question: "Which channels can I connect?",
    answer:
      "UniSouk currently connects with Amazon India, ONDC, Meesho, Shopify, Wix, and WooCommerce. Flipkart support is coming soon.",
  },
  {
    question: "What can I manage with UniSouk?",
    answer:
      "Manage connected channels, products, orders, inventory, analytics, and seller assistance tools from one place.",
  },
  {
    question: "Can UniSouk help manage my marketplace accounts?",
    answer:
      "Yes. Account Management is a separate, hands on service for sellers who want help with onboarding, catalogue quality, and account growth.",
  },
  {
    question: "What makes UniSouk different from other ecommerce software?",
    answer:
      "Unlike traditional ecommerce tools that only manage operations, UniSouk combines AI powered automation, marketplace management, and business intelligence in one platform.",
  },
  {
    question: "What AI Agents does UniSouk offer?",
    answer:
      "UniSouk currently offers five specialized AI Agents: SoukList, SoukSense, SoukStudio, SoukBoost and SoukLedger.",
  },
  {
    question: "Do you provide software, managed services, or both?",
    answer:
      "Both. You can use UniSouk as a SaaS platform independently, or choose Account Management Services for hands-on marketplace operations.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most businesses can begin onboarding within 24 to 48 hours after completing the required documentation.",
  },
  {
    question: "Is UniSouk suitable for businesses of all sizes?",
    answer:
      "Yes. UniSouk supports first-time sellers, growing D2C brands, manufacturers, and enterprise sellers.",
  },
];

export default function HomePage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "UniSouk",
              url: `${SITE_URL}/`,
              logo: {
                "@type": "ImageObject",
                "@id": `${SITE_URL}/#logo`,
                url: `${SITE_URL}/unisouk-logo.svg`,
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "UniSouk",
              url: `${SITE_URL}/`,
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "SoftwareApplication",
              "@id": `${SITE_URL}/#software`,
              name: "UniSouk",
              url: `${SITE_URL}/`,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "A unified commerce platform for Indian sellers to manage listings, channels, inventory, orders and growth insights.",
              provider: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              name: "Unified commerce for Indian sellers",
              url: `${SITE_URL}/`,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#software` },
            },
          ],
        }}
      />
      <main id="main-content">
        <HomeHero />

        <AgentShowcase />
        <AccountManagementStory
          accountManagementUrl={accountManagerCalendarUrl}
        />
        <ChooseHowItWorks
          startTrialUrl={SIGN_UP_URL}
          buildPlanUrl={DEMO_BOOKING_URL}
          consultationUrl={CONSULTATION_BOOKING_URL}
          pricingUrl="/pricing/"
        />
        <CommerceOrbit />
        <CommerceEcosystem />

        <section
          className="integrations"
          id="integrations"
          aria-labelledby="integrations-title"
        >
          <div className="container">
            <div className="section-heading section-heading--wide">
              <h2 id="integrations-title">
                Sell where your customers already shop.
              </h2>
              <p>
                Connect the channels you use today and keep one reliable source
                of truth behind them.
              </p>
            </div>
            <div className="channel-groups">
              <article className="channel-group">
                <h3>Marketplaces</h3>
                <ul>
                  <li>Amazon India</li>
                  <li>ONDC</li>
                  <li>Meesho</li>
                  <li>
                    Flipkart <span>Coming soon</span>
                  </li>
                </ul>
              </article>
              <article className="channel-group">
                <h3>Storefronts</h3>
                <ul>
                  <li>Shopify</li>
                  <li>Wix</li>
                  <li>WooCommerce</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <CustomerProof privacyPolicyUrl="/privacy/" />

        {/* <VideoTestimonialPlaceholder /> */}

        <section
          className="sales-journey"
          id="sales-journey"
          aria-labelledby="sales-journey-title"
        >
          <div className="container sales-journey__inner">
            <div className="sales-journey__intro">
              <h2 id="sales-journey-title">
                <span>Start Your Sales</span>
                <span>Journey Today</span>
              </h2>
              <p>
                It&apos;s time to take control of your ecommerce operations.
                Bring your commerce operations together with UniSouk and
                take control of your next move.
              </p>
              <a className="button button--primary" href={DEMO_BOOKING_URL}>
                Book a free demo
                <ArrowRightIcon />
              </a>
            </div>
            <div className="sales-journey__showcase">
              <figure className="sales-journey__video">
                <div className="sales-journey__video-frame">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/ZphodSYPs6A?rel=0"
                    title="See how UniSouk helps sellers list, sell, and grow"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption>
                  See how UniSouk brings the seller journey together.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="faq section-light" aria-labelledby="faq-title">
          <div className="container faq-inner">
            <h2 id="faq-title">A few useful answers.</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<DisclosureIcons /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </NativeSiteShell>
  );
}
