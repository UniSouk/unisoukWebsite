import Link from "next/link";
import { siteContainerClass } from "@/components/layout/site-shell";
import { ArrowRightIcon } from "@/components/ui/icon";
import { getArticlePath, getPrimaryTag } from "@/lib/blog-utils";
import type { BlogArticle } from "@/types/blog";

export function ArticleRelatedSections({ article }: { article: BlogArticle }) {
  return (
    <>
      {article.relatedArticle && article.relatedArticle.length > 0 && (
          <section
            className="bg-[var(--mist)] py-[clamp(4rem,8vw,7rem)]"
            aria-labelledby="related-title"
          >
            <div className={siteContainerClass}>
              <h2
                className="mt-0 mb-12 !text-[length:var(--text-section-heading)]"
                id="related-title"
              >
                Related articles
              </h2>
              <div className="border-t border-[var(--ink)]">
                {article.relatedArticle.map((related) => (
                  <Link
                    className="grid grid-cols-[10rem_minmax(0,1fr)_auto] items-center gap-8 border-b border-[var(--grey-dark)] py-6 no-underline max-[47.99rem]:grid-cols-[1fr_auto] max-[47.99rem]:gap-3"
                    href={getArticlePath(related)}
                    key={related.documentId}
                  >
                    <span className="text-[0.78rem] font-semibold text-[var(--orange-ink)] max-[47.99rem]:col-span-full">
                      {getPrimaryTag(related.tag)}
                    </span>
                    <h3 className="m-0 text-[clamp(1.45rem,2.5vw,2.3rem)]">
                      {related.title}
                    </h3>
                    <i
                      className="text-[0.78rem] font-semibold not-italic text-[var(--orange-ink)]"
                      aria-hidden="true"
                    >
                      <ArrowRightIcon />
                    </i>
                  </Link>
                ))}
              </div>
            </div>
          </section>
      )}

        <section
          className="bg-[var(--orange)]"
          aria-labelledby="article-return-title"
        >
          <div
            className={`${siteContainerClass} grid grid-cols-[minmax(0,1fr)_auto] items-end gap-12 py-[clamp(4.5rem,8vw,7rem)] max-[47.99rem]:grid-cols-1`}
          >
            <h2
              className="m-0 max-w-[12ch] !text-[length:var(--text-section-heading)]"
              id="article-return-title"
            >
              Keep exploring the work behind growth.
            </h2>
            <Link
              className="flex min-w-60 items-center justify-between gap-8 border-y border-[var(--ink)] py-4 font-medium no-underline max-[47.99rem]:min-w-0"
              href="/blog/"
            >
              View all articles
              <span aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </section>
    </>
  );
}
