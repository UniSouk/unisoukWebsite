import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";

import { ArticleBody } from "@/components/blog/article-body";
import { ArticleRelatedSections } from "@/components/blog/article-related-sections";
import { JsonLd } from "@/components/json-ld";
import {
  NativeSiteShell,
  siteContainerClass,
} from "@/components/layout/site-shell";
import { SITE_URL } from "@/constants/site";
import {
  getArticleImage,
  getBlogArticleBySlug,
  getBlogArticles,
} from "@/lib/blog";
import {
  formatArticleDate,
  getArticleAuthor,
  getArticlePath,
  getArticleTags,
  getCanonicalArticleSlug,
  getLegacyArticleSlug,
  getModifiedDate,
  getPrimaryTag,
  getPublishedDate,
} from "@/lib/blog-utils";

// Next.js requires route-segment config values to be statically analyzable literals.
export const revalidate = 120;
export const dynamicParams = true;

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getBlogArticles();
  return articles.flatMap((article) => {
    const canonical = getCanonicalArticleSlug(article);
    const legacy = getLegacyArticleSlug(article);
    return canonical === legacy ? [{ slug: canonical }] : [{ slug: canonical }, { slug: legacy }];
  });
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const match = await getBlogArticleBySlug(slug);
  if (!match) return {};

  const { article } = match;
  const description =
    article.description || `Read ${article.title} from the UniSouk commerce journal.`;
  const path = getArticlePath(article);
  const image = getArticleImage(article, "large");
  const publishedTime = getPublishedDate(article);
  const modifiedTime = getModifiedDate(article);
  const author = getArticleAuthor(article);

  return {
    title: {
      absolute: `${article.title} | UniSouk`,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description,
      url: path,
      siteName: "UniSouk",
      publishedTime,
      modifiedTime,
      authors: [author.name],
      tags: getArticleTags(article.tag),
      images: image
        ? [
            {
              url: image,
              alt: article.image?.alternativeText || article.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const match = await getBlogArticleBySlug(slug);
  if (!match) notFound();
  if (match.requestedSlug !== match.canonicalSlug) {
    permanentRedirect(`/blogs/${match.canonicalSlug}/`);
  }

  const { article } = match;
  const path = getArticlePath(article);
  const articleUrl = `${SITE_URL}${path}`;
  const articleImage = getArticleImage(article, "large");
  const publishedDate = getPublishedDate(article);
  const modifiedDate = getModifiedDate(article);
  const author = getArticleAuthor(article);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description:
          article.description ||
          `Read ${article.title} from the UniSouk commerce journal.`,
        url: articleUrl,
        datePublished: publishedDate,
        dateModified: modifiedDate,
        image: articleImage || undefined,
        keywords: getArticleTags(article.tag),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        author: {
          "@type": author.name === "UniSouk" ? "Organization" : "Person",
          name: author.name,
          url: author.url,
        },
        publisher: {
          "@type": "Organization",
          name: "UniSouk",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/unisouk-logo.svg`,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <NativeSiteShell>
      <JsonLd value={structuredData} />
      <main id="main-content">
        <article>
          <header className="bg-[var(--white)]">
            <div
              className={`${siteContainerClass} !w-[95%] min-[1061px]:!w-[90%] article-hero__inner${
                match.canonicalSlug ===
                "unified-commerce-a-beginners-guide-for-retailers"
                  ? " article-hero__inner--flush"
                  : ""
              }${
                match.canonicalSlug ===
                "top-10-amazon-seller-tools-for-indian-sellers-in-2026"
                  ? " article-hero__inner--amazon-tools-mobile-spacing"
                  : ""
              }`}
            >
              <nav aria-label="Breadcrumb">
                <ol className="mt-0 mb-[clamp(3rem,7vw,5.5rem)] flex list-none flex-wrap gap-2 p-0 text-[0.82rem] text-[var(--text-muted)] [&_a]:no-underline [&_li+li]:before:mr-2 [&_li+li]:before:content-['/']">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blog/">Blog</Link>
                  </li>
                  <li
                    className="max-w-[35ch] overflow-hidden text-ellipsis whitespace-nowrap"
                    aria-current="page"
                  >
                    {article.title}
                  </li>
                </ol>
              </nav>
              <div className="flex flex-wrap justify-between gap-4 border-b border-[var(--ink)] pb-[1.2rem] text-[0.78rem] text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--orange-ink)]">
                  {getPrimaryTag(article.tag)}
                </span>
                {publishedDate && (
                  <time dateTime={publishedDate}>
                    {formatArticleDate(publishedDate)}
                  </time>
                )}
              </div>
              <h1 className="!mt-[clamp(2rem,5vw,4rem)] mb-0 !text-[clamp(2.5rem,3vw,3rem)] !leading-[1.2] !font-medium !tracking-[-0.035em]">
                {article.title}
              </h1>
              {article.description && (
                <p className="!mt-8 mr-0 mb-0 text-[clamp(1.08rem,1.6vw,1.3rem)] leading-[1.65] text-[var(--text-muted)] max-[47.99rem]:ml-0">
                  {article.description}
                </p>
              )}
              {/* <p className="!mt-5 mr-0 mb-0 ml-auto max-w-[58ch] text-[0.85rem] font-semibold text-[var(--orange-ink)] max-[47.99rem]:ml-0">
                By {author.name}
              </p> */}
            </div>
          </header>

          <ArticleBody article={article} articleImage={articleImage} />
        </article>

        <ArticleRelatedSections article={article} />
      </main>
    </NativeSiteShell>
  );
}
