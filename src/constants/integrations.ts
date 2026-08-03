import { PLATFORM_LOGOS } from "@/constants/platforms";

export type IntegrationCategory =
  | "marketplaces"
  | "online-stores"
  | "payments"
  | "shipping";

export type Integration = {
  name: string;
  slug: string;
  category: IntegrationCategory;
  description: string;
  capabilities: string[];
  logo?: string;
  mark?: string;
  status?: "coming-soon";
};

export const INTEGRATION_CATEGORY_META: Record<
  IntegrationCategory,
  { name: string; description: string }
> = {
  marketplaces: {
    name: "Market places",
    description:
      "List and synchronize products across the marketplaces where customers already shop.",
  },
  "online-stores": {
    name: "Ecommerce Storefronts",
    description:
      "Create and manage your online store while keeping products, stock and orders connected.",
  },
  shipping: {
    name: "Shipping",
    description:
      "Automate shipping and delivery workflows across India from the same order view.",
  },
  payments: {
    name: "Payment",
    description:
      "Bring secure payment and settlement context closer to the orders behind each transaction.",
  },
};

export const INTEGRATION_CATEGORY_ORDER: IntegrationCategory[] = [
  "marketplaces",
  "online-stores",
  "shipping",
  "payments",
];

export const INTEGRATIONS: Integration[] = [
  {
    name: "Amazon",
    slug: "amazon",
    category: "marketplaces",
    description:
      "Manage Amazon catalogue, inventory and order activity from a connected commerce workspace.",
    capabilities: ["Listings", "Inventory", "Orders"],
    logo: "/ecosystem-logos/amazon-app-icon-clean.png",
  },
  {
    name: "Meesho",
    slug: "meesho",
    category: "marketplaces",
    description:
      "Keep Meesho listings and daily selling activity visible within your wider commerce operations.",
    capabilities: ["Listings", "Inventory", "Orders"],
    logo: "/ecosystem-logos/meesho.png",
  },
  {
    name: "ONDC",
    slug: "ondc",
    category: "marketplaces",
    description:
      "Prepare and manage ONDC selling workflows without handling every operational detail separately.",
    capabilities: ["Catalogue", "Inventory", "Orders"],
    logo: "/ecosystem-logos/ondc.svg",
  },
  {
    name: "Shopify",
    slug: "shopify",
    category: "online-stores",
    description:
      "Connect Shopify products, inventory and orders to the same view as your marketplace business.",
    capabilities: ["Products", "Inventory", "Orders"],
    logo: "/ecosystem-logos/shopify-mark.svg",
  },
  {
    name: "WooCommerce",
    slug: "woocommerce",
    category: "online-stores",
    description:
      "Bring WooCommerce catalogue and order activity into your unified commerce workflow.",
    capabilities: ["Products", "Inventory", "Orders"],
    logo: "/ecosystem-logos/woocommerce.svg",
  },
  {
    name: "Wix",
    slug: "wix",
    category: "online-stores",
    description:
      "Connect Wix products, inventory and orders to your unified commerce workflow.",
    capabilities: ["Products", "Inventory", "Orders"],
    logo: PLATFORM_LOGOS.wix,
  },
  {
    name: "Shiprocket",
    slug: "shiprocket",
    category: "shipping",
    description:
      "Coordinate shipment creation, tracking and delivery status from the order workflow.",
    capabilities: ["Shipments", "Tracking", "Delivery status"],
    logo: "/ecosystem-logos/shiprocket.png",
  },
  {
    name: "Cashfree Payments",
    slug: "cashfree-payments",
    category: "payments",
    description:
      "Connect payment and settlement activity to a clearer commerce workflow.",
    capabilities: ["Payments", "Settlements", "Payment visibility"],
    mark: "CF",
  },
  {
    name: "Razorpay",
    slug: "razorpay",
    category: "payments",
    description:
      "Bring payment and settlement information closer to the orders behind each transaction.",
    capabilities: ["Payments", "Settlements", "Payment visibility"],
    logo: "/ecosystem-logos/razorpay.png",
  },
];
