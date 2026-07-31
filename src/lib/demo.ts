import { DEFAULT_DEMO_CATEGORY } from "@/constants/demo";

export function normalizeWebsiteUrl(value: string) {
  const website = value.trim();
  if (!website) return "";
  return /^https?:\/\//i.test(website) ? website : `https://${website}`;
}

export function toDemoCategory(value: string) {
  return (
    value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || DEFAULT_DEMO_CATEGORY
  );
}

export function createPersonalizedDemoUrl(
  baseUrl: string,
  category: string,
) {
  const url = new URL(baseUrl);
  url.searchParams.set("demo", "true");
  url.searchParams.set("demo_category", toDemoCategory(category));
  return url;
}
