import type { SolutionPageData } from "@/components/marketing/solution-page";
import {
  CONSULTATION_BOOKING_URL,
  DEMO_BOOKING_URL,
} from "@/constants/site";

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
