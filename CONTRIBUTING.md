# Contributing

Read `AGENTS.md` first. It contains the repository-wide product, design,
accessibility, and engineering constraints.

## Before opening a change

1. Identify the owning App Router route and its smallest interactive boundary.
2. Read `docs/SITE_ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md`, and
   `docs/MIGRATION.md` as relevant.
3. Keep the change narrow and preserve public URLs and CTA intent.
4. Add or update typed React components; never restore archived generated
   markup or compiled script payloads.
5. Run `npm run check`.

## Commit scope

- Do not combine content, redesign, dependency, and architecture changes unless
  they are inseparable.
- Do not commit `.env.local`, `.next/`, `out/`, logs, or local editor files.
- Explain intentional metadata, redirect, or public-route changes in the pull
  request.

## Definition of done

- The requested behavior is observable at desktop and mobile widths.
- Keyboard access, focus visibility, contrast, and reduced motion were checked.
- Type checking, linting, and the static production build pass.
- Navigation, footer links, canonical URLs, and the sitemap still agree.
