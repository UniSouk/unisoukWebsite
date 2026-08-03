import { COMMERCE_AGENTS } from "@/constants/agents";

export const agentFeatures = COMMERCE_AGENTS.map(({ name }) => name);

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
    agents: true,
    platform: true,
  })),
  ...platformFeatures.map((feature) => ({
    feature,
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
    question: "Does the free trial apply to both SaaS plans?",
    answer:
      "Yes. Both AI Agents Only and Integrations + AI Tools include a one month free trial.",
  },
  {
    question: "Are taxes included in the displayed subscription prices?",
    answer:
      "The displayed monthly prices exclude GST. Applicable GST is added to the final subscription amount.",
  },
  {
    question: "Is Account Management included in the ₹2,999 plan?",
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

