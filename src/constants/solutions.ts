import type { SolutionPageData } from "@/components/marketing/solution-page";
import { COMMERCE_AGENTS_BY_ID } from "@/constants/agents";
import { PLATFORM_LOGOS } from "@/constants/platforms";
import {
  CONSULTATION_BOOKING_URL,
  DEMO_BOOKING_URL,
} from "@/constants/site";

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

export const WEBSITE_SOLUTION: SolutionPageData = {
  name: "Build Your Website",
  heroTitle: "Build a store worth"
  ,
  heroAccent: "coming back to.",
  heroCopy:
    "Create a commerce website around your brand, catalogue and customer journey—not a generic template.",
  heroAction: {
    label: "Book a free consultation",
    href: CONSULTATION_BOOKING_URL,
  },
  introTitle: "The right build starts with the right level of freedom.",
  introCopy:
    "Choose a proven commerce foundation or a more tailored build according to what the business actually needs.",
  capabilities: [
    {
      title: "Foundation build",
      copy: "Launch confidently on a proven storefront foundation with focused brand and catalogue setup.",
    },
    {
      title: "Custom commerce build",
      copy: "Shape the storefront around unique content, customer journeys and operating requirements.",
    },
    {
      title: "Responsive experience",
      copy: "Make product discovery and purchase clear across phones, tablets and larger screens.",
    },
    {
      title: "Commerce connections",
      copy: "Plan the product, payment, shipping and measurement connections the store genuinely needs.",
    },
  ],
  workflowTitle: "From first conversation to first order.",
  workflowCopy:
    "A focused process keeps decisions clear and prevents the build becoming an endless collection of preferences.",
  workflow: [
    {
      title: "Discover",
      copy: "Clarify products, customers, brand direction and operating constraints.",
    },
    {
      title: "Design",
      copy: "Shape hierarchy, content and purchase paths around real customer decisions.",
    },
    {
      title: "Build",
      copy: "Implement the responsive storefront and required commerce connections.",
    },
    {
      title: "Launch",
      copy: "Validate the buying journey, prepare the team and release with confidence.",
    },
  ],
  ctaTitle: "Ready to give your brand a better place to sell?",
  ctaCopy:
    "Tell us what you sell, how you operate and what the current website is holding back.",
  ctaLabel: "Book a free consultation",
  ctaHref: CONSULTATION_BOOKING_URL,
  structuredDescription:
    "Ecommerce website design and development for Indian brands and sellers.",
};

export const PERFORMANCE_MARKETING_SOLUTION: SolutionPageData = {
  name: "Performance Marketing",
  heroTitle: "Turn attention into"
  ,
  heroAccent: "profitable growth.",
  heroCopy:
    "Plan and manage Meta and Google campaigns around catalogue priorities, commercial context and useful performance evidence.",
  heroAction: {
    label: "Book a free consultation",
    href: CONSULTATION_BOOKING_URL,
  },
  introTitle: "Two powerful channels. One growth thesis.",
  introCopy:
    "Meta creates and recaptures demand. Google captures intent. Define how both should work together for your catalogue.",
  capabilities: [
    {
      title: "Meta advertising",
      copy: "Build discovery, catalogue and retargeting campaigns around audiences and product stories.",
    },
    {
      title: "Google advertising",
      copy: "Meet existing demand with disciplined search, shopping and product-feed decisions.",
    },
    {
      title: "Catalogue and creative",
      copy: "Coordinate products, offers, imagery and ad formats so campaigns stay commercially relevant.",
    },
    {
      title: "Performance reporting",
      copy: "Connect advertising activity to useful actions across products and the next campaign cycle.",
    },
  ],
  workflowTitle: "A calmer way to improve campaign performance.",
  workflowCopy:
    "Use a deliberate learning loop—not constant reaction—to turn live signals into stronger decisions.",
  workflow: [
    {
      title: "Align",
      copy: "Clarify the commercial goal, priority products, margins, audience and channel role.",
    },
    {
      title: "Launch",
      copy: "Build the campaign structure, creative system, tracking and controlled starting budget.",
    },
    {
      title: "Learn",
      copy: "Separate meaningful performance patterns from short-term noise.",
    },
    {
      title: "Reinvest",
      copy: "Move attention and budget toward the ideas earning the next test.",
    },
  ],
  logos: [
    { name: "Meta", logo: "/ecosystem-logos/meta.png" },
    { name: "Google Shopping", logo: "/ecosystem-logos/google-shopping.png" },
    { name: "Instagram", logo: "/ecosystem-logos/instagram.svg" },
  ],
  ctaTitle: "Make every campaign part of a clearer growth plan.",
  ctaCopy:
    "Tell us where you sell, what you want to grow and how current campaigns are performing.",
  ctaLabel: "Book a free consultation",
  ctaHref: CONSULTATION_BOOKING_URL,
  structuredDescription:
    "Performance advertising and campaign management for commerce brands across Meta and Google.",
};

export const UNIFIED_COMMERCE_SOLUTION: SolutionPageData = {
  name: "Unified Commerce",
  heroTitle: "Your business, unified in"
  ,
  heroAccent: "one dashboard.",
  heroCopy:
    "Bring listings, inventory, orders, fulfilment, payments and analytics into one connected operating view.",
  introTitle: "One platform. Every step in sync.",
  introCopy:
    "Six connected jobs create one operating rhythm so teams can spend less time reconciling tools and more time improving commerce.",
  capabilities: [
    {
      title: "Listings",
      copy: "Prepare and maintain product information across supported sales channels.",
    },
    {
      title: "Inventory",
      copy: "Keep stock visibility closer to the channels and orders that depend on it.",
    },
    {
      title: "Orders",
      copy: "Bring incoming orders into one clear place for review and action.",
    },
    {
      title: "Fulfilment",
      copy: "Coordinate shipment and delivery workflows from the order context.",
    },
    {
      title: "Payments",
      copy: "Connect settlement and transaction context to the commerce activity behind it.",
    },
    {
      title: "Analytics",
      copy: "Turn connected operating data into useful performance signals.",
    },
  ],
  workflowTitle: "Six connected jobs. One operating rhythm.",
  workflowCopy:
    "Information moves from product setup through sale, fulfilment and review without every team rebuilding the same context.",
  workflow: [
    {
      title: "List",
      copy: "Prepare products and make them ready for supported channels.",
    },
    {
      title: "Sell",
      copy: "Coordinate stock, incoming orders, fulfilment and payment context.",
    },
    {
      title: "Grow",
      copy: "Use performance evidence to improve products, channels and daily decisions.",
    },
  ],
  showcase: [
    {
      title: "Sales channels",
      copy: "Keep supported marketplaces and storefronts visible in one operating view.",
      image: "/unified-commerce-platform-sync.webp",
      alt: "Connected commerce platforms around UniSouk",
    },
    {
      title: "Command centre",
      copy: "See product, stock, order and performance work without switching between disconnected tools.",
      image: "/unisouk-dashboard-command-center.png",
      alt: "UniSouk commerce command centre",
    },
    {
      title: "List. Sell. Grow.",
      copy: "Follow one clear journey from catalogue setup to operating insight.",
      image: "/unisouk-list-sell-grow.png",
      alt: "UniSouk list, sell and grow workflow",
    },
  ],
  ctaTitle: "Ready to run commerce as one?",
  ctaCopy:
    "See how UniSouk can connect the products, channels and daily work behind your growth.",
  ctaHref: DEMO_BOOKING_URL,
  structuredDescription:
    "Unified listings, inventory, orders, fulfilment, payments and analytics for Indian sellers.",
};
