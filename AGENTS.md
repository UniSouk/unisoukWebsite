# AGENTS.md

These instructions apply to the entire UniSouk website repository.

## Product contract

- UniSouk helps Indian sellers list, sell, and grow across connected commerce channels.
- Keep the primary self-serve path (`Start selling`) distinct from service-led demo enquiries (`Book a free demo`).
- Do not describe a channel managed by Account Management as a live software integration unless verified product data says it is one.
- Preserve the approved information architecture and route names documented in `docs/SITE_ARCHITECTURE.md`.
- Preserve the existing UniSouk logo. Do not redraw, recolor, distort, or replace it.

## Engineering constraints

- Use the Next.js App Router. Do not introduce the Pages Router, Astro, or another application framework.
- Prefer React Server Components. Add `"use client"` only at the smallest interactive leaf.
- Keep TypeScript strict. Do not add `any`, disable type checking, or suppress lint rules without a documented, local reason.
- Keep page metadata close to the route and use the Next.js Metadata API.
- Use semantic HTML first. Interactive controls must be keyboard accessible and expose visible focus states.
- Target WCAG 2.2 AA and honor `prefers-reduced-motion`.
- Keep secrets server-only. Only variables intentionally safe for browsers may use the `NEXT_PUBLIC_` prefix.
- Use `next/image` for new raster images when the image is owned by this project and its dimensions are known. Preserve SVG brand/platform marks as files.
- Add dependencies only when platform APIs or the current stack cannot solve the requirement cleanly.
- Do not add speculative abstractions, state libraries, UI kits, or analytics providers.
- Keep public URLs stable. Route or CTA changes require checking navigation, footer links, canonical URLs, and `app/sitemap.ts`.
- Do not permanently delete files or use destructive Git commands. Move superseded material to a clearly named archive and document it.

## Native React boundary

- All active pages, metadata, styling, and interactions must be implemented as native React components in the Next.js App Router.
- Do not introduce Astro source, generated HTML rendering, compiled DOM script payloads, or page-level `dangerouslySetInnerHTML`.
- Historical compatibility files under `archive/astro-migration/` are recoverable records only. Never import, execute, regenerate, or extend them.
- Prefer Server Components and keep `"use client"` at the smallest interactive leaf.

## Design constraints

- Follow `docs/DESIGN_SYSTEM.md`: radical whitespace, direct commerce storytelling, Satoshi headings, Inter body copy, carbon/white/orange palette, modest corners.
- Do not introduce generic SaaS dashboards, glass effects, gradient text, decorative grids, repeated icon-card scaffolding, or stock corporate imagery.
- Prefer full-width rules and whitespace over unnecessary cards.
- Motion must explain a selling workflow, pause when appropriate, and have a reduced-motion equivalent.
- Body copy must remain plainspoken and useful to sellers with varied technical experience.

## Required workflow

1. Read this file and the relevant document under `docs/`.
2. Inspect the existing route/component and trace its behavior before editing.
3. Make the smallest complete change and preserve unrelated work.
4. Run `npm run typecheck` and `npm run lint`.
5. Run `npm run build` for route, metadata, configuration, or generated-asset changes.
6. Inspect the final diff for generated noise, debug output, URL changes, and accessibility regressions.

Report what changed, what was verified, and any checks that could not run.
