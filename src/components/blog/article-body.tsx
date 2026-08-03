import Image from "next/image";

import { ArticleRichText } from "@/components/article-rich-text";
import { siteContainerClass } from "@/components/layout/site-shell";
import type { BlogArticle } from "@/types/blog";

type ArticleBodyProps = {
  article: BlogArticle;
  articleImage: string | null;
};

export function ArticleBody({ article, articleImage }: ArticleBodyProps) {
  return (
    <>
      {articleImage && (
        <figure
          className={`${siteContainerClass} my-0 min-w-0 max-[47.99rem]:!w-full max-[47.99rem]:!max-w-full max-[47.99rem]:overflow-hidden max-[47.99rem]:!px-0`}
        >
          <Image
            className="block h-auto max-h-[46rem] w-full max-w-full object-cover"
            src={articleImage}
            alt={article.image?.alternativeText || article.title}
            width={article.image?.formats?.large?.width || article.image?.width || 1200}
            height={article.image?.formats?.large?.height || article.image?.height || 675}
          />
        </figure>
      )}

      <section className="bg-[var(--white)]" aria-label="Article content">
        <div
          className={`${siteContainerClass} py-[clamp(3rem,6vw,5rem)] lg:!w-[65%] lg:px-0 lg:[&>div]:!max-w-none`}
        >
          <ArticleRichText article={article} />
        </div>
      </section>
    </>
  );
}
