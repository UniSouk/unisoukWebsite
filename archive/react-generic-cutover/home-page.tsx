import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  EditorialSection,
  FaqSection,
  FinalCta,
  IndexedList,
  OrbitVisual,
  PageHero,
  PageStructuredData,
  SplitIntro,
  type FaqItem,
} from "@/components/marketing/marketing-primitives";
import { RotatingShowcase } from "@/components/marketing/rotating-showcase";
import { NativeSiteShell } from "@/components/layout/site-shell";
import { DEMO_BOOKING_URL, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: { absolute: "UniSouk | List. Sell. Grow." },
  description:
    "Improve every listing, sell across connected channels and know your next move with UniSouk.",
  alternates: { canonical: "/" },
};

const signupUrl = "https://dashboard.unisouk.com/auth/sign-up";

const platformLogos = [
  { name: "Amazon", logo: "/platform-logos/amazon.svg" },
  { name: "ONDC", logo: "/platform-logos/ondc.svg" },
  { name: "Meesho", logo: "/platform-logos/meesho.png" },
  { name: "Shopify", logo: "/platform-logos/shopify.svg" },
  { name: "Wix", logo: "/platform-logos/wix.svg" },
  { name: "WooCommerce", logo: "/platform-logos/woocommerce.svg" },
];

const faqs: FaqItem[] = [
  {
    question: "Which channels can I connect?",
    answer:
      "UniSouk supports a growing set of marketplaces and storefronts. Visit the integrations directory for the current list and connection status.",
  },
  {
    question: "What can I manage with UniSouk?",
    answer:
      "Bring supported channels, product listings, inventory, orders, fulfilment, payments, analytics and AI assistance into one operating view.",
  },
  {
    question: "Can UniSouk help manage my marketplace accounts?",
    answer:
      "Yes. Account Management is a separate hands-on service for sellers who want help with onboarding, catalogue quality and daily channel operations.",
  },
  {
    question: "What makes UniSouk different?",
    answer:
      "UniSouk combines connected commerce workflows, specialized AI assistance and optional hands-on operations while keeping self-serve software distinct from managed services.",
  },
];

export default function HomePage() {
  return (
    <NativeSiteShell>
      <PageStructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "UniSouk",
          url: SITE_URL,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "A unified commerce platform for Indian sellers to manage listings, channels, inventory, orders and growth insights.",
        }}
      />
      <main id="main-content">
        <PageHero
          title="List. Sell."
          accent="Grow."
          description="Improve every listing. Sell across connected channels. Know your next move."
          actions={[
            { label: "Start selling", href: signupUrl },
            {
              label: "Explore account management",
              href: "/solutions/account-management/",
              variant: "secondary",
            },
          ]}
          visual={
            <RotatingShowcase
              ariaLabel="UniSouk commerce workflow"
              items={[
                {
                  title: "List",
                  copy: "Prepare clearer product content and keep catalogue work together.",
                  image: "/unisouk-list-sell-grow.png",
                  alt: "UniSouk list, sell and grow workflow",
                },
                {
                  title: "Sell",
                  copy: "Connect supported channels and coordinate the work behind every order.",
                  image: "/unified-commerce-platform-sync.webp",
                  alt: "Supported commerce channels connected through UniSouk",
                },
                {
                  title: "Grow",
                  copy: "Use connected analytics and specialist AI agents to choose the next move.",
                  image: "/unisouk-dashboard-command-center.png",
                  alt: "UniSouk commerce command centre",
                },
              ]}
            />
          }
        />
        <section
          className="border-y border-[var(--grey)] bg-white"
          aria-label="Supported commerce channels"
        >
          <div className="mx-auto grid w-full max-w-[90rem] grid-cols-6 gap-px bg-[var(--grey)] max-[47.99rem]:grid-cols-3">
            {platformLogos.map((platform) => (
              <div
                className="grid min-h-24 place-items-center bg-white p-6"
                key={platform.name}
              >
                <Image
                  className="h-9 w-24 object-contain"
                  src={platform.logo}
                  width={96}
                  height={36}
                  alt={platform.name}
                />
              </div>
            ))}
          </div>
        </section>
        <EditorialSection>
          <SplitIntro
            eyebrow="AI commerce team"
            title="One platform. Multiple AI specialists."
            copy="Focused assistants help with product content, analytics, imagery, marketing and finance while sharing the same commerce context."
          />
          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <RotatingShowcase
              ariaLabel="Meet the UniSouk AI agents"
              items={[
                {
                  title: "SoukList",
                  copy: "Stronger product content for important channels.",
                  image: "/images/agents/listing-agent-robot.png",
                  alt: "SoukList AI agent",
                },
                {
                  title: "SoukSense",
                  copy: "Clear performance signals and practical next actions.",
                  image: "/images/agents/analytics-agent-robot.png",
                  alt: "SoukSense AI agent",
                },
                {
                  title: "SoukStudio",
                  copy: "Product visual directions for catalogues and campaigns.",
                  image: "/images/agents/image-generation-agent-robot.png",
                  alt: "SoukStudio AI agent",
                },
                {
                  title: "SoukBoost",
                  copy: "Smarter growth direction for commerce campaigns.",
                  image: "/images/agents/marketing-agent-robot.png",
                  alt: "SoukBoost AI agent",
                },
                {
                  title: "SoukLedger",
                  copy: "Clearer fee, settlement and profitability context.",
                  image: "/images/agents/financial-agent-robot.png",
                  alt: "SoukLedger AI agent",
                },
              ]}
            />
          </div>
        </EditorialSection>
        <EditorialSection tone="orange">
          <div className="grid grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] gap-[clamp(4rem,9vw,9rem)] max-[60rem]:grid-cols-1">
            <div className="grid content-start justify-items-start gap-6">
              <p className="m-0 text-xs font-semibold tracking-[0.09em] uppercase">
                End-to-end marketplace management
              </p>
              <h2 className="m-0 max-w-[10ch] !text-[clamp(3rem,6vw,5.6rem)] !leading-[0.94]">
                Hands-on support when software is not enough.
              </h2>
              <Link
                className="border-b-2 border-[var(--ink)] py-2 font-semibold no-underline"
                href="/solutions/account-management/"
              >
                Explore Account Management →
              </Link>
            </div>
            <IndexedList
              items={[
                {
                  title: "Planning that fits",
                  copy: "Set priorities around your actual catalogue, channels and operating capacity.",
                },
                {
                  title: "Support before problems",
                  copy: "Keep recurring marketplace work visible and give it a clear owner.",
                },
                {
                  title: "Advice based on results",
                  copy: "Use account and performance evidence to choose useful next actions.",
                },
                {
                  title: "Built for your business",
                  copy: "Shape the service around the channel mix and work your team needs covered.",
                },
              ]}
            />
          </div>
        </EditorialSection>
        <EditorialSection tone="dark">
          <SplitIntro
            eyebrow="Connected operations"
            title="One place to manage the work behind commerce."
            copy="Keep listings, inventory, orders, shipping, returns, payments and analytics in a clearer operating rhythm."
            dark
          />
          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <IndexedList
              columns={3}
              dark
              items={[
                {
                  title: "Product listings",
                  copy: "Prepare accurate, channel-ready product content.",
                },
                {
                  title: "Inventory",
                  copy: "Keep stock visibility close to the channels using it.",
                },
                {
                  title: "Orders",
                  copy: "See incoming commerce activity in one useful view.",
                },
                {
                  title: "Shipping",
                  copy: "Coordinate fulfilment and delivery status from the order.",
                },
                {
                  title: "Payments",
                  copy: "Connect transaction and settlement context to sales.",
                },
                {
                  title: "Analytics",
                  copy: "Turn operating data into clearer performance signals.",
                },
              ]}
            />
          </div>
        </EditorialSection>
        <EditorialSection tone="mist">
          <div className="grid grid-cols-[minmax(18rem,0.75fr)_minmax(22rem,1.25fr)] items-center gap-[clamp(4rem,9vw,9rem)] max-[60rem]:grid-cols-1">
            <div>
              <h2 className="m-0 max-w-[10ch] !text-[clamp(3rem,5.4vw,5rem)] !leading-[0.97]">
                Sell where your customers already shop.
              </h2>
              <p className="mt-6 max-w-[42ch] leading-[1.65] text-[var(--text-muted)]">
                Connect the channels you use today and keep one reliable source
                of truth behind them.
              </p>
              <Link
                className="mt-5 inline-flex border-b-2 border-[var(--orange-ink)] py-2 font-semibold no-underline"
                href="/integrations/"
              >
                Explore integrations →
              </Link>
            </div>
            <OrbitVisual
              label="Marketplaces and storefronts connected through UniSouk"
              items={platformLogos}
            />
          </div>
        </EditorialSection>
        <EditorialSection>
          <div className="grid grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] items-center gap-[clamp(4rem,8vw,8rem)] max-[58rem]:grid-cols-1">
            <div>
              <h2 className="m-0 max-w-[10ch] !text-[clamp(3rem,5.4vw,5rem)] !leading-[0.98]">
                Commerce, from the seller’s side.
              </h2>
              <p className="mt-6 max-w-[41ch] leading-[1.65] text-[var(--text-muted)]">
                See how UniSouk brings the seller journey together from product
                setup to the next growth decision.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-[var(--radius-md)] bg-[var(--ink)] shadow-[0_8px_8px_rgb(17_17_17/14%)]">
              <iframe
                className="h-full w-full border-0"
                src="https://www.youtube-nocookie.com/embed/ZphodSYPs6A?rel=0"
                title="See how UniSouk helps sellers list, sell and grow"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </EditorialSection>
        <FaqSection items={faqs} />
        <FinalCta
          title="Start your sales journey today."
          copy="Take control of ecommerce operations with a platform and support model built around sellers."
          action={{ label: "Book a free demo", href: DEMO_BOOKING_URL }}
        />
      </main>
    </NativeSiteShell>
  );
}
