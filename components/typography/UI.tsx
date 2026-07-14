import { ReactNode } from 'react';

/**
 * Navigation Link — 11px / Medium / 1.5px tracking / Uppercase
 * Inter
 *
 * Use for: Main navigation, menu items, link labels
 * Style: All caps with generous tracking
 */
export function NavLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`type-nav-link ${className || ''}`}>{children}</span>;
}

/**
 * Button Primary — 12px / Medium / 2px tracking / Uppercase
 * Inter
 *
 * Use for: Primary call-to-action buttons, major interactive elements
 * Style: All caps with generous tracking
 */
export function ButtonLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`type-button-primary ${className || ''}`}>{children}</span>
  );
}

/**
 * UI Text component that accepts variant
 */
export function UIText({
  children,
  variant = 'nav-link',
  className,
}: {
  children: ReactNode;
  variant?: 'nav-link' | 'button' | 'label';
  className?: string;
}) {
  const variantClass = {
    'nav-link': 'type-nav-link',
    button: 'type-button-primary',
    label: 'type-nav-link', // Same styling as nav link
  }[variant];

  return (
    <span className={`${variantClass} ${className || ''}`}>{children}</span>
  );
}
