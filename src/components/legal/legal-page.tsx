import {
  NativeSiteShell,
  siteContainerClass,
} from "@/components/layout/site-shell";
import type { LegalPageData } from "@/types/legal";

import { LegalDocument } from "./legal-document";
import { LegalSidebar } from "./legal-sidebar";

export function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <NativeSiteShell>
      <main className="bg-[var(--white)]" id="main-content">
        <section
          className="border-b border-[color:color-mix(in_oklch,var(--ink)_16%,transparent)] bg-[var(--mist)]"
          aria-labelledby="legal-title"
        >
          <div
            className={`${siteContainerClass} grid min-h-[clamp(26rem,58svh,40rem)] grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] items-end gap-[clamp(3rem,9vw,9rem)] py-[clamp(5rem,10vw,8rem)] max-[63.99rem]:min-h-[31rem] max-[63.99rem]:grid-cols-1 max-[63.99rem]:content-end max-[63.99rem]:gap-9`}
          >
            <div>
              <p className="mb-[1.35rem] font-semibold text-[var(--orange-ink)]">
                UniSouk policies
              </p>
              <h1
                className="m-0 max-w-[12ch] !text-[clamp(3.75rem,7vw,6rem)] !leading-[0.94] !tracking-[-0.038em] max-[35rem]:!text-[clamp(3.15rem,17vw,4.4rem)]"
                id="legal-title"
              >
                {data.title}
              </h1>
            </div>
            <div className="grid gap-6 pb-[0.55rem]">
              <p className="m-0 max-w-[49ch] text-[length:var(--text-lead)] leading-[1.65] text-[var(--text-muted)]">
                {data.description}
              </p>
              {data.updated && (
                <span className="block border-t border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)] pt-4 text-sm">
                  Last updated: {data.updated}
                </span>
              )}
            </div>
          </div>
        </section>
        <section aria-label={`${data.title} document`}>
          <div
            className={`${siteContainerClass} grid grid-cols-[minmax(13rem,0.33fr)_minmax(0,1fr)] items-start gap-[clamp(3rem,8vw,8rem)] py-[clamp(4rem,9vw,8rem)] max-[63.99rem]:grid-cols-1 max-[35rem]:pt-10`}
          >
            <LegalSidebar
              currentRoute={data.route}
              navigation={data.navigation}
            />
            <LegalDocument data={data} />
          </div>
        </section>
      </main>
    </NativeSiteShell>
  );
}
