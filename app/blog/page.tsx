/* eslint-disable @next/next/no-img-element -- CMS image origins are configured server-side at runtime and cannot be declared as a static Next Image host. */
import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { BlogArticleIndex } from "@/components/blog/blog-article-index";
import {
  NativeSiteShell,
  siteContainerClass,
} from "@/components/layout/site-shell";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icon";
import { SITE_URL } from "@/constants/site";
import { getArticleImage, getBlogArticles } from "@/lib/blog";
import {
  formatArticleDate,
  getArticlePath,
  getModifiedDate,
  getPrimaryTag,
  getPublishedDate,
} from "@/lib/blog-utils";

export const revalidate = 120;

export const metadata: Metadata = {
  title: {
    absolute: "UniSouk Blog | Ideas for Modern Commerce",
  },
  description:
    "Explore practical UniSouk guides about ONDC, marketplace operations, commerce AI and growth for Indian sellers and brands.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    type: "website",
    title: "UniSouk Blog | Ideas for Modern Commerce",
    description:
      "Practical guides for Indian sellers navigating marketplaces, commerce operations, AI and growth.",
    url: "/blog/",
    siteName: "UniSouk",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniSouk Blog | Ideas for Modern Commerce",
    description:
      "Practical guides for Indian sellers navigating marketplaces, commerce operations, AI and growth.",
  },
};

const sectionHeadingClass =
  "m-0 !text-[clamp(2.8rem,5.4vw,5rem)] !leading-[0.98] !tracking-[-0.035em]";

const articleMetaClass =
  "flex flex-wrap justify-between gap-x-6 gap-y-3 pb-4 text-[0.74rem] text-[var(--text-muted)] [&>span]:font-semibold [&>span]:text-[var(--orange-ink)]";

const borderedTextLinkClass =
  "flex items-center justify-between gap-4 border-y border-current py-[0.9rem] font-medium no-underline";

export default async function BlogPage() {
  const articles = await getBlogArticles();
  const [featuredArticle, ...remainingArticles] = articles;
  const featuredImage = getArticleImage(featuredArticle, "large");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "UniSouk Blog",
    url: `${SITE_URL}/blog/`,
    description:
      "Practical guides and ideas for Indian sellers navigating marketplaces, ONDC, commerce operations and growth powered by AI.",
    hasPart: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `${SITE_URL}${getArticlePath(article)}`,
      description: article.description || undefined,
      datePublished: getPublishedDate(article),
      dateModified: getModifiedDate(article),
      image: getArticleImage(article, "large") || undefined,
    })),
  };

  return (
    <NativeSiteShell>
      <JsonLd value={structuredData} />
      <main id="main-content">
        <section
          className="bg-[var(--white)]"
          aria-labelledby="journal-title"
        >
          <div
            className={`${siteContainerClass} editorial-hero__inner grid grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] items-end gap-[clamp(4rem,10vw,10rem)] max-[66rem]:grid-cols-1`}
          >
            <div>
              <h1
                className="m-0 !max-w-[11ch] !text-[var(--text-hero-heading)] !leading-[0.9] !font-medium !tracking-[-0.035em]"
                id="journal-title"
              >
                Ideas for the work{" "}
                <span className="text-[var(--orange-ink)]">behind growth.</span>
              </h1>
              <p className="!mt-[1.7rem] mb-0 max-w-[46ch] text-[clamp(1.08rem,1.45vw,1.3rem)] leading-[1.65] text-[var(--text-muted)]">
                Practical guides for sellers and commerce teams navigating
                marketplaces, open networks, operations and intelligent tools.
              </p>
            </div>
            <aside
              className="border-t border-[var(--ink)] pt-5"
              aria-label="UniSouk blog focus"
            >
              <span className="text-[0.78rem] font-semibold text-[var(--orange-ink)]">
                UniSouk Journal
              </span>
              <p className="!mt-4 mb-8 max-w-[31ch] leading-[1.65] text-[var(--text-muted)]">
                Built for people who want to understand commerce clearly and
                operate it better.
              </p>
              <a
                className={borderedTextLinkClass}
                href={featuredArticle ? "#featured-story" : "#article-index"}
              >
                Start reading <ArrowDownIcon />
              </a>
            </aside>
          </div>
        </section>

        {featuredArticle && (
          <section
            className="bg-[var(--ink)] text-[var(--white)]"
            id="featured-story"
            aria-labelledby="featured-title"
          >
            <div
              className={`${siteContainerClass} grid grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] gap-[clamp(3rem,7vw,7rem)] py-[clamp(5rem,10vw,8rem)] max-[66rem]:grid-cols-1`}
            >
              <Link
                className="group/featured relative block min-h-[34rem] overflow-hidden bg-[oklch(23%_0_0)] no-underline max-[66rem]:min-h-[26rem] max-[47.99rem]:min-h-80"
                href={getArticlePath(featuredArticle)}
                aria-label={`Read ${featuredArticle.title}`}
              >
                {featuredImage && (
                  <img
                    src={featuredImage}
                    alt={
                      featuredArticle.image?.alternativeText ||
                      featuredArticle.title
                    }
                    width={
                      featuredArticle.image?.formats?.large?.width ||
                      featuredArticle.image?.width
                    }
                    height={
                      featuredArticle.image?.formats?.large?.height ||
                      featuredArticle.image?.height
                    }
                    className="h-full w-full object-cover transition-all duration-700 group-hover/featured:scale-[1.025] group-hover/featured:opacity-[0.88] motion-reduce:transition-none"
                  />
                )}
                <span
                  className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--white)] px-4 py-[0.7rem] text-xs text-[var(--ink)]"
                  aria-hidden="true"
                >
                  Read guide <ArrowUpRightIcon />
                </span>
              </Link>
              <article className="grid content-end">
                <div
                  className={`${articleMetaClass} text-white/60 [&>span]:text-[var(--orange)]`}
                >
                  <span>{getPrimaryTag(featuredArticle.tag)}</span>
                  {getPublishedDate(featuredArticle) && (
                    <time dateTime={getPublishedDate(featuredArticle)}>
                      {formatArticleDate(getPublishedDate(featuredArticle))}
                    </time>
                  )}
                </div>
                <h2
                  className={`${sectionHeadingClass} !mt-8 max-w-[9ch]`}
                  id="featured-title"
                >
                  {featuredArticle.title}
                </h2>
                {featuredArticle.description && (
                  <p className="!mt-6 mb-8 max-w-[42ch] text-[length:var(--text-lead)] leading-[1.65] text-white/65">
                    {featuredArticle.description}
                  </p>
                )}
                <Link
                  className={borderedTextLinkClass}
                  href={getArticlePath(featuredArticle)}
                >
                  Read the complete guide <ArrowRightIcon />
                </Link>
              </article>
            </div>
          </section>
        )}

        <BlogArticleIndex articles={remainingArticles} hasFeaturedArticle={Boolean(featuredArticle)} />

        {/* <section
          className="bg-[var(--orange)]"
          aria-labelledby="editorial-title"
        >
          <div
            className={`${siteContainerClass} grid grid-cols-[minmax(20rem,0.82fr)_minmax(0,1.18fr)] gap-[clamp(4rem,9vw,9rem)] py-[clamp(5rem,10vw,8rem)] max-[66rem]:grid-cols-1`}
          >
            <div>
              <span className="mb-5 block text-[0.78rem] font-semibold">
                What belongs here
              </span>
              <h2
                className={`${sectionHeadingClass} max-w-[11ch]`}
                id="editorial-title"
              >
                Useful enough to act on. Simple enough to understand.
              </h2>
            </div>
            <div className="border-t border-[var(--ink)] [&_p]:m-0 [&_p]:border-b [&_p]:border-[color:color-mix(in_oklch,var(--ink)_40%,transparent)] [&_p]:py-[1.65rem] [&_strong]:mb-[0.45rem] [&_strong]:block [&_strong]:font-[family-name:var(--font-heading)] [&_strong]:text-[clamp(1.4rem,2.2vw,2rem)] [&_strong]:font-medium">
              <p>
                <strong>Explain the system.</strong> Help sellers understand
                the channel, operation or change before asking them to adopt
                anything.
              </p>
              <p>
                <strong>Connect it to the work.</strong> Translate commerce
                concepts into decisions a seller or team can make.
              </p>
              <p>
                <strong>Keep the ambition practical.</strong> Growth advice
                should respect the realities of catalogue, inventory,
                fulfilment and margin.
              </p>
            </div>
          </div>
        </section> */}
      </main>
    </NativeSiteShell>
  );
}
