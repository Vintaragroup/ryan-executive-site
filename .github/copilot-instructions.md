
# Ryan Morrow Executive Monograph — Copilot Instructions

## Project Purpose

This repository implements a premium editorial executive monograph in Next.js.

It is not a conventional marketing site, SaaS product, consulting site, or portfolio template. The approved Figma designs and the local files under `design/source/` define the visual composition and editorial rhythm.

## Technical Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- App Router
- ESLint
- Prettier
- Motion from `motion.dev`, only when explicitly requested
- MDX support
- `next/font`

## Required Directories

- `app`
- `components`
- `content`
- `design`
- `docs`
- `lib`
- `public`
- `styles`
- `types`

## Sources of Truth

Use these sources in this order:

1. **Live Figma frame** — the visual source of truth
2. **FIGMA_INSPECTION.md** — extracted specifications from Live Figma
3. **Local Figma reference TSX** — structural hierarchy and component organization
4. **IMPLEMENTATION.md** — page implementation contract and specifications
5. **Existing production code** — provisional until approved

### Critical Rule

**If implementation conflicts with the approved Figma inspection, the inspection always wins.**

Do not reinterpret incomplete references.

If a Figma frame appears incomplete or information is missing:

- Stop
- Identify what information is missing
- Request the required asset, specification, or inspection
- Do not redesign, substitute, simplify, or remove visual elements
- Wait for the missing information

### Reference Files

The files under `design/source/` are architectural references, not production code.

- Do not import them into the application
- Do not edit, rename, move, or delete them unless explicitly requested
- They define the approved visual composition and structure

Existing production code is provisional.

It exists only as an implementation scaffold.

When production code conflicts with FIGMA_INSPECTION.md or the local Figma reference, the inspection and reference always take precedence.

## Visual Implementation Rules

- Treat the approved design as fixed.
- Do not redesign, simplify, normalize, modernize, or improve the composition.
- Preserve exact hierarchy, scene order, layout, spacing, typography, color, sizing, alignment, image ratios, and visual rhythm.
- Do not replace editorial layouts with generic cards, grids, sections, containers, or marketing patterns.
- Do not infer responsive behavior from generic conventions when desktop, tablet, or mobile references exist.
- Do not estimate values when Figma or a local reference exposes exact values.
- If an exact value is unavailable, report the missing information instead of guessing.
- Placeholder copy and imagery may remain until the editorial phase.
- Do not rewrite copy, titles, metrics, dates, or claims unless explicitly asked.
- Do not add animation until every static page is visually approved.

Never reinterpret incomplete design references.

If a Figma export appears inconsistent, incomplete, or technically invalid:

- stop implementation
- determine whether additional assets or reference data are required
- report the issue
- wait for user direction

Do not substitute, remove, or redesign visual elements.

If the local reference conflicts with the Figma MCP inspection,
the MCP inspection wins.

The React Native export is a convenience artifact,
not the authoritative representation of visual layers.

## First-Pass Translation Rules

During the first implementation pass for a page:

- Translate only the requested page or scene.
- Do not refactor unrelated files.
- Do not extract shared components before visual approval.
- Do not optimize the layout before visual approval.
- Do not introduce abstractions that alter the approved composition.
- Page-specific scene components are allowed when they preserve fidelity.
- Reuse an existing component only when it already matches the approved design exactly.
- Stop after the requested scope is complete.

## Page Workflow

For every page:

1. Read `docs/MASTER_IMPLEMENTATION_PLAN.md`.
2. Read the page-specific `design/source/<page>/IMPLEMENTATION.md`.
3. Read the page-specific `design/source/<page>/FIGMA_INSPECTION.md`.
4. Read the local Figma-generated reference file or files.
5. Inspect the live Figma frame if necessary for additional detail.
6. Implement only the requested route, page, or scene.
7. Run the local development server.
8. Review at 1440px, 768px, and 390px when those breakpoints apply.
9. Produce a numbered list of remaining visual differences instead of declaring success.
10. Stop for user review.
11. Mark a page approved only after the user explicitly approves it.
12. Refactor or extract shared components only after approval.

## Visual QA Rules

**Visual parity must be confirmed by user review.**

Never claim visual parity based only on:

- a successful build
- matching class names
- matching token names
- responsive resizing
- absence of TypeScript errors
- absence of ESLint warnings

Visual parity requires direct comparison between localhost and the approved Figma reference.

When performing visual QA:

- capture or inspect the rendered page at the required viewport sizes (1440px, 768px, 390px)
- compare scene by scene against FIGMA_INSPECTION.md and Live Figma
- identify remaining visual differences
- produce a numbered list of discrepancies
- stop and report the differences

Do not state that a page matches unless the user has reviewed and explicitly approved it.

## Design Tokens and Styling

- Use Tailwind CSS v4 and CSS custom properties.
- Use `@theme` for approved theme tokens where appropriate.
- Reuse existing approved tokens before creating new ones.
- Avoid hard-coded colors, spacing, typography, radii, effects, or breakpoints when approved tokens exist.
- Page-specific exact values are allowed when the approved composition requires them and no reusable token exists.
- Do not create a legacy `tailwind.config.js` unless the existing project requires it.
- Do not silently substitute unavailable fonts.
- Report font licensing or availability issues.

## Accessibility and Semantics

- Use semantic HTML.
- Maintain WCAG AA contrast and keyboard accessibility.
- Preserve visible focus states.
- Use meaningful landmarks, labels, headings, and alternative text.
- Accessibility changes must not redesign the approved visual composition.

## Content and Claims

- Never invent metrics, dates, project outcomes, clients, responsibilities, or quotations.
- Use `[VALIDATION REQUIRED]` when a factual value is unsupported.
- Keep content separate from layout when the approved architecture already supports structured content.
- Do not populate final editorial copy unless explicitly requested.

## Code Quality

After code changes:

- run TypeScript checks
- run ESLint
- run the production build when appropriate
- report any failures honestly
- summarize files changed
- summarize remaining visual or technical discrepancies

Do not modify unrelated files merely to make checks pass.

## Scope Control

- Implement only the current task.
- Do not proceed to the next page, route, scene, animation, or refactor without instruction.
- Do not create speculative components or features.
- Do not remove or overwrite approved work.
- Ask for clarification only when a missing decision prevents correct implementation.

## Editorial Design Principle

This repository is the implementation of an interactive editorial monograph.

Preserve authored asymmetry, silence, pacing, negative space, and scene-specific composition. Do not normalize the design into conventional web patterns.

When uncertain, preserve the reference rather than inventing a solution.
