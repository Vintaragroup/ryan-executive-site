# Work — Implementation Contract

## Source of Truth

The local Figma reference files define structural hierarchy:

- `Work-reference.tsx` — project index page
- `Project-template-reference.tsx` — shared project detail template

The live Figma frames and `FIGMA_INSPECTION.md` define visual truth.

These files are not production code and must not be imported into the application.

## Production Route

- `/work` — project index listing
- `/work/[slug]` — individual project detail page (shared template)

## Route Clarification

- `/work` is a static index page that lists all projects.
- `/work/[slug]` is a dynamic route using the shared project template via `generateStaticParams()`.
- The template must be implemented once using `[slug]` parameters, not duplicated for each project.

## Status

- [ ] Not started
- [ ] Work index complete
- [ ] Project template complete
- [ ] Desktop visual review complete
- [ ] Tablet visual review complete
- [ ] Mobile visual review complete
- [ ] User approved
- [ ] Frozen
- [ ] Refactored after approval

## First-Pass Rules

- Treat the local Figma reference files as the architectural source of truth.
- Preserve exact hierarchy, scene order, composition, spacing, typography, colors, sizing, and alignment.
- Do not redesign.
- Do not simplify.
- Do not optimize before visual approval.
- Do not extract shared components during the first translation pass.
- Do not rewrite project copy or descriptions.
- Do not replace project imagery unless explicitly requested.
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
4. Read the local Figma reference TSX files.
5. Inspect Live Figma if required for additional detail.
6. Implement only the requested page or scene.
7. Run the local development server.
8. Review `/work` and `/work/[slug]` at 1440px, 768px, and 390px.
9. Produce a numbered list of remaining visual differences.
10. Stop for user review.

## Visual Review Checklist

### Work Index (`/work`)
- [ ] Navigation
- [ ] Section order
- [ ] Project list layout
- [ ] Project card styling
- [ ] Project descriptions
- [ ] Typography
- [ ] Spacing
- [ ] Colors
- [ ] Desktop behavior (1440px)
- [ ] Tablet behavior (768px)
- [ ] Mobile behavior (390px)
- [ ] Missing elements

### Project Template (`/work/[slug]`)
- [ ] Navigation
- [ ] Hero image
- [ ] Project metadata
- [ ] Section hierarchy
- [ ] Typography
- [ ] Spacing
- [ ] Colors
- [ ] Images and crops
- [ ] Call-to-action elements
- [ ] Desktop behavior (1440px)
- [ ] Tablet behavior (768px)
- [ ] Mobile behavior (390px)
- [ ] Missing elements

## Deferred Work

Do not begin these until the work routes are approved:

- Shared project card component extraction
- Content rewriting
- Project descriptions
- Final project photography
- Animation
- Motion choreography
- CMS integration
- Dynamic project data loading
- Performance optimization

## Approval Notes

Add dated review notes here as the work routes are implemented.

---

## Critical Notes

The project template must be implemented once and used for all projects via `generateStaticParams()`. Do not duplicate the template for each project slug.

Both the index and the template must be visually verified at all three breakpoints before approval.
