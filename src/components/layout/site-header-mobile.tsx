import {
  RouteAwareLink,
  RouteAwareSummary,
} from "@/components/layout/route-aware-navigation";
import {
  buttonPrimaryClass,
  buttonSecondaryClass,
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

const sectionToggle =
  "flex min-h-15 items-center justify-between border-b border-[color:color-mix(in_oklch,var(--ink)_12%,transparent)] font-[family-name:var(--font-heading)] text-[1.08rem] font-medium list-none data-[active=true]:text-[var(--orange-ink)]";
const toggleMark =
  "relative h-px w-3 bg-current after:absolute after:inset-0 after:h-px after:w-3 after:rotate-90 after:bg-current after:content-[''] group-open/mobile-group:after:rotate-0 motion-reduce:after:transition-none";

export function SiteHeaderMobile() {
  return (
    <details
      className="group/mobile ml-auto hidden max-[74.99rem]:block"
      data-native-mobile-navigation
    >
      <summary
        className="grid h-11 w-11 cursor-pointer list-none place-content-center gap-[0.28rem] [&::-webkit-details-marker]:hidden"
        aria-label="Open navigation menu"
      >
        <i className="h-0.5 w-6 bg-[var(--ink)] transition-all group-open/mobile:translate-y-[0.38rem] group-open/mobile:rotate-45 motion-reduce:transition-none" />
        <i className="h-0.5 w-6 bg-[var(--ink)] transition-all group-open/mobile:opacity-0 motion-reduce:transition-none" />
        <i className="h-0.5 w-6 bg-[var(--ink)] transition-all group-open/mobile:-translate-y-[0.38rem] group-open/mobile:-rotate-45 motion-reduce:transition-none" />
      </summary>
      <div className="fixed inset-x-0 top-[var(--header-height)] bottom-0 grid grid-rows-[minmax(0,1fr)_auto] overflow-y-auto  overscroll-contain  bg-[var(--white)] px-[var(--gutter)] pt-4 pb-6">
        <nav className="grid content-start" aria-label="Mobile navigation">
          <details className="group/mobile-group">
            <RouteAwareSummary
              className={sectionToggle}
              activePaths={NAVIGATION_SECTION_PATHS.solutions}
            >
              Solutions <span className={toggleMark} aria-hidden="true" />
            </RouteAwareSummary>
            <ul className="m-0 grid list-none border-b border-[color:color-mix(in_oklch,var(--ink)_12%,transparent)] py-[0.65rem] pr-0 pb-4 pl-4">
              {SOLUTIONS.map(({ label, href }) => (
                <li key={href}>
                  <RouteAwareLink
                    className="flex min-h-[2.6rem] items-center text-[0.94rem] text-[var(--text-muted)] no-underline aria-[current=page]:text-[var(--orange-ink)]"
                    href={href}
                  >
                    {label}
                  </RouteAwareLink>
                </li>
              ))}
            </ul>
          </details>
          <RouteAwareLink
            className={`${sectionToggle} no-underline aria-[current=page]:text-[var(--orange-ink)]`}
            href="/integrations/"
          >
            Integrations
          </RouteAwareLink>
          <RouteAwareLink
            className={`${sectionToggle} no-underline aria-[current=page]:text-[var(--orange-ink)]`}
            href="/pricing/"
          >
            Pricing
          </RouteAwareLink>
          <details className="group/mobile-group">
            <RouteAwareSummary
              className={sectionToggle}
              activePaths={NAVIGATION_SECTION_PATHS.company}
            >
              Company <span className={toggleMark} aria-hidden="true" />
            </RouteAwareSummary>
            <ul className="m-0 grid list-none border-b border-[color:color-mix(in_oklch,var(--ink)_12%,transparent)] py-[0.65rem] pr-0 pb-4 pl-4">
              {COMPANY_GROUPS.flatMap((group) =>
                group.links.map(({ label, href }) => (
                  <li key={href}>
                    <RouteAwareLink
                      className="flex min-h-[2.6rem] items-center text-[0.94rem] text-[var(--text-muted)] no-underline aria-[current=page]:text-[var(--orange-ink)]"
                      href={href}
                      activePaths={href === "/blog/" ? BLOG_ROUTE_PATHS : undefined}
                      includeDescendants={href === "/blog/"}
                    >
                      {label}
                    </RouteAwareLink>
                  </li>
                )),
              )}
            </ul>
          </details>
        </nav>
        <div className="grid grid-cols-[1fr_1.35fr] gap-3 pt-4 max-[31.99rem]:grid-cols-1">
          <a className={buttonSecondaryClass} href={SIGN_IN_URL}>
            Sign in <ArrowRightIcon />
          </a>
          <a className={buttonPrimaryClass} href={DEMO_BOOKING_URL}>
            Book a free demo <ArrowRightIcon />
          </a>
        </div>
      </div>
    </details>
  );
}
