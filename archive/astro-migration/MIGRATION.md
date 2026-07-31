# Archived Astro to Next.js Migration Notes

## Current state

The original Astro site contains approximately 19,000 lines of templates,
scoped CSS, and DOM-driven animation code. The initial migration preserves its
reviewed static output inside a constrained Next.js compatibility boundary:

- `src/generated/pages.json` contains trusted, server-rendered page markup and
  compiled page behavior.
- `app/globals.css` contains the compiled scoped styles.
- `src/components/legacy-page.tsx` renders imported markup on the server.
- `src/components/legacy-scripts.tsx` starts the compiled DOM behavior after the
  page is mounted.
- `app/[[...slug]]/page.tsx` statically generates all preserved routes and their
  metadata.

This keeps current routes, styling, SEO content, forms, filters, dialogs, and
motion intact while development moves to the App Router.

The `/privacy/`, `/terms/`, `/refund-policy/`, and `/it-policy/` routes are now
native React pages. Their snapshots may remain in the generated JSON, but the
legacy route registry excludes them and they no longer render generated markup.

## Regenerating the compatibility artifacts

Do this only when the reviewed Astro source must be re-imported:

```bash
# Build the Astro source first.
cd ../Website
npm run build

# Import that build into this repository.
cd ../unisouk-website
npm run import:astro -- ../Website
npm run check
```

The importer copies public assets and overwrites generated page/CSS artifacts.
It never removes stale files automatically; review them manually and retain or
archive them according to the deletion policy in `AGENTS.md`.

## Native migration sequence

Migrate one cohesive boundary at a time:

1. Shared site header and mobile navigation
2. Shared footer, demo dialog, and WhatsApp launcher
3. Legal page template — completed
4. Simple content routes
5. Integrations directory and filters
6. Blog index, CMS data layer, article routes, and rich-text renderer
7. Solution pages
8. Home-page motion demonstrations

For each boundary:

1. Recreate the markup as a typed Server Component.
2. Move interactive behavior into the smallest possible Client Component.
3. Move styles into a colocated CSS Module or an intentional global foundation.
4. Preserve content, URLs, metadata, responsive behavior, and reduced-motion
   behavior.
5. Compare the native route with the imported route before changing design.
6. Remove the route from generated data only after parity is verified.

## Compatibility rules

- Imported HTML is trusted local build output only.
- Never inject live CMS, query-string, cookie, form, or user content through
  `dangerouslySetInnerHTML`.
- Do not append new scripts to the imported payload.
- Imported anchor navigation intentionally performs full document navigation,
  which reinitializes legacy DOM behavior safely.
- Native routes should use Next.js `Link` where client navigation is beneficial.

## Known transition limitation

Blog article pages are included only when the Astro build can reach the CMS at
import time, matching the source site's static-generation behavior. The native
blog migration should replace this with an explicit revalidation or build-time
content policy.
