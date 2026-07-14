# Typography Implementation

**Date:** 2026-07-14  
**Source:** Figma Type Specimen Nodes (164:442, 164:478)  
**Status:** ✓ Complete

## Typography System Overview

Three typefaces create a deliberate hierarchy for editorial, informational, and systemic communication:

| Typeface | Family | Role | Purpose |
|----------|--------|------|---------|
| **Instrument Serif** | Serif | Display & Headings | Editorial gravity; emotional weight; narrative moments |
| **Inter** | Sans-Serif | Body & UI | Information architecture; quiet precision; navigation |
| **IBM Plex Mono** | Monospace | Metadata | System labels; timestamps; technical notation |

## Font Availability

### Available via next/font/google ✓

1. **Inter** — Very well supported
   - Loaded with `Inter()` from next/font/google
   - Variable weights: 100–900
   - Status: ✓ Production ready

2. **IBM Plex Mono** — Well supported
   - Loaded with `IBM_Plex_Mono()` from next/font/google
   - Weights available: 300, 400, 500, 600, 700
   - Status: ✓ Production ready

### Custom Font File Required ⚠️

3. **Instrument Serif** — Not available via Google Fonts
   - Must be loaded via local font files or premium service
   - Current implementation: `localFont()` with fallback to Georgia
   - Location: `/public/fonts/` (files must be added manually)
   - Files needed:
     - `instrument-serif-regular.woff2`
     - `instrument-serif-italic.woff2`
   - **Fallback:** Georgia (serif) if Instrument Serif unavailable
   - **Status:** ⚠️ Requires font files to be added

### Implementation Notes

```typescript
// app/layout.tsx
import localFont from 'next/font/local';

const instrumentSerif = localFont({
  src: [
    { path: '../fonts/instrument-serif-regular.woff2', weight: '400' },
    { path: '../fonts/instrument-serif-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});
```

## Typography Tiers Implemented

### Display Tier — Instrument Serif

Maximum impact, minimum frequency. Used for hero moments and major narrative openings.

| Component | Size | Weight | Tracking | Leading | Use Case |
|-----------|------|--------|----------|---------|----------|
| `DisplayHero` | 120px | 400 | -2px | 110% | Section openings, page hero |
| `DisplayTitle` | 72px | 400 | -1.5px | 110% | Page titles, divisions |
| `DisplaySubtitle` | 48px | 400 | -1px | 120% | Subsection headers |
| `DisplayItalic` | 48px | 400 italic | -0.5px | 130% | Quoted text, emphasis |

**CSS Classes:**
```css
.type-display-hero { /* 120px */ }
.type-display-title { /* 72px */ }
.type-display-subtitle { /* 48px */ }
.type-display-italic { /* 48px italic */ }
```

**React Components:**
```tsx
import { DisplayHero, DisplayTitle, DisplaySubtitle, DisplayItalic } from '@/components/typography';

<DisplayHero>The Monograph</DisplayHero>
<DisplayTitle>Building Extraordinary Experiences</DisplayTitle>
<DisplaySubtitle>Where precision meets ambition</DisplaySubtitle>
<DisplayItalic>The system works when nobody notices the system.</DisplayItalic>
```

### Heading Tier — Instrument Serif

Section and subsection headers. Maintains editorial weight at smaller scales.

| Component | Size | Weight | Tracking | Leading | Use Case |
|-----------|------|--------|----------|---------|----------|
| `HeadingH1` | 40px | 400 | -0.5px | 120% | Section headers |
| `HeadingH2` | 32px | 400 | -0.3px | 130% | Subsection headers |

**CSS Classes:**
```css
.type-heading-h1 { /* 40px */ }
.type-heading-h2 { /* 32px */ }
```

**React Components:**
```tsx
import { HeadingH1, HeadingH2 } from '@/components/typography';

<HeadingH1>Sixteen Cities. Three Nations. One System.</HeadingH1>
<HeadingH2>The evidence lives in the operational record</HeadingH2>
```

### Body Tier — Inter

Reading-focused typography optimized for narrative clarity and sustained engagement.

| Component | Size | Weight | Leading | Use Case |
|-----------|------|--------|---------|----------|
| `BodyLarge` | 20px | 400 | 170% | Lead paragraphs, featured text |
| `BodyRegular` | 17px | 400 | 170% | Primary reading text, standard paragraphs |
| `BodySmall` | 15px | 400 | 160% | Supporting text, captions |

**CSS Classes:**
```css
.type-body-large { /* 20px, 170% */ }
.type-body-regular { /* 17px, 170% */ }
.type-body-small { /* 15px, 160% */ }
```

**React Components:**
```tsx
import { BodyLarge, BodyRegular, BodySmall } from '@/components/typography';

<BodyLarge>Every extraordinary experience has an invisible architecture.</BodyLarge>
<BodyRegular>The best operational systems disappear entirely.</BodyRegular>
<BodySmall>Supporting context and secondary information.</BodySmall>
```

**Line Length Guidance:**
- Optimal reading: 35–65 characters per line
- Desktop (BodyRegular at 17px): ~85px width (roughly 45–50 chars)
- Mobile: ~300–320px width

### UI Tier — Inter

Navigation and interactive element typography. Uppercase with generous tracking.

| Component | Size | Weight | Tracking | Use Case |
|-----------|------|--------|----------|----------|
| `NavLink` | 11px | 500 Medium | 1.5px | Navigation items, menu labels |
| `ButtonLabel` | 12px | 500 Medium | 2px | Button text, CTA labels |

**CSS Classes:**
```css
.type-nav-link { /* 11px, Medium, 1.5px tracking */ }
.type-button-primary { /* 12px, Medium, 2px tracking */ }
```

**React Components:**
```tsx
import { NavLink, ButtonLabel } from '@/components/typography';

<NavLink>THE WORK</NavLink>
<NavLink>THE SYSTEM</NavLink>
<ButtonLabel>BEGIN THE CONVERSATION</ButtonLabel>
```

### Metadata Tier — IBM Plex Mono

Systemic information layer. Timestamps, attribution, section markers, and technical notation.

| Component | Size | Weight | Tracking | Leading | Use Case |
|-----------|------|--------|----------|---------|----------|
| `MetaLabel` | 11px | 500 Medium | 3px | 140% | Section markers, category labels |
| `MetaCaption` | 12px | 400 Regular | 0.5px | 150% | Timestamps, attribution |
| `MetaSmall` | 10px | 300 Light | 1.5px | 140% | Minimal notation, data |

**CSS Classes:**
```css
.type-meta-label { /* 11px, Medium, 3px tracking */ }
.type-meta-caption { /* 12px, Regular, 0.5px tracking */ }
.type-meta-small { /* 10px, Light, 1.5px tracking */ }
```

**React Components:**
```tsx
import { MetaLabel, MetaCaption, MetaSmall, Timestamp, Citation } from '@/components/typography';

<MetaLabel>CHAPTER 02 — THE WORK</MetaLabel>
<MetaCaption>2022 · DOHA, QATAR · FIFA WORLD CUP</MetaCaption>
<MetaSmall>MIA → JFK → DOH // BUILD WEEK 47</MetaSmall>

<Timestamp>July 14, 2026</Timestamp>
<Citation>Source: Executive Monograph</Citation>
```

## Responsive Typography

### Scaling Strategy

Typography scales responsively using `clamp()` on display and heading tiers to maintain visual hierarchy across viewports while preventing extreme sizes on small screens.

**Desktop (1440px and above):**
- Full scale typography as defined
- Fixed sizes, maximum impact

**Tablet (768px–1440px):**
- Display Hero: clamp(60px, 8vw, 120px)
- Display Title: clamp(44px, 6vw, 72px)
- Display Subtitle: clamp(32px, 5vw, 48px)
- Heading H1: clamp(32px, 4vw, 40px)
- Heading H2: clamp(24px, 3.5vw, 32px)
- Body scales down by ~10%

**Mobile (< 390px):**
- Display Hero: clamp(48px, 10vw, 120px)
- Display Title: clamp(36px, 8vw, 72px)
- Display Subtitle: clamp(28px, 6vw, 48px)
- Heading H1: clamp(28px, 5vw, 40px)
- Heading H2: clamp(22px, 4vw, 32px)
- Body scales down by ~15%
- UI text reduced to 10px Nav Link, 11px Button

### Line Length on Mobile

Body text automatically maintains readability:
- Mobile width: ~300–320px available
- BodyRegular at 17px: ~40–45 characters per line (comfortable)
- BodySmall at 15px: ~45–50 characters per line
- No additional restrictions needed

## Usage Patterns

### Semantic HTML

Always pair typography components with semantic HTML:

```tsx
// ✓ Correct
<DisplayHero as="h1">Main Page Title</DisplayHero>
<BodyRegular>Narrative content</BodyRegular>
<MetaCaption>Attribution information</MetaCaption>

// Avoid
<DisplayHero>Main Page Title</DisplayHero> {/* without semantic tag */}
```

### Dark Surface Usage

All typography roles work on both light and dark surfaces:

```tsx
// Light surface (default)
<div className="bg-surface-light">
  <DisplayTitle className="text-text-primary">Light Title</DisplayTitle>
</div>

// Dark surface
<div className="bg-surface-dark">
  <DisplayTitle className="text-text-inverse">Dark Title</DisplayTitle>
</div>
```

### Combining Typography

For complex layouts, combine components naturally:

```tsx
// Example: Chapter header section
<MetaLabel>CHAPTER 02 — THE WORK</MetaLabel>
<HeadingH1>Sixteen Cities. Three Nations. One System.</HeadingH1>
<BodyLarge>Every extraordinary experience has an invisible architecture.</BodyLarge>
<BodyRegular>The best operational systems disappear entirely...</BodyRegular>
```

## Font Files Required

To use Instrument Serif with the exact approved design, add font files to `/public/fonts/`:

```
public/
  fonts/
    instrument-serif-regular.woff2
    instrument-serif-italic.woff2
```

**Current Status:**
- ✓ CSS classes defined and responsive
- ✓ React components created
- ⚠️ Instrument Serif fallback to Georgia until font files added
- ✓ Inter and IBM Plex Mono fully loaded

**Adding Fonts:**
1. Obtain Instrument Serif font files (must be WOFF2 format)
2. Place in `public/fonts/` directory
3. No code changes needed — fonts will load automatically

## Tailwind Integration

Typography utilities work with Tailwind CSS:

```html
<!-- Using typography classes -->
<h1 class="type-display-hero text-text-primary">
  Hero Text
</h1>

<!-- Combining with Tailwind spacing -->
<div class="mb-space-lg">
  <DisplayTitle>Spaced Title</DisplayTitle>
</div>

<!-- Responsive utilities -->
<p class="type-body-regular text-text-secondary">
  Body text with semantic color
</p>
```

## Browser Support

- ✓ Responsive typography (clamp): Safari 19+, Chrome 79+, Firefox 75+
- ✓ CSS Grid and Flexbox: All modern browsers
- ✓ Font format (WOFF2): All modern browsers (fallback system in place)
- ✓ CSS custom properties: All modern browsers

## Next Steps

1. Add Instrument Serif font files to `/public/fonts/`
2. Test typography rendering on various devices
3. Verify line lengths and readability on mobile
4. Create component stories for typography showcase
5. Document real-world usage patterns

---

**Build Status:** ✓ Compiles successfully  
**Font Status:** ✓ Inter and IBM Plex Mono loaded, ⚠️ Instrument Serif fallback active  
**Components:** ✓ All 16 components created and exported
