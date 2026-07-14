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

## Status

- **Documentation:** ✓ Complete
- **Implementation Guidance:** ✓ Ready for development
- **All specifications:** Extracted from Figma (Node 161:183)

See related documentation files for motion specifications, layout components, and design tokens.
