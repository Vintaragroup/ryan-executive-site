/**
 * Motion Tokens — Animation Durations and Easing Curves
 * 
 * Specifications extracted from Figma Design System (Node 161:131)
 * Motion Philosophy: Cinematic, deliberate, weighted animations
 * 
 * All animations must respect `prefers-reduced-motion` for accessibility
 * 
 * @see docs/figma/MOTION_SPEC.md for complete motion specifications
 */

/**
 * Animation Durations
 * 
 * Used consistently across all animations to create a cohesive temporal rhythm.
 * All values in milliseconds.
 */
export const motionDurations = {
  /** Micro-interactions: color transitions, hover states, small component animations */
  micro: 200,
  
  /** Fast animations: card reveals, label fades, small component animations */
  fast: 400,
  
  /** Medium animations: section fades, grid reveals, moderate entrances */
  medium: 600,
  
  /** Standard animations: major section transitions, hero animations, scroll behavior */
  standard: 800,
  
  /** Slow animations: counter animations, scale transforms, extended reveals */
  slow: 1200,
  
  /** Cinematic animations: hero images, opening sequences, major visual moments */
  cinematic: 1600,
} as const;

/**
 * Easing Functions
 * 
 * Cubic-bezier easing curves for consistent motion feel.
 * Spring easing reserved for hover/focus states only.
 * 
 * Philosophy: No bounce, no slide. Motion should feel weighted and intentional.
 */
export const motionEasing = {
  /**
   * Primary entrance easing
   * 
   * Used for: Page load animations, scroll-triggered reveals, major entrances
   * Characteristics: Smooth deceleration, weighted feel
   * 
   * cubic-bezier(0.16, 1, 0.3, 1)
   */
  enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
  
  /**
   * Micro-interaction easing
   * 
   * Used for: Hover states, focus states, color transitions
   * Characteristics: Snappy, responsive feel with slight emphasis
   * 
   * cubic-bezier(0.33, 1, 0.68, 1)
   */
  micro: 'cubic-bezier(0.33, 1, 0.68, 1)',
  
  /**
   * Exit easing
   * 
   * Used for: Elements leaving viewport, dismissals, transitions out
   * Characteristics: Acceleration curve, intentional departure
   * 
   * cubic-bezier(0.5, 0, 0.75, 0)
   */
  exit: 'cubic-bezier(0.5, 0, 0.75, 0)',
  
  /**
   * Spring easing
   * 
   * Used for: Hover states, focus animations ONLY
   * Do NOT use for primary entrance/exit animations
   * 
   * spring(mass: 1, stiffness: 100, damping: 15)
   * 
   * Note: Requires animation library support (Motion.dev, Framer Motion)
   */
  spring: {
    mass: 1,
    stiffness: 100,
    damping: 15,
  },
} as const;

/**
 * Stagger Delay Patterns
 * 
 * Sequential delays for multi-element animations.
 * All values in milliseconds.
 */
export const motionStagger = {
  /** Word-by-word text reveals (SCENE 2: Statement, SCENE 8: Quote) */
  tight: 60,
  
  /** Grid-based reveals (SCENE 4: Client names) */
  nameGrid: 80,
  
  /** Moderate sequences (SCENE 6: Architecture modules, SCENE 7: Timeline start) */
  moderate: 100,
  
  /** Image gallery stagger (SCENE 5: Gallery) */
  imageGrid: 120,
  
  /** Timeline sequences (SCENE 7: Timeline nodes) */
  timeline: 150,
  
  /** Major element reveals (SCENE 1: Hero text) */
  loose: 200,
} as const;

/**
 * Parallax Depth Ratios
 * 
 * Used for scroll-based parallax effects
 * Values represent speed ratio relative to scroll speed (1.0 = normal scroll speed)
 */
export const motionParallax = {
  /** Hero images move at 60% of scroll speed */
  heroImage: 0.6,
  
  /** Text content moves at normal scroll speed */
  textContent: 1.0,
  
  /** Static backgrounds (grain texture, etc.) */
  staticBackground: 0.3,
} as const;

/**
 * Scroll Behavior Configuration
 * 
 * Global scroll animation settings
 */
export const motionScroll = {
  /** Smooth scroll duration */
  smoothDuration: 800,
  
  /** Smooth scroll easing function */
  smoothEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  
  /** Viewport intersection threshold for triggering animations (30%) */
  intersectionThreshold: 0.3,
} as const;

/**
 * Scene-Specific Animation Presets
 * 
 * Common animation patterns grouped by scene/feature for easy reference
 */
export const motionPresets = {
  /**
   * SCENE 1 — OPENING
   * Page title and metadata fade up on load
   */
  heroTitleEnter: {
    duration: motionDurations.cinematic, // 1200ms
    easing: motionEasing.enter,
    delay: 0,
  },
  
  /**
   * SCENE 1 — OPENING
   * Metadata labels fade in after title
   */
  metadataFade: {
    duration: motionDurations.standard, // 800ms
    easing: motionEasing.enter,
    delay: 600, // After title completes (1200ms) is too long, starts at 600ms
  },
  
  /**
   * SCENE 2 — STATEMENT
   * Statement text reveals word-by-word
   */
  statementWordReveal: {
    duration: motionStagger.tight, // 60ms per word
    easing: motionEasing.enter,
    stagger: motionStagger.tight,
    triggerPoint: motionScroll.intersectionThreshold, // 30% viewport entry
  },
  
  /**
   * SCENE 2 — STATEMENT
   * Stats cards slide up after statement
   */
  statsSlideUp: {
    duration: motionDurations.medium, // 600ms
    easing: motionEasing.enter,
    delay: 400, // After statement completes
    transform: 'translateY(10px)',
  },
  
  /**
   * SCENE 4 — CLIENT NAMES
   * Grid of client names fade and translate
   */
  nameGridReveal: {
    duration: motionDurations.fast, // 400ms
    easing: motionEasing.enter,
    stagger: motionStagger.nameGrid, // 80ms between items
    transform: 'translateY(8px)',
  },
  
  /**
   * SCENE 4 — CLIENT NAMES
   * Hover state on names
   */
  nameHover: {
    duration: motionDurations.micro, // 200ms
    easing: motionEasing.micro,
    property: 'color',
  },
  
  /**
   * SCENE 5 — CHAPTER PREVIEWS
   * Hero image scale down
   */
  heroImageScale: {
    duration: motionDurations.cinematic, // 1600ms
    easing: motionEasing.enter,
    transform: 'scale(1.05) to scale(1.0)',
  },
  
  /**
   * SCENE 5 — CHAPTER PREVIEWS
   * Case study cards reveal
   */
  caseStudyCardReveal: {
    duration: motionDurations.standard, // 800ms
    easing: motionEasing.enter,
    stagger: 0, // Per card in sequence
    transform: 'translateY(24px)',
  },
  
  /**
   * SCENE 5 — CHAPTER PREVIEWS
   * Metrics counter animation
   */
  metricCounter: {
    duration: motionDurations.slow, // 1200ms
    easing: motionEasing.enter,
    delay: 0, // After cards reveal
  },
  
  /**
   * SCENE 5 — CHAPTER PREVIEWS
   * Gallery images stagger reveal
   */
  galleryImageReveal: {
    duration: motionDurations.medium, // 600ms
    easing: motionEasing.enter,
    stagger: motionStagger.imageGrid, // 120ms between items
    transform: 'scale(0.95)',
  },
  
  /**
   * SCENE 6 — OPERATING SYSTEM
   * Architecture module card reveals
   */
  moduleCardReveal: {
    duration: motionDurations.medium, // 600ms
    easing: motionEasing.enter,
    stagger: motionStagger.moderate, // 100ms between modules
    properties: ['opacity', 'border-color'],
  },
  
  /**
   * SCENE 6 — OPERATING SYSTEM
   * Module description fade after card
   */
  moduleDescriptionFade: {
    duration: motionDurations.fast, // 400ms
    easing: motionEasing.enter,
    delay: 500, // After module frame reveals
  },
  
  /**
   * SCENE 7 — JOURNEY TIMELINE
   * Timeline nodes slide from left
   */
  timelineNodeSlide: {
    duration: motionDurations.fast, // 500ms
    easing: motionEasing.enter,
    stagger: motionStagger.timeline, // 150ms between nodes
    transform: 'translateX(-16px)',
  },
  
  /**
   * SCENE 7 — JOURNEY TIMELINE
   * Year labels scale up with spring
   */
  yearLabelSpring: {
    duration: motionDurations.medium, // 600ms
    easing: motionEasing.spring,
    transform: 'scale(0.8) to scale(1.0)',
  },
  
  /**
   * SCENE 7 — JOURNEY TIMELINE
   * Connection lines draw effect
   */
  timelineLineDraw: {
    duration: motionDurations.fast, // 400ms per segment
    easing: motionEasing.enter,
    effect: 'draw-on',
  },
  
  /**
   * SCENE 8 — PHILOSOPHY
   * Quote text line-by-line reveal
   */
  quoteLineReveal: {
    duration: motionDurations.fast, // 200ms per line
    easing: motionEasing.enter,
    stagger: 100, // 100ms between lines
  },
  
  /**
   * SCENE 8 — PHILOSOPHY
   * Italic emphasis scale
   */
  italicEmphasisScale: {
    duration: motionDurations.fast, // Inline with line reveal
    easing: motionEasing.micro,
    transform: 'scale(1.0) to scale(1.02) to scale(1.0)',
  },
  
  /**
   * SCENE 8 — PHILOSOPHY
   * Attribution fade after quote
   */
  attributionFade: {
    duration: motionDurations.medium, // 600ms
    easing: motionEasing.enter,
    delay: 400, // After quote completes
  },
  
  /**
   * SCENE 9 — CLOSE
   * CTA heading fade up
   */
  ctaHeadingEnter: {
    duration: motionDurations.standard, // 800ms
    easing: motionEasing.enter,
    delay: 0,
    transform: 'translateY(16px)',
  },
  
  /**
   * SCENE 9 — CLOSE
   * CTA button fade in
   */
  ctaButtonEnter: {
    duration: motionDurations.medium, // 600ms
    easing: motionEasing.enter,
    delay: 200, // After heading
  },
  
  /**
   * SCENE 9 — CLOSE
   * CTA button hover state
   */
  ctaButtonHover: {
    duration: motionDurations.micro, // 200ms
    easing: motionEasing.micro,
    property: 'background-color',
  },
} as const;

/**
 * Reduced Motion Helper
 * 
 * Returns instant values for animations when prefers-reduced-motion is active
 * Used for generating CSS that respects accessibility preferences
 * 
 * @example
 * const duration = prefersReducedMotion ? motionReducedMotion.duration : '600ms';
 * const easing = prefersReducedMotion ? motionReducedMotion.easing : 'cubic-bezier(0.16, 1, 0.3, 1)';
 */
export const motionReducedMotion = {
  /** Instant duration for animations */
  duration: '0.01ms',
  
  /** Linear easing (no actual easing with instant duration) */
  easing: 'linear',
  
  /** No delay */
  delay: 0,
  
  /** Helper function to check if reduced motion is preferred */
  isPreferred: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  /** CSS media query for reduced motion */
  mediaQuery: '@media (prefers-reduced-motion: reduce)',
} as const;

/**
 * Type Exports for TypeScript Animation Configuration
 */
export type MotionDuration = typeof motionDurations[keyof typeof motionDurations];
export type MotionEasing = typeof motionEasing.enter | typeof motionEasing.micro | typeof motionEasing.exit;
export type MotionStagger = typeof motionStagger[keyof typeof motionStagger];
export type AnimationPreset = typeof motionPresets[keyof typeof motionPresets];

/**
 * Complete Motion Tokens Object
 * 
 * Combines all motion utilities into a single exportable object for convenience
 */
const motionTokensIndex = {
  durations: motionDurations,
  easing: motionEasing,
  stagger: motionStagger,
  parallax: motionParallax,
  scroll: motionScroll,
  presets: motionPresets,
  reducedMotion: motionReducedMotion,
} as const;

export default motionTokensIndex;
