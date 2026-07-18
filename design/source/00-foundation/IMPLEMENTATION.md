# Foundation Design System — Implementation Contract

## Source of Truth

The following Figma-generated reference files are the architectural source of truth for the design system:

- `cover-reference.tsx`
- `DS_color_palette.tsx`
- `DS_spacing.tsx`
- `DS_Typographyy.tsx`
- `Type_Specimen_Dark.tsx`
- `Type_Specimen_Light.tsx`
- `Variables_Tokens_Reference.tsx`

These files are not production code and must not be imported into the application.

## Production Route

N/A — shared design foundation

This folder establishes the visual rules for the entire site:

- Color tokens and palette specifications
- Spacing scale and grid system
- Typography families, sizes, weights, and line heights
- Global variables and custom properties
- Light and dark mode specimens
- Visual hierarchy guidelines

## Status

- [ ] Not started
- [ ] Initial translation complete
- [ ] Foundation tokens defined in CSS
- [ ] Typography system established
- [ ] Color system established
- [ ] Spacing system established
- [ ] Light specimen complete
- [ ] Dark specimen complete
- [ ] All pages validated against foundation
- [ ] User approved
- [ ] Frozen

## First-Pass Rules

- Treat the local Figma reference files as the architectural source of truth.
- Preserve exact color values, typography specifications, spacing measurements, and token hierarchies.
- Do not redesign the foundation.
- Do not simplify or consolidate tokens before visual approval.
- Do not modify the light and dark specimens until all components reference the foundation correctly.
- Extract token definitions from the reference files into CSS custom properties and Tailwind configuration.
- Ensure every page in the site respects the foundation specifications.

## Foundation Coverage

Verify that the following design system elements are correctly established:

- [ ] Color palette (all hues, tints, shades)
- [ ] Spacing scale (all intervals)
- [ ] Typography scale (all sizes, weights, line heights, letter spacing)
- [ ] Light mode specimen
- [ ] Dark mode specimen
- [ ] Global variables defined
- [ ] CSS custom properties set
- [ ] Tailwind theme configured

## Implementation Workflow

1. Read `docs/MASTER_IMPLEMENTATION_PLAN.md`.
2. Read this `IMPLEMENTATION.md`.
3. Read `FIGMA_INSPECTION.md` (foundation specimens).
4. Read the local Figma reference TSX files.
5. Inspect Live Figma if required for additional detail.
6. Extract exact values from all reference files.
7. Define CSS custom properties in the global stylesheet.
8. Configure Tailwind CSS theme with extracted tokens.
9. Create light and dark mode specimen pages.
10. Verify all application pages conform to foundation.
11. Produce a checklist of remaining tokens or specifications.
12. Stop for user review.

## Deferred Work

Do not begin these until the foundation is approved:

- Component library creation
- Component extraction from individual pages
- Animation system definition
- Accessibility annotations beyond WCAG AA baseline
- Performance optimization specific to tokens
- CMS or design token distribution

## Approval Notes

Add dated review notes here as the foundation is established.

---

## Notes

The design foundation establishes visual consistency across all routes. Each subsequent page (`/`, `/work`, `/system`, `/journey`, `/field-notes`, `/thinking`, `/contact`) must be reviewed for conformance with this foundation before those pages are frozen.

The foundation is approved separately and must remain stable while individual pages are being implemented.
