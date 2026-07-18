# Contact — Implementation Contract

## Source of Truth

The local Figma reference file defines structural hierarchy:

- `Contact-reference.tsx`

The live Figma frame and `FIGMA_INSPECTION.md` define visual truth.

This file is not production code and must not be imported into the application.

## Production Route

- `/contact` — contact and closing

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
- Do not expand this page into a conventional marketing contact form.
- Do not add unnecessary sections or fields.
- Do not rewrite contact copy or messaging.
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
4. Read the local Figma reference TSX (`Contact-reference.tsx`).
5. Inspect Live Figma if required for additional detail.
6. Implement only the requested page or scene.
7. Run the local development server.
8. Review the result at 1440px, 768px, and 390px.
9. Produce a numbered list of remaining visual differences.
10. Stop for user review.

## Visual Review Checklist

- [ ] Navigation
- [ ] Page composition
- [ ] Overall height
- [ ] Horizontal padding
- [ ] Vertical spacing
- [ ] Typography families
- [ ] Font sizes
- [ ] Line heights
- [ ] Letter spacing
- [ ] Text widths and line breaks
- [ ] Colors
- [ ] Call-to-action styling
- [ ] Link styling
- [ ] Form elements (if any)
- [ ] Alignment and layering
- [ ] Desktop behavior (1440px)
- [ ] Tablet behavior (768px)
- [ ] Mobile behavior (390px)
- [ ] Missing elements
- [ ] Placeholder content preserved

## Deferred Work

Do not begin these until the contact page is approved:

- Contact form integration
- Form validation and submission
- Email configuration
- Form styling refinement
- Animation of form interactions
- Motion choreography
- Content rewriting
- Final contact messaging
- Performance optimization
- Analytics tracking

## Approval Notes

Add dated review notes here as the contact page is implemented.

---

## Critical Notes

This page should remain minimal and should not be expanded into a conventional marketing contact page. Preserve the reference composition exactly.

The contact page is intentionally simple and focused. Do not add unnecessary sections, fields, or form elements until visual approval is complete and the page is frozen.

Visual parity must be confirmed via localhost review at 1440px, 768px, and 390px before approval.
