# UniSouk Design System

## Direction

Confident commerce clarity: radical whitespace, oversized typography, direct
seller language, and tangible connected-commerce stories. The site must feel
ambitious, empowering, and simple—not like a generic SaaS dashboard.

## Foundations

| Token | Value | Use |
| --- | --- | --- |
| Carbon black | `oklch(18% 0 0)` | Primary ink and dark sections |
| Signal orange | `oklch(75.5% 0.19 65)` | Primary actions and accents |
| Accessible orange ink | `oklch(55% 0.16 58)` | Light-surface text and focus |
| Neutral grey | `oklch(82% 0 0)` | Supporting structure |
| Cool mist | `oklch(96.5% 0.003 255)` | Quiet surfaces |
| Pure white | `oklch(100% 0 0)` | Main surfaces and dark-section text |

- Satoshi Bold is reserved for the strongest hero and journey moments.
- Satoshi Medium is the standard heading face.
- Inter is the body and control face.
- Display tracking must not be tighter than `-0.035em`.
- Body copy should be at least `1rem`, use about `1.55` line height, and remain
  below roughly 70 characters per line.

## Layout and shape

- Build mobile-first with content-driven breakpoints.
- Maximum content width is `90rem`.
- Use the 4px spacing family: 4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 96, 128.
- Buttons use modest 8px corners.
- Use whitespace and full-width rules before introducing containers or cards.
- Do not use glass effects, gradient text, decorative grids, or repeated generic
  icon-card layouts.

## Motion and access

- Motion must explain a commerce flow, status change, or relationship.
- Stop autoplay when a section is off-screen or the user is interacting.
- Provide an equivalent static state under `prefers-reduced-motion: reduce`.
- Target WCAG 2.2 AA, full keyboard access, visible focus, semantic landmarks,
  descriptive labels, and comfortable touch targets.

## Brand and content

- Preserve the original UniSouk logo and its colors.
- Lead with seller ambition, then explain removed operational friction.
- Present AI agents as approachable assistants with tangible outcomes.
- Keep self-serve signup and managed-service enquiry CTAs distinct.
- Do not claim unverified integrations, outcomes, customer counts, or partner
  relationships.
