import { SITE_URL } from "@/constants/site";
import type { BlogArticle } from "@/types/blog";

export function slugifyArticleTitle(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function normalizeArticleSlug(value: string) {
  return slugifyArticleTitle(value);
}

export function getCanonicalArticleSlug(article: BlogArticle) {
  return normalizeArticleSlug(article.slug || article.title);
}

export function getLegacyArticleSlug(article: BlogArticle) {
  return slugifyArticleTitle(article.title);
}

export function getArticlePath(article: BlogArticle) {
  return `/blogs/${getCanonicalArticleSlug(article)}/`;
}

export function getPrimaryTag(tag?: string | null) {
  return tag?.split(",")[0]?.trim() || "Commerce";
}

export function getArticleTags(tag?: string | null) {
  return (tag || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export function formatArticleDate(date?: string | null) {
  if (!date) return "";
  const parsedDate = new Date(
    date.includes("T") ? date : `${date}T00:00:00`,
  );
  if (Number.isNaN(parsedDate.getTime())) return date;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export function getPublishedDate(article: BlogArticle) {
  return article.publishDate || article.publishedAt || undefined;
}

export function getModifiedDate(article: BlogArticle) {
  return article.updatedAt || getPublishedDate(article);
}

export function getArticleAuthor(article: BlogArticle) {
  if (typeof article.author === "string" && article.author.trim()) {
    return { name: article.author.trim() };
  }
  if (
    article.author &&
    typeof article.author === "object" &&
    typeof article.author.name === "string" &&
    article.author.name.trim()
  ) {
    return {
      name: article.author.name.trim(),
      url: article.author.url || undefined,
    };
  }
  return { name: "UniSouk", url: SITE_URL };
}
