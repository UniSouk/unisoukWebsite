import Image from "next/image";

import { RouteAwareLink } from "@/components/layout/route-aware-navigation";
import { SiteFooterInteractions } from "@/components/layout/site-shell-interactions";
import {
  buttonPrimaryClass,
  siteContainerClass,
} from "@/components/layout/site-shell-styles";
import {
  SUPPORT_PHONE_DISPLAY_COMPACT,
  SUPPORT_PHONE_E164,
} from "@/constants/contact";
import {
  BLOG_ROUTE_PATHS,
  DEMO_BOOKING_URL,
  FOOTER_GROUPS,
  SOCIAL_LINKS,
} from "@/constants/site";

function SocialIcon({
  icon,
}: {
  icon: (typeof SOCIAL_LINKS)[number]["icon"];
}) {
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M5 7.3V15M5 4.8v.1M8.7 15v-4.4c0-2.1 3.4-2.4 3.4.2V15M8.7 7.3V15M3.3 7.3h3.4M3.3 15h3.4M12.1 10.8V15M8.7 7.3h3.4" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <rect x="3.2" y="3.2" width="13.6" height="13.6" rx="3.5" />
        <circle cx="10" cy="10" r="3.1" />
        <path d="M14.4 5.8h.01" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M11.2 16v-5h1.9l.3-2.2h-2.2V7.5c0-.7.2-1.1 1.1-1.1h1.2V4.5c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1.1-2.9 3v1.4H7V11h1.9v5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M17 10c0 2.1-.2 3.5-.5 4-.3.5-.8.8-1.4.9-1.3.2-3 .3-5.1.3s-3.8-.1-5.1-.3c-.6-.1-1.1-.4-1.4-.9-.3-.5-.5-1.9-.5-4s.2-3.5.5-4c.3-.5.8-.8 1.4-.9C6.2 4.9 7.9 4.8 10 4.8s3.8.1 5.1.3c.6.1 1.1.4 1.4.9.3.5.5 1.9.5 4Z" />
      <path d="m8.4 7.7 4 2.3-4 2.3z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="relative min-h-[62.5rem] overflow-hidden border-t border-[color:color-mix(in_oklch,var(--ink)_16%,transparent)] bg-[var(--mist)] text-[var(--ink)] isolate max-[47.99rem]:min-h-0"
      id="site-footer"
      aria-labelledby="footer-pitch-title"
      data-native-footer
    >
      <div
        className={`${siteContainerClass} relative z-1 grid min-h-[62.5rem] grid-cols-[minmax(0,1fr)] grid-rows-[auto_minmax(17rem,1fr)_auto] py-[clamp(5rem,7vw,6.5rem)] pb-7 opacity-80 translate-y-4 transition-all duration-1000 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 max-[71.99rem]:min-h-0 max-[47.99rem]:grid-rows-[auto_auto_auto] max-[47.99rem]:py-19 max-[47.99rem]:pb-8 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
        data-native-footer-shell
      >
        <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-[clamp(3rem,6vw,6rem)] border-b border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)] pb-[clamp(3.5rem,5vw,5rem)] max-[71.99rem]:grid-cols-1 max-[71.99rem]:gap-16 max-[47.99rem]:gap-12 max-[47.99rem]:border-b-0 max-[47.99rem]:pb-0">
          <div className="max-w-[32rem] self-start max-[71.99rem]:max-w-[44rem]">
            <h2
              className="m-0 max-w-[10ch] text-[length:var(--text-section-heading)] leading-[0.96] font-medium tracking-[-0.035em] text-balance max-[71.99rem]:max-w-[12ch] max-[47.99rem]:max-w-[9.5ch] max-[47.99rem]:leading-[0.98]"
              id="footer-pitch-title"
            >
              One platform for modern commerce.
            </h2>
            <p className="mt-[1.65rem] mb-0 max-w-[43ch] text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] text-[color:color-mix(in_oklch,var(--ink)_82%,transparent)] text-pretty max-[47.99rem]:max-w-[34ch] max-[47.99rem]:text-base">
              Manage product listings, inventory, orders, shipping, payments
              and AI agents from one intelligent commerce operating system.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 max-[47.99rem]:grid max-[47.99rem]:w-[min(100%,22rem)] max-[47.99rem]:gap-[0.65rem]">
              <a className={buttonPrimaryClass} href={DEMO_BOOKING_URL}>
                Book a free demo
              </a>
            </div>
            <address
              className="mt-9 grid grid-cols-[minmax(0,1fr)_auto] gap-6 border-t border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)] pt-6 not-italic max-[47.99rem]:grid-cols-1 max-[47.99rem]:gap-5 [&>div]:grid [&>div]:content-start [&>div]:gap-[0.45rem] [&_a]:text-[0.86rem] [&_a]:leading-[1.55] [&_a]:text-[color:color-mix(in_oklch,var(--ink)_78%,transparent)] [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-[180ms] hover:[&_a]:text-[var(--orange-ink)] motion-reduce:[&_a]:transition-none [&_span]:text-[0.86rem] [&_span]:leading-[1.55] [&_span]:text-[color:color-mix(in_oklch,var(--ink)_78%,transparent)] [&_strong]:font-[family-name:var(--font-heading)] [&_strong]:text-[0.78rem] [&_strong]:font-medium [&_strong]:tracking-[0.035em] [&_strong]:uppercase"
              aria-label="UniSouk contact details"
            >
              <div>
                <strong>Address</strong>
                <span>
                  Seventh Floor, Office No. 701, Solaris Cube, Rundh-Vesu, B/s.
                  Rajoo India, Nr. Mitul Square, Vesu, Surat, Gujarat-395007
                </span>
              </div>
              <div>
                <strong>Phone</strong>
                <a href={`tel:${SUPPORT_PHONE_E164}`}>
                  {SUPPORT_PHONE_DISPLAY_COMPACT}
                </a>
              </div>
            </address>
          </div>
          <nav
            className="grid grid-cols-[repeat(3,minmax(8.25rem,10rem))] content-start justify-between gap-x-8 max-[71.99rem]:grid-cols-3 max-[71.99rem]:justify-stretch max-[47.99rem]:grid-cols-1 max-[47.99rem]:gap-0 max-[47.99rem]:border-t max-[47.99rem]:border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)]"
            aria-label="Footer navigation"
          >
            {FOOTER_GROUPS.map((group, groupIndex) => (
              <div
                className="grid content-start gap-9 max-[47.99rem]:gap-0"
                key={group.title}
              >
                <details
                  className="group/footer-group max-[47.99rem]:border-b max-[47.99rem]:border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)]"
                  open
                  data-native-footer-group
                >
                  <summary className="flex items-center justify-between font-[family-name:var(--font-heading)] text-[0.78rem] leading-[1.3] font-medium tracking-[0.035em] uppercase list-none max-[47.99rem]:min-h-[3.9rem] max-[47.99rem]:cursor-pointer max-[47.99rem]:text-[0.76rem] [&::-webkit-details-marker]:hidden">
                    {group.title}
                    <span
                      className="relative hidden h-px w-3 bg-current after:absolute after:inset-0 after:h-px after:w-3 after:rotate-90 after:bg-current after:content-[''] group-open/footer-group:after:rotate-0 max-[47.99rem]:block motion-reduce:after:transition-none"
                      aria-hidden="true"
                    />
                  </summary>
                  <ul className="mt-[1.35rem] mb-0 grid list-none gap-[0.66rem] p-0 max-[47.99rem]:mt-[-0.1rem] max-[47.99rem]:mb-[1.4rem] max-[47.99rem]:hidden max-[47.99rem]:gap-[0.7rem] max-[47.99rem]:group-open/footer-group:grid">
                    {group.links.map(({ label, href }) => (
                      <li key={href}>
                        <RouteAwareLink
                          className="inline-flex min-h-[1.55rem] items-center text-[0.86rem] leading-[1.35] text-[color:color-mix(in_oklch,var(--ink)_78%,transparent)] no-underline transition-all duration-[180ms] hover:-translate-y-px hover:text-[var(--orange-ink)] aria-[current=page]:font-semibold aria-[current=page]:text-[var(--orange-ink)] max-[47.99rem]:min-h-[1.8rem] max-[47.99rem]:text-[0.92rem] motion-reduce:transition-none"
                          href={href}
                          activePaths={
                            href === "/blog/" ? BLOG_ROUTE_PATHS : undefined
                          }
                          includeDescendants={href === "/blog/"}
                        >
                          {label}
                        </RouteAwareLink>
                      </li>
                    ))}
                  </ul>
                </details>
                {groupIndex === FOOTER_GROUPS.length - 1 && (
                  <details
                    className="group/footer-group max-[47.99rem]:border-b max-[47.99rem]:border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)]"
                    open
                    data-native-footer-group
                  >
                    <summary className="flex items-center justify-between font-[family-name:var(--font-heading)] text-[0.78rem] leading-[1.3] font-medium tracking-[0.035em] uppercase list-none max-[47.99rem]:min-h-[3.9rem] max-[47.99rem]:cursor-pointer max-[47.99rem]:text-[0.76rem] [&::-webkit-details-marker]:hidden">
                      Connect
                      <span
                        className="relative hidden h-px w-3 bg-current after:absolute after:inset-0 after:h-px after:w-3 after:rotate-90 after:bg-current after:content-[''] group-open/footer-group:after:rotate-0 max-[47.99rem]:block motion-reduce:after:transition-none"
                        aria-hidden="true"
                      />
                    </summary>
                    <ul className="mt-[1.35rem] mb-0 grid list-none gap-[0.66rem] p-0 max-[47.99rem]:mt-[-0.1rem] max-[47.99rem]:mb-[1.4rem] max-[47.99rem]:hidden max-[47.99rem]:gap-[0.7rem] max-[47.99rem]:group-open/footer-group:grid">
                      {SOCIAL_LINKS.map(({ label, href, icon }) => (
                        <li key={href}>
                          <a
                            className="group/social inline-flex min-h-[1.55rem] items-center gap-[0.55rem] text-[0.86rem] leading-[1.35] text-[color:color-mix(in_oklch,var(--ink)_78%,transparent)] no-underline transition-all duration-[180ms] hover:-translate-y-px hover:text-[var(--orange-ink)] max-[47.99rem]:min-h-[1.8rem] max-[47.99rem]:text-[0.92rem] motion-reduce:transition-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.35] [&_svg]:transition-transform [&_svg]:duration-[180ms] group-hover/social:[&_svg]:scale-110 motion-reduce:[&_svg]:transition-none"
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`UniSouk on ${label}`}
                          >
                            <SocialIcon icon={icon} />
                            <span>{label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="grid min-h-[clamp(17rem,31vh,22rem)] place-items-center content-center py-[clamp(2.5rem,4.5vw,4rem)] [perspective:900px] max-[71.99rem]:min-h-[21rem] max-[47.99rem]:min-h-80 max-[47.99rem]:py-15">
          <div className="relative grid h-[clamp(12rem,20vw,18rem)] w-full place-items-center isolate max-[47.99rem]:h-56">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-[min(172vw,120rem)] max-w-none -translate-1/2 opacity-[0.055] max-[47.99rem]:w-[min(calc(100%+1.5rem),32rem)] [&_svg]:h-auto [&_svg]:w-full [&_svg]:overflow-visible [&_text]:fill-[var(--ink)] [&_text]:font-[family-name:var(--font-heading)] [&_text]:text-[180px] [&_text]:font-medium [&_text]:tracking-[-0.035em]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 1200 250" role="presentation">
                <text
                  x="600"
                  y="184"
                  textAnchor="middle"
                  textLength="1080"
                  lengthAdjust="spacingAndGlyphs"
                >
                  UNISOUK
                </text>
              </svg>
            </div>
            <a
              className="absolute top-[54%] left-1/2 z-2 grid -translate-1/2 place-items-center no-underline transition-transform duration-[280ms] [perspective:900px] hover:-translate-y-[calc(50%+3px)] focus-visible:rounded-[1.125rem] focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[var(--orange-ink)] motion-reduce:transition-none"
              href="#top"
              aria-label="Back to the top"
            >
              <span className="relative grid aspect-square w-[clamp(4.75rem,8vw,7.25rem)] place-items-center overflow-hidden rounded-[1.75rem] border border-[rgb(255_150_0/32%)] bg-[rgb(255_255_255/76%)] shadow-[0_8px_8px_rgb(72_42_8/11%)] [backdrop-filter:blur(12px)] [transform:rotateX(6deg)_rotateY(-5deg)_translate3d(0,0,0)] [transform-style:preserve-3d] will-change-transform max-[47.99rem]:w-18 max-[47.99rem]:rounded-[1.25rem] motion-reduce:[transform:rotateX(4deg)_rotateY(-3deg)] motion-reduce:will-change-auto">
                <Image
                  className="h-auto w-[58%] [transform:translateZ(2rem)]"
                  src="/unisouk-mark.svg"
                  width={52}
                  height={26}
                  alt=""
                  priority
                />
              </span>
            </a>
          </div>
        </div>
        <div className="grid min-h-18 grid-cols-[1fr_auto] items-center gap-8 border-t border-[color:color-mix(in_oklch,var(--ink)_18%,transparent)] pt-5 text-xs text-[color:color-mix(in_oklch,var(--ink)_76%,transparent)] max-[47.99rem]:flex max-[47.99rem]:min-h-0 max-[47.99rem]:flex-col max-[47.99rem]:gap-4 max-[47.99rem]:pt-7 max-[47.99rem]:text-center [&_p]:m-0">
          <p>
            © 2026 Nexanode Technologies Pvt Ltd. All rights reserved, all
            wrongs reversed.
          </p>
          <p className="text-right text-[var(--ink)] max-[47.99rem]:text-center">
            Made in India with love ❤️
          </p>
        </div>
        <SiteFooterInteractions />
      </div>
    </footer>
  );
}
