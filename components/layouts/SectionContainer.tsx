'use client';

import { CSSProperties, ReactNode } from 'react';

interface SectionContainerProps {
  /**
   * Section content
   */
  children: ReactNode;

  /**
   * Section height (CSS value)
   * Default: auto
   */
  height?: string | number;

  /**
   * Minimum height (CSS value)
   * Useful for full-bleed sections
   */
  minHeight?: string | number;

  /**
   * Section background color
   * Default: transparent (inherits from parent)
   */
  backgroundColor?: string;

  /**
   * Vertical padding (CSS value)
   * Default: 0
   */
  padding?: string | number;

  /**
   * Content alignment
   * - 'start': Align to top
   * - 'center': Center content vertically
   * - 'end': Align to bottom
   * - 'stretch': Fill available space
   * Default: 'start'
   */
  verticalAlign?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * Layout display type
   * - 'flex': Flex layout
   * - 'block': Block layout
   * - 'grid': Grid layout
   * Default: 'block'
   */
  display?: 'flex' | 'block' | 'grid';

  /**
   * Optional CSS class
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;

  /**
   * Optional ARIA role
   */
  role?: string;

  /**
   * Optional aria-label
   */
  ariaLabel?: string;
}

/**
 * SectionContainer Component
 *
 * Flexible section wrapper for page layouts.
 * Used to structure and space distinct content sections.
 *
 * Typical heights from Figma template:
 * - Hero sections: 800px
 * - Content sections: 380-412px
 * - Image sections: 500-730px
 * - Silence sections: 400px
 *
 * Use cases:
 * - Wrapping major page sections
 * - Full-width sections with consistent height
 * - Creating visual rhythm and spacing
 * - Section containers with background colors
 * - Grid or flex-based layouts
 *
 * Responsive behavior:
 * - Desktop: Full specified height
 * - Tablet/Mobile: Responsive height with flexible containers
 * - Can adapt to content with auto height
 */
export function SectionContainer({
  children,
  height,
  minHeight,
  backgroundColor,
  padding = 0,
  verticalAlign = 'start',
  display = 'block',
  className,
  style,
  role,
  ariaLabel,
}: SectionContainerProps) {
  // Determine vertical alignment based on display type
  let alignItems: string | undefined;
  let justifyContent: string | undefined;

  if (display === 'flex') {
    if (verticalAlign === 'center') {
      alignItems = 'center';
      justifyContent = 'center';
    } else if (verticalAlign === 'end') {
      alignItems = 'flex-end';
      justifyContent = 'flex-end';
    } else if (verticalAlign === 'stretch') {
      alignItems = 'stretch';
    }
    // 'start' is default flex behavior
  }

  const sectionStyle: CSSProperties = {
    width: '100%',
    height: typeof height === 'number' ? `${height}px` : height,
    minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
    backgroundColor,
    paddingTop: typeof padding === 'number' ? `${padding}px` : padding,
    paddingBottom: typeof padding === 'number' ? `${padding}px` : padding,
    display,
    alignItems,
    justifyContent,
    ...style,
  };

  return (
    <section
      className={className || 'w-full overflow-clip relative'}
      style={sectionStyle}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}

/**
 * SectionGrid Component
 *
 * Grid-based section for image galleries and multi-column layouts.
 *
 * Use cases:
 * - Gallery grids (3-column, 2-column, etc.)
 * - Content grids with consistent spacing
 * - Responsive grid layouts
 * - Image evidence sections
 */
interface SectionGridProps {
  /**
   * Grid content/items
   */
  children: ReactNode;

  /**
   * Number of columns
   * Default: 3
   */
  columns?: number;

  /**
   * Gap between grid items (CSS value)
   * Default: 24px
   */
  gap?: string | number;

  /**
   * Padding around grid (CSS value)
   * Default: 0
   */
  padding?: string | number;

  /**
   * Optional CSS class
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;
}

export function SectionGrid({
  children,
  columns = 3,
  gap = '24px',
  padding = 0,
  className,
  style,
}: SectionGridProps) {
  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    width: '100%',
    ...style,
  };

  return (
    <div
      className={className || 'w-full'}
      style={gridStyle}
    >
      {children}
    </div>
  );
}
