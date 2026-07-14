/**
 * Design Tokens - TypeScript Type Definitions
 * Source: Figma Variables & Design Tokens Reference (164:398)
 *
 * Provides type-safe access to design tokens throughout the codebase.
 * Maps CSS custom properties to TypeScript constants for autocomplete and validation.
 */

/* ========================================
   PRIMITIVE COLORS
   ======================================== */

export const COLORS_PRIMITIVE = {
  /** Deep, dominant background; maximum contrast surface */
  nearBlack: '#0f0f10',
  /** Warm, readable text on dark; breathing room */
  warmWhite: '#f5f2ed',
  /** Premium off-white; very light backgrounds and surfaces */
  paper: '#faf8f5',
  /** Primary interactive element; significant emphasis */
  copper: '#a6825e',
  /** Lighter variation; hover states and secondary emphasis */
  copperLight: '#c8a882',
  /** Near-black alternative; deep interactive states */
  charcoal: '#1a1a1a',
  /** Secondary surfaces; subdued backgrounds */
  darkGray: '#2a2a2a',
  /** Secondary text; borders and dividers */
  midGray: '#6b6b6b',
  /** Subtle separation; minimal visual weight */
  lightGray: '#e5e2da',
} as const;

/* ========================================
   SEMANTIC COLORS
   ======================================== */

export const COLORS_TEXT = {
  /** Primary reading text and main content */
  primary: '#1a1a1a',
  /** Secondary information and supporting text */
  secondary: '#4a4a4a',
  /** Tertiary details and minimal notation */
  tertiary: '#8a8a8a',
  /** Text on dark surfaces; high contrast inverse */
  inverse: '#f5f2ed',
  /** Accent text for emphasis and significance */
  copper: '#a6825e',
} as const;

export const COLORS_SURFACE = {
  /** Dark background, maximum gravitas */
  dark: '#0f0f10',
  /** Deep surface for nested containers */
  charcoal: '#1a1a1a',
  /** Light background, breathing space */
  light: '#faf8f5',
  /** Premium off-white surface */
  paper: '#f5f2ed',
} as const;

export const COLORS_BORDER = {
  /** Primary accent border for emphasis */
  copper: '#a6825e',
  /** Subtle borders and dividers */
  light: '#e5e2da',
  /** Dark borders on light surfaces */
  dark: '#2a2a2a',
} as const;

/* ========================================
   SPACING SCALE
   ======================================== */

export const SPACING = {
  /** 4px - Micro spacing, tight grouping */
  '2xs': '4px',
  /** 8px - Base unit, inline gaps */
  xs: '8px',
  /** 16px - Component internal padding */
  sm: '16px',
  /** 24px - Card padding, list gaps */
  md: '24px',
  /** 32px - Section internal spacing */
  lg: '32px',
  /** 48px - Major content gaps */
  xl: '48px',
  /** 64px - Section padding */
  '2xl': '64px',
  /** 96px - Scene margins, page padding */
  '3xl': '96px',
  /** 128px - Major scene separation */
  '4xl': '128px',
  /** 192px - Monumental breathing room */
  '5xl': '192px',
  /** 256px - Maximum silence between scenes */
  '6xl': '256px',
} as const;

/* ========================================
   BREAKPOINTS
   ======================================== */

export const BREAKPOINTS = {
  /** Mobile devices */
  mobile: '390px',
  /** Tablet devices */
  tablet: '768px',
  /** Desktop displays */
  desktop: '1440px',
} as const;

/* ========================================
   CONTAINERS
   ======================================== */

export const CONTAINERS = {
  /** Maximum container width */
  max: '1200px',
  /** Standard content width for long-form text */
  content: '800px',
  /** Narrow width for focused content */
  narrow: '680px',
} as const;

/* ========================================
   BORDERS
   ======================================== */

export const BORDER_WIDTHS = {
  /** Subtle, thin borders */
  thin: '1px',
  /** Standard border width */
  base: '2px',
  /** Thick, prominent borders */
  thick: '4px',
} as const;

/* ========================================
   BORDER RADII
   ======================================== */

export const RADII = {
  /** No rounding */
  none: '0',
  /** Minimal rounding for technical elements */
  sm: '2px',
  /** Base rounding for most elements */
  base: '4px',
  /** Slightly more rounded */
  md: '6px',
  /** Rounded appearance */
  lg: '8px',
  /** Extra rounded */
  xl: '12px',
  /** Very rounded */
  '2xl': '16px',
  /** Fully rounded / pill-shaped */
  full: '9999px',
} as const;

/* ========================================
   OPACITY LEVELS
   ======================================== */

export const OPACITY = {
  none: 0,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  full: 1,
} as const;

/* ========================================
   SHADOWS / EFFECTS
   ======================================== */

export const SHADOWS = {
  /** Subtle elevation */
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  /** Base elevation */
  base: '0 2px 4px rgba(0, 0, 0, 0.1)',
  /** Medium elevation */
  md: '0 4px 12px rgba(0, 0, 0, 0.15)',
  /** Large elevation */
  lg: '0 12px 24px rgba(0, 0, 0, 0.15)',
  /** Extra large elevation */
  xl: '0 20px 40px rgba(0, 0, 0, 0.2)',
} as const;

/* ========================================
   Z-INDEX SCALE
   ======================================== */

export const Z_INDEX = {
  /** Base stacking context */
  base: 0,
  /** Dropdown menus, select lists */
  dropdown: 100,
  /** Sticky headers, positioned elements */
  sticky: 200,
  /** Fixed headers, persistent UI */
  fixed: 300,
  /** Modal backdrops, overlays */
  modalBackdrop: 400,
  /** Modal dialogs */
  modal: 500,
  /** Popovers, tooltips on top */
  popover: 600,
  /** Tooltips, highest interactive layer */
  tooltip: 700,
} as const;

/* ========================================
   TRANSITIONS
   ======================================== */

export const TRANSITIONS = {
  /** Fast transitions: 150ms */
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  /** Base transitions: 250ms */
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  /** Slow transitions: 350ms */
  slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

/* ========================================
   LINE HEIGHTS
   ======================================== */

export const LINE_HEIGHTS = {
  /** Tight spacing: 1.1 (110%) */
  tight: 1.1,
  /** Normal spacing: 1.4 (140%) */
  normal: 1.4,
  /** Relaxed spacing: 1.6 (160%) */
  relaxed: 1.6,
  /** Loose spacing: 1.7 (170%) */
  loose: 1.7,
} as const;

/* ========================================
   FOCUS & SELECTION STYLES
   ======================================== */

export const FOCUS_STYLES = {
  outlineWidth: '2px',
  outlineColor: COLORS_PRIMITIVE.copper,
  outlineOffset: '2px',
} as const;

export const SELECTION_STYLES = {
  backgroundColor: COLORS_PRIMITIVE.copper,
  color: COLORS_PRIMITIVE.warmWhite,
} as const;

/* ========================================
   TYPE EXPORTS
   ======================================== */

export type ColorPrimitive = typeof COLORS_PRIMITIVE;
export type ColorText = typeof COLORS_TEXT;
export type ColorSurface = typeof COLORS_SURFACE;
export type ColorBorder = typeof COLORS_BORDER;
export type Spacing = typeof SPACING;
export type Breakpoint = typeof BREAKPOINTS;
export type Container = typeof CONTAINERS;
export type BorderWidth = typeof BORDER_WIDTHS;
export type Radius = typeof RADII;
export type OpacityLevel = typeof OPACITY;
export type Shadow = typeof SHADOWS;
export type ZIndexLevel = typeof Z_INDEX;
export type Transition = typeof TRANSITIONS;
export type LineHeight = typeof LINE_HEIGHTS;
