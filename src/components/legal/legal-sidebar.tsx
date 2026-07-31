import Link from "next/link";

import { LEGAL_POLICY_LINKS } from "@/constants/legal";
import type { LegalPageData } from "@/types/legal";

import { legalSidebarLinkClass } from "./legal-styles";

type LegalSidebarProps = {
  currentRoute: string;
  navigation: LegalPageData["navigation"];
};

export function LegalSidebar({
  currentRoute,
  navigation,
}: LegalSidebarProps) {
  return (
    <aside className="sticky top-[calc(var(--header-height)+2rem)] grid gap-11 max-[63.99rem]:static">
      <nav aria-label="Policy pages">
        <p className="mb-3 text-sm font-semibold">Policies</p>
        <ul className="m-0 list-none border-t border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)] p-0 max-[63.99rem]:flex max-[63.99rem]:flex-wrap max-[63.99rem]:gap-2 max-[63.99rem]:border-0">
          {LEGAL_POLICY_LINKS.map(({ label, href }) => (
            <li
              className="border-b border-[color:color-mix(in_oklch,var(--ink)_12%,transparent)] max-[63.99rem]:border-0"
              key={href}
            >
              <Link
                className={`${legalSidebarLinkClass} max-[63.99rem]:rounded-full max-[63.99rem]:border max-[63.99rem]:border-[color:color-mix(in_oklch,var(--ink)_17%,transparent)] max-[63.99rem]:px-[0.85rem] max-[63.99rem]:py-[0.65rem]`}
                href={href}
                aria-current={currentRoute === href ? "page" : undefined}
              >
                <span>{label}</span>
                <i className="not-italic" aria-hidden="true">
                  ↗
                </i>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {navigation.length > 0 && (
        <nav className="max-[63.99rem]:hidden" aria-label="On this page">
          <p className="mb-3 text-sm font-semibold">On this page</p>
          <ul className="m-0 list-none border-t border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)] p-0">
            {navigation.map(({ label, href }) => (
              <li
                className="border-b border-[color:color-mix(in_oklch,var(--ink)_12%,transparent)]"
                key={href}
              >
                <a
                  className={`${legalSidebarLinkClass} justify-start py-[0.55rem] text-[0.82rem]`}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}
