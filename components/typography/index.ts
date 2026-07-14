/**
 * Typography Components Index
 *
 * Central export for all typography components
 * Organized by semantic role and usage
 */

// Display
export { DisplayHero, DisplayTitle, DisplaySubtitle, DisplayItalic, HeadingH1, HeadingH2, Heading } from './Display';

// Body
export { BodyLarge, BodyRegular, BodySmall, Body, Lead } from './Body';

// UI
export { NavLink, ButtonLabel, UIText } from './UI';

// Metadata
export { MetaLabel, MetaCaption, MetaSmall, Meta, Timestamp, Citation } from './Meta';

// Labels
export { SectionLabel, SectionLabelWithDescription } from './SectionLabel';

/**
 * Typography System Reference
 *
 * DISPLAY TIER — Instrument Serif
 * - DisplayHero (120px, -2px tracking, 110% leading) — Section openings
 * - DisplayTitle (72px, -1.5px tracking, 110% leading) — Page titles
 * - DisplaySubtitle (48px, -1px tracking, 120% leading) — Subsections
 * - DisplayItalic (48px, -0.5px tracking, 130% leading) — Quoted text
 *
 * HEADING TIER — Instrument Serif
 * - HeadingH1 (40px, -0.5px tracking, 120% leading) — Section headers
 * - HeadingH2 (32px, -0.3px tracking, 130% leading) — Subsection headers
 *
 * BODY TIER — Inter
 * - BodyLarge (20px, 170% leading) — Lead paragraphs
 * - BodyRegular (17px, 170% leading) — Primary reading text
 * - BodySmall (15px, 160% leading) — Supporting text
 *
 * UI TIER — Inter
 * - NavLink (11px, Medium, 1.5px tracking) — Navigation items
 * - ButtonLabel (12px, Medium, 2px tracking) — Button text
 *
 * METADATA TIER — IBM Plex Mono
 * - MetaLabel (11px, Medium, 3px tracking) — Section labels
 * - MetaCaption (12px, Regular, 0.5px tracking) — Timestamps, attribution
 * - MetaSmall (10px, Light, 1.5px tracking) — Minimal notation
 */
