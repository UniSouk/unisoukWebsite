import { COMMERCE_AGENTS } from "@/constants/agents";
import type { SaasPlanPricing } from "@/lib/plans";

export const agentFeatures = COMMERCE_AGENTS.map(({ name }) => name);

// One-line descriptions matching the copy used on the agent profile cards,
// shown as subtext under each agent's name in the plan comparison table.
const agentDescriptions: Record<string, string> = {
  SoukList: "Audits product content and prepares clearer, channel-ready listings.",
  SoukSense: "Turns connected performance signals into useful insights and next actions.",
  SoukStudio: "Creates product visual directions for every important sales channel.",
  SoukBoost: "Finds stronger campaign opportunities and smarter places to spend.",
  SoukLedger: "Makes fees, payments, and profitability easier to understand.",
};

const platformFeatureDescriptions: Record<string, string> = {
  "Marketplace integrations": "Connects your catalogue to Amazon, Meesho, ONDC and other marketplaces.",
  "Storefront integrations": "Connects your catalogue to Shopify, WooCommerce and other storefronts.",
  "Unified listings": "Keeps product listings consistent across every connected channel.",
  "Inventory management": "Tracks stock levels centrally so channels stay accurate and in sync.",
  "Order management": "Brings orders from every channel into one place to process.",
  "Shipping and fulfilment": "Connects shipping partners like Shiprocket to fulfil orders on time.",
  "Payments and settlements": "Reconciles payments and settlements through Cashfree and Razorpay.",
};

// Static fallback used if the live plans API is unavailable or returns an
// unexpected shape, so the pricing cards never show a broken price.
export const fallbackSaasPlanPricing: SaasPlanPricing = {
  agents: {
    name: "AI Agents",
    description: "Intelligent assistants for listings, analytics, imagery, marketing and finance.",
    features: agentFeatures,
    prices: [{ billingCycle: "MONTHLY", price: 1499, currency: "INR" }],
  },
  platform: {
    name: "Platform",
    description: "Unlimited channels, orders and tools without the AI agents.",
    features: [
      "Marketplace integrations",
      "Storefront integrations",
      "Unified listings",
      "Inventory management",
      "Order management",
    ],
    prices: [{ billingCycle: "MONTHLY", price: 1499, currency: "INR" }],
  },
  bundle: {
    name: "Integrations + AI Tools",
    description: "AI assistants plus the connected commerce workflows needed to operate across channels.",
    features: [
      ...agentFeatures,
      "Marketplace integrations",
      "Storefront integrations",
      "Unified listings",
      "Inventory and orders",
      "Shipping and fulfilment",
      "Payments and settlements",
    ],
    prices: [{ billingCycle: "MONTHLY", price: 2999, currency: "INR" }],
  },
};

export const platformFeatures = [
  "Marketplace integrations",
  "Storefront integrations",
  "Unified listings",
  "Inventory management",
  "Order management",
  "Shipping and fulfilment",
  "Payments and settlements",
];

export const comparisonRows = [
  ...agentFeatures.map((feature) => ({
    feature,
    description: agentDescriptions[feature] as string | undefined,
    agents: true,
    platform: false,
  })),
  ...platformFeatures.map((feature) => ({
    feature,
    description: platformFeatureDescriptions[feature] as string | undefined,
    agents: false,
    platform: true,
  })),
];

export const faqs = [
  {
    question: "Which AI agents are included in the AI Agents Only plan?",
    answer:
      "The plan includes all five UniSouk agents: SoukList, SoukSense, SoukStudio, SoukBoost and SoukLedger.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "UniSouk does not offer a free trial. You can start selling right away with no long-term lock-in, and cancel your subscription at any time.",
  },
  {
    question: "Are taxes included in the displayed subscription prices?",
    answer:
      "Yes. Every subscription price shown here is inclusive of GST, so no extra tax is added to the subscription amount you pay.",
  },
  {
    question: "Is Account Management included in the Integrations + AI Tools plan?",
    answer:
      "Account Management is a separate hands on service with pricing based on your channels, catalogue and operating requirements.",
  },
  {
    question: "Is ₹9,999 the fixed price for website creation?",
    answer:
      "₹9,999 is the one time starting price. The final quote increases according to your design, catalogue, integration and customization requirements.",
  },
];

export const managementFeatures = [
  "Dedicated operational guidance",
  "Marketplace and quick commerce support",
  "Catalogue and day to day execution",
  "Account Setup, Shipping & GST",
  "Catalogue Management",
  "Listing Optimization & Visibility",
  "Image Generation",
  "Pricing Strategy",
  "A+ Content and Brand Store Creation",
  "Promotional Planning",
  "Ads Management",
  "Inventory & Supply Chain",
  "Operations & Performance Tracking",
  "Customer Support",
  "Dedicated Support",
];

export const websiteFeatures = [
  "Free domain for the first year",
  "Three months of Shopify included",
  "SEO setup and branding guidelines",
  "Shopify, WooCommerce, Wix or custom build",
  "Custom UI/UX and brand design",
  "Complete website and ecommerce setup",
];

