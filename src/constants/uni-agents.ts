export const UNI_AGENTS_HERO = {
  eyebrow: "AI agents for commerce",
  lines: ["Every part of commerce.", "Powered by AI."],
  lede:
    "Specialized agents help sellers improve listings, understand performance, create product imagery, and move from evidence to the next useful action.",
  proof: [
    { label: "Free", copy: "listing audit" },
    { label: "Durable", copy: "background work" },
    { label: "Marketplace-aware", copy: "evidence" },
  ],
} as const;

export const UNI_AGENTS_HERO_PRODUCT = {
  sku: "FK-84A2",
  name: "Everyday Comfort Sandals",
  price: "₹699",
  originalPrice: "₹1,299",
  rating: "4.3",
  reviews: "248",
  category: "Footwear",
} as const;

export const UNI_AGENTS_DEMO_TABS = [
  { id: "ready", label: "Ready" },
  { id: "audit", label: "Audit" },
  { id: "improve", label: "Improve" },
] as const;

export type UniAgentsDemoTabId =
  (typeof UNI_AGENTS_DEMO_TABS)[number]["id"];

export const UNI_AGENTS_AUDIT = {
  score: 82,
  summary: "Strong foundation",
  source: "Flipkart Listing Score · v1",
  time: "Completed just now",
  axes: [
    { label: "Title & keywords", value: 88 },
    { label: "Description", value: 72 },
    { label: "Image gallery", value: 70 },
    { label: "Offer & trust", value: 95 },
  ],
} as const;

export const UNI_AGENTS_IMPROVE = {
  priority: "Top priority",
  opportunities: [
    {
      index: "01",
      tone: "orange",
      title: "Make the description more useful",
      copy: "Replace generic copy with verified material, fit, care, and use details.",
      action: "Review copy →",
    },
    {
      index: "02",
      tone: "green",
      title: "Add distinct product views",
      copy: "Show the sole, fastening, and on-foot scale without duplicate images.",
      action: "Open Image Studio →",
    },
  ],
  note: "Your report is saved to this product. You can leave and return anytime.",
} as const;

export const UNI_AGENTS_MARKETPLACE_RAIL = {
  label: "Built for real seller work",
  platforms: [
    { name: "Amazon India", logo: "/platform-logos/amazon.svg", width: 40, height: 40 },
    { name: "Flipkart", logo: "/platform-logos/flipkart.svg", width: 48, height: 32 },
    { name: "Meta Ads", logo: "/ecosystem-logos/meta.png", width: 32, height: 32 },
    { name: "Advertising context", logo: "/ecosystem-logos/google-ads.svg", width: 48, height: 24 },
  ],
  scheduled: "Scheduled reviews",
} as const;

export const UNI_AGENTS_MANIFESTO = {
  statement: "Your seller dashboard should tell you ",
  statementAccent: "what to do next.",
  statementTrailing: " It should not give you another wall of numbers.",
  copy:
    "Uni Agents connects product context, marketplace evidence, saved runs, and focused tools in one durable workspace.",
  points: [
    {
      index: "01",
      title: "Know what is ready",
      copy: "Collection, audit, and run states stay attached to each product.",
    },
    {
      index: "02",
      title: "Understand the evidence",
      copy: "Scores explain what was evaluated and what was unavailable.",
    },
    {
      index: "03",
      title: "Act without losing context",
      copy: "Every next step starts from the exact product and result that produced it.",
    },
  ],
} as const;

export const UNI_AGENTS_WORKFLOW = {
  title: "From product URL to useful action.",
  copy: "One connected flow replaces scattered tools, ambiguous status, and disconnected reports.",
  steps: [
    {
      number: "01",
      label: "Bring in a product",
      title: "Paste the listing you already sell.",
      copy: "Uni Agents classifies the marketplace, restores duplicates, and creates one canonical product workspace.",
      visual: "intake",
    },
    {
      number: "02",
      label: "Build trusted context",
      title: "Let the listing prepare in the background.",
      copy: "Title, media, pricing, reviews, attributes, and marketplace signals are collected without making the seller wait on the page.",
      visual: "collection",
    },
    {
      number: "03",
      label: "See what shoppers see",
      title: "Run a free, marketplace-aware audit.",
      copy: "Get a 0–100 score, axis-level evidence, and honest partial-audit disclosure when optional data is unavailable.",
      visual: "report",
    },
    {
      number: "04",
      label: "Move the listing forward",
      title: "Choose the agent that fits the evidence.",
      copy: "Improve copy, create product imagery, compare against a category cohort, or continue in a persistent seller conversation.",
      visual: "action",
    },
  ],
} as const;

export type UniAgentsWorkflowStepVisual =
  (typeof UNI_AGENTS_WORKFLOW.steps)[number]["visual"];

export const UNI_AGENTS_AGENT_DATA = {
  audit: {
    key: "audit",
    index: "01",
    navLabel: "Listing Auditor",
    eyebrow: "Listing Auditor",
    label: "Free · no credits used",
    title: "See what weakens buyer confidence.",
    icon: "/images/agents/listing-agent.png",
    description:
      "Score the exact listing against a marketplace-aware rubric, then inspect the evidence behind every opportunity.",
    points: [
      "Marketplace-specific scoring",
      "Axis-level evidence",
      "Saved audit history",
    ],
    demo: "audit",
  },
  optimize: {
    key: "optimize",
    index: "02",
    navLabel: "Listing Optimization",
    eyebrow: "Listing Optimization",
    label: "Paid action · credit cost confirmed first",
    title: "Turn audit evidence into better copy.",
    icon: "/images/agents/marketing-agent.png",
    description:
      "Work from the exact completed audit and source snapshot, with current and suggested content kept side by side.",
    points: [
      "Audit-linked suggestions",
      "Before-and-after review",
      "Copy-ready output",
    ],
    demo: "optimize",
  },
  images: {
    key: "images",
    index: "03",
    navLabel: "Image Studio",
    eyebrow: "Image Studio",
    label: "Generate or edit product imagery",
    title: "Make the product easier to picture.",
    icon: "/images/agents/image-generation-agent.png",
    description:
      "Start from an upload or collected product image, then create more useful product views and campaign-ready variations.",
    points: [
      "Collected-image handoff",
      "Generate and edit",
      "Saved image history",
    ],
    demo: "images",
  },
  insights: {
    key: "insights",
    index: "04",
    navLabel: "Portfolio Insights",
    eyebrow: "Portfolio Insights",
    label: "Same-marketplace comparison",
    title: "Understand the category around the listing.",
    icon: "/images/agents/analytics-agent.png",
    description:
      "Compare one ready product with a ready marketplace cohort across pricing, visibility, customer voice, and product context.",
    points: [
      "Pricing context",
      "Customer voice",
      "Visibility and comparison products",
    ],
    demo: "insights",
  },
} as const;

export type UniAgentsAgentKey = keyof typeof UNI_AGENTS_AGENT_DATA;

export const UNI_AGENTS_AGENT_ORDER: UniAgentsAgentKey[] = [
  "audit",
  "optimize",
  "images",
  "insights",
];

export const UNI_AGENTS_OPTIMIZE_DEMO = {
  current: "Comfortable sandals made from quality materials.",
  suggested:
    "Lightweight EVA sandals with an adjustable double strap and textured sole.",
} as const;

export const UNI_AGENTS_INSIGHTS_DEMO = {
  bars: [38, 56, 74, 61, 84],
  focusIndex: 2,
  resultLabel: "Price position",
  resultTitle: "Within the category range",
  resultNote: "Compared with a matching Flipkart cohort",
} as const;

export const UNI_AGENTS_DURABLE = {
  title: "Your work should not disappear when you close a tab.",
  copy: "Uni Agents is built around saved product context, background jobs, and restorable results. Sellers can leave, return, and continue with confidence.",
  nodes: [
    { id: "n1", label: "Product" },
    { id: "n2", label: "Audit" },
    { id: "n3", label: "Images" },
    { id: "n4", label: "Insights" },
    { id: "n5", label: "History" },
  ],
  list: [
    {
      icon: "↻",
      title: "Background-safe work",
      copy: "Collection, audits, and reports continue after navigation.",
    },
    {
      icon: "⌁",
      title: "One product, one history",
      copy: "Runs and results stay attached to the exact marketplace product.",
    },
    {
      icon: "✓",
      title: "Truthful states",
      copy: "No fabricated progress, hidden charges, or internal system errors.",
    },
  ],
} as const;

export const UNI_AGENTS_INTEGRATIONS = {
  title: "Meet your products where they already work.",
  copy: "Marketplace-specific product data stays distinct while connected ad and commerce context supports better decisions.",
  sources: [
    {
      id: "0",
      modifier: "amazon",
      logo: "/platform-logos/amazon.svg",
      name: "Amazon India",
      copy: "Products and category cohorts",
      path: "M195 82 C360 82, 360 210, 500 210",
    },
    {
      id: "1",
      modifier: "flipkart",
      logo: "/platform-logos/flipkart.svg",
      name: "Flipkart",
      copy: "Products and popularity cohorts",
      path: "M195 338 C360 338, 360 210, 500 210",
    },
    {
      id: "2",
      modifier: "meta",
      logo: "/ecosystem-logos/meta.png",
      name: "Meta Ads",
      copy: "Connected account analysis",
      path: "M805 82 C640 82, 640 210, 500 210",
    },
    {
      id: "3",
      modifier: "ads",
      logo: "/platform-logos/amazon.svg",
      name: "Amazon Ads",
      copy: "Campaign performance context",
      path: "M805 338 C640 338, 640 210, 500 210",
    },
  ],
  note: "Marketplace comparisons remain marketplace-specific. Uni Agents never presents Flipkart popularity as sales, revenue, or market share.",
} as const;

export const UNI_AGENTS_AUDIENCES = {
  title: "Start with one listing. Grow into an operating system.",
  list: [
    {
      index: "01",
      title: "First-time marketplace sellers",
      copy: "Understand what \u201cgood\u201d looks like before spending on more tools or traffic.",
    },
    {
      index: "02",
      title: "Growing D2C brands",
      copy: "Keep product context, creative work, and competitive signals connected.",
    },
    {
      index: "03",
      title: "Manufacturers and portfolio teams",
      copy: "Review multiple listings through one consistent, evidence-led workflow.",
    },
    {
      index: "04",
      title: "Performance-focused operators",
      copy: "Connect ads analysis, persistent conversations, and scheduled reviews.",
    },
  ],
} as const;

export const UNI_AGENTS_FAQ = [
  {
    question: "What can I do first in Uni Agents?",
    answer:
      "Add an Amazon India or Flipkart product you sell. Once its marketplace data is ready, you can run a free Listing Audit and choose the next focused action.",
  },
  {
    question: "Does a Listing Audit use credits?",
    answer:
      "No. Listing Audit is a free action. Paid actions such as Listing Optimization show the required credits and confirmation before a run is authorized.",
  },
  {
    question: "Can I leave while an agent is working?",
    answer:
      "Yes. Collection, audits, reports, and scheduled work are durable. The workspace restores active work and saved results when you return.",
  },
  {
    question: "Are Amazon and Flipkart scores directly comparable?",
    answer:
      "No. Each marketplace uses its own applicable evidence and rubric. Uni Agents keeps comparisons within the same marketplace and explains unavailable data.",
  },
  {
    question: "Can Uni Agents publish changes to my marketplace listing?",
    answer:
      "The current product helps you audit, prepare, compare, and create. Publishing optimized copy back to marketplaces is not represented as an available action.",
  },
  {
    question: "Who is Uni Agents for?",
    answer:
      "It is designed for first-time online sellers, growing D2C brands, manufacturers, and teams managing marketplace products and performance workflows.",
  },
] as const;

export const UNI_AGENTS_CTA = {
  eyebrow: "Bring your next listing",
  title: "Know the next move.",
  titleAccent: "Then make it.",
  copy: "See how Uni Agents can turn your product portfolio into a clear, evidence-backed seller workflow.",
} as const;
