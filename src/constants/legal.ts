export const LEGAL_POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms & Conditions", href: "/terms/" },
  { label: "Refund Policy", href: "/refund-policy/" },
] as const;

export const NATIVE_LEGAL_ROUTES = LEGAL_POLICY_LINKS.map(({ href }) =>
  href.replace(/\/$/, ""),
);
