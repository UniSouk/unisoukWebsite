import "server-only";

import {
  BLOG_CACHE_TAG,
  BLOG_REVALIDATE_SECONDS,
  DEFAULT_CMS_URL,
} from "@/constants/blog";
import {
  getCanonicalArticleSlug,
  getLegacyArticleSlug,
  getPublishedDate,
  normalizeArticleSlug,
} from "@/lib/blog-utils";
import type { BlogArticle } from "@/types/blog";

type BlogArticlesResponse = {
  data?: BlogArticle[];
  meta?: {
    pagination?: {
      page?: number;
      pageCount?: number;
    };
  };
};

function getCmsUrl() {
  return (process.env.CMS_URL || DEFAULT_CMS_URL).replace(/\/$/, "");
}

export function resolveCmsUrl(url?: string | null) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return new URL(url, getCmsUrl()).href;
}

export function getArticleImage(
  article?: BlogArticle | null,
  size: "large" | "medium" | "small" = "large",
) {
  const image = article?.image;
  if (!image) return "";
  return resolveCmsUrl(image.formats?.[size]?.url || image.url);
}

function isBlogArticle(value: unknown): value is BlogArticle {
  if (!value || typeof value !== "object") return false;
  const article = value as Partial<BlogArticle>;
  return (
    typeof article.id === "number" &&
    typeof article.documentId === "string" &&
    typeof article.title === "string" &&
    Boolean(article.title.trim())
  );
}

export async function getBlogArticles(): Promise<BlogArticle[]> {
  const articles: BlogArticle[] = [];
  let page = 1;
  let pageCount = 1;

  do {
    const endpoint = new URL("/api/blog-articles", getCmsUrl());
    endpoint.searchParams.set("populate", "*");
    endpoint.searchParams.set("pagination[page]", String(page));
    endpoint.searchParams.set("pagination[pageSize]", "100");
    endpoint.searchParams.set("sort[0]", "publishDate:desc");

    const response = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      next: {
        revalidate: BLOG_REVALIDATE_SECONDS,
        tags: [BLOG_CACHE_TAG],
      },
    });

    if (!response.ok) {
      throw new Error(`CMS article request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as BlogArticlesResponse;
    articles.push(...(payload.data || []).filter(isBlogArticle));
    pageCount = Math.max(payload.meta?.pagination?.pageCount || 1, 1);
    page += 1;
  } while (page <= pageCount);

  return articles.sort((first, second) => {
    const firstDate = Date.parse(getPublishedDate(first) || "") || 0;
    const secondDate = Date.parse(getPublishedDate(second) || "") || 0;
    return secondDate - firstDate;
  });
}

export async function getBlogArticleBySlug(slug: string) {
  const requestedSlug = normalizeArticleSlug(slug);
  const articles = await getBlogArticles();
  const article = articles.find(
    (candidate) =>
      getCanonicalArticleSlug(candidate) === requestedSlug ||
      getLegacyArticleSlug(candidate) === requestedSlug,
  );

  if (!article) return null;
  return {
    article,
    requestedSlug,
    canonicalSlug: getCanonicalArticleSlug(article),
  };
}
