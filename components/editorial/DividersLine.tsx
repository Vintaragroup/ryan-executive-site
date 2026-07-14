'use client';

import { CSSProperties } from 'react';

interface DividersLineProps {
  /**
   * Line variant/style
   * - 'copper': Copper (#a6825e) - default
   * - 'subtle': Gray (#6b6b6b)
   * - 'custom': Use custom color via color prop
   */
  variant?: 'copper' | 'subtle' | 'custom';

  /**
   * Custom color (hex or CSS color value)
   * Used when variant='custom'
   */
  color?: string;

  /**
   * Line width in pixels or CSS value
   * Default: 120px (from Figma spec for copper)
   */
  width?: string | number;

  /**
   * Line height/thickness in pixels or CSS value
   * Default: 1px
   */
  height?: string | number;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;

  /**
   * Optional ARIA role (default: 'presentation')
   */
  role?: string;
}

/**
 * Dividers/Copper_Line Component
 *
 * Simple horizontal line divider for visual separation.
 *
 * Specifications from Figma (Node 161:282):
 * - Default width: 120px
 * - Height: 1px
 * - Default background: Copper (#a6825e)
 * - Layout: Horizontal line
 *
 * Use cases:
 * - Section separators
 * - Visual breaks between content
 * - Accent lines in labels
 * - Decorative dividers
 * - Part of larger components (e.g., SectionLabel)
 *
 * Variants:
 * - copper: Copper color (#a6825e) - primary accent
 * - subtle: Gray (#6b6b6b) - secondary/muted
 * - custom: Custom color via color prop
 *
 * Responsive behavior:
 * - Desktop: Full width as specified
 * - Tablet/Mobile: Can be scaled via width prop
 * - Can be made responsive with CSS variables or Tailwind
 *
 * Accessibility:
 * - Default role: 'presentation' (decorative)
 * - Does not announce to screen readers
 */
export function DividersLine({
  variant = 'copper',
  color,
  width = '120px',
  height = '1px',
  className,
  style,
  role = 'presentation',
}: DividersLineProps) {
  // Determine the background color based on variant
  let bgColor = '#a6825e'; // copper (default)
  if (variant === 'subtle') {
    bgColor = '#6b6b6b'; // gray
  } else if (variant === 'custom' && color) {
    bgColor = color;
  }

  const computedStyle: CSSProperties = {
    backgroundColor: bgColor,
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  return (
    <div
      className={className || 'overflow-clip relative'}
      style={computedStyle}
      data-node-id="161:282"
      data-name="Dividers/Copper_Line"
      role={role}
    />
  );
}

/**
 * DividersLineGroup Component
 *
 * Helper component for displaying multiple dividers in a layout.
 * Useful for creating patterns of divider lines.
 *
 * Use cases:
 * - Multiple section separators
 * - Decorative line patterns
 * - Visual rhythm elements
 * - Gridded divider layouts
 */
interface DividersLineGroupProps {
  /**
   * Number of dividers to display
   */
  count: number;

  /**
   * Variant applied to all dividers
   */
  variant?: 'copper' | 'subtle' | 'custom';

  /**
   * Custom color (if variant='custom')
   */
  color?: string;

  /**
   * Direction: 'row' (horizontal) or 'column' (vertical)
   * Default: 'column'
   */
  direction?: 'row' | 'column';

  /**
   * Gap between dividers (CSS value)
   */
  gap?: string;

  /**
   * Optional CSS class
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;
}

export function DividersLineGroup({
  count,
  variant = 'copper',
  color,
  direction = 'column',
  gap = '16px',
  className,
  style,
}: DividersLineGroupProps) {
  return (
    <div
      className={
        className ||
        `flex ${direction === 'row' ? 'flex-row' : 'flex-col'} gap-[${gap}]`
      }
      style={{
        display: 'flex',
        flexDirection: direction === 'row' ? 'row' : 'column',
        gap,
        ...style,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <DividersLine
          key={index}
          variant={variant}
          color={color}
        />
      ))}
    </div>
  );
}
