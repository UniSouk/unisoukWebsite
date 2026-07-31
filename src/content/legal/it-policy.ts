import type { LegalPageData } from "@/types/legal";

export const itPolicy: LegalPageData = {
  route: "/it-policy/",
  title: "IT Policy",
  description: "UniSouk’s complete information technology policy, covering the controls and practices governing company systems and information assets.",
  updated: "3 November 2025",
  navigation: [],
  intro: "Read the complete IT Policy below or download a copy for offline reference.",
  sections: [
    {
      id: "policy-document",
      blocks: [{ type: "document", href: "/IT_POLICY.pdf" }],
    },
  ],
};
