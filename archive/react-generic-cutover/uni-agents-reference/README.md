# Superseded Uni Agents reference components

These files implemented an earlier `/solutions/uni-agents/` route as a loose
Tailwind-utility reinterpretation of the Uni Agents product concept. They were
retired and replaced with a faithful React port of the standalone
`unisouk-agents-landing` static reference (`index.html` + `styles.css` +
`ecosystem.css` + `script.js`), which preserves the exact section structure,
copy, and interaction behavior of that reference using plain project-owned
CSS instead of Tailwind utilities.

The active implementation lives at:

- `app/solutions/uni-agents/page.tsx`
- `src/components/marketing/uni-agents-landing.tsx` (and sibling
  `uni-agents-landing-*.tsx` files)
- `src/components/marketing/uni-agents-landing.css`
- `src/constants/uni-agents.ts` (rewritten to match the static reference's
  exact copy and agent data)

These archived files are a recoverable record only. Do not import, execute,
or extend them.
