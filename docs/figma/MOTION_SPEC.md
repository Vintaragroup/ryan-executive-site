# Motion Specifications — Ryan Morrow Executive Monograph

**Source:** Figma Design File, Node 161:131  
**Last Updated:** 2026-07-14  
**Status:** Specification Only (Not Implemented)

---

## Motion Philosophy

> "The monograph unfolds as a documentary. Motion is cinematic — slow, deliberate, and weighted. Nothing bounces, nothing slides. Elements materialize with the gravity of a title card. The experience should feel like opening a beautifully printed book, not navigating a website."

**Key Principles:**
- **Cinematic pacing:** Slow, deliberate, weighted animations
- **No bounce:** Strict easing curves, no spring effects for primary animations
- **Materialization:** Elements appear with intentionality, not fluidity
- **Documentary feel:** Motion supports narrative, not distraction
- **Reduced motion:** All animations must respect `prefers-reduced-motion` with instant alternatives

---

## Global Motion Tokens

### Durations

| Token | Value | Use Case |
|-------|-------|----------|
| `duration-micro` | 200ms | Hover states, color transitions, micro-interactions |
| `duration-fast` | 400ms | Card reveals, label fades, small component animations |
| `duration-medium` | 600ms | Section fades, grid reveals, moderate entrance animations |
| `duration-standard` | 800ms | Major section transitions, hero animations, scroll behavior |
| `duration-slow` | 1200ms | Counter animations, scale transforms, extended reveals |
| `duration-cinematic` | 1600ms | Hero images, opening sequences, major visual moments |

### Easing Curves

| Token | Value | Use Case |
|-------|-------|----------|
| `easing-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary entrance animations |
| `easing-micro` | `cubic-bezier(0.33, 1, 0.68, 1)` | Micro-interactions, hover states |
| `easing-exit` | `cubic-bezier(0.5, 0, 0.75, 0)` | Exit animations, elements leaving viewport |
| `easing-spring` | `spring(mass: 1, stiffness: 100, damping: 15)` | Hover/focus states only (NOT primary animations) |

### Delay Patterns

| Pattern | Stagger Value | Use Case |
|---------|---------------|----------|
| `stagger-tight` | 60ms | Word-by-word reveals |
| `stagger-name-grid` | 80ms | Multi-item grids |
| `stagger-moderate` | 100ms | Card sequences |
| `stagger-image-grid` | 120ms | Gallery reveals |
| `stagger-timeline` | 150ms | Timeline sequences |
| `stagger-loose` | 200ms | Hero text, major elements |

### Parallax Depth

| Element | Speed | Notes |
|---------|-------|-------|
| Hero images | 0.6x | Moves slower than scroll |
| Text content | 1.0x | Moves at standard scroll speed |
| Backgrounds | 0.3x | Static grain texture |

---

## Scene-by-Scene Motion Specifications

### GLOBAL — SCROLL BEHAVIOR

**Trigger:** Page load + user scroll

| Property | Value | Notes |
|----------|-------|-------|
| Smooth scroll | `cubic-bezier(0.16, 1, 0.3, 1)` | 800ms duration |
| Scene transitions | Full viewport | Revealed through scroll |
| Parallax depth | 0.6x (images), 1.0x (text) | Creates depth effect |
| Scroll-jacking | Disabled | User maintains full scroll control |
| Reduced motion | Instant navigation | No smooth scroll easing |

---

### SCENE 1 — OPENING (Hero Section)

**Components:** Page title, subtitle, metadata labels

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Name fade up | `opacity: 0 → 1`, `transform: translateY(20px) → 0` | Load | 1200ms | 0ms | `easing-enter` | Instant fade |
| Name stagger | Each name element | Load | 1200ms | +200ms per item | `easing-enter` | Instant |
| Metadata fade | `opacity: 0 → 0.4 → 1` | Load | 800ms | 600ms (after name) | `easing-enter` | Instant fade |
| Background | Static 0.5% grain | Static | — | — | — | Static |

**Affected Components:**
- `DisplayHero` (project name)
- `DisplaySubtitle` (role/description)
- `Meta`, `MetaLabel` (metadata blocks)

---

### SCENE 2 — STATEMENT (About Section)

**Components:** Navigation, main statement text, operational stats

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Navigation | Always present | Load | — | 0ms | — | Always present |
| Statement text | Word-by-word reveal | 30% viewport entry | 60ms per word | Sequential | `easing-enter` | All text visible |
| Operational stats | `opacity: 0 → 1`, `transform: translateY(10px) → 0` | After statement | 600ms | 400ms (after statement) | `easing-enter` | Instant fade |

**Affected Components:**
- `GlobalNav` (navigation)
- `DisplayTitle`, `BodyRegular` (statement text)
- `MetricCard` (stats cards)

**Notes:**
- Statement reveals at 30% viewport entry (scroll-triggered)
- Stagger is per word (60ms), not per element
- Stats slide up after statement text completes

---

### SCENE 3 — SILENCE (Breathing Room Section)

**Components:** Full-bleed dark rectangle

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Silence scene | No animation | Passive | — | — | — | No animation |

**Affected Components:**
- `EditorialSilenceScene` (full-bleed container)

**Notes:**
- Pure black rectangle (#0f0f10)
- Purpose: Editorial breathing room
- Expected scroll view duration: 1.5–2 seconds
- No animation, purely spacing/rhythm

---

### SCENE 4 — CLIENT NAMES (Portfolio Grid)

**Components:** Section label, client name cards

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Section label | `opacity: 0 → 1` | Scroll entry | 600ms | 0ms | `easing-enter` | Instant fade |
| Names grid | Stagger reveal per name | Scroll entry | 400ms per item | +80ms stagger | `easing-enter` | All visible instantly |
| Each name | `opacity: 0 → 1`, `transform: translateY(8px) → 0` | Staggered | 400ms | Sequential | `easing-enter` | Instant |
| Hover state | `color: gray → copper` | Hover | 200ms | — | `easing-micro` | Instant color change |

**Affected Components:**
- `SectionLabel` (grid label)
- `Meta`, `UIText` (name items)

**Notes:**
- Grid reveal follows top-left to bottom-right order
- Stagger: 80ms between items
- Hover: Copper (#a6825e) transition, 200ms duration

---

### SCENE 5 — CHAPTER PREVIEWS (Project Cards Section)

**Components:** Hero image, case study cards, metrics, gallery

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Hero image scale | `transform: scale(1.05) → 1.0` | Scroll entry | 1600ms | 0ms | `easing-enter` | Instant scale |
| Hero image fade | `opacity: 0 → 1` (overlay) | Scroll entry | 300ms | 0ms | `easing-enter` | Instant fade |
| Case study cards | `opacity: 0 → 1`, `transform: translateY(24px) → 0` | Scroll entry | 800ms | Per card | `easing-enter` | All visible instantly |
| Metrics counter | `0 → finalValue` | Scroll entry | 1200ms | After cards | `easing-enter` | Show final value |
| Gallery images | `transform: scale(0.95) → 1.0` | Scroll entry | 600ms | +120ms stagger | `easing-enter` | Instant scale |
| Gallery fade | `opacity: 0 → 1` | Scroll entry | 600ms | +120ms stagger | `easing-enter` | Instant fade |

**Affected Components:**
- `GalleryImage` (hero, images)
- `CaseStudyCard` (project cards)
- `MetricCard` (statistics)

**Notes:**
- Hero image: Scale down from 1.05 to 1.0
- Cards: Sequential reveal with stagger
- Metrics: Counter animation (not instantaneous number change)
- Gallery: 120ms stagger between images

---

### SCENE 6 — OPERATING SYSTEM (Architecture Section)

**Components:** Module cards, descriptions

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Architecture module | `opacity: 0 → 1`, `border-color: transparent → copper` | Scroll entry | Sequential | +100ms stagger | `easing-enter` | Instant |
| Module frame | Fade into view | Scroll entry | 500ms | Sequential | `easing-enter` | Instant |
| Module description | `opacity: 0 → 1` | After module frame | 400ms | Sequential | `easing-enter` | Instant fade |

**Affected Components:**
- `SectionContainer` (grid container)
- `ChapterSectionWithLabel` (module frame)
- `BodyRegular`, `BodySmall` (descriptions)

**Notes:**
- Sequential reveal following reading order
- Card border: Transparent to copper transition
- Description follows card frame (400ms delay after card starts)
- Stagger: 100ms between modules

---

### SCENE 7 — JOURNEY TIMELINE (Timeline Section)

**Components:** Timeline nodes, year labels, connecting lines

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Timeline node | `opacity: 0 → 1`, `transform: translateX(-16px) → 0` | Scroll entry | 500ms | +150ms stagger | `easing-enter` | Instant |
| Reading order | Follow document order | Sequential | — | 150ms stagger | — | Instant |
| Year label | `transform: scale(0.8) → 1.0` | Scroll entry | 600ms | After node | `easing-spring` | Instant scale |
| Connecting line | Draw-on effect | Sequential | 400ms per segment | Per segment | `easing-enter` | Static lines |

**Affected Components:**
- `TimelineNode` (node items)
- `Meta`, `Timestamp` (year labels)
- `DividersLine` (connecting lines)

**Notes:**
- Nodes slide in from left (translate-x -16px)
- 150ms stagger between timeline items
- Year labels: Spring easing only (not cubic-bezier for enter)
- Lines: Draw effect per segment (400ms per connection)

---

### SCENE 8 — PHILOSOPHY (Quote Section)

**Components:** Quote text, attribution

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| Quote line | Line-by-line reveal | Scroll entry | 200ms per line | +100ms stagger | `easing-enter` | All visible instantly |
| Italic emphasis | `transform: scale(1.0) → 1.02 → 1.0` | Scroll entry | Inline with reveal | Per line | `easing-micro` | No scale |
| Attribution | `opacity: 0 → 1` | After quote | 600ms | 400ms (after quote) | `easing-enter` | Instant fade |

**Affected Components:**
- `DisplayItalic`, `PullQuote` (quote text)
- `Citation`, `Meta` (attribution)

**Notes:**
- Line-by-line reveal (not word-by-word)
- Italic emphasis: Subtle scale 1.02 on reveal, settling to 1.0
- 200ms per line, 100ms stagger between lines
- Attribution: 600ms fade, 400ms after quote complete

---

### SCENE 9 — CLOSE (Final CTA Section)

**Components:** CTA heading, CTA button, footer

| Animation | Property | Trigger | Duration | Delay | Easing | Reduced Motion |
|-----------|----------|---------|----------|-------|--------|-----------------|
| CTA heading | `opacity: 0 → 1`, `transform: translateY(16px) → 0` | Scroll entry | 800ms | 0ms | `easing-enter` | Instant fade |
| CTA button | `opacity: 0 → 1` | Scroll entry | 600ms | 200ms (after heading) | `easing-enter` | Instant fade |
| Button hover | `background-color: transition` | Hover | 200ms | — | `easing-micro` | Instant color |
| Footer | Immediate render | Load | — | — | — | Immediate |

**Affected Components:**
- `DisplayTitle`, `HeadingH1` (CTA heading)
- `CTAButton` (action button)
- `Footer` (footer section)

**Notes:**
- Heading fades up first (800ms)
- Button fades in 200ms after heading starts
- Hover effect: Background to copper, 200ms duration
- Footer: No animation, immediate render

---

## Reduced Motion Strategy

All animations must respond to `prefers-reduced-motion: reduce` media query:

```css
@media (prefers-reduced-motion: reduce) {
  /* All transitions and animations must be instant or removed */
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Implementation Rule:**
- Fade animations: Show elements instantly (opacity 1)
- Transform animations: Apply final state instantly (no translate/scale)
- Counters: Show final value immediately (no counting animation)
- Hover/focus: Instant state change (no transition duration)
- Scroll behavior: Instant navigation (no smooth scroll)

---

## Implementation Notes

### Animation Triggers

1. **Load-based:** Opening scene animations trigger on page load
2. **Scroll-based:** Most animations trigger on scroll entry (typically 30% viewport intersection)
3. **Hover/focus:** Interactive elements respond to user interaction with micro-animations
4. **Stagger:** Multiple elements animate sequentially with consistent delay offsets

### Stagger Patterns

**Tight stagger (word-by-word):** 60ms per item
- SCENE 2: Statement text reveal
- SCENE 8: Quote line reveal

**Name grid stagger:** 80ms per item
- SCENE 4: Client names grid

**Moderate stagger:** 100ms per item
- SCENE 6: Architecture modules

**Image gallery stagger:** 120ms per item
- SCENE 5: Gallery images

**Timeline stagger:** 150ms per item
- SCENE 7: Timeline nodes

**Major element stagger:** 200ms per item
- SCENE 1: Hero text elements

### Performance Considerations

- Use `will-change` CSS property for animated elements (sparingly)
- GPU-accelerate with `transform` and `opacity` only
- Avoid animating layout properties (width, height, position)
- Use `content-visibility: auto` for off-screen content
- Debounce scroll events, use Intersection Observer for triggering

### Browser Support

- Primary easing: CSS `cubic-bezier()` (universal support)
- Spring easing: Requires JavaScript animation library (e.g., Motion, Framer Motion)
- Parallax: Use native `scroll-behavior` or JavaScript intersection
- Counter animations: JavaScript library required

---

## Component Animation Mapping

| Component | Scene | Animation | Duration | Trigger |
|-----------|-------|-----------|----------|---------|
| `DisplayHero` | Scene 1 | Fade up | 1200ms | Load + 0ms |
| `DisplayTitle` | Scene 2, 9 | Fade up / Fade in | 800ms / 800ms | Scroll / Scroll |
| `GlobalNav` | Scene 2 | Immediate | — | Load |
| `MetricCard` | Scene 2, 5 | Fade up / Counter | 600ms / 1200ms | After prev / Scroll |
| `EditorialSilenceScene` | Scene 3 | None | — | Scroll |
| `SectionLabel` | Scene 4, 6 | Fade | 600ms | Scroll |
| `CaseStudyCard` | Scene 5 | Fade up | 800ms | Scroll |
| `GalleryImage` | Scene 5 | Scale + fade | 600ms | Scroll (+stagger) |
| `TimelineNode` | Scene 7 | Slide from left | 500ms | Scroll (+stagger) |
| `PullQuote` | Scene 8 | Line reveal | 200ms per line | Scroll |
| `CTAButton` | Scene 9 | Fade in + hover | 600ms / 200ms | Scroll / Hover |
| `Footer` | Scene 9 | Immediate | — | Load |

---

## References

- **Motion Library:** Recommended: Motion.dev or Framer Motion for complex animations
- **Scroll Behavior:** Intersection Observer API for scroll-triggered animations
- **Easing Resources:**
  - [cubic-bezier.com](https://cubic-bezier.com) for easing visualization
  - [Easings.net](https://easings.net) for standard easing functions
- **Accessibility:** [WebAIM Motion & Animation](https://webaim.org/articles/motion/)

---

## Status

- **Specification:** ✓ Complete and detailed
- **Implementation:** — Not started (as per requirements)
- **Testing:** — Pending implementation
- **Accessibility:** ✓ Reduced motion strategy defined
