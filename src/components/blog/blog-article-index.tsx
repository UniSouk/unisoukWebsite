import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/icon";
import { siteContainerClass } from "@/components/layout/site-shell";
import { getArticleImage } from "@/lib/blog";
import { formatArticleDate, getArticlePath, getPrimaryTag, getPublishedDate } from "@/lib/blog-utils";
import type { BlogArticle } from "@/types/blog";

const sectionHeadingClass = "m-0 !text-[clamp(2.8rem,5.4vw,5rem)] !leading-[0.98] !tracking-[-0.035em]";
const articleMetaClass = "flex flex-wrap justify-between gap-x-6 gap-y-3 pb-4 text-[0.74rem] text-[var(--text-muted)] [&>span]:font-semibold [&>span]:text-[var(--orange-ink)]";

export function BlogArticleIndex({ articles, hasFeaturedArticle }: { articles: BlogArticle[]; hasFeaturedArticle: boolean }) {
  return (
        <section
          className="bg-[var(--mist)]"
          id="article-index"
          aria-labelledby="articles-title"
        >
          <div
            className={`${siteContainerClass} py-[clamp(5rem,10vw,8rem)]`}
          >
            <header className="grid grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] items-end gap-[clamp(3rem,8vw,8rem)] pb-[clamp(3rem,7vw,5rem)] max-[55rem]:grid-cols-1">
              <h2
                className={`${sectionHeadingClass} max-w-[9ch]`}
                id="articles-title"
              >
                Latest thinking.
              </h2>
              <p className="m-0 max-w-[45ch] text-[length:var(--text-lead)] leading-[1.65] text-[var(--text-muted)]">
                Useful explanations, grounded operating ideas and clear growth
                thinking from the UniSouk team.
              </p>
            </header>
            {articles.length > 0 ? (
              <div className="border-t border-[var(--ink)]">
                {articles.map((article) => {
                  const image = getArticleImage(article, "medium");
                  return (
                    <Link
                      className="group/article-row grid grid-cols-[minmax(11rem,0.42fr)_minmax(0,1fr)_1.5rem] items-center gap-[clamp(1.5rem,4vw,4rem)] border-b border-[var(--grey-dark)] py-6 no-underline max-[55rem]:grid-cols-[minmax(9rem,0.4fr)_minmax(0,1fr)_1.5rem] max-[47.99rem]:grid-cols-[minmax(0,1fr)_1.5rem] max-[47.99rem]:gap-4"
                      href={getArticlePath(article)}
                      key={article.documentId}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--grey)] max-[47.99rem]:col-span-full">
                        {image && (
                          <Image
                            src={image}
                            alt={
                              article.image?.alternativeText || article.title
                            }
                            fill
                            sizes="(max-width: 48rem) 100vw, (max-width: 55rem) 40vw, 30vw"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/article-row:scale-[1.025] motion-reduce:transition-none"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className={articleMetaClass}>
                          <span>{getPrimaryTag(article.tag)}</span>
                          {getPublishedDate(article) && (
                            <time dateTime={getPublishedDate(article)}>
                              {formatArticleDate(getPublishedDate(article))}
                            </time>
                          )}
                        </div>
                        <h3 className="!mt-4 mb-0 max-w-[24ch] text-[clamp(1.65rem,3vw,2.7rem)] !leading-[1.05] transition-colors group-hover/article-row:text-[var(--orange-ink)]">
                          {article.title}
                        </h3>
                        {/* {article.description && (
                          <p className="!mt-[0.85rem] mb-0 max-w-[62ch] text-[var(--text-muted)] max-[47.99rem]:hidden">
                            {article.description}
                          </p>
                        )} */}
                      </div>
                      <ArrowUpRightIcon className="h-6 w-6 text-[var(--orange-ink)] transition-transform duration-200 group-hover/article-row:translate-x-0.5 group-hover/article-row:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
                    </Link>
                  );
                })}
              </div>
            ) : !hasFeaturedArticle ? (
              <p className="m-0 border-y border-t-[var(--ink)] border-b-[var(--grey-dark)] py-8 text-[var(--text-muted)]">
                New articles are being prepared. Please check back soon.
              </p>
            ) : null}
          </div>
        </section>
  );
}
