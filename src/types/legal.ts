export type LegalInline =
  | string
  | { type: "strong"; text: string }
  | { type: "link"; text: string; href: string };

export type LegalBlock =
  | { type: "paragraph"; content: LegalInline[] }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: LegalInline[][] }
  | { type: "contact"; items: LegalInline[][] }
  | { type: "note"; content: LegalInline[] }
  | { type: "document"; href: string };

export type LegalSection = {
  id: string;
  title?: string;
  blocks: LegalBlock[];
};

export type LegalPageData = {
  route: string;
  title: string;
  description: string;
  updated?: string;
  navigation: ReadonlyArray<{ label: string; href: string }>;
  intro: string;
  sections: LegalSection[];
};
