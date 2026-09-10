export const LEGACY_PATH_REDIRECTS = [
  {
    source: "/amazon",
    destination: "/solutions/amazon-seller-central/",
  },
  {
    source: "/inventory-and-order-management",
    destination: "/solutions/unified-commerce/",
  },
  {
    source: "/product-listing-automation",
    destination: "/solutions/ai-agents/",
  },
  {
    source: "/unified-commerce",
    destination: "/solutions/unified-commerce/",
  },
  {
    source: "/features",
    destination: "/solutions/unified-commerce/",
  },
  {
    source: "/integrations/amazon",
    destination: "/solutions/amazon-seller-central/",
  },
  {
    source:
      "/blogs/amazon-listing-optimisation:-the-ultimate-guide-for-indian-sellers-",
    destination:
      "/blogs/amazon-listing-optimisation-the-ultimate-guide-for-indian-sellers/",
  },
] as const;

export const LEGACY_REDIRECTS = LEGACY_PATH_REDIRECTS.map(
  ({ source, destination }) => ({
    source: source.replace(":", "\\:"),
    destination,
  }),
);

const legacyPathRedirectMap = new Map<string, string>(
  LEGACY_PATH_REDIRECTS.map(({ source, destination }) => [
    source,
    destination,
  ]),
);

function normalizePath(pathname: string) {
  if (pathname === "/") return pathname;

  const withoutTrailingSlash = pathname.replace(/\/+$/, "");
  return legacyPathRedirectMap.get(withoutTrailingSlash)
    ? legacyPathRedirectMap.get(withoutTrailingSlash)!
    : `${withoutTrailingSlash}/`;
}

/**
 * Converts UniSouk CMS links to their direct, trailing-slash canonical path.
 * External URLs and fragment-only links are intentionally left unchanged.
 */
export function normalizeInternalHref(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const url = new URL(href, "https://www.unisouk.com");
  return `${normalizePath(url.pathname)}${url.search}${url.hash}`;
}
