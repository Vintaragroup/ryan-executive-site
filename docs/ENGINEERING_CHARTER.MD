# Engineering Charter

## Mission

Translate the approved editorial publication into production-quality Next.js.

The implementation is an act of faithful translation, not reinterpretation.

## Priority Order

1. Live Figma Frame
2. FIGMA_INSPECTION.md (extracted from Live Figma)
3. Local Figma Reference TSX (structural hierarchy)
4. IMPLEMENTATION.md (page specification)
5. Existing Production Code (provisional)

If those sources conflict, the normalized production Figma wins.

## Navigation Specification

- Global navigation items: `Work`, `System`, `Journey`, `Field Notes`, `Thinking`, `Contact`
- Brand link routes to `/`
- Do not add an explicit `Home` navigation item
- Desktop: inline navigation
- Tablet: inline navigation
- Mobile: hamburger navigation

## Engineering Rules

- Preserve visual intent.
- Preserve editorial pacing.
- Preserve asymmetry.
- Preserve spacing.
- Preserve typography.
- Never redesign.
- Never simplify.
- Never normalize.
- Never infer missing imagery.
- Never declare visual parity automatically.
- Report remaining differences honestly.
- Implement only the requested scope.
- Never optimize before approval.
- Never extract components before approval.
- Remove obsolete implementation notes when they conflict with the normalized production Figma.

## Definition of Success

The browser should visually match the approved Figma publication.

Engineering quality is important.

Visual fidelity is mandatory.

Responsive breakpoints are layout variants, not content variants.

Approved editorial copy is shared across breakpoints, but each breakpoint’s Figma node remains authoritative for typography, line composition, spacing, and emphasis.