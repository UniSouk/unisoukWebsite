# UniSouk Website

The UniSouk marketing website, built with native React components and the
Next.js App Router.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Architecture

Every public page is owned by an explicit App Router route. Page markup and
metadata are native React; interactive forms, filters, dialogs, and showcases
are isolated Client Components.

Native App Router components use Tailwind CSS v4 through the official PostCSS
plugin. `app/native-foundations.css` is the Tailwind entry point,
`app/native-components.css` contains project-owned component styles processed
through that entry point, and `app/globals.css` contains fonts, design tokens,
and global foundations.

The historical Astro compatibility files are retained under
`archive/astro-migration/` as a recoverable record. They are not application
inputs and must not be imported, executed, or regenerated.
