import Image from "next/image";
import {
  Fragment,
  createElement,
  type ReactNode,
} from "react";

import { CodeCopyButton } from "@/components/blog/code-copy-button";
import { resolveCmsUrl } from "@/lib/blog";
import type { BlogArticle, RichTextChild } from "@/types/blog";

function safeHref(url?: string) {
  if (!url) return "#";
  if (
    url.startsWith("/") ||
    url.startsWith("#") ||
    /^https?:\/\//i.test(url) ||
    /^mailto:/i.test(url) ||
    /^tel:/i.test(url)
  ) {
    return url;
  }
  return "#";
}

function renderChild(child: RichTextChild, key: string): ReactNode {
  if (child.type === "link") {
    const href = safeHref(child.url);
    const external = /^https?:\/\//i.test(href);
    return (
      <a
        key={key}
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {renderChildren(child.children, `${key}-link`)}
      </a>
    );
  }

  let content: ReactNode = child.text || "";
  if (child.code) content = <code>{content}</code>;
  if (child.bold) content = <strong>{content}</strong>;
  if (child.italic) content = <em>{content}</em>;
  if (child.strikethrough) content = <s>{content}</s>;
  if (child.underline) content = <u>{content}</u>;
  if (child.url) {
    const href = safeHref(child.url);
    const external = /^https?:\/\//i.test(href);
    content = (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return <Fragment key={key}>{content}</Fragment>;
}

function renderChildren(children: RichTextChild[] = [], prefix = "child") {
  return children.map((child, index) =>
    renderChild(child, `${prefix}-${index}`),
  );
}

export function ArticleRichText({ article }: { article: BlogArticle }) {
  const conclusionParagraphs = (article.conclusion || "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(
      (paragraph) => paragraph && paragraph.toLocaleLowerCase() !== "drag",
    );

  return (
    <div className="mx-auto w-full max-w-[46rem] text-[clamp(1.04rem,1.3vw,1.16rem)] leading-[1.78] text-[color:color-mix(in_oklch,var(--ink)_88%,transparent)] max-[47.99rem]:text-base max-[47.99rem]:leading-[1.72] [&_:where(h2,h3,h4,h5,h6)]:!mt-[2.75em] [&_:where(h2,h3,h4,h5,h6)]:mb-[0.75em] [&_:where(h2,h3,h4,h5,h6)]:font-[family-name:var(--font-heading)] [&_:where(h2,h3,h4,h5,h6)]:font-medium [&_:where(h2,h3,h4,h5,h6)]:tracking-[-0.03em] [&_:where(h2,h3,h4,h5,h6)]:text-[var(--ink)] [&_:where(h2,h3,h4,h5,h6)]:text-balance [&_h2]:!text-[clamp(2.2rem,4vw,3.5rem)] [&_h3]:text-[clamp(1.75rem,3vw,2.5rem)] [&_h4]:text-[clamp(1.45rem,2.2vw,2rem)] [&_:where(h5,h6)]:text-[1.22rem] [&_p]:mb-[1.3em] [&_p]:mt-0 [&_strong]:font-semibold [&_strong]:text-[var(--ink)] [&_a]:text-[var(--orange-ink)] [&_:not(pre)>code]:bg-[var(--mist)] [&_:not(pre)>code]:px-[0.35em] [&_:not(pre)>code]:py-[0.15em] [&_:not(pre)>code]:text-[0.9em] [&_:where(ul,ol)]:my-6 [&_:where(ul,ol)]:grid [&_:where(ul,ol)]:gap-[0.65rem] [&_:where(ul,ol)]:pl-6 [&_li::marker]:font-semibold [&_li::marker]:text-[var(--orange-ink)] [&_figure]:my-[clamp(2.5rem,6vw,4rem)] [&_figure_img]:h-auto [&_figure_img]:w-full [&_blockquote]:my-10 [&_blockquote]:border-y [&_blockquote]:border-[var(--orange-ink)] [&_blockquote]:py-6 [&_blockquote]:font-[family-name:var(--font-heading)] [&_blockquote]:text-[clamp(1.35rem,2.5vw,2rem)] [&_blockquote]:leading-[1.35] [&_blockquote]:text-[var(--ink)]">
      {(article.body || []).map((item, index) => {
        const key = `body-${index}`;

        if (item.type === "heading") {
          const level = Math.min(Math.max(item.level || 2, 2), 6);
          return createElement(
            `h${level}`,
            { key },
            renderChildren(item.children, `${key}-heading`),
          );
        }

        if (item.type === "paragraph") {
          return <p key={key}>{renderChildren(item.children, key)}</p>;
        }

        if (item.type === "image" && item.image?.url) {
          const source = resolveCmsUrl(
            item.image.formats?.large?.url || item.image.url,
          );
          return (
            <figure key={key}>
              <Image
                src={source}
                alt={
                  item.image.alternativeText ||
                  item.image.name ||
                  "Article illustration"
                }
                width={item.image.formats?.large?.width || item.image.width || 1200}
                height={item.image.formats?.large?.height || item.image.height || 675}
                loading="lazy"
              />
            </figure>
          );
        }

        if (item.type === "list") {
          const children = (item.children || []).map((listItem, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>
              {renderChildren(listItem.children, `${key}-${itemIndex}`)}
            </li>
          ));
          return item.format === "ordered" ? (
            <ol key={key}>{children}</ol>
          ) : (
            <ul key={key}>{children}</ul>
          );
        }

        if (item.type === "code") {
          const code = (item.children || [])
            .map((child) => child.text || "")
            .join("");
          return (
            <div
              className="my-10 overflow-hidden bg-[var(--ink)] text-[var(--white)] [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:p-5 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit"
              key={key}
            >
              <div className="flex items-center justify-between border-b border-white/20 px-4 py-3 text-xs [&_button]:cursor-pointer [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-[var(--orange)]">
                <span>{item.language || "code"}</span>
                <CodeCopyButton code={code} />
              </div>
              <pre>
                <code className={`language-${item.language || "text"}`}>
                  {code}
                </code>
              </pre>
            </div>
          );
        }

        if (item.type === "quote") {
          return (
            <blockquote key={key}>
              {renderChildren(item.children, key)}
            </blockquote>
          );
        }

        return null;
      })}

      {conclusionParagraphs.length > 0 && (
        <section
          className="mt-[clamp(4rem,8vw,6rem)] border-y border-[var(--ink)] py-[clamp(2rem,4vw,3rem)] [&_h2]:!mt-0"
          aria-labelledby="article-conclusion-title"
        >
          <h2 id="article-conclusion-title">Conclusion</h2>
          {conclusionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      )}
    </div>
  );
}
