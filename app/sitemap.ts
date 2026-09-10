import type { MetadataRoute } from "next";

import { LEGAL_POLICY_LINKS } from "@/constants/legal";
import { MARKETING_ROUTES, SITE_URL } from "@/constants/site";
import { getBlogArticles } from "@/lib/blog";
import {
  getArticlePath,
  getModifiedDate,
  getPublishedDate,
} from "@/lib/blog-utils";

export const revalidate = 120;

function toLastModified(value?: string) {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getBlogArticles();
  const marketingEntries: MetadataRoute.Sitemap = MARKETING_ROUTES.map(
    (route) => ({
      url: new URL(route, SITE_URL).href,
    }),
  );

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: new URL(getArticlePath(article), SITE_URL).href,
    lastModified: toLastModified(
      getModifiedDate(article) || getPublishedDate(article),
    ),
  }));
  const legalEntries: MetadataRoute.Sitemap = LEGAL_POLICY_LINKS.map(
    ({ href }) => ({
      url: new URL(href, SITE_URL).href,
    }),
  );

  return [
    ...marketingEntries,
    ...legalEntries,
    {
      url: `${SITE_URL}/blog/`,
    },
    ...articleEntries,
  ];
}
