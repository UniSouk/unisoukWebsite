import Image from "next/image";
import Link from "next/link";

import {
  RouteAwareLink,
  RouteAwareSummary,
} from "@/components/layout/route-aware-navigation";
import { SiteHeaderInteractions } from "@/components/layout/site-shell-interactions";
import { SiteHeaderMobile } from "@/components/layout/site-header-mobile";
import {
  buttonPrimaryClass,
  siteContainerClass,
} from "@/components/layout/site-shell-styles";
import { ArrowRightIcon } from "@/components/ui/icon";
import {
  BLOG_ROUTE_PATHS,
  COMPANY_GROUPS,
  DEMO_BOOKING_URL,
  NAVIGATION_SECTION_PATHS,
  SIGN_IN_URL,
  SOLUTIONS,
} from "@/constants/site";

const desktopNavItem =
  "relative inline-flex min-h-11 items-center gap-2 text-[0.92rem] font-medium text-[color:color-mix(in_oklch,var(--ink)_88%,transparent)] no-underline after:absolute after:inset-x-0 after:bottom-[0.08rem] after:h-0.5 after:origin-left after:scale-x-0 after:bg-[var(--orange)] after:transition-transform after:duration-[180ms] hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 motion-reduce:after:transition-none";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-100 h-[var(--header-height)] border-b border-[color:color-mix(in_oklch,var(--ink)_13%,transparent)] bg-[var(--white)]"
      data-native-header
    >
      <div
        className={`${siteContainerClass} flex h-full items-center gap-[clamp(1.5rem,2.7vw,3.25rem)]`}
      >
        <Link className="shrink-0" href="/" aria-label="UniSouk home">
          <Image
            className="h-auto w-[clamp(8.5rem,10.5vw,10.125rem)]"
            src="/unisouk-logo.svg"
            width={162}
            height={26}
            alt="UniSouk"
            priority
          />
        </Link>
        <nav
          className="flex items-center gap-[clamp(1.15rem,1.8vw,2rem)] max-[74.99rem]:hidden"
          aria-label="Primary navigation"
        >
          <details
            className="group/disclosure relative"
            data-native-disclosure
          >
            <RouteAwareSummary
              className={`${desktopNavItem} cursor-pointer list-none data-[active=true]:after:scale-x-100 [&::-webkit-details-marker]:hidden`}
              activePaths={NAVIGATION_SECTION_PATHS.solutions}
            >
              Solutions{" "}
              <span
                className="h-1.5 w-1.5 -translate-y-0.5 rotate-45 border-r-[1.5px] border-b-[1.5px] border-current transition-transform duration-[180ms] group-open/disclosure:translate-y-0.5 group-open/disclosure:rotate-225 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </RouteAwareSummary>
            <div className="fixed inset-x-0 top-[var(--header-height)] border-b border-[color:color-mix(in_oklch,var(--ink)_13%,transparent)] bg-[var(--white)] shadow-[0_8px_8px_oklch(18%_0_0/0.06)]">
              <div
                className={`${siteContainerClass} grid grid-cols-[minmax(14rem,0.8fr)_minmax(0,2.2fr)] gap-[clamp(2.5rem,5vw,6rem)] py-10 pb-12`}
              >
                <div className="border-r border-[color:color-mix(in_oklch,var(--ink)_12%,transparent)] pr-[clamp(1.5rem,3vw,3.5rem)]">
                  <p className="mb-3 text-[0.78rem] font-semibold text-[var(--orange-ink)]">
                    Solutions
                  </p>
                  <h2 className="m-0 max-w-[9ch] text-[clamp(2rem,2.5vw,2.75rem)]">
                    Run commerce your way.
                  </h2>
                  <span className="mt-4 block max-w-[29ch] text-[0.9rem] leading-[1.55] text-[var(--text-muted)]">
                    Choose the platform, service or intelligent assistant that
                    fits the way you sell.
                  </span>
                </div>
                <ul className="m-0 grid list-none grid-cols-2 gap-x-[clamp(1.5rem,3vw,3.5rem)] p-0">
                  {SOLUTIONS.map(({ label, description, href }) => (
                    <li
                      className="border-b border-[color:color-mix(in_oklch,var(--ink)_11%,transparent)]"
                      key={href}
                    >
                      <RouteAwareLink
                        className="group/solution grid min-h-[5.9rem] content-center gap-[0.45rem] py-4 no-underline"
                        href={href}
                      >
                        <strong className="flex items-center justify-between gap-4 font-[family-name:var(--font-heading)] text-[1.08rem] font-medium group-hover/solution:text-[var(--orange-ink)] group-aria-[current=page]/solution:text-[var(--orange-ink)]">
                          {label}{" "}
                          <span
                            className="-translate-x-1 text-[var(--orange-ink)] opacity-0 transition-all duration-[180ms] group-hover/solution:translate-x-0 group-hover/solution:opacity-100 group-aria-[current=page]/solution:translate-x-0 group-aria-[current=page]/solution:opacity-100 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <ArrowRightIcon />
                          </span>
                        </strong>
                        <small className="max-w-[45ch] text-[0.82rem] leading-[1.45] text-[var(--text-muted)]">
                          {description}
                        </small>
                      </RouteAwareLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
          <RouteAwareLink
            className={desktopNavItem}
            href="/integrations/"
          >
            Integrations
          </RouteAwareLink>
          <RouteAwareLink
            className={desktopNavItem}
            href="/pricing/"
          >
            Pricing
          </RouteAwareLink>
          <details
            className="group/disclosure relative"
            data-native-disclosure
          >
            <RouteAwareSummary
              className={`${desktopNavItem} cursor-pointer list-none data-[active=true]:after:scale-x-100 [&::-webkit-details-marker]:hidden`}
              activePaths={NAVIGATION_SECTION_PATHS.company}
            >
              Company{" "}
              <span
                className="h-1.5 w-1.5 -translate-y-0.5 rotate-45 border-r-[1.5px] border-b-[1.5px] border-current transition-transform duration-[180ms] group-open/disclosure:translate-y-0.5 group-open/disclosure:rotate-225 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </RouteAwareSummary>
            <div className="absolute top-[calc(100%+0.65rem)] right-[-1rem] grid w-[30rem] grid-cols-2 gap-8 rounded-[var(--radius-md)] border border-[color:color-mix(in_oklch,var(--ink)_13%,transparent)] bg-[var(--white)] p-[1.35rem] shadow-[0_8px_8px_oklch(18%_0_0/0.06)]">
              {COMPANY_GROUPS.map((group) => (
                <div
                  className="[&+&]:border-l [&+&]:border-[color:color-mix(in_oklch,var(--ink)_11%,transparent)] [&+&]:pl-8"
                  key={group.title}
                >
                  <p className="mb-3 text-[0.78rem] font-semibold text-[var(--orange-ink)]">
                    {group.title}
                  </p>
                  <ul className="m-0 grid list-none p-0">
                    {group.links.map(({ label, href }) => (
                      <li className="last:[&_a]:border-b-0" key={href}>
                        <RouteAwareLink
                          className="group/company-link flex min-h-[2.7rem] items-center justify-between border-b border-[color:color-mix(in_oklch,var(--ink)_10%,transparent)] text-[0.9rem] font-medium no-underline hover:text-[var(--orange-ink)]"
                          href={href}
                          activePaths={
                            href === "/blog/" ? BLOG_ROUTE_PATHS : undefined
                          }
                          includeDescendants={href === "/blog/"}
                        >
                          {label}{" "}
                          <span
                            className="text-[var(--orange-ink)] transition-transform duration-[180ms] group-hover/company-link:translate-x-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <ArrowRightIcon />
                          </span>
                        </RouteAwareLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </nav>
        <div className="ml-auto flex items-center gap-[clamp(1rem,1.6vw,1.65rem)] max-[74.99rem]:hidden">
          <a className={desktopNavItem} href={SIGN_IN_URL}>
            Sign in
          </a>
          <a className={buttonPrimaryClass} href={DEMO_BOOKING_URL}>
            Book a free demo
            <ArrowRightIcon />
          </a>
        </div>
        <SiteHeaderMobile />
        <SiteHeaderInteractions />
      </div>
    </header>
  );
}
