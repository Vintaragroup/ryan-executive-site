# Ryan Morrow Executive Monograph
## Master Implementation Plan

**Project Version:** 1.0  
**Status:** Active Development  
**Project Type:** Premium Editorial Executive Website  
**Framework:** Next.js 15 + React 19 + TypeScript + Tailwind CSS v4

---

# Vision

The Ryan Morrow Executive Monograph is not a conventional marketing website.

It is an immersive editorial publication that communicates executive leadership through storytelling, documentary photography, operational thinking, and cinematic presentation.

The objective is not to build a portfolio.

The objective is to build an experience.

Every page should feel like a chapter in a premium printed monograph translated into an interactive medium.

---

# Core Principles

## Principle 01

The Figma design is the product.

It is not inspiration.

It is not a guideline.

It is the architectural drawing.

---

## Principle 02

Visual fidelity always takes priority over engineering elegance.

The browser must match Figma before code is optimized.

---

## Principle 03

Refactoring is prohibited until visual approval.

No reusable components are extracted until the page has been approved.

---

## Principle 04

Placeholder content is acceptable.

Incorrect layouts are not.

---

## Principle 05

Every page earns approval individually.

Nothing is considered complete until reviewed side-by-side with the approved design.

---

# Source of Truth

```
design/
    source/
```

Every folder contains:

- Figma architectural reference
- IMPLEMENTATION.md

These files define the approved visual experience.

Production code should never alter these references.

---

# Repository Structure

```
app/

components/

content/

design/
    source/

docs/

lib/

public/

styles/

types/
```

---

# Development Workflow

Every page follows exactly the same lifecycle.

```
Live Figma

↓

FIGMA_INSPECTION.md

↓

Local Figma Reference (.tsx)

↓

IMPLEMENTATION.md

↓

Next.js Translation

↓

Localhost Review

↓

User Approval

↓

Freeze

↓

Component Extraction

↓

Animation

↓

Optimization
```

No page skips this workflow.

## Workflow Clarification

**Live Figma** is the visual source of truth.

FIGMA_INSPECTION.md documents extracted specifications from Live Figma.

The local reference (.tsx) defines structural hierarchy and component organization.

IMPLEMENTATION.md specifies responsive requirements and visual review criteria.

Production code is provisional until approved.

If implementation notes, inspections, older QA notes, or previous engineering comments conflict with the normalized production Figma, the normalized production Figma wins.

## Global Navigation Specification

- Items: `Work`, `System`, `Journey`, `Field Notes`, `Thinking`, `Contact`
- Brand routes to `/`
- No explicit `Home` nav item
- Desktop: inline navigation
- Tablet: inline navigation
- Mobile: hamburger navigation

---

# Project Dashboard

## Foundation

Status

✅ Complete

Includes

- Design System
- Tokens
- Typography
- Variables
- Implementation Contracts
- Project Architecture

---

## Homepage

Route

```
/
```

Reference

```
design/source/01-home
```

Status

- [ ] Not Started
- [ ] Translating
- [ ] Local QA
- [ ] User Review
- [ ] Approved
- [ ] Frozen
- [ ] Refactored

---

## Work

Route

```
/work
```

Reference

```
design/source/02-work
```

Status

- [ ] Not Started
- [ ] Translating
- [ ] Local QA
- [ ] User Review
- [ ] Approved
- [ ] Frozen
- [ ] Refactored

---

## Project Template

Route

```
/work/[slug]
```

Status

- [ ] Not Started
- [ ] Approved
- [ ] Frozen

Projects

- FIFA World Cup
- Golden State Warriors
- Universal Studios
- Special Olympics
- AMP Energy
- Nike
- DataVault
- Vintara Group
- ROC Race / Wipeout Run

---

## System

Route

```
/system
```

Status

- [ ] Not Started
- [ ] Translating
- [ ] QA
- [ ] Approved

---

## Journey

Route

```
/journey
```

Status

- [ ] Not Started
- [ ] Translating
- [ ] QA
- [ ] Approved

---

## Field Notes

Route

```
/field-notes
```

Status

- [ ] Not Started
- [ ] Translating
- [ ] QA
- [ ] Approved

---

## Thinking

Route

```
/thinking
```

Status

- [ ] Not Started
- [ ] Translating
- [ ] QA
- [ ] Approved

---

## Contact

Route

```
/contact
```

Status

- [ ] Not Started
- [ ] Translating
- [ ] QA
- [ ] Approved

---

# Order of Implementation

## Phase 1

Foundation

Completed

---

## Phase 2

Homepage

The Homepage establishes

- typography
- spacing
- navigation
- visual rhythm
- surfaces
- imagery
- page composition

No additional pages should begin until Homepage is approved.

---

## Phase 3

Contact

Smallest page.

Used to validate

- footer
- navigation
- forms
- spacing

---

## Phase 4

Thinking

Validates

- editorial layouts
- typography
- reading experience

---

## Phase 5

Journey

Validates

- timelines
- diagrams
- relationship graphics

---

## Phase 6

System

Validates

- operational diagrams
- blueprint layouts
- editorial grids

---

## Phase 7

Work

Project index only.

No case studies.

---

## Phase 8

Case Study Template

Build once.

Never duplicate.

---

## Phase 9

Populate Projects

One project at a time.

---

# Visual QA Requirements

Every page must be reviewed at

Desktop

```
1440px
```

Tablet

```
768px
```

Mobile

```
390px
```

Comparison checklist

- Scene order
- Overall page rhythm
- Typography
- Line height
- Letter spacing
- Padding
- Margins
- Containers
- Alignment
- Colors
- Borders
- Image crops
- Navigation
- Responsive behavior
- Missing elements
- Active page highlighting
- Logo returns home
- Browser Back/Forward
- Route refresh
- Keyboard navigation
- Mobile menu behavior

---

# Definition of Done

A page is considered complete only when

- Visual parity has been achieved
- Localhost matches the approved design
- User approves the implementation
- TypeScript passes
- ESLint passes
- Build passes
- Route functions correctly
- Accessibility remains intact

---

# Git Strategy

Commit after every meaningful implementation.

Examples

```
Initialize homepage translation

Implement homepage scene 01

Implement homepage scene 02

Homepage visual QA

Homepage approved

Implement work page

Work page approved
```

When a page is approved

Create a tag

```
git tag homepage-approved

git tag work-approved

git tag journey-approved
```

---

# Deferred Until Static Approval

The following work must not begin until every static page has been approved.

- Component extraction
- Motion
- Animation
- Scroll choreography
- Copy refinement
- Photography replacement
- Asset optimization
- SEO
- Analytics
- Performance optimization
- CMS integration

---

# Daily Development Workflow

Every session begins by opening

```
docs/MASTER_IMPLEMENTATION_PLAN.md
```

Review

- Current page
- Current status
- Outstanding issues

Then

Open

```
design/source/<page>/
```

Read

- IMPLEMENTATION.md
- Reference TSX

Translate

Run localhost

Perform visual QA

Request approval

Commit

Update this document

Repeat

---

# Success Criteria

The project is complete when:

- Every route has achieved visual approval.
- Every page matches the approved Figma composition.
- Shared components have been extracted without altering the approved layouts.
- Placeholder content has been replaced with finalized editorial copy.
- Placeholder imagery has been replaced with production assets.
- Motion has been implemented without changing the static visual composition.
- Lighthouse performance, accessibility, and best-practice targets are met.
- The site is production-ready for deployment on Vercel.

---

# Guiding Principle

> "Translate the design faithfully first. Optimize the engineering second. Perfect the experience always."