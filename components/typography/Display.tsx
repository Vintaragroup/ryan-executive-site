import { ReactNode } from 'react';

/**
 * Display Hero — 120px / -2px tracking / 110% leading
 * Instrument Serif
 *
 * Use for: Section openings, major editorial moments, page hero text
 * Dark mode: Works on dark surfaces with Warm White text
 */
export function DisplayHero({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`type-display-hero ${className || ''}`}>{children}</h1>
  );
}

/**
 * Display Title — 72px / -1.5px tracking / 110% leading
 * Instrument Serif
 *
 * Use for: Page titles, significant divisions
 * Dark mode: Compatible with dark surfaces
 */
export function DisplayTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`type-display-title ${className || ''}`}>{children}</h2>
  );
}

/**
 * Display Subtitle — 48px / -1px tracking / 120% leading
 * Instrument Serif
 *
 * Use for: Subsection headers, featured text
 * Dark mode: Works on both light and dark surfaces
 */
export function DisplaySubtitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`type-display-subtitle ${className || ''}`}>{children}</h3>
  );
}

/**
 * Display Italic — 48px / -0.5px tracking / 130% leading
 * Instrument Serif, Italic
 *
 * Use for: Quoted text, emphasis, editorial commentary
 * Dark mode: Compatible with both light and dark surfaces
 */
export function DisplayItalic({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`type-display-italic ${className || ''}`}>{children}</p>
  );
}

/**
 * Heading H1 — 40px / -0.5px tracking / 120% leading
 * Instrument Serif
 *
 * Use for: Section headers, major subsections
 */
export function HeadingH1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`type-heading-h1 ${className || ''}`}>{children}</h2>
  );
}

/**
 * Heading H2 — 32px / -0.3px tracking / 130% leading
 * Instrument Serif
 *
 * Use for: Subsection headers, nested divisions
 */
export function HeadingH2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`type-heading-h2 ${className || ''}`}>{children}</h3>
  );
}

/**
 * Generic heading component that accepts heading level
 */
export function Heading({
  level = 'h2',
  children,
  className,
  variant,
}: {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
  variant?: 'h1' | 'h2';
}) {
  const Tag = level;
  const variantClass = variant
    ? `type-heading-${variant}`
    : `type-heading-h${level === 'h1' ? '1' : '2'}`;

  return (
    <Tag className={`${variantClass} ${className || ''}`}>{children}</Tag>
  );
}
