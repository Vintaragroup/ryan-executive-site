# Developer Handoff Notes — Ryan Morrow Executive Monograph

**Source:** Figma Design File, Node 161:183  
**Last Updated:** 2026-07-14  
**Context:** Design system and implementation guidance for developers

---

## Tech Stack Recommendation

| Component | Recommendation | Notes |
|-----------|---|---|
| **Framework** | Next.js 14+ (App Router) with TypeScript | Modern, server-side rendering, optimal for performance |
| **Styling** | Tailwind CSS with custom theme tokens | Matches Figma variables via CSS custom properties |
| **Animation** | Framer Motion + GSAP | Scroll-triggered reveals + timeline sequences |
| **Scroll Behavior** | Lenis | Smooth scroll without scroll-jacking |
| **Images** | Next/Image | Priority loading for hero, lazy for below-fold |
| **Fonts** | next/font/google | Instrument Serif, Inter, IBM Plex Mono |
| **CMS (Optional)** | Sanity.io or Contentful | For case study content management |
| **Hosting** | Vercel | Optimal for Next.js deployments |

**Font Details:**
- **Display/Headings:** Instrument Serif
- **Body/UI:** Inter
- **Metadata/Captions:** IBM Plex Mono

---

## Responsive Breakpoints

| Device | Width | Layout | Specifications |
|--------|-------|--------|---|
| **Desktop** | 1440px | Full-width design | Canonical design breakpoint; max-content 1200px centered |
| **Tablet** | 768px | Single-column | Adjusted type scale; reduced spacing |
| **Mobile** | 390px | Fully stacked | Reduced spacing scale; touch-friendly targets |
| **Fluid Scaling** | — | All sizes | Use `clamp()` for typography between breakpoints |

**Container Widths:**
- **Max width:** 1200px (content constraint)
- **Content width:** 800px (default content area)
- **Narrow/reading width:** 680px (optimal line length)

---

## Typography Implementation

| Role | Font | Size | Line Height | Notes |
|------|------|------|---|---|
| **Display Hero** | Instrument Serif | `clamp(3rem, 8vw, 7.5rem)` | 1.2 | Largest headlines |
| **Display Title** | Instrument Serif | `clamp(2.5rem, 5vw, 4.5rem)` | 1.2 | Section headings |
| **Body** | Inter Regular | 17px | 1.7 | Main content; max-width 680px for readability |
| **Meta/Labels** | IBM Plex Mono Medium | 11px | 1.4 | Metadata; letter-spacing: 0.15em |

**Typography Rules:**
- **Uppercase text:** Use `text-transform: uppercase` (not hardcoded caps in HTML)
- **Font loading:** `font-display: swap` with FOUT strategy for optimal perceived performance
- **Responsive sizes:** Use `clamp()` for fluid scaling between desktop and mobile

---

## Color Tokens (CSS Custom Properties)

### Palette Colors

```css
--color-near-black:    #0F0F10  /* Primary dark background */
--color-warm-white:    #F5F2ED  /* Warm off-white */
--color-paper:         #FAF8F5  /* Page background light */
--color-copper:        #A6825E  /* Accent color */
--color-copper-light:  #C8A882  /* Light accent variant */
--color-charcoal:      #1A1A1A  /* Dark text */
--color-dark-gray:     #2A2A2A  /* Dark secondary */
--color-mid-gray:      #6B6B6B  /* Mid tone */
--color-light-gray:    #E5E2DA  /* Light secondary */
```

### Text Color Tokens

```css
--text-primary:        var(--color-charcoal)     /* Main body text */
--text-secondary:      #4A4A4A                  /* Secondary text */
--text-tertiary:       #8A8A8A                  /* Tertiary/disabled text */
--text-inverse:        var(--color-warm-white)  /* Text on dark backgrounds */
--text-copper:         var(--color-copper)      /* Accent text */
```

**Implementation Note:**
All color tokens should already be defined in your CSS. Do not hard-code hex values.

---

## Spacing Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `--space-2xs` | 4px | Micro spacing, tight gaps |
| `--space-xs` | 8px | Small gaps |
| `--space-sm` | 16px | Component padding |
| `--space-md` | 24px | Standard gaps |
| `--space-lg` | 32px | Medium sections |
| `--space-xl` | 48px | Large sections |
| `--space-2xl` | 64px | Very large sections |
| `--space-3xl` | 96px | Horizontal content padding (desktop) |
| `--space-4xl` | 128px | Major layout sections |
| `--space-5xl` | 192px | Between major scenes |
| `--space-6xl` | 256px | Between major scenes (alternate) |

**Spacing Rules:**
- **Scene gaps:** Use `var(--space-5xl)` to `var(--space-6xl)` between major viewport sections
- **Content padding:** Use `var(--space-3xl)` for horizontal padding on desktop
- Scale down proportionally for tablet/mobile

---

## Image Handling

### Hero Images
- **Minimum dimensions:** 1440×800px
- **Format:** WebP with AVIF fallback
- **Loading:** Priority loading for above-fold images
- **Load animation:** Fade-in transition 600ms on load complete

### Gallery Images
- **Aspect ratios:** 2:3 or 3:2 (flexible per design)
- **Loading:** Lazy-loaded for below-fold galleries
- **Format:** WebP with JPEG fallback

### Image Alt Text
- All images must include descriptive alt text
- Pull alt text from `[Image_Description]` placeholders in Figma
- Use semantic descriptions for accessibility

### Grain Texture Overlay
- **Style:** CSS noise filter overlay
- **Opacity:** 0.5% (subtle)
- **Position:** Fixed background on full-viewport sections
- **Implementation:** CSS filter or background image with low opacity

---

## Accessibility Requirements

| Requirement | Specification | Notes |
|---|---|---|
| **WCAG Compliance** | 2.1 AA minimum | Legal and ethical standard |
| **Color Contrast** | Copper (#A6825E) on dark backgrounds | Passes 4.5:1 ratio minimum |
| **Motion** | Respects `prefers-reduced-motion: reduce` | See [Motion Specifications](MOTION_SPEC.md) |
| **Keyboard Navigation** | Visible focus indicators | Use copper outline for focus states |
| **Skip Links** | Skip-to-content link on all pages | Keyboard navigation accessibility |
| **Semantic HTML** | Proper heading hierarchy (h1–h4) | Never skip heading levels |
| **Timeline/Journey** | Ordered list semantics (`<ol>`) | Proper semantic structure |
| **Forms** | Properly labeled inputs | Associated `<label>` elements |
| **Images** | Descriptive alt text on all images | Never use alt="" for decorative images |

See [Motion Specifications](MOTION_SPEC.md) for detailed motion accessibility strategy including reduced-motion behavior.

---

## Performance Targets

All measurements target Lighthouse audits on simulated slow 4G + mid-range device.

| Metric | Target | Priority |
|--------|--------|----------|
| **Lighthouse Performance** | 90+ | Critical |
| **First Contentful Paint (FCP)** | < 1.5s | Critical |
| **Largest Contentful Paint (LCP)** | < 2.5s | Critical |
| **Cumulative Layout Shift (CLS)** | < 0.1 | Critical |
| **Total Blocking Time (TBT)** | < 200ms | High |

### Performance Optimization Strategies

**Font Optimization:**
- Subset fonts to Latin characters only
- Use `font-display: swap` for non-blocking font loads
- Preload critical fonts in `<head>`

**CSS Optimization:**
- Inline critical CSS for above-fold content
- Defer non-critical CSS
- Minimize specificity; use Tailwind utilities

**Image Optimization:**
- Next/Image component with `priority` prop for hero images
- WebP + AVIF formats with fallbacks
- Appropriate image dimensions for viewport sizes
- Lazy load below-fold images

**JavaScript Optimization:**
- Code split at route boundaries
- Defer animation libraries (Framer Motion, GSAP)
- Use Intersection Observer for scroll triggers
- Avoid layout thrashing in event handlers

---

## Page Routing (Next.js App Router)

| Route | Purpose | Content |
|-------|---------|---------|
| **`/`** | Homepage | The Monograph (introduction) |
| **`/work`** | Work Index | Case study overview and index |
| **`/work/[slug]`** | Individual Case Study | FIFA, GSW, Universal, etc. |
| **`/system`** | The System | Operational methodology |
| **`/journey`** | The Journey | Career timeline and evolution |
| **`/field-notes`** | Field Notes | Operational artifacts and insights |
| **`/thinking`** | Thinking | Philosophy and perspective |
| **`/contact`** | The Next Conversation | Contact/engagement CTA |

**Routing Notes:**
- Use dynamic routes `[slug]` for individual case studies
- Ensure consistent layout wrapping with `ChapterShell` component
- See [Layout Template System](../../components/layouts/ChapterShell.tsx) for page structure

---

## Layer Naming Convention

All layers in Figma and components in code should follow consistent naming:

| Category | Pattern | Example | Notes |
|----------|---------|---------|-------|
| **Scenes** | `SCENE_[N]_[NAME]` | `SCENE_1_OPENING` | Top-level viewport sections |
| **Content** | `[Type]_[Descriptor]` | `Case_Study_Featured` | Major content blocks |
| **Text Layers** | `[Role]_Text` or `[Type]_[Label]` | `Meta_Label` or `Body_Text` | All text elements |
| **Images** | `[Context]_Image_[NN]` | `Gallery_Image_01` | Numbered sequences |
| **Components** | `[Category]/[Name]` | `Navigation/Global_Nav` | Component library structure |
| **General** | PascalCase with underscores | `Hero_Image_Primary` | Never use spaces or hyphens |

**Naming Rules:**
- Use PascalCase for multi-word names
- Separate words with underscores (not hyphens)
- Never use spaces in layer names
- Number image sequences with zero-padding (01, 02, etc.)
- Component paths use `/` hierarchy

---

## Design System References

**Related Documentation:**
- [Motion Specifications](MOTION_SPEC.md) — Animation timing, easing, triggers, and accessibility
- [Motion Tokens](../../lib/motion-tokens.ts) — Reusable motion duration and easing constants
- [Layout Template System](../../components/layouts/) — PageContainer, SectionContainer, ChapterShell primitives
- [Color Tokens](../../styles/tokens.css) — CSS custom properties definition
- [Component Index](../../components/index.ts) — All exported components by category

---

## Developer Implementation Workflow

1. **Component Creation**
   - Follow naming conventions (PascalCase, no spaces)
   - Export from functional area index file
   - Add to centralized `components/index.ts`
   - Document props and usage

2. **Styling**
   - Use CSS custom properties (no hard-coded colors, spacing)
   - Leverage Tailwind for responsive utilities
   - Apply `clamp()` for fluid typography
   - Reference color tokens via `var(--color-*)`

3. **Animations**
   - Reference motion tokens from `lib/motion-tokens.ts`
   - Implement with Framer Motion or GSAP
   - Always respect `prefers-reduced-motion`
   - Test on reduced motion devices

4. **Images**
   - Use Next/Image component
   - Set `priority` for above-fold images
   - Provide descriptive alt text
   - Optimize formats (WebP + AVIF)

5. **Performance**
   - Run Lighthouse audits regularly
   - Monitor Core Web Vitals
   - Profile with DevTools
   - Test on simulated slow 4G

6. **Accessibility**
   - Validate WCAG 2.1 AA compliance
   - Test keyboard navigation
   - Check color contrast ratios
   - Screen reader testing

---

## TypeScript Configuration

The project uses strict TypeScript mode:
- All components must be properly typed
- Avoid `any` type; use specific types or generics
- Export type definitions for component props
- See `tsconfig.json` for compiler settings

---

## Build and Deploy

**Development:**
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint checks
```

**Deployment:**
- Primary hosting: Vercel (git-connected CI/CD)
- Automatic deployments on main branch
- Preview deployments for pull requests

---

## Quick Reference: Common Tasks

### Adding a New Case Study
1. Create route: `/work/[slug]`
2. Wrap with ChapterShell layout
3. Reference motion presets from `lib/motion-tokens.ts`
4. Add to work index page
5. Follow SCENE_N naming for sections

### Adding Typography
1. Define responsive size with `clamp()`
2. Reference font via next/font/google
3. Use typography components from `components/typography/`
4. Set `max-width` for body text (680px)

### Implementing Animation
1. Reference motion tokens: durations, easing, stagger
2. Use Framer Motion or GSAP with preset values
3. Wrap with `prefers-reduced-motion` media query
4. Test on both motion and reduced-motion modes

### Optimizing Images
1. Use Next/Image with responsive sizes
2. Set `priority` for hero images (FCP/LCP targets)
3. Provide WebP + AVIF with JPEG fallback
4. Include descriptive alt text

---

## Component Responsive Behaviors

### Navigation Components

**Navigation/Global_Nav**
- **Desktop:** Horizontal links in header
- **Tablet:** Horizontal links in header
- **Mobile:** Hamburger menu with full-screen overlay
- **Behavior:** Persistent fixed position across all pages, z-50
- **Implementation:** Next.js `<Link>` with `usePathname()` for active state, Framer Motion for mobile menu overlay

**Navigation/Footer**
- **Desktop:** Horizontal space-between layout with links and copyright
- **Tablet/Mobile:** Stacked, center-aligned
- **Behavior:** Always at bottom, static (not sticky)
- **Implementation:** Semantic `<footer>` element, auto-generate year from `Date()`

### Content Components

**Editorial/Chapter_Opening**
- **Desktop:** 72px title, full-viewport height
- **Tablet:** 56px title, full-viewport height
- **Mobile:** 40px title, full-viewport height
- **Behavior:** Always full-screen, centered layout
- **Implementation:** `min-h-screen flex items-center justify-center`

**Editorial/Pull_Quote**
- **Desktop:** Max-width 800px, centered
- **Tablet:** Max-width 600px, centered
- **Mobile:** Full-width with 24px padding
- **Behavior:** Static text with optional attribution
- **Implementation:** `text-wrap: balance` for optimal line breaking

**Editorial/Silence_Scene**
- **Desktop:** 60vh height, full-width
- **Mobile:** 40vh height, full-width
- **Behavior:** Pure black viewport spacer, scroll through
- **Implementation:** `min-h-[60vh] bg-near-black`, `aria-hidden`

### Data Components

**Data/Metric_Card**
- **Desktop:** 4-up row layout
- **Tablet:** 2×2 grid
- **Mobile:** 2-up or stacked
- **Behavior:** Displays KPI with counter animation on scroll
- **Implementation:** `grid-cols-2 md:grid-cols-4`, Framer Motion `useInView` + `useMotionValue`

**Data/Timeline_Node**
- **Desktop:** Horizontal 3-up or 4-up
- **Tablet:** 2-up grid
- **Mobile:** Stacked full-width
- **Behavior:** Part of ordered list, sequential animation
- **Implementation:** Semantic `<ol>` structure, `<li>` per node

**Data/Metadata_Block**
- **All breakpoints:** No responsive change, always small text
- **Variants:** Vertical (default), horizontal inline
- **Implementation:** Semantic `<dl><dt><dd>` definition list markup

### Editorial Components

**Editorial/Case_Study_Card**
- **Desktop:** Side-by-side or grid layout
- **Tablet:** 2-up grid
- **Mobile:** Stacked full-width
- **Behavior:** Clickable card, image scales on hover
- **Implementation:** Next.js `<Link>` wrapping `<article>`, `group-hover:scale-[1.02]`

### Media Components

**Media/Image_Placeholder**
- **Desktop:** Full-width, maintains aspect ratio (16:9 hero, 3:2 gallery, 4:5 portrait)
- **Tablet:** Full-width, maintains aspect ratio
- **Mobile:** Full-width, maintains aspect ratio
- **Behavior:** Lazy-loaded below-fold, priority for hero
- **Implementation:** Next/Image with `sizes` prop, WebP/AVIF with fallback

**Media/Gallery_Image**
- **Desktop:** Multi-column grid
- **Tablet:** 2-up grid
- **Mobile:** Full-width stacked
- **Behavior:** Image with caption, optional lightbox
- **Implementation:** `<figure><Image /><figcaption>`, grid with `gap-6`

### Visual Elements

**Labels/Section_Label**
- **All breakpoints:** Fixed small text with copper accent line
- **Behavior:** Decorative, no responsive change
- **Implementation:** Flex row with 24px copper line + IBM Plex Mono

**Buttons/CTA_Dark** and **Buttons/CTA_Light**
- **Desktop/Tablet:** Auto-width
- **Mobile:** Full-width
- **Behavior:** Clickable CTA with hover effects
- **Implementation:** Polymorphic component (`<a>` or `<button>`), shared base with variant prop

**Dividers/Copper_Line**
- **All breakpoints:** Fixed width (120px, 200px, or full), centered
- **Behavior:** Decorative accent element
- **Implementation:** `w-[120px] h-px bg-copper mx-auto`, `aria-hidden`

---

## Component Asset Requirements

### Image Assets

| Component | Format | Dimensions | Purpose | Loading |
|-----------|--------|------------|---------|---------|
| **Hero Images** | WebP + AVIF / JPEG fallback | 1440×800px minimum | Hero section background/featured image | Priority load, fade-in 600ms |
| **Gallery Images** | WebP + AVIF / JPEG fallback | 3:2 or 2:3 aspect ratio | Evidence/portfolio grid | Lazy-loaded |
| **Portrait Images** | WebP + AVIF / JPEG fallback | 4:5 aspect ratio | Profile/testimonial photos | Lazy-loaded |
| **Chapter Backgrounds** | WebP + AVIF / JPEG fallback | Full-viewport (1440×900+) | Chapter opening scenes | Priority for viewport |

### Typography Assets

| Font | Usage | Fallback | Loading |
|------|-------|----------|---------|
| **Instrument Serif** | Display Hero, Display Title, Metric values | Georgia, serif | font-display: swap |
| **Inter** | Body text, UI labels, metadata values | -apple-system, sans-serif | font-display: swap |
| **IBM Plex Mono** | Section labels, metadata labels, timestamps | Courier New, monospace | font-display: swap |

**Font Optimization:**
- Subset to Latin characters only
- Preload critical fonts in `<head>`
- Use `font-display: swap` for non-blocking loads
- Defer non-critical font weights

### CSS Custom Properties (No Hard-Coded Values)

All components must use established design tokens:
- **Colors:** `--color-*`, `--text-*`
- **Spacing:** `--space-*`
- **Fonts:** next/font/google imports

---

## Component Accessibility Requirements

### Navigation Components

**Navigation/Global_Nav**
- `<nav>` landmark
- `aria-current="page"` on active link
- Visible focus indicators (copper outline)
- Skip-to-content link
- Keyboard-navigable menu (hamburger on mobile)
- Semantic `<a>` or Next.js `<Link>`

**Navigation/Footer**
- `<footer>` landmark with `role="contentinfo"`
- External links: `target="_blank" rel="noopener noreferrer"`
- Proper link text (no "click here")
- Skip-to-top link optional

### Content Components

**Editorial/Chapter_Opening**
- `<h1>` for chapter title (not aria-label)
- Chapter number as content or aria-label prefix
- Proper heading hierarchy maintained

**Editorial/Pull_Quote**
- `<blockquote>` semantic element
- `<cite>` for attribution if present
- Full text included (not aria-hidden)
- Quote-to-attribution connection clear to screen readers

**Editorial/Silence_Scene**
- `aria-hidden="true" role="presentation"`
- No content (pure spacer)
- Proper skip-link allows navigation around

### Data Components

**Data/Metric_Card**
- `aria-label` combining value and label (e.g., "500 Millions Users")
- Large numbers: `tabular-nums` font-variant for alignment
- Counter animations: Final values readable instantly on reduced-motion

**Data/Timeline_Node**
- Semantic `<ol>` for ordered timeline
- Each node is `<li>` element
- `<time datetime="YYYY">` for year values
- Current/active state: aria-current="true" or class marker
- Proper color contrast (text on backgrounds)

**Data/Metadata_Block**
- Semantic `<dl><dt><dd>` definition list markup
- `<dt>` for labels, `<dd>` for values
- Proper text hierarchy

### Editorial Components

**Editorial/Case_Study_Card**
- `<article>` wrapper
- Heading (`<h2>` or `<h3>`) for project name
- Image alt text: descriptive of the project
- Link relationship clear (entire card is clickable via `<a>` or Next.js `<Link>`)
- Metadata readable (year, category, etc.)

### Media Components

**Media/Image_Placeholder**
- **Every image requires descriptive alt text**
- Alt text should describe image content, not "image of..."
- Decorative images (backgrounds): `alt=""` with `aria-hidden="true"`
- Functional images: meaningful alt describing purpose
- Example: `alt="FIFA tournament stadium with thousands of spectators"` (not "FIFA stadium image")

**Media/Gallery_Image**
- `<figure><figcaption>` semantic structure
- Image alt text must be descriptive
- Caption should complement (not duplicate) alt text
- Optional lightbox: focus management, keyboard escape handling

### Color Components

**Buttons/CTA_Dark** and **Buttons/CTA_Light**
- Button or link semantics (not div)
- Visible focus indicator (copper 2px outline with offset)
- Hover state: sufficient color contrast (4.5:1 minimum)
- Disabled state: `opacity-40` with aria-disabled="true"
- Keyboard activatable: Enter on `<a>`, Enter/Space on `<button>`

**Dividers/Copper_Line**
- `aria-hidden="true" role="separator"`
- Decorative only, no semantic meaning
- Not required for navigation flow

**Labels/Section_Label**
- `aria-hidden="true"` (decorative)
- Real heading hierarchy (`<h2>`, `<h3>`) carries section semantics
- Should not be the only indicator of section boundaries

### Reduced Motion Strategy

**All components with animation must:**
- Respect `prefers-reduced-motion: reduce` media query
- Provide instant fallbacks (no animation duration)
- Use Framer Motion's `useReducedMotion()` hook or CSS `@media (prefers-reduced-motion: reduce)`
- Counter animations: show final value instantly
- Fade animations: instant opacity change
- Transform animations: apply final state immediately

See [Motion Specifications](MOTION_SPEC.md) for detailed animation behavior and reduced-motion implementation.

---

## Implementation Risks & Mitigation

### High-Risk Items

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Image loading performance** | LCP > 2.5s | Use Next/Image with priority prop for heroes, WebP/AVIF, lazy-load gallery |
| **Font loading blocking render** | FCP > 1.5s | Use `font-display: swap`, preload critical fonts, subset to Latin |
| **Parallax on mobile** | CLS shift, poor performance | Use CSS `will-change` sparingly, GPU-accelerate with `transform`, disable parallax on mobile |
| **Counter animations on low-end devices** | TBT > 200ms | Use Framer Motion's `useMotionValue`, debounce Intersection Observer, test on throttled devices |
| **Semantic HTML violations** | WCAG accessibility failures | Audit with Lighthouse, use eslint-plugin-jsx-a11y, screen reader testing |
| **Color contrast on copper** | WCAG AA failures | Always test 4.5:1 ratio (copper #A6825E on dark backgrounds) |
| **Animation performance** | Janky animations, high CPU | Profile with DevTools, use `transform`/`opacity` only, avoid layout animations |
| **Menu overlay on mobile** | Keyboard trap, focus loss | Manage focus with Framer Motion, trap within modal, allow Escape key close |

### Medium-Risk Items

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Responsive grid breakpoints** | Layout shifts on resize | Test thoroughly on all breakpoints, use container queries if supported |
| **Link underline opacity transitions** | Navigation jumps | Use `border-b` instead of `text-decoration`, transition `border-color` |
| **Case study card hover states** | Inconsistent interaction | Test on touch devices, provide hover state indication (e.g., scale, border) |
| **Gallery lightbox focus management** | Keyboard navigation breaks | Use Framer Motion's `AnimatePresence`, trap focus in modal, restore focus on close |

### Low-Risk Items

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Decorative dividers missing aria-hidden** | Minor accessibility lint warning | Mark all decorative elements with `aria-hidden="true"` |
| **Missing image alt text** | Screen reader gaps | Audit all images, provide meaningful descriptions, avoid "image of..." |
| **Heading hierarchy gaps** | Screen reader navigation issues | Never skip heading levels (h1→h2→h4 is bad) |

---

## Related Component Documentation

See [Component Documentation Node 169:10](https://www.figma.com/design/OiXYcVnb7xCbJPTnfJpUlr?node-id=169:10) in Figma for:
- Detailed component variants and states
- Interaction patterns and hover behaviors
- Animation timing and triggers
- CSS class references and Tailwind utilities
- Motion implementation hints (Framer Motion, GSAP patterns)

Components documented:
- Navigation/Global_Nav
- Navigation/Footer
- Labels/Section_Label
- Buttons/CTA_Dark, CTA_Light
- Editorial/Pull_Quote, Chapter_Opening, Silence_Scene, Case_Study_Card
- Data/Metric_Card, Timeline_Node, Metadata_Block
- Media/Image_Placeholder, Gallery_Image
- Dividers/Copper_Line

---

---

## Page Implementation Guide

All pages follow a consistent architecture with ChapterShell layout and content sections. Use IntersectionObserver for scroll-triggered animations on each SCENE_ frame.

### HOMEPAGE (/) — rm-the-monograph

**Purpose:** Landing experience — monograph opening. Documentary-style vertical scroll through 9 scenes establishing Ryan Morrow's identity, work, and philosophy.

**Component Hierarchy:**
```
Global_Nav → Scene_1_Opening 
→ Scene_2_Statement (word-by-word reveal) 
→ Scene_3_Silence (60-40vh viewport spacer) 
→ Scene_4_Names (client names with stagger reveal) 
→ Scene_5_Chapters (4 case study cards) 
→ Scene_6_OS (operating system philosophy) 
→ Scene_7_Journey (timeline teaser) 
→ Scene_8_Philosophy (key principles) 
→ Scene_9_Close (Footer)
```

**Responsive Behavior:**
- **Desktop:** 1440px full-width, 3 breakpoints designed
- **Tablet (768px):** Adjusted type scale, reduced spacing
- **Mobile (390px):** Fluid scaling via `clamp()`, full-width content
- **Key:** Long scroll page (11,493px desktop) — consider route-based code splitting if bundle grows

**Image Requirements:**
- 1 hero image (1440×800px minimum, priority load)
- 3+ gallery images (various aspect ratios, lazy-loaded below fold)
- Project preview thumbnails per case study card
- All with WebP + AVIF + JPEG fallbacks

**Content Requirements:**
- Hero statement (1 sentence, max 180 characters)
- Operational stats (5 numbers with labels)
- 8 client names (for stagger animation)
- Chapter preview copy (per case study section)
- Footer copyright/links

**Animation Specifications:**
- IntersectionObserver on each SCENE_N frame for scroll triggers
- Word-by-word reveal on Scene 2 statement (100ms stagger)
- Counter animation on metrics (Scene 5 KPIs)
- Stagger reveal on client names (Scene 4, 80ms between)
- Sequential card reveal (Scene 5, 120ms stagger)
- All animations respect `prefers-reduced-motion`

**SEO & Metadata:**
```
<title>Ryan Morrow — Executive Production & Operations</title>
<meta name="description" content="[Hero statement from Scene 2]" />
<meta property="og:title" content="Ryan Morrow" />
<meta property="og:image" content="[Scene 1 hero image URL]" />
<meta property="og:description" content="[Hero statement]" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ryan Morrow",
  "jobTitle": "Executive Producer & Operations Leader"
}
</script>
```

**Performance Targets:**
- **FCP:** < 1.2s (priority load Scene 1+2 images)
- **LCP:** < 2.5s (hero image priority, font preload)
- **CLS:** < 0.05 (reserve space for all above-fold content)
- **TBT:** < 150ms (defer counter animations to after LCP)
- **Font preload:** Instrument Serif (display hero)
- **Image strategy:** Priority Scene 1-2 images, lazy everything below Scene 3

**Implementation Risks:**
- Long scroll (11,493px) → Code split by scene with dynamic imports
- Image-heavy → Use Next/Image with aggressive WebP/AVIF + srcset
- Counter animations → Ensure reduced-motion respected, don't interfere with LCP
- Word-by-word reveal → Test performance on low-end devices, consider GPU acceleration
- Multiple animations on one page → Monitor TBT, throttle with useReducedMotion

**Implementation Notes:**
- Use custom hook for multi-stage animation sequence (word reveal + counter + stagger)
- Consider route-based code splitting if component bundle exceeds 150KB
- Implement custom loader component for image fade-in (600ms)
- Ensure skip-nav link jumps to Scene 2 or Scene 5

---

### THE WORK (/work) — ch2-the-work

**Purpose:** Case study index + featured project deep-dive (FIFA World Cup). Dual-purpose page serving as both portfolio landing and primary case study template.

**Component Hierarchy:**
```
Chapter_Opening → Project_Index_Grid (8 cards, 4-up desktop) 
→ FIFA_Hero_Section 
→ Context_Section → Silence_Section → Challenge_Section 
→ System_Section → Metrics_Row (4-up) 
→ Evidence_Gallery (3+ images) 
→ Reflection_Quote → Section_Next_Project → Footer
```

**Responsive Behavior:**
- **Desktop:** Project index grid 4-up, metrics 4-up
- **Tablet (768px):** Project grid 2-up, metrics 2x2
- **Mobile (390px):** Project grid 1-up stacked, metrics stacked
- **Metrics grid:** Always 4 cards, resize within container

**Image Requirements:**
- Project thumbnail per card (8 total, consistent aspect ratio)
- FIFA hero image (1440×800px, priority load)
- FIFA gallery (3+ images at 2:3 aspect ratio, lazy-loaded)
- Evidence/artifact images (with captions)
- Chapter opening background image

**Content Requirements:**
- 8 project names + metadata (year, category)
- FIFA case study full content:
  - Context narrative (2-3 paragraphs)
  - Challenge description (1-2 paragraphs)
  - System/methodology overview (2-3 paragraphs)
  - 4 key metrics with labels
  - Reflection/conclusion quote

**Animation Specifications:**
- Project cards stagger reveal on viewport entry (120ms between)
- Metric counters animate when Section_Metrics becomes visible
- Gallery images stagger fade-in (120ms, offset after main image)
- Hero image parallax 0.6x scale on scroll
- "Next project" link with smooth transition animation

**SEO & Metadata:**
```
<title>The Work — Ryan Morrow</title>
<meta name="description" content="Portfolio of case studies in executive production." />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "The Work",
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "FIFA World Cup",
      "image": "[hero image URL]",
      "description": "[context excerpt]"
    }
    // ... more projects
  ]
}
</script>
```

**Performance Targets:**
- **FCP:** < 1.3s (preview thumbnails lazy-loaded, hero priority)
- **LCP:** < 2.5s (FIFA hero image priority)
- **CLS:** < 0.08 (grid reflow management)
- **Image strategy:** Project thumbnails lazy-loaded initially, gallery images below fold use `loading="lazy"`
- **Code splitting:** Consider separating FIFA case study if page size exceeds 200KB

**Implementation Risks:**
- Dual-purpose page (index + featured case study) → Consider splitting into `/work` (index) + `/work/fifa` (case study) for better UX
- 8 project × thumbnails = 8 images → Aggressive image optimization needed
- Grid reflow on mobile → Use CSS Grid with `auto-fit` or fixed columns
- Parallax on mobile → Disable parallax on mobile, use subtle fade instead
- "Next project" link circular navigation → Must handle last project → first

**Implementation Notes:**
- Use `ChapterShell` for layout, `SectionContainer` for grid
- Project grid: `grid-cols-4 md:grid-cols-2 lg:grid-cols-1` (reverse order for tablet)
- Metrics: Always 4-up, resize with `@container` if supported
- Consider ISR (Incremental Static Regeneration) if project list frequently updates
- Viewport-triggered metric counters: Debounce IntersectionObserver

---

### INDIVIDUAL CASE STUDIES (/work/[slug]) — Dynamic Routes

**Purpose:** Template-driven project deep-dives. Each case study follows consistent 10-section template with project-specific content. Routes: fifa-world-cup, golden-state-warriors, universal-studios, special-olympics, amp-energy, nike, datavault, vintara-group

**Component Hierarchy (Template):**
```
Global_Nav → Section_Hero (full-width title + intro)
→ Section_Context (2-3 paragraph narrative)
→ Section_Metrics (4 KPIs with counters)
→ Section_Silence (60vh breathing room)
→ Section_Challenge (challenge narrative + visuals)
→ Section_System (operational system description)
→ Section_Evidence_Gallery (3+ images with captions)
→ Section_Reflection (pull quote or conclusion)
→ Section_Next_Project (navigation to next case study)
→ Footer
```

**Responsive Behavior:**
- **All breakpoints:** Same template structure
- **Content column:** 800px max-width desktop → full-width mobile
- **Metrics grid:** 4-up → 2x2 → stacked
- **Gallery:** 3-up → 2-up → 1-up stacked
- **Fluid scaling:** Use `clamp()` for typography

**Image Requirements:**
- Hero image per project (1440×800px, priority load)
- 3+ gallery images (unique photography, 2:3 or 3:2 aspect)
- Optional artifact/evidence images (4:5 or custom aspect)
- All with WebP + AVIF fallbacks

**Content Requirements (Per Project):**
- **Metadata:** Year, category, client name
- **Context:** 2-3 paragraph narrative (500-800 words)
- **Metrics:** 4 KPIs with labels (e.g., "50M Viewers", "8 Venues")
- **Challenge:** Problem statement and constraints (300-500 words)
- **System:** How operational systems were built/managed (400-600 words)
- **Reflection:** Outcome, impact, key learning (200-400 words)
- **Captions:** Each gallery image needs context caption

**Animation Specifications:**
- Scroll-triggered reveals per section (IntersectionObserver)
- Hero image scale 1.05→1.0 on load
- Metric counters animate on viewport entry (stagger 80ms)
- Gallery images stagger fade-in (120ms between)
- All animation patterns reference `lib/motion-tokens.ts`
- Respect `prefers-reduced-motion` globally

**SEO & Metadata (Dynamic Per Slug):**
```
<title>[Project Name] — Ryan Morrow</title>
<meta name="description" content="[Context excerpt, first 160 chars]" />
<meta property="og:title" content="[Project] — Ryan Morrow" />
<meta property="og:image" content="[Hero image URL]" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "[Project Name]",
  "datePublished": "[Year]",
  "image": "[Hero image URL]",
  "description": "[Context excerpt]"
}
</script>
```

**Performance Targets (Per Slug Route):**
- **FCP:** < 1.3s (header + nav critical)
- **LCP:** < 2.5s (hero image priority, font preload)
- **CLS:** < 0.08 (metric grid + gallery reflow)
- **TBT:** < 180ms (animation debouncing)
- **Image strategy:** Hero priority, gallery below fold lazy-load
- **Font preload:** Instrument Serif for headings, Inter for body

**Implementation Risks:**
- 8 projects × unique photography = significant asset budget → Use CDN with responsive image service
- Dynamic route slugs → Ensure all 8 slugs are pre-generated (not ISR) for instant navigation
- "Next project" link circular navigation → Last project must link to first
- Image gallery scale differences → Use aspect-ratio CSS property to prevent layout shift
- Metric animations → Ensure counter values are accurate before animate (test with real data)

**Implementation Notes:**
- Create CMS-agnostic content structure (MDX, JSON, or API)
- Use Next.js `generateStaticParams()` for all 8 slugs
- Implement "Next project" with circular logic: `projects[(currentIndex + 1) % projects.length]`
- Gallery: `<figure><Image /><figcaption>` semantic structure
- Metrics: `aria-label` combining value + label for accessibility

---

### THE SYSTEM (/system) — ch3-the-system

**Purpose:** Operational methodology deep-dive — how Ryan builds and runs complex operational systems.

**Component Hierarchy:**
```
Global_Nav → Chapter_Opening 
→ Philosophy_Statement (headline + intro)
→ Module_Grid (4 cards: vendor management, timeline, communication, risk)
→ System_Diagram (visual methodology representation)
→ Methodology_Details (narrative deep-dive per module)
→ Pull_Quote (key principle)
→ Footer
```

**Responsive Behavior:**
- **Desktop:** Module grid 3-up
- **Tablet:** Module grid 2-up
- **Mobile:** Module grid 1-up stacked
- **System diagram:** May need horizontal scroll on mobile (or SVG rendering adaptation)

**Image Requirements:**
- Minimal images (text-focused chapter)
- 1-2 supporting images maximum
- System diagram (SVG preferred for scalability, or PNG with high DPI)
- Chart/process flow visualization

**Content Requirements:**
- Operational philosophy statement (2-3 sentences)
- 4-6 module descriptions (title + 200-300 word body each)
- System methodology narrative (500+ words)
- Key principle pull quote

**Animation Specifications:**
- Module cards sequential reveal (100ms stagger on scroll entry)
- Diagram draw-on effect if SVG (400ms stroke animation, staggered per element)
- Pull quote line-by-line reveal (60ms per line, 0.3s delay from section entry)
- No parallax (text-focused, performance-sensitive)

**SEO & Metadata:**
```
<title>The System — Ryan Morrow</title>
<meta name="description" content="Operational methodology for complex production systems." />
<meta name="keywords" content="operations, methodology, production management" />
```

**Performance Targets:**
- **FCP:** < 1.0s (text-heavy, fast load)
- **LCP:** < 2.0s (minimal images)
- **CLS:** < 0.03 (stable text layout)
- **TBT:** < 100ms (minimal animation overhead)
- **Lightweight page:** Mostly text, fast render

**Implementation Risks:**
- System diagram complexity → May need to be coded interactive component rather than static image
- SVG diagram animation → Test performance on low-end devices, use will-change sparingly
- Module card stagger on slow device → Consider reduced animation on mobile
- Text-heavy page → Ensure high contrast, comfortable line-height (1.7), max-width (680px for readability)

**Implementation Notes:**
- Use semantic `<section>` for each module
- Diagram: Consider `<svg>` with Framer Motion stroke animations or static `<image>`
- Module cards: `grid-cols-3 md:grid-cols-2 lg:grid-cols-1`
- Quote styling: Use `<blockquote><cite>` with copper accent line

---

### THE JOURNEY (/journey) — ch4-the-journey

**Purpose:** Career timeline — chronological progression through key roles and milestones.

**Component Hierarchy:**
```
Global_Nav → Chapter_Opening 
→ Timeline_Grid (Timeline_Node × 8-12 entries)
→ Career_Narrative (retrospective narrative)
→ Pull_Quote (career insight)
→ Footer
```

**Responsive Behavior:**
- **Desktop:** Timeline nodes in horizontal 3-4 up layout
- **Tablet:** Timeline nodes 2-up grid
- **Mobile:** Stacked vertical timeline with connecting line
- **Key:** Consider vertical timeline with visual line connector on mobile

**Image Requirements:**
- Optional per-milestone images (photography of key venues/events)
- Timeline background or accent images (optional)
- Minimal; primarily text-based

**Content Requirements:**
- Chronological entries: year, role title, organization, description (1-2 sentences)
- 8-12 milestone entries total
- Career narrative (300-500 words)
- Career insight pull quote

**Animation Specifications:**
- Sequential reveal following reading order (top-left → bottom-right)
- 150ms stagger between timeline nodes
- Connecting lines draw-on effect (400ms total, linear)
- Year labels scale from 0.8 on reveal
- Debounce animations for performance

**SEO & Metadata:**
```
<title>The Journey — Ryan Morrow</title>
<meta name="description" content="Career timeline and professional evolution." />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ryan Morrow",
  "hasOccupation": [
    {"@type": "Occupation", "name": "Role 1", "startDate": "YYYY"},
    {"@type": "Occupation", "name": "Role 2", "startDate": "YYYY"}
  ]
}
</script>
```

**Performance Targets:**
- **FCP:** < 1.1s
- **LCP:** < 2.0s (minimal images)
- **CLS:** < 0.05 (stable timeline layout)
- **TBT:** < 150ms (animation stagger)
- **Lightweight:** Text + SVG lines, fast render

**Semantic Markup (Critical for Accessibility):**
```html
<section aria-label="Career timeline">
  <ol>
    <li>
      <time datetime="2010">2010</time>
      <h3>Role Title</h3>
      <p>Organization and description</p>
    </li>
    <!-- repeat -->
  </ol>
</section>
```

**Implementation Risks:**
- Timeline visual complexity on mobile → Test vertical layout carefully, ensure connecting line is clear
- Connecting line animations → May need CSS-only fallback (SVG stroke not supported on all browsers)
- Year labels scale animation → Ensure baseline text remains aligned
- Virtual scrolling → Consider virtualizing if timeline entries exceed 20 (performance optimization)

**Implementation Notes:**
- Use semantic `<ol>` for timeline (ordered list semantics)
- Each entry: `<li>` with `<time datetime="">` for machine-readable dates
- Connecting line: SVG `<line>` element or CSS border, animated with Framer Motion or CSS `stroke-dashoffset`
- Desktop layout: CSS Grid with 3-4 columns, stagger animations
- Mobile layout: Full-width stack with left-side connecting line

---

### FIELD NOTES (/field-notes) — ch5-field-notes

**Purpose:** Documentary evidence — operational artifacts, behind-the-scenes photography, production details. Most image-heavy page.

**Component Hierarchy:**
```
Global_Nav → Chapter_Opening 
→ Artifact_Gallery_1 (4-6 images with captions)
→ Editorial_Commentary_1 (narrative section)
→ Artifact_Gallery_2 (3-4 images)
→ Editorial_Commentary_2 (narrative section)
→ ... (repeat pattern)
→ Footer
```

**Responsive Behavior:**
- **Desktop:** Gallery grid 3-up
- **Tablet:** Gallery grid 2-up
- **Mobile:** Gallery grid 1-up full-width stack
- **All images:** Maintain aspect ratio (no distortion)

**Image Requirements (HEAVY PAGE):**
- 9+ artifact images total
- Types: Shipping manifests, venue diagrams, credential badges, operations photos
- Aspect ratios: 4:5 (portrait), 16:9 (wide), 1:1 (square) - mixed
- All with WebP + AVIF + JPEG fallbacks
- Captions per image (location, date, context - 1-2 sentences)

**Content Requirements:**
- 1-2 sentences caption text per image
- Minimal editorial commentary between galleries (1-2 paragraphs)
- Narrative flow connecting artifacts to operations story
- All artifacts require descriptive context

**Animation Specifications:**
- Image stagger fade-in (120ms between)
- Scale from 0.95 on reveal
- Caption fade-in after image completes load (600ms)
- No parallax (image-heavy, performance-sensitive)

**Accessibility (Critical for This Page):**
- **Every image needs descriptive alt text** (not just "artifact" or "image")
- Use `<figure><figcaption>` semantic structure for image+caption pairs
- Example alt: `alt="FIFA operations shipping manifest showing equipment transport schedule for stadium setup"`
- Screen reader users should understand image purpose without caption

**SEO & Metadata:**
```
<title>Field Notes — Ryan Morrow</title>
<meta name="description" content="Operational artifacts and behind-the-scenes production documentation." />
<!-- Note: Image alt text is critical for SEO and accessibility on this page -->
```

**Performance Targets (CRITICAL - IMAGE-HEAVY):**
- **FCP:** < 1.5s (defer below-fold gallery load)
- **LCP:** < 2.5s (hero image priority, first gallery lazy-load)
- **CLS:** < 0.1 (gallery layout stability)
- **Page Weight Target:** < 3MB initial load with lazy loading
- **Image strategy:** Progressive JPEG/AVIF, aggressive srcset, lazy-load below fold
- **Masonry vs Grid:** CSS Grid with `auto-fit` for responsive layout

**Implementation Risks (CRITICAL):**
- Page weight — Most image-heavy page; aggressive optimization required
  - Mitigation: WebP/AVIF only, progressive JPEG, responsive srcset, lazy-load all gallery
- Image load cascading → Use Intersection Observer for staggered load
- LCP from first artifact image → Must be optimized (< 80KB)
- Layout shift from lazy-loaded captions → Reserve space with `aspect-ratio` CSS
- Mobile performance → Images may dominate bandwidth on slow 4G

**Implementation Notes:**
- Use Next/Image with `fill` prop + `object-fit: cover` for masonry gallery
- Gallery layout: CSS Grid with `grid-auto-rows: 400px` for consistent masonry effect
- Lazy-load: Framer Motion `useInView()` triggers image load in batches (3-4 images at a time)
- Captions: Reserve space with fixed height, fade-in after image loads
- Alt text audit: Ensure every image has meaningful description
- Consider "load more" pattern if artifact count grows beyond 9

---

### THINKING (/thinking) — ch6-thinking

**Purpose:** Philosophy and perspective — editorial essays on operational leadership. Pure reading experience.

**Component Hierarchy:**
```
Global_Nav → Chapter_Opening 
→ Essay_Section_1 (headline + body paragraphs)
→ Pull_Quote_1 (interspersed)
→ Essay_Section_2 (continue narrative)
→ Pull_Quote_2
→ ... (repeat pattern)
→ Footer
```

**Responsive Behavior:**
- **All breakpoints:** Content column max-width 680px centered
- **Consistent reading experience** across desktop, tablet, mobile
- **Typography:** Comfortable line-height (1.7), readable font size (17px), proper spacing

**Image Requirements:**
- Minimal (0-2 editorial images maximum)
- Optional featured image at top
- Decorative or supporting images only

**Content Requirements:**
- Long-form essay content (2,000-3,000 words)
- Pull quotes interspersed (4-6 total)
- Philosophical statements and leadership insights
- Natural SEO-friendly long-form structure

**Animation Specifications:**
- Line-by-line quote reveal (60ms per line, 0.3s delay from section entry)
- Subtle fade-in for essay paragraphs (300ms)
- No parallax or complex animations (reading-focused)
- Minimal motion distraction

**SEO & Metadata:**
```
<title>Thinking — Ryan Morrow</title>
<meta name="description" content="Philosophy and perspective on operational leadership." />
<!-- Long-form content is naturally SEO-friendly -->
```

**Performance Targets:**
- **FCP:** < 1.0s (lightest page - mostly text)
- **LCP:** < 1.5s (minimal images, fast render)
- **CLS:** < 0.02 (stable text layout)
- **TBT:** < 100ms (minimal animation)
- **Sub-1s LCP target** for pure reading experience

**Accessibility & Readability (Critical):**
- High contrast text (minimum 7:1 for extended reading)
- Comfortable line-height: 1.7
- Comfortable font size: 17px (comfortable reading, not too small)
- Max-width: 680px (optimal line length for readability)
- Proper heading hierarchy for scanning

**Implementation Notes:**
- Use semantic `<article>` wrapper
- Paragraphs: Set `max-w-[680px] mx-auto` for content column
- Pull quotes: Copper accent line, larger font size, center-aligned
- Typography: Use `<p>`, `<h2>`, `<h3>` (never skip levels)
- Optional image: Use full-width but constrain max-height to maintain reading flow
- ESLint-a11y: Validate heading hierarchy and contrast

---

### THE NEXT CONVERSATION (/contact) — ch7-next-conversation

**Purpose:** Contact/CTA — invitation to connect.

**Component Hierarchy:**
```
Global_Nav → Chapter_Opening 
→ Invitation_Text (opening statement)
→ CTA_Button (email or contact form)
→ Footer
```

**Responsive Behavior:**
- **All breakpoints:** Centered content
- **Button:** Auto-width desktop/tablet → full-width mobile

**Image Requirements:**
- None (pure CTA page)

**Content Requirements:**
- Invitation paragraph (150-200 words)
- CTA button text (e.g., "Let's Talk")
- Contact information: Email, LinkedIn, optional contact form

**Animation Specifications:**
- Text fade-up animation (800ms from section entry)
- Button fade-in (600ms with 200ms delay from text)
- Hover state: Scale 1.02, color shift
- No complex animations (conversion-focused)

**SEO & Metadata:**
```
<title>Connect — Ryan Morrow</title>
<meta name="description" content="Get in touch with Ryan Morrow." />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Connect with Ryan Morrow"
}
</script>
```

**Performance Targets:**
- **FCP:** < 0.8s (lightest page)
- **LCP:** < 1.0s (no images, instant render)
- **CLS:** < 0.01 (fixed layout)
- **Instant load target** for quick engagement

**Accessibility & Conversion:**
- Contact information machine-readable (email as `mailto:` link)
- Focus management: CTA button visible, keyboard-activatable
- High contrast: CTA button readable (4.5:1 minimum)
- Semantic `<a href="mailto:">` or `<button>` with proper `aria-label`

**Implementation Notes:**
- Email protection: Consider contact form or obfuscated mailto link
- Analytics tracking: Track CTA click for conversion metrics
- Button: Full-width on mobile, auto-width desktop (via responsive prop)
- Spam protection: If using email, consider adding rate limiting or simple form validation
- Alternative: Contact form with backend submission (Netlify Forms, Formspree, custom API)

---

## SEO & Metadata Strategy

### Meta Tag Template (Per Page)

```html
<head>
  <!-- Primary -->
  <title>[Page Title] — Ryan Morrow</title>
  <meta name="description" content="[160 chars max describing page purpose]" />
  
  <!-- Open Graph (social sharing) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="[Page Title] — Ryan Morrow" />
  <meta property="og:description" content="[Same as meta description]" />
  <meta property="og:image" content="[Hero image URL, 1440×800px recommended]" />
  <meta property="og:url" content="https://ryanmorrow.com[route]" />
  
  <!-- Twitter Card (optional) -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="[Page Title]" />
  <meta name="twitter:description" content="[Meta description]" />
  <meta name="twitter:image" content="[OG image URL]" />
  
  <!-- Canonical (prevent duplicate content) -->
  <link rel="canonical" href="https://ryanmorrow.com[route]" />
</head>
```

### Structured Data (Schema.org)

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ryan Morrow",
  "url": "https://ryanmorrow.com",
  "jobTitle": "Executive Producer & Operations Leader",
  "description": "Documentary filmmaker and operations expert",
  "image": "https://ryanmorrow.com/og-image.jpg"
}
```

**Case Study Pages:**
```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "[Project Name]",
  "description": "[Context excerpt]",
  "image": "[Hero image URL]",
  "datePublished": "[Year]",
  "author": {
    "@type": "Person",
    "name": "Ryan Morrow"
  }
}
```

**Work Index:**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "The Work",
  "hasPart": [
    // ... array of CreativeWork items
  ]
}
```

**Journey (Timeline):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ryan Morrow",
  "hasOccupation": [
    {"@type": "Occupation", "name": "[Role]", "startDate": "[Year]"},
    {"@type": "Occupation", "name": "[Role]", "startDate": "[Year]"}
  ]
}
```

### Image SEO Best Practices

- **Alt text:** Descriptive, keyword-rich (50-125 characters)
  - ❌ Don't: "image", "pic", "image of"
  - ✓ Do: "FIFA World Cup stadium with spectators during opening ceremony"
- **Filename:** Use hyphens, descriptive words
  - ❌ Don't: `IMG_1234.jpg`, `image1.png`
  - ✓ Do: `fifa-stadium-opening-ceremony.jpg`
- **File size:** Optimize with WebP/AVIF (< 100KB for thumbnails, < 200KB for hero)
- **Responsive images:** Use `srcset` and `sizes` attributes for device-appropriate scaling
- **Structured data:** Image objects in schema.org markup improve image search visibility

---

## Image & Asset Strategy by Page

### Priority Load Strategy

**Priority Load (Above-fold, visible on first screen):**
- Homepage: Scene 1 hero + Scene 2 statement image
- Work index: Project grid thumbnails (first 8)
- Case studies: Hero image per project
- System: Chapter opening background
- Journey: Chapter opening background
- Contact: None (text-only)

**Lazy Load (Below-fold, defer until viewport approach):**
- Homepage: Scene 3+ gallery images
- Work: FIFA case study content images, gallery below section
- Case studies: Evidence gallery (below metrics), reflection section
- Field Notes: All artifact galleries

### Image Dimensions & Optimization

| Image Type | Dimension | Format | Max Size | Notes |
|-----------|-----------|--------|----------|-------|
| Hero (full-width) | 1440×800px | WebP/AVIF/JPEG | 150KB | Priority load, fade-in 600ms |
| Gallery (landscape) | 1440×900px+ | WebP/AVIF/JPEG | 100KB | Lazy-load, maintain aspect |
| Gallery (portrait) | 800×1000px | WebP/AVIF/JPEG | 80KB | 2:3 aspect, lazy-load |
| Thumbnail (grid) | 400×500px | WebP/JPEG | 50KB | Project cards, 4-8 per page |
| Artifact | 800×1000px (varied) | WebP/AVIF/JPEG | 80KB | Field notes, captions |

### Responsive Image Sizing

Use Next/Image `sizes` prop for device-appropriate serving:

```tsx
<Image
  src={heroImage}
  alt="Description"
  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1440px"
  priority
/>
```

### Asset Checklist Before Implementation

**Content Preparation:**
- [ ] 1 hero image per page (1440×800px minimum)
- [ ] 3-8 gallery images per case study (2:3 aspect ratio)
- [ ] 9+ artifact images for Field Notes (varied aspects)
- [ ] Optional supporting images (Thinking, System chapters)
- [ ] All images in WebP format (AVIF as secondary, JPEG fallback)

**Typography Assets:**
- [ ] Instrument Serif font files (preload in critical CSS)
- [ ] Inter font files (standard weight + bold)
- [ ] IBM Plex Mono font files (for metadata labels)

**Metadata/Content:**
- [ ] Page titles, meta descriptions per route
- [ ] OG image URLs confirmed
- [ ] Structured data JSON validated
- [ ] Alt text written for all images (not generic)

---

## Performance Budgets by Page Type

### Lightweight Pages (< 1MB total)

- **Thinking** (essay): 800KB max
  - Target LCP: < 1.0s
  - Target FCP: < 0.8s
  
- **Contact** (CTA): 300KB max
  - Target LCP: < 0.8s
  - Target FCP: < 0.5s
  
- **System** (methodology): 1.2MB max
  - Target LCP: < 1.5s
  - Target FCP: < 1.0s
  
- **Journey** (timeline): 1.0MB max
  - Target LCP: < 1.5s
  - Target FCP: < 1.0s

### Medium Pages (1-3MB)

- **Homepage** (scroll experience): 2.5MB max
  - Target LCP: < 2.5s
  - Target FCP: < 1.2s
  - Risk: Long scroll (11,493px) may need code splitting
  
- **Case Studies** (featured projects): 2.0MB max per slug
  - Target LCP: < 2.5s
  - Target FCP: < 1.3s
  - Strategy: Hero priority, gallery lazy-load

### Heavy Pages (3-5MB)

- **Field Notes** (artifact gallery): < 3MB (aggressive optimization)
  - Target LCP: < 2.5s
  - Target FCP: < 1.5s
  - Critical: Lazy-load galleries, progressive images, srcset optimization

### Global Performance Budgets

- **JavaScript:** < 150KB gzipped (including Framer Motion, GSAP, Lenis)
- **CSS:** < 50KB gzipped (Tailwind output)
- **Fonts:** < 100KB total (3 font families, Latin subset)
- **Initial HTML:** < 30KB (critical above-fold content)

---

## Engineering Handoff Checklist

### Pre-Implementation Requirements

**Design Assets:**
- [ ] All design files exported from Figma (Node 169:42 provides specifications)
- [ ] Hero images 1440×800px (verified dimensions and aspect ratio)
- [ ] Gallery images in defined aspect ratios (2:3, 3:2, 4:5, 1:1)
- [ ] SVG diagrams (for System page, if applicable)
- [ ] All images in WebP + AVIF formats with JPEG fallback
- [ ] Alt text written for every image (not generated)

**Content Preparation:**
- [ ] Copy written for all pages (headlines, body, CTAs)
- [ ] Meta titles and descriptions per route
- [ ] Pull quotes and callouts formatted
- [ ] 8 case study projects fully written (context, challenge, system, metrics, reflection)
- [ ] Timeline/Journey entries (8-12 chronological entries)
- [ ] Field Notes artifact captions (9+ image captions with context)

**Data Structure:**
- [ ] Case study data defined (JSON, CMS, or API structure)
- [ ] Timeline data structure (chronological milestones)
- [ ] Project metadata (slug, year, category, description)
- [ ] Metrics data (labels, values per project)

### Component Implementation Checklist

**Before Rendering Any Page:**
- [ ] Verify all layout components exist (PageContainer, SectionContainer, ChapterShell)
- [ ] Verify motion tokens available (`lib/motion-tokens.ts`)
- [ ] Verify design system components built (Navigation, Typography, Data, Editorial, Media)
- [ ] Create page-specific component wrappers (PageHome, PageWork, etc.) if needed

**Per Page Implementation:**
- [ ] Route created in Next.js App Router
- [ ] ChapterShell layout applied
- [ ] Global_Nav + Footer included
- [ ] Content sections structured with SCENE_ naming
- [ ] Images loaded with Next/Image (priority for hero)
- [ ] Animations use motion tokens + Framer Motion
- [ ] Responsive design tested (1440px, 768px, 390px)
- [ ] Accessibility audited (WCAG 2.1 AA)
- [ ] SEO tags and structured data added
- [ ] Lighthouse audit run (target 90+ performance)

### Performance Verification

**Before Deployment:**
- [ ] Lighthouse performance audit > 90
- [ ] FCP < target (page-specific)
- [ ] LCP < target (page-specific)
- [ ] CLS < 0.1
- [ ] TBT < 200ms
- [ ] Core Web Vitals passing
- [ ] Image optimization verified (WebP/AVIF, responsive sizes)
- [ ] Font preload strategy working (no FOUT)
- [ ] Animations smooth (60fps on mid-range device)

### Accessibility Verification

**Before Deployment:**
- [ ] WCAG 2.1 AA compliance audit
- [ ] Color contrast verified (4.5:1 minimum)
- [ ] Keyboard navigation tested (all pages)
- [ ] Screen reader tested (NVDA or JAWS)
- [ ] `prefers-reduced-motion` respected (motion disabled)
- [ ] Heading hierarchy validated (never skip levels)
- [ ] Alt text on all images (descriptive, not generic)
- [ ] Focus indicators visible (copper outline)
- [ ] Semantic HTML validated (no div/span abuse)

### Deployment Checklist

**Final Verification:**
- [ ] All routes rendering without console errors
- [ ] Environment variables configured (CMS API, analytics, etc.)
- [ ] Git commits with descriptive messages per feature/page
- [ ] Prettier formatting applied
- [ ] ESLint passing (0 errors, 0 warnings)
- [ ] TypeScript strict mode passing
- [ ] Build successful (npm run build)
- [ ] Preview deployment tested
- [ ] Sitemaps and robots.txt configured
- [ ] Analytics tracking codes added
- [ ] Deployment to Vercel completed

---

## Known Implementation Gotchas

### Homepage (/)
- Long scroll (11,493px) may trigger chunking warnings → Use Next.js code splitting at route level
- Word-by-word reveal can be CPU-intensive on mobile → Test with reduced-motion enabled, profile with DevTools
- Multiple simultaneous animations (reveal + counter + stagger) → Debounce with useReducedMotion, schedule with requestAnimationFrame

### Case Studies (/work/[slug])
- "Next project" circular navigation (last → first) → Handle with modulo operator: `(index + 1) % projects.length`
- Dynamic OG images per slug → Pre-generate or use dynamic OG image generation service
- Metric values must be accurate before animation starts → Hydration mismatch will cause animation jump

### Field Notes (/field-notes)
- Most image-heavy page (9+ images, > 3MB) → Must use lazy-loading batches, responsive srcset, progressive JPEG
- Staggered caption reveals after image load → Use IntersectionObserver + load event listeners (not animation timing)
- Layout shift from captions → Reserve space with `aspect-ratio` CSS property

### Thinking (/thinking)
- Long-form reading UX critical → Set line-height to 1.7, max-width 680px, font-size 17px
- Line-by-line quote reveals can be performance drag → Consider CSS-only animation or reduce line count
- High contrast for extended reading → Test with contrast checker, ensure text passes 7:1 ratio

### System (/system)
- SVG diagram animation complexity → Profile animation performance, may need stroke-dasharray/dashoffset only
- Module card stagger on slow devices → Add `will-change: opacity` but test memory impact

---

## Status

- **Documentation:** ✓ Complete (TASK 011)
- **Implementation Guidance:** ✓ Ready for development
- **Responsive Behaviors:** ✓ Documented (TASK 012)
- **Component Assets:** ✓ Specified (TASK 012)
- **Accessibility Requirements:** ✓ Detailed (TASK 012)
- **Page Implementation Specs:** ✓ Complete (TASK 013)
- **Performance Budgets:** ✓ Defined (TASK 013)
- **SEO & Metadata:** ✓ Templated (TASK 013)
- **Engineering Handoff:** ✓ Detailed (TASK 013)
- **All specifications:** Extracted from Figma (Nodes 161:183 + 169:10 + 169:42)

See related documentation files for motion specifications, layout components, and design tokens.
