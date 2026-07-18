# Home — Implementation Contract

## Source of Truth

The local Figma reference file defines structural hierarchy:

- `Home-reference.tsx`

The live Figma frame and `FIGMA_INSPECTION.md` define visual truth.

This file is not production code and must not be imported into the application.

## Production Route

- `/` (homepage)

## Status

- [ ] Not started
- [ ] Initial translation complete
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
- Do not rewrite placeholder copy.
- Do not replace placeholder imagery unless explicitly requested.
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
4. Read the local Figma reference TSX (`Home-reference.tsx`).
5. Inspect Live Figma if required for additional detail.
6. Implement only the requested page or scene.
7. Run the local development server.
8. Review the result at 1440px, 768px, and 390px.
9. Produce a numbered list of remaining visual differences.
10. Stop for user review.

## Visual Review Checklist

- [ ] Navigation
- [ ] Scene order
- [ ] Overall page height and rhythm
- [ ] Section heights
- [ ] Horizontal padding
- [ ] Vertical spacing
- [ ] Typography families
- [ ] Font sizes
- [ ] Line heights
- [ ] Letter spacing
- [ ] Text widths and line breaks
- [ ] Colors
- [ ] Borders and rules
- [ ] Image aspect ratios
- [ ] Image crops
- [ ] Alignment
- [ ] Layering and stacking
- [ ] Desktop behavior (1440px)
- [ ] Tablet behavior (768px)
- [ ] Mobile behavior (390px)
- [ ] Missing elements
- [ ] Placeholder content preserved

## Deferred Work

Do not begin these until the homepage is approved:

- Shared component extraction
- Navigation component library
- Hero component patterns
- Content rewriting
- Final photography
- Final case study imagery
- Animation
- Motion choreography
- Performance optimization
- SEO refinement
- Analytics
- CMS integration

## Approval Notes

Add dated review notes here as the homepage is implemented.

### 2026-07-15 — Scene 01 Approved

- Desktop reviewed at 1440 × 1080
- Tablet reviewed at 768 × 800
- Mobile reviewed at 390 × 720
- Image fill, overlays, typography, spacing, and responsive composition approved
- Desktop placeholder content intentionally preserved from live Figma
- Scene 01 is frozen until the editorial-content phase

---

## Critical Notes

**The homepage is the visual foundation for the entire site.**

Until this page is approved and visually verified at all three breakpoints, subsequent routes (`/work`, `/system`, `/journey`, `/field-notes`, `/thinking`, `/contact`) should not be considered visually reliable.

The homepage must be frozen before component extraction begins.

Visual parity must be confirmed via localhost review at 1440px, 768px, and 390px before approval.

Content normalization must preserve the Figma text-layer structure.

When highlighted words, separate spans, manual line breaks, or breakpoint-specific text compositions exist, they must remain separate implementation elements. Replacing placeholder content must not collapse styled text layers into one plain string.
