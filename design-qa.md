# Design QA

## Source visual truth

- Astro implementation: `/home/nirupama-singh/unisouk/Website`
- Desktop reference captures: `/tmp/unisouk-astro-*-full.png`
- Mobile reference captures:
  - `/tmp/unisouk-astro-home-mobile.png`
  - `/tmp/unisouk-astro-ai-mobile.png`

## React implementation

- Routes: `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`,
  `app/integrations/page.tsx`, `app/podcast/page.tsx`, `app/pricing/page.tsx`,
  and `app/solutions/*/page.tsx`
- Native marketing components: `src/components/marketing/*-reference.tsx`
- Interactive React leaves:
  - `src/components/marketing/agent-stage.tsx`
  - `src/components/marketing/agent-profiles-reference.tsx`
  - `src/components/marketing/contact-form.tsx`
  - `src/components/marketing/integration-directory.tsx`
  - `src/components/marketing/pricing-reference.tsx`

## Capture configuration

- Browser: the user-approved local headless Chrome session
- Desktop viewport: 1440 × 1000 CSS pixels
- Mobile viewport: 390 × 844 CSS pixels
- Pixel density: 1
- State: initial route state, no menus or dialogs open; autoplay states may show
  a different agent while preserving identical geometry and styling

## Evidence

- Combined comparison board: `/tmp/unisouk-comparison-overview.png`
- Full-page React captures:
  - `/tmp/unisouk-react-home-final.png`
  - `/tmp/unisouk-react-about-parity.png`
  - `/tmp/unisouk-react-contact-parity.png`
  - `/tmp/unisouk-react-integrations-parity.png`
  - `/tmp/unisouk-react-podcast-parity-2.png`
  - `/tmp/unisouk-react-pricing-parity-1.png`
  - `/tmp/unisouk-react-unified-parity-1.png`
  - `/tmp/unisouk-react-account-management-parity-1.png`
  - `/tmp/unisouk-react-build-website-parity.png`
  - `/tmp/unisouk-react-performance-parity-2.png`
  - `/tmp/unisouk-react-ai-parity-3.png`
  - `/tmp/unisouk-react-amazon-parity.png`
- Focused responsive captures:
  - `/tmp/unisouk-react-home-mobile.png`
  - `/tmp/unisouk-react-ai-mobile.png`

## Comparison history

1. The initial generic React templates materially differed from the Astro
   layouts in section order, typography, whitespace, and visual compositions.
2. Each active marketing route was replaced with typed React markup matching
   the corresponding Astro structure.
3. A global home-animation namespace collision affected campaign cards and the
   AI agent stage. Route-specific selectors were isolated and recaptured.
4. Lazy agent imagery and the Instagram fallback embed were normalized for
   deterministic captures.
5. Final side-by-side inspection found no remaining priority 0, 1, or 2 visual
   issues at the tested desktop and mobile viewports.

## Validation

- `npm run typecheck`: passed
- `npm run lint`: passed with existing `no-img-element` optimization warnings
  on fidelity-sensitive imagery
- `npm run build`: passed after allowing access to the configured CMS used by
  the existing blog static-generation routes

## Final result

passed
