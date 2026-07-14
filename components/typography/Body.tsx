import { ReactNode } from 'react';

/**
 * Body Large — 20px / 170% leading
 * Inter
 *
 * Use for: Lead paragraphs, featured text passages
 * Best for: Introduction to main content, emphasized quotes
 */
export function BodyLarge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`type-body-large ${className || ''}`}>{children}</p>
  );
}

/**
 * Body Regular — 17px / 170% leading
 * Inter
 *
 * Use for: Primary reading text, long-form narrative
 * Best for: Main body copy, standard paragraph text
 * Optimized for: Sustained reading at comfortable distances
 */
export function BodyRegular({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`type-body-regular ${className || ''}`}>{children}</p>
  );
}

/**
 * Body Small — 15px / 160% leading
 * Inter
 *
 * Use for: Supporting text, captions, secondary information
 * Best for: Image captions, footnotes, sidebar content
 */
export function BodySmall({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`type-body-small ${className || ''}`}>{children}</p>
  );
}

/**
 * Generic body text component
 * Accepts variant to determine size
 */
export function Body({
  children,
  variant = 'regular',
  className,
  as = 'p',
}: {
  children: ReactNode;
  variant?: 'large' | 'regular' | 'small';
  className?: string;
  as?: 'p' | 'div' | 'span';
}) {
  const Tag = as;
  const variantClass = `type-body-${variant}`;

  return (
    <Tag className={`${variantClass} ${className || ''}`}>{children}</Tag>
  );
}

/**
 * Lead paragraph — Large body with emphasis
 * Used for story openings and narrative emphasis
 */
export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`type-body-large font-serif ${className || ''}`}>
      {children}
    </p>
  );
}
