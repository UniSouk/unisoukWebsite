# Issue Log

Reported 2026-09-18. Numbering follows the original report, so item 3 is absent
from that report and is recorded here only to keep the numbers aligned.

Verified with `npm run typecheck`, `npm run lint` and `npm run build`, then by
serving the production build and inspecting the rendered markup of every touched
route.

| # | Route | Issue | Owning file(s) | Root cause | Fix | Status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `/contact` | Mobile number placeholder shows a real looking number; email field has no placeholder | `src/components/marketing/contact-form.tsx` | Phone placeholder was `+91 98765 43210`, the phone validation message quoted the same number, and the email input had no `placeholder` | Phone placeholder is now the masked `+91 XXXXX XXX21`, the validation message reads `+91 XXXXX XXXXX`, and the email field shows `name@yourbusiness.com` through a new optional `placeholder` prop on the shared `Field` helper | Fixed |
| 2 | `/contact` | "Why contact UniSouk?" does not mention the AI capabilities UniSouk provides | `src/components/marketing/contact-reference.tsx` | The `supportAreas` list had five entries, none covering AI agents | Added an "AI agents for commerce" support area naming SoukList, SoukSense, SoukStudio, SoukBoost and SoukLedger, and mentioned AI agents in the section intro | Fixed |
| 3 | — | Not reported | — | Item 3 was not part of the report | — | Not reported |
| 4 | `/blogs/[slug]` | Breadcrumb is cut off instead of showing the full article title on desktop | `app/blogs/[slug]/page.tsx` | The current page crumb applied `max-w-[35ch] overflow-hidden text-ellipsis whitespace-nowrap` at every viewport width | Truncation is now released from `48rem` up (`min-[48rem]:max-w-none`, `min-[48rem]:overflow-visible`, `min-[48rem]:whitespace-normal`), so the full title wraps on desktop while mobile keeps the ellipsis | Fixed |
| 5 | `/pricing` | Hero "Compare the plans" jumps to the plan cards instead of the comparison table | `src/components/marketing/pricing-reference.tsx` | The link targeted `#plans` (plan cards); the comparison section had no `id` to target | Added `id="plan-comparison"` to the comparison section and repointed the hero link at it; the existing `#plans` anchor is unchanged so older deep links still work | Fixed |
| 6 | `/integrations` | Cashfree logo is not shown | `src/constants/integrations.ts` | The Cashfree Payments entry had `mark: "CF"` and no `logo`, so every render site fell back to the text mark even though `public/platform-logos/cashfree-logo.png` exists | Replaced the `CF` mark with `logo: "/platform-logos/cashfree-logo.png"`; the logo now renders in the directory card, the search result row and the detail dialog | Fixed |
| 7 | `/contact` | Hero "Book a free demo" link carries an arrow, unlike secondary links elsewhere | `src/components/marketing/contact-reference.tsx` | An `<ArrowRightIcon />` was inlined inside the text link | Removed the inline arrow from the text link; the primary "Send us a message" button keeps its arrow, matching primary buttons site-wide | Fixed |
| 8 | `/solutions/build-your-website` | Should use the same calendar as `/solutions/account-management` | `src/constants/site.ts` | CTAs used `CONSULTATION_BOOKING_URL`, a different calendar from `ACCOUNT_MANAGEMENT_BOOKING_URL` | `CONSULTATION_BOOKING_URL` now points at `https://calendar.app.google/z7tURzpYLRs6hpb17` | Fixed |
| 9 | `/solutions/build-your-website` | Every calendar CTA on the page must use the account management calendar | `src/constants/site.ts`, `src/components/marketing/build-website-reference.tsx` | Both page CTAs resolved through `CONSULTATION_BOOKING_URL` | Both "Book a free consultation" CTAs (hero and closing section) now resolve to the account management calendar; the page has no other calendar CTA | Fixed |
| 10 | `/solutions/performance-marketing` | Calendar CTAs must use the account management calendar | `src/constants/site.ts`, `src/components/marketing/performance-marketing-reference.tsx` | Hero and closing CTAs resolved through `CONSULTATION_BOOKING_URL` | Both "Book a free consultation" CTAs now resolve to the account management calendar. "Discuss your growth plan" stays on the demo calendar by decision | Fixed |
| 11 | `/solutions/ai-agents` | Agent cards should reveal details on hover, not only on click | `src/components/marketing/agent-profiles-reference.tsx` | The flip was driven by a single click-only `flippedId` state | Split into `hoveredId` (mouse pointer only, so touch taps do not double-fire) and `pinnedId` (click and keyboard); a card is flipped when either matches, `aria-pressed` reflects only the pinned state, and Escape clears both | Fixed |
| 12 | `/solutions/ai-agents` | Section above the footer has no CTA button, unlike other solution pages | `src/components/marketing/ai-agents-reference.tsx` | The `.agents-cta` section rendered a heading and copy only | Added a "Book a free demo" button to the closing section using the same dark-section treatment as the `/integrations` closing CTA | Fixed |
| 13 | `/` | "How UniSouk works" → "Book a consultation" must open the account management calendar | `src/constants/site.ts`, `app/page.tsx` | The `consultationUrl` prop passed `CONSULTATION_BOOKING_URL` | Resolved by the `CONSULTATION_BOOKING_URL` repoint; the rendered CTA now links to the account management calendar. "Build your plan" in the same section stays on the demo calendar by decision | Fixed |

## Calendar CTA inventory after the fix

Account management calendar (`.../z7tURzpYLRs6hpb17`):

- `/` — "Talk to an account manager", "Book a consultation"
- `/solutions/build-your-website` — both "Book a free consultation" CTAs
- `/solutions/performance-marketing` — both "Book a free consultation" CTAs
- `/solutions/account-management`, `/pricing` — unchanged, already on this calendar

Demo calendar (`.../NLwZ5g1RJvigqR4c6`), intentionally unchanged:

- Site header, mobile header and footer "Book a free demo"
- `/` — "Build your plan", "Book a free demo"
- `/solutions/performance-marketing` — "Discuss your growth plan"
- `/contact`, `/integrations`, `/solutions/ai-agents` — "Book a free demo"

The previous consultation calendar (`.../kxxzKiyEfoWJzmTU6`) no longer appears
anywhere in the production build.
