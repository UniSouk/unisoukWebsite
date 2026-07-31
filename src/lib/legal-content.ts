import type { Metadata } from "next";

import type {
  LegalBlock,
  LegalInline,
  LegalPageData,
} from "@/types/legal";

export const strong = (text: string): LegalInline => ({
  type: "strong",
  text,
});

export const link = (text: string, href: string): LegalInline => ({
  type: "link",
  text,
  href,
});

export const paragraph = (...content: LegalInline[]): LegalBlock => ({
  type: "paragraph",
  content,
});

export const subheading = (text: string): LegalBlock => ({
  type: "subheading",
  text,
});

export const list = (...items: LegalInline[][]): LegalBlock => ({
  type: "list",
  items,
});

export const orderedList = (...items: LegalInline[][]): LegalBlock => ({
  type: "list",
  ordered: true,
  items,
});

export const contact = (...items: LegalInline[][]): LegalBlock => ({
  type: "contact",
  items,
});

export const note = (...content: LegalInline[]): LegalBlock => ({
  type: "note",
  content,
});

export function createLegalMetadata(data: LegalPageData): Metadata {
  return {
    title: { absolute: `${data.title} | UniSouk` },
    description: data.description,
    alternates: { canonical: data.route },
    openGraph: {
      type: "website",
      title: `${data.title} | UniSouk`,
      description: data.description,
      url: data.route,
    },
    twitter: {
      card: "summary",
      title: `${data.title} | UniSouk`,
      description: data.description,
    },
  };
}
