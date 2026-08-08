export const SITE_URL = "https://www.unisouk.com";
export const DASHBOARD_URL = "https://dashboard.unisouk.com/";
export const SIGN_IN_URL = "https://dashboard.unisouk.com/auth/login";
export const SIGN_UP_URL = "https://dashboard.unisouk.com/auth/sign-up";
export const DEMO_BOOKING_URL =
  "https://calendar.app.google/NLwZ5g1RJvigqR4c6";
export const CONSULTATION_BOOKING_URL =
  "https://calendar.app.google/kxxzKiyEfoWJzmTU6";

export const INSTAGRAM_URL = "https://www.instagram.com/unisouk.in/";
export const YOUTUBE_URL = "https://www.youtube.com/@UniSouk";

export const MARKETING_ROUTES = [
  "/",
  "/about/",
  "/contact/",
  "/integrations/",
  "/podcast/",
  "/pricing/",
  "/solutions/account-management/",
  "/solutions/ai-agents/",
  "/solutions/amazon-seller-central/",
  "/solutions/build-your-website/",
  "/solutions/performance-marketing/",
  "/solutions/unified-commerce/",
] as const;

export const BLOG_ROUTE_PATHS = ["/blog/", "/blogs/"] as const;

export const NAVIGATION_SECTION_PATHS = {
  solutions: ["/solutions/"],
  company: ["/about/", "/contact/", ...BLOG_ROUTE_PATHS, "/podcast/"],
} as const;

export const SOLUTIONS = [
  {
    label: "Unified Commerce",
    description:
      "Listings, inventory, orders and analytics in one operating view.",
    href: "/solutions/unified-commerce/",
  },
  {
    label: "Account Management",
    description: "Hands-on marketplace and quick-commerce operations.",
    href: "/solutions/account-management/",
  },
  {
    label: "Build Your Website",
    description: "D2C storefronts and custom commerce websites.",
    href: "/solutions/build-your-website/",
  },
  {
    label: "Performance Marketing",
    description:
      "Meta and Google campaigns managed for profitable growth.",
    href: "/solutions/performance-marketing/",
  },
  {
    label: "AI Agents for Commerce",
    description:
      "Intelligent help for listings, analytics, imagery, marketing and finance.",
    href: "/solutions/ai-agents/",
  },
  {
    label: "Amazon Seller Central",
    description:
      "Listings, FBA, orders, inventory and finance for Amazon sellers.",
    href: "/solutions/amazon-seller-central/",
  },
] as const;

export const COMPANY_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Contact Us", href: "/contact/" },
    ],
  },
  {
    title: "Ideas & Stories",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Inside UniSouk", href: "/podcast/" },
    ],
  },
] as const;

export const FOOTER_GROUPS = [
  {
    title: "Solutions",
    links: SOLUTIONS.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Blog", href: "/blog/" },
      { label: "Inside UniSouk", href: "/podcast/" },
      { label: "Contact Us", href: "/contact/" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Privacy Policy", href: "/privacy/" },
      { label: "Terms & Conditions", href: "/terms/" },
      { label: "Refund Policy", href: "/refund-policy/" },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/unisouk/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/unisouk/",
    icon: "facebook",
  },
] as const;
