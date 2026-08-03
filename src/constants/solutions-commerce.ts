import type { SolutionPageData } from "@/components/marketing/solution-page";
import { COMMERCE_AGENTS_BY_ID } from "@/constants/agents";
import { PLATFORM_LOGOS } from "@/constants/platforms";

export const ACCOUNT_MANAGEMENT_SOLUTION: SolutionPageData = {
  name: "Account Management",
  heroTitle: "Your commerce accounts."
  ,
  heroAccent: "Properly managed.",
  heroCopy:
    "UniSouk combines day-to-day marketplace operations with clear ownership so your team can focus on products and growth.",
  introTitle: "We manage the operations. You scale the business.",
  introCopy:
    "Build consistency across marketplaces and rapid-delivery channels without carrying every operational task inside your team.",
  capabilities: [
    {
      title: "Catalogue and listings",
      copy: "Keep product content, attributes and channel requirements accurate and useful.",
    },
    {
      title: "Daily marketplace operations",
      copy: "Coordinate stock, orders, fulfilment issues and account hygiene through one accountable team.",
    },
    {
      title: "Campaigns and visibility",
      copy: "Plan marketplace activity around catalogue priorities, commercial moments and available stock.",
    },
    {
      title: "Performance and settlements",
      copy: "Review useful operating signals, fees and settlement context without waiting for problems to compound.",
    },
  ],
  workflowTitle: "Managed commerce. Maximum focus.",
  workflowCopy:
    "A steady operating rhythm turns scattered channel work into clear priorities, actions and review.",
  workflow: [
    {
      title: "Own",
      copy: "Give each commerce channel and recurring responsibility a clear owner.",
    },
    {
      title: "Operate",
      copy: "Handle daily catalogue, order and account tasks against agreed priorities.",
    },
    {
      title: "Improve",
      copy: "Use performance and operational evidence to choose the next useful action.",
    },
  ],
  ctaTitle: "Give every commerce channel a clear owner.",
  ctaCopy:
    "Tell us which channels you sell on and where daily operations are slowing growth.",
  structuredDescription:
    "Managed marketplace and quick-commerce operations for Indian sellers.",
};

export const AI_AGENTS_SOLUTION: SolutionPageData = {
  name: "AI Agents for Commerce",
  heroTitle: "Every part of commerce."
  ,
  heroAccent: "Powered by AI.",
  heroCopy:
    "Five approachable specialists help sellers improve listings, understand performance, create imagery, plan marketing and read financial signals.",
  introTitle: "Meet your AI commerce team.",
  introCopy:
    "The right specialist for each kind of work, connected by the same commerce context.",
  capabilities: [
    {
      title: COMMERCE_AGENTS_BY_ID.listing.name,
      copy: "Prepare clearer, channel-ready product titles, descriptions and attributes.",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.analytics.name,
      copy: "Turn performance signals into useful findings and practical next actions.",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.image.name,
      copy: "Develop product-image directions suited to catalogues and campaigns.",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.marketing.name,
      copy: "Find stronger campaign opportunities and clearer places to focus spend.",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.financial.name,
      copy: "Make payments, fees, settlements and profitability easier to understand.",
    },
  ],
  workflowTitle: "Specialists that work as one team.",
  workflowCopy:
    "Each agent has a focused role while shared product and channel context keeps recommendations connected.",
  workflow: [
    {
      title: "Ask",
      copy: "Start with the commerce question or task that matters now.",
    },
    {
      title: "Understand",
      copy: "The relevant specialist reads the available product and performance context.",
    },
    {
      title: "Act",
      copy: "Review a clear output and decide what should move into the live workflow.",
    },
  ],
  showcase: [
    {
      title: COMMERCE_AGENTS_BY_ID.listing.name,
      copy: "Stronger product content for every important channel.",
      image: COMMERCE_AGENTS_BY_ID.listing.image,
      alt: "SoukList AI agent",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.analytics.name,
      copy: "Clear performance signals and practical recommendations.",
      image: COMMERCE_AGENTS_BY_ID.analytics.image,
      alt: "SoukSense AI agent",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.image.name,
      copy: "Channel-ready product visual directions.",
      image: COMMERCE_AGENTS_BY_ID.image.image,
      alt: "SoukStudio AI agent",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.marketing.name,
      copy: "Smarter growth direction for campaigns and catalogues.",
      image: COMMERCE_AGENTS_BY_ID.marketing.image,
      alt: "SoukBoost AI agent",
    },
    {
      title: COMMERCE_AGENTS_BY_ID.financial.name,
      copy: "Clearer financial decisions across commerce activity.",
      image: COMMERCE_AGENTS_BY_ID.financial.image,
      alt: "SoukLedger AI agent",
    },
  ],
  ctaTitle: "Put specialized AI inside everyday commerce work.",
  ctaCopy:
    "Start with the task taking the most time and see how the right agent can help.",
  structuredDescription:
    "AI assistants for product listings, analytics, imagery, marketing and commerce finance.",
};

export const AMAZON_SOLUTION: SolutionPageData = {
  name: "Amazon Seller Central",
  heroTitle: "Operate Amazon with"
  ,
  heroAccent: "more clarity.",
  heroCopy:
    "Bring important Seller Central work into one disciplined operating view, with hands-on support available when your team needs it.",
  introTitle: "The important Amazon jobs, connected.",
  introCopy:
    "Coordinate catalogue, stock, fulfilment, performance and financial work without losing sight of the seller account behind it.",
  capabilities: [
    {
      title: "Product listing management",
      copy: "Prepare and maintain useful product information for Amazon shoppers.",
    },
    {
      title: "Pricing and inventory",
      copy: "Keep pricing decisions and available stock visible together.",
    },
    {
      title: "Amazon fulfilment / FBA",
      copy: "Coordinate inbound, fulfilment and availability workflows with clearer ownership.",
    },
    {
      title: "Order management",
      copy: "Track incoming orders and their operational status from one workflow.",
    },
    {
      title: "Performance analytics",
      copy: "Read sales and account signals in a form that supports practical decisions.",
    },
    {
      title: "Finance and accounting",
      copy: "Bring fees, settlements, invoicing and remittance context closer together.",
    },
  ],
  workflowTitle: "One operating rhythm for Amazon.",
  workflowCopy:
    "Connect catalogue, fulfilment and financial review so the account does not depend on isolated spreadsheets and late reactions.",
  workflow: [
    {
      title: "Prepare",
      copy: "Set up product content, stock and fulfilment choices around clear standards.",
    },
    {
      title: "Operate",
      copy: "Monitor orders, availability and account work as part of a daily rhythm.",
    },
    {
      title: "Review",
      copy: "Use sales, fees and performance signals to choose the next improvement.",
    },
  ],
  logos: [
    { name: "Amazon", logo: PLATFORM_LOGOS.amazon },
    { name: "ONDC", logo: PLATFORM_LOGOS.ondc },
    { name: "Meesho", logo: PLATFORM_LOGOS.meesho },
  ],
  ctaTitle: "Run Seller Central with a clearer operating plan.",
  ctaCopy:
    "Share your catalogue, fulfilment model and the Amazon work taking the most time.",
  structuredDescription:
    "Amazon Seller Central catalogue, inventory, fulfilment, order and finance support.",
};
