# Thinking — Implementation Contract

## Source of Truth

The local Figma reference file defines structural hierarchy:

- `Thinking-reference.tsx`

The live Figma frames and `FIGMA_INSPECTION.md` define visual truth.

This file is not production code and must not be imported into the application.

## Production Route

- `/thinking` — editorial index
- `/thinking/[slug]` — individual article (shared template)

## Route Clarification

- `/thinking` is a static index page that lists all editorial pieces.
- `/thinking/[slug]` is a dynamic route using the shared article template via `generateStaticParams()`.
- The template must be implemented once using `[slug]` parameters, not duplicated for each article.

## Status

- [ ] Not started
- [ ] Thinking index complete
- [ ] Article template complete
- [ ] Desktop visual review complete
- [ ] Tablet visual review complete
- [ ] Mobile visual review complete
- [ ] User approved
- [ ] Frozen
- [ ] Refactored after approval

## First-Pass Rules

- Treat the local Figma reference file as the architectural source of truth.
- Preserve exact hierarchy, scene order, composition, spacing, typography, colors, sizing, and alignment.
- Do not redesign.
- Do not simplify.
- Do not optimize before visual approval.
- Do not extract shared components during the first translation pass.
- Do not normalize reading layouts or marginalia into generic article cards.
- Do not rewrite editorial copy or article content.
- Do not replace article imagery unless explicitly requested.
- Do not add animation.
- Do not declare visual parity without user review.
- Browser output must be reviewed on localhost before approval.

## Responsive Requirements

Review at:

- Desktop: 1440px
- Tablet: 768px
- Mobile: 390px

The responsive implementation must follow the reference source and must not be inferred from generic breakpoint conventions.

## Implementation Workflow

1. Read `docs/MASTER_IMPLEMENTATION_PLAN.md`.
2. Read this `IMPLEMENTATION.md`.
3. Read `FIGMA_INSPECTION.md`.
4. Read the local Figma reference TSX (`Thinking-reference.tsx`).
5. Inspect Live Figma if required for additional detail.
6. Implement only the requested page or scene.
7. Run the local development server.
8. Review `/thinking` and `/thinking/[slug]` at 1440px, 768px, and 390px.
9. Produce a numbered list of remaining visual differences.
10. Stop for user review.

## Visual Review Checklist

### Thinking Index (`/thinking`)
- [ ] Navigation
- [ ] Section order
- [ ] Article list layout
- [ ] Article card styling
- [ ] Article excerpts
- [ ] Typography
- [ ] Spacing
- [ ] Colors
- [ ] Desktop behavior (1440px)
- [ ] Tablet behavior (768px)
- [ ] Mobile behavior (390px)
- [ ] Missing elements

### Article Template (`/thinking/[slug]`)
- [ ] Navigation
- [ ] Article headline
- [ ] Article metadata (date, author, etc.)
- [ ] Reading layout
- [ ] Marginalia (side notes, callouts)
- [ ] Typography families and sizes
- [ ] Line heights and leading
- [ ] Letter spacing
- [ ] Paragraph spacing
- [ ] Colors
- [ ] Images and illustrations
- [ ] Desktop behavior (1440px)
- [ ] Tablet behavior (768px)
- [ ] Mobile behavior (390px)
- [ ] Missing elements

## Deferred Work

Do not begin these until the thinking routes are approved:

- Shared article card component extraction
- Reading layout refinement
- Content rewriting
- Final article photography
- Marginalia interaction or expansion
- Animation of article entry
- Motion choreography
- CMS integration
- Dynamic article data loading
- Performance optimization
- Search and filtering

## Approval Notes

Add dated review notes here as the thinking routes are implemented.

---

## Critical Notes

The article template must be implemented once and used for all articles via `generateStaticParams()`. Do not duplicate the template for each article slug.

Reading layouts and marginalia must preserve the reference composition exactly. Do not normalize article templates into generic blog post patterns until visual approval is complete and the page is frozen.

Both the index and the template must be visually verified at all three breakpoints before approval.
