# Field Notes — Implementation Contract

## Source of Truth

The local Figma reference file defines structural hierarchy:

- `Field-notes-reference.tsx`

The live Figma frame and `FIGMA_INSPECTION.md` define visual truth.

This file is not production code and must not be imported into the application.

## Production Route

- `/field-notes` — documentary observations and artifacts

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
- Do not normalize artifact layouts or scans into generic card patterns.
- Do not rewrite field notes or documentary descriptions.
- Do not replace scan imagery unless explicitly requested.
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
4. Read the local Figma reference TSX (`Field-notes-reference.tsx`).
5. Inspect Live Figma if required for additional detail.
6. Implement only the requested page or scene.
7. Run the local development server.
8. Review the result at 1440px, 768px, and 390px.
9. Produce a numbered list of remaining visual differences.
10. Stop for user review.

## Visual Review Checklist

- [ ] Navigation
- [ ] Section order
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
- [ ] Artifact layouts
- [ ] Scan compositions
- [ ] Image aspect ratios
- [ ] Image crops
- [ ] Alignment and layering
- [ ] Documentary relationships preserved
- [ ] Desktop behavior (1440px)
- [ ] Tablet behavior (768px)
- [ ] Mobile behavior (390px)
- [ ] Missing elements
- [ ] Placeholder content preserved

## Deferred Work

Do not begin these until the field notes page is approved:

- Shared artifact card components
- Documentary data extraction
- Scan image optimization
- Final scan imagery
- Annotation systems
- Animation of artifact discovery
- Motion choreography
- Content rewriting
- Performance optimization
- CMS integration for artifacts

## Approval Notes

Add dated review notes here as the field notes page is implemented.

---

## Critical Notes

Artifact layouts, scans, and documentary compositions should not be normalized into generic cards during the first pass. Each composition element should preserve its specific visual intent from the reference file.

Maintain the documentary aesthetic and artifact relationships exactly as specified in the reference file.

Visual parity must be confirmed via localhost review at 1440px, 768px, and 390px before approval.
