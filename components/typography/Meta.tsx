import { ReactNode } from 'react';

/**
 * Meta Label — 11px / Medium / 3px tracking / Uppercase
 * IBM Plex Mono
 *
 * Use for: Section markers, category labels, chapter headings
 * Style: All caps with extra tracking for systemic labels
 */
export function MetaLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`type-meta-label ${className || ''}`}>{children}</span>
  );
}

/**
 * Meta Caption — 12px / Regular / 0.5px tracking
 * IBM Plex Mono
 *
 * Use for: Timestamps, attribution, technical notation
 * Style: Regular weight, subtle tracking
 */
export function MetaCaption({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`type-meta-caption ${className || ''}`}>{children}</span>
  );
}

/**
 * Meta Small — 10px / Light / 1.5px tracking
 * IBM Plex Mono
 *
 * Use for: Minimal notation, ambient data, secondary metadata
 * Style: Light weight with gentle tracking
 */
export function MetaSmall({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`type-meta-small ${className || ''}`}>{children}</span>
  );
}

/**
 * Generic metadata component that accepts variant
 */
export function Meta({
  children,
  variant = 'caption',
  className,
}: {
  children: ReactNode;
  variant?: 'label' | 'caption' | 'small';
  className?: string;
}) {
  const variantClass = `type-meta-${variant}`;

  return (
    <span className={`${variantClass} ${className || ''}`}>{children}</span>
  );
}

/**
 * Timestamp — For dates and time information
 * Uses Meta Caption styling
 */
export function Timestamp({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <time className={`type-meta-caption ${className || ''}`}>{children}</time>
  );
}

/**
 * Citation — For attribution and source information
 * Uses Meta Caption styling
 */
export function Citation({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <cite className={`type-meta-caption ${className || ''}`}>{children}</cite>
  );
}
