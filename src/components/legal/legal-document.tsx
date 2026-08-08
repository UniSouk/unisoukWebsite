import Link from "next/link";
import { Fragment } from "react";

import {
  buttonPrimaryClass,
  buttonSecondaryClass,
} from "@/components/layout/site-shell-styles";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icon";
import type {
  LegalBlock,
  LegalInline,
  LegalPageData,
} from "@/types/legal";

import { legalCopyClass } from "./legal-styles";

function renderInline(item: LegalInline, key: number) {
  if (typeof item === "string") return item;
  if (item.type === "strong") return <strong key={key}>{item.text}</strong>;
  const content = <Fragment key={key}>{item.text}</Fragment>;
  return item.href.startsWith("/") ? (
    <Link href={item.href} key={key}>{content}</Link>
  ) : (
    <a href={item.href} key={key}>{content}</a>
  );
}

function InlineContent({ content }: { content: LegalInline[] }) {
  return <>{content.map(renderInline)}</>;
}

function LegalList({ block }: { block: Extract<LegalBlock, { type: "list" }> }) {
  const List = block.ordered ? "ol" : "ul";
  return (
    <List>
      {block.items.map((item, index) => (
        <li key={index}><InlineContent content={item} /></li>
      ))}
    </List>
  );
}

function DocumentBlock({ href }: { href: string }) {
  return (
    <>
      <div className="mb-6 flex flex-wrap gap-4">
        <a className={buttonPrimaryClass} href={href} download>Download IT Policy <ArrowRightIcon /></a>
        <a className={buttonSecondaryClass} href={href} target="_blank" rel="noreferrer">
          Open full screen
          <ArrowUpRightIcon />
        </a>
      </div>
      <object
        className="h-[min(76rem,78svh)] w-full rounded-[var(--radius-md)] border border-[color:color-mix(in_oklch,var(--ink)_16%,transparent)] bg-[var(--mist)] max-[35rem]:h-[70svh]"
        data={`${href}#view=FitH`}
        type="application/pdf"
        aria-label="UniSouk IT Policy PDF"
      >
        <p>Your browser cannot display the document inline. <a href={href}>Download the IT Policy</a> to read it.</p>
      </object>
    </>
  );
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  if (block.type === "paragraph") return <p><InlineContent content={block.content} /></p>;
  if (block.type === "subheading") return <h3>{block.text}</h3>;
  if (block.type === "list") return <LegalList block={block} />;
  if (block.type === "document") return <DocumentBlock href={block.href} />;
  const className = block.type === "contact"
    ? "my-4 grid gap-[0.45rem] rounded-[var(--radius-md)] bg-[var(--mist)] p-6 [&_p]:m-0"
    : "my-4 rounded-[var(--radius-md)] bg-[color:color-mix(in_oklch,var(--orange)_9%,var(--white))] py-5 px-6 text-[var(--ink)]";
  const items = block.type === "contact" ? block.items : [block.content];
  return <div className={className}>{items.map((item, index) => <p key={index}><InlineContent content={item} /></p>)}</div>;
}

export function LegalDocument({ data }: { data: LegalPageData }) {
  return (
    <article className={legalCopyClass}>
      <p className="font-[family-name:var(--font-heading)] text-[clamp(1rem,1.5vw,2rem)] leading-[0.5] text-[var(--ink)]">
        {data.intro}
      </p>
      {data.sections.map((section) => (
        <section id={section.id} key={section.id}>
          {section.title && <h2>{section.title}</h2>}
          {section.blocks.map((block, index) => <LegalBlockView block={block} key={index} />)}
        </section>
      ))}
    </article>
  );
}
