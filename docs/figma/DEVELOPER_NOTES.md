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
- **Tablet:** Hamburger menu icon
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

## Status

- **Documentation:** ✓ Complete (TASK 011)
- **Implementation Guidance:** ✓ Ready for development
- **Responsive Behaviors:** ✓ Documented (TASK 012)
- **Component Assets:** ✓ Specified (TASK 012)
- **Accessibility Requirements:** ✓ Detailed (TASK 012)
- **All specifications:** Extracted from Figma (Nodes 161:183 + 169:10)

See related documentation files for motion specifications, layout components, and design tokens.
