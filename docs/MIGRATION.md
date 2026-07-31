# Native Next.js migration

The UniSouk website is implemented with native React components and Next.js
App Router routes.

The former Astro compatibility layer was retired after all public routes were
rebuilt. Historical generated markup, compiled styles, script payloads, and the
importer are retained under `archive/astro-migration/` solely as a recoverable
record. They must not be used as runtime inputs or regenerated.

## Native route rules

- Keep page markup and metadata in the owning App Router route.
- Prefer React Server Components and isolate interactive behavior in the
  smallest practical Client Component.
- Keep route, canonical URL, trailing-slash, sitemap, and CTA contracts stable.
- Add styles through Tailwind utilities or intentional project-owned CSS.
- Do not introduce Astro source, generated HTML rendering, compiled DOM script
  payloads, or `dangerouslySetInnerHTML` page boundaries.
