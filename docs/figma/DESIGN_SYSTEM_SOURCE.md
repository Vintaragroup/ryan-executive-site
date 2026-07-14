# Design System Source

**Source Figma File:** [Ryan Morrow Executive Monograph](https://www.figma.com/design/OiXYcVnb7xCbJPTnfJpUlr)

This document captures the foundational design system as defined in Figma. It serves as the single source of truth for all implementation decisions.

---

## 1. Color System (DS_Color_Palette)

**Figma Node:** `161:23`

### Purpose
Define a cohesive color palette informed by architectural materials—carbon, copper, and stone. The system establishes visual hierarchy through intentional contrast while maintaining sophistication and restraint.

### Design Philosophy
> "The monograph palette draws from architectural materials — carbon, copper, and stone. Dark surfaces create gravitas. Paper whites breathe. Copper accents mark moments of significance."

### Color Roles

#### Primary Colors
The backbone of the visual system. Used for surfaces, text, and foundational layouts.

| Role | Name | Hex | RGB | Purpose |
|------|------|-----|-----|---------|
| Dark Background | Near Black | `#0F0F10` | rgb(15, 15, 16) | Deep, dominant background; maximum contrast surface |
| Light Accent | Warm White | `#F5F2ED` | rgb(245, 242, 237) | Warm, readable text on dark; breathing room |
| Light Background | Paper | `#FAF8F5` | rgb(250, 248, 245) | Premium off-white; very light backgrounds and surfaces |

#### Accent Colors
Strategic moments of emphasis. Drawn from warm metallics. Used sparingly for significance.

| Role | Name | Hex | RGB | Purpose |
|------|------|-----|-----|---------|
| Primary Accent | Copper | `#A6825E` | rgb(166, 130, 94) | Primary interactive element; significant emphasis |
| Secondary Accent | Copper Light | `#C8A882` | rgb(200, 168, 130) | Lighter variation; hover states and secondary emphasis |

#### Neutral Colors
Supporting cast. Used for secondary text, borders, dividers, and hierarchical context.

| Role | Name | Hex | RGB | Purpose |
|------|------|-----|-----|---------|
| Deep Gray | Charcoal | `#1A1A1A` | rgb(26, 26, 26) | Near-black alternative; deep interactive states |
| Dark Gray | Dark Gray | `#2A2A2A` | rgb(42, 42, 42) | Secondary surfaces; subdued backgrounds |
| Mid Gray | Mid Gray | `#6B6B6B` | rgb(107, 107, 107) | Secondary text; borders and dividers |
| Light Gray | Light Gray | `#E5E2DA` | rgb(229, 226, 218) | Subtle separation; minimal visual weight |

### Color Hierarchy Rules
- **Maximum contrast** on primary backgrounds (Near Black + Warm White)
- **Copper accents** mark critical interactive moments and editorial significance
- **Neutral grays** provide supporting hierarchy without competing for attention
- **Paper white** reserved for premium, breathing spaces
- **Warm tones** throughout reinforce the architectural/material aesthetic

---

## 2. Typography System (DS_Typography)

**Figma Node:** `161:68`

### Purpose
Establish editorial and informational hierarchy through deliberate typeface selection and scale relationships. Each tier serves a distinct communicative function.

### Design Philosophy
> "Three typefaces form a deliberate hierarchy. Instrument Serif carries editorial weight and emotional gravity. Inter handles information architecture with quiet precision. IBM Plex Mono marks metadata, timestamps, and systemic labels."

### Typeface Roles

| Typeface | Family | Role | Purpose |
|----------|--------|------|---------|
| Instrument Serif | Serif | Display & Editorial | Emotional weight; primary narratives; hero moments |
| Inter | Sans-Serif | Information & Body | Clear hierarchy; readable information architecture; navigation and UI |
| IBM Plex Mono | Monospace | System & Metadata | Technical notation; timestamps; code; system labels |

### Display Tier
Large-scale, attention-commanding typography for hero sections and primary headings.

| Role | Size | Line Height | Use Case |
|------|------|-------------|----------|
| Display Hero | 120px | 110% (132px) | Section openings; major editorial moments |
| Display Title | 72px | 110% (79.2px) | Page titles; significant divisions |
| Display Subtitle | 48px | 120% (57.6px) | Subsection headers; featured text |

**Font:** Instrument Serif (all Display scales)

### Body Tier
Reading-focused typography optimized for sustained engagement and narrative clarity.

| Role | Size | Line Height | Use Case |
|------|------|-------------|----------|
| Body Large | 20px | 170% (34px) | Lead paragraphs; featured passages; emphasis |
| Body Regular | 17px | 170% (28.9px) | Primary reading text; long-form narrative; standard body copy |
| Body Small | 15px | 160% (24px) | Supporting text; captions; secondary information |

**Font:** Inter (all Body scales)

### Metadata Tier
Minimal, precise typography for systemic information and attribution.

| Role | Size | Line Height | Letter Spacing | Use Case |
|------|------|-------------|-----------------|----------|
| Meta Label | 11px | 140% (15.4px) | +2px | Section labels; category markers |
| Meta Caption | 12px | 150% (18px) | — | Timestamps; attribution; technical notation |
| Meta Small | 10px | 140% (14px) | — | Minimal notation; alternative information |

**Font:** IBM Plex Mono (all Metadata scales)

### Typography Rules
- **Display** always uses Instrument Serif for editorial weight
- **Body text** always uses Inter for clarity and information architecture
- **Metadata** always uses IBM Plex Mono for systemic precision
- **Line heights** maintain readability across all scales
- **Hierarchy** achieved through size + typeface selection, not weight alone

---

## 3. Spacing System (DS_Spacing)

**Figma Node:** `161:83`

### Purpose
Provide consistent spatial rhythm based on an 8px base unit. Scale through architectural intervals—intimate, structural, and monumental—reflecting the spatial principles of built environments.

### Design Philosophy
> "8px base unit. The scale progresses through architectural intervals — intimate (4–16), structural (24–64), monumental (96–256). Silence between scenes uses the monumental range."

### Spacing Scale

| Token | Size | Category | Use Case |
|-------|------|----------|----------|
| `2xs` | 4px | Intimate | Minimal gaps; fine-tuning; micro-spacing |
| `xs` | 8px | Intimate | Close relationships; tight grouping; base unit |
| `sm` | 16px | Intimate | Component padding; small gaps |
| `md` | 24px | Structural | Standard padding; moderate separation |
| `lg` | 32px | Structural | Component separation; visual breathing |
| `xl` | 48px | Structural | Section internal spacing; moderate distances |
| `2xl` | 64px | Structural | Larger section spacing; distinct separation |
| `3xl` | 96px | Monumental | Major section breaks; significant visual pause |
| `4xl` | 128px | Monumental | Major scene transitions; strong rhythm |
| `5xl` | 192px | Monumental | Substantial breathing room; strategic silence |
| `6xl` | 256px | Monumental | Maximal silence; major compositional breaks |

### Spacing Categories

#### Intimate (4–16px)
Internal component spacing. Relationships between closely related elements. Used for:
- Padding within individual components
- Gaps between tightly grouped elements
- Minor visual separations

#### Structural (24–64px)
Module-to-module relationships. Breathing room between distinct content blocks. Used for:
- Component and container padding
- Space between related sections
- Visual hierarchy within scenes

#### Monumental (96–256px)
Scene-to-scene transitions. Strategic silence between major content areas. Used for:
- Major section breaks
- Page-level vertical rhythm
- Compositional breathing space

### Spacing Rules
- Base unit is always **8px**
- All spacing values are **multiples of 4px** (for fine-tuning)
- **Intimate spaces** create component cohesion
- **Structural spaces** organize visual hierarchy
- **Monumental spaces** define compositional breathing and pacing
- Never introduce arbitrary spacing; always reference the scale

---

## 4. Surface Hierarchy

**Derived from:** Color System + Spacing System

### Visual Depth Through Surfaces

The design system establishes depth primarily through **color contrast** and **spatial rhythm** rather than shadow depth cues.

#### Primary Surface (Background)
- **Color:** Near Black (`#0F0F10`)
- **Purpose:** Dominant container; maximum gravitas
- **Contrast Partner:** Warm White (`#F5F2ED`)

#### Secondary Surface
- **Color:** Dark Gray (`#2A2A2A`) or Charcoal (`#1A1A1A`)
- **Purpose:** Nested containers; modal backgrounds; secondary zones
- **Spacing:** Separated from primary by monumental spacing

#### Tertiary Surface (Breathing Space)
- **Color:** Paper (`#FAF8F5`)
- **Purpose:** Light backgrounds; content zones; premium breathing room
- **Spacing:** Used intentionally for visual rest

#### Accent Surface
- **Color:** Copper (`#A6825E`) or Copper Light (`#C8A882`)
- **Purpose:** Interactive elements; significance markers; call-to-action
- **Spacing:** Never overused; surrounded by structural spacing for emphasis

---

## 5. Component Conventions

**Based on:** Color System + Typography + Spacing

### Naming Structure
All components follow semantic naming conventions:
- **Category_Variant** (e.g., `Button_Primary`, `Card_Default`)
- **Prefixes indicate function:** `Button_`, `Link_`, `Input_`, `Card_`, `Section_`
- **Variants describe state/role:** `Primary`, `Secondary`, `Hover`, `Disabled`

### Composition Principles
1. **Color roles** determine component palette (primary, accent, neutral)
2. **Typography tier** determines text content (display, body, metadata)
3. **Spacing scale** determines internal and external rhythm
4. **No hard-coded values** — all measurements reference established tokens

### Interactive States
- **Default:** Uses base color + standard spacing
- **Hover:** Copper accent or tonal lightening + maintained spacing
- **Active:** Copper accent + visual confirmation
- **Disabled:** Mid Gray text + reduced opacity

---

## 6. Responsive Principles

**Derived from:** Spacing + Typography + Surface Hierarchy

### Scale Management
- **Display typography** maintains relative hierarchy across viewport sizes
- **Body text** respects minimum and maximum line lengths (35–65 characters at body regular)
- **Spacing scale** adapts but maintains proportional relationships (never linear scaling)

### Viewport Strategy
- **Desktop (1440px):** Full-width surfaces; monumental spacing emphasis
- **Tablet (768–1024px):** Adjusted structural spacing; condensed monumental breathing
- **Mobile (<768px):** Intimate to structural spacing; typography scales down from body regular

### Key Responsive Rules
1. **Never skip spacing tiers** — maintain rhythm across all sizes
2. **Typography hierarchy** remains consistent across breakpoints
3. **Color contrast** remains WCAG AA minimum at all sizes
4. **Surfaces** reflow but maintain depth hierarchy

---

## 7. Visual Principles Summary

### Gravitas Through Restraint
- Minimal color palette (3 primaries + 2 accents + 4 neutrals)
- Generous spacing creates purposefulness
- Typography hierarchy eliminates visual noise

### Materiality
- Architectural inspiration informs color selection
- Copper accents reference fine craft and value
- Dark surfaces evoke permanence and substance

### Rhythm and Pacing
- Monumental spacing creates intentional silence
- Structural spacing organizes visual flow
- Intimate spacing creates cohesion

### Accessibility
- Contrast ratios exceed WCAG AA on all primary combinations
- Semantic HTML reinforces visual hierarchy
- No color-only differentiation in interactive states

---

## 8. Implementation Notes

### When Building Components
1. **Audit existing tokens** before creating new ones
2. **Reference exact hex values** from the color palette
3. **Use typography tiers** as semantic layer, not just visual styling
4. **Apply spacing scale** without approximation
5. **Test contrast ratios** for WCAG AA compliance
6. **Maintain component documentation** for consistency

### Documentation Nodes in Figma
All design system definitions live in the Figma file as reference layers:
- `DS_Color_Palette` — Color system source of truth
- `DS_Typography` — Typography system and scale definitions
- `DS_Spacing` — Spacing scale and architectural intervals
- Production cover and component examples for visual reference

### Future Token Implementation
When converting to design tokens (CSS custom properties), reference:
- Color palette hex codes directly
- Spacing scale multiples of 8px base unit
- Typography tier definitions as CSS custom font properties
- Do not simplify or estimate any values

---

**Last Updated:** 2026-07-14  
**Source:** Figma Design System Reference Nodes  
**Status:** Foundation Complete — Ready for Component Development
