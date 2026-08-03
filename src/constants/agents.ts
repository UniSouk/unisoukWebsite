export const COMMERCE_AGENTS = [
  {
    id: "listing",
    name: "SoukList",
    image: "/images/agents/listing-agent-robot.png",
    tint: "#e9f2ff",
    accent: "#176fe5",
  },
  {
    id: "analytics",
    name: "SoukSense",
    image: "/images/agents/analytics-agent-robot.png",
    tint: "#fff0dd",
    accent: "#dc7b10",
  },
  {
    id: "image",
    name: "SoukStudio",
    image: "/images/agents/image-generation-agent-robot.png",
    tint: "#e3f8fc",
    accent: "#078aa5",
  },
  {
    id: "marketing",
    name: "SoukBoost",
    image: "/images/agents/marketing-agent-robot.png",
    tint: "#fff6cf",
    accent: "#a97800",
  },
  {
    id: "financial",
    name: "SoukLedger",
    image: "/images/agents/financial-agent-robot.png",
    tint: "#f2eaff",
    accent: "#7550bd",
  },
] as const;

export type CommerceAgentId = (typeof COMMERCE_AGENTS)[number]["id"];

export const COMMERCE_AGENTS_BY_ID = {
  listing: COMMERCE_AGENTS[0],
  analytics: COMMERCE_AGENTS[1],
  image: COMMERCE_AGENTS[2],
  marketing: COMMERCE_AGENTS[3],
  financial: COMMERCE_AGENTS[4],
} as const satisfies Record<CommerceAgentId, (typeof COMMERCE_AGENTS)[number]>;
