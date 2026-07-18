'use client';

import { CSSProperties, ReactNode } from 'react';

interface PageContainerProps {
  /**
   * Page content
   */
  children: ReactNode;

  /**
   * Page surface variant
   * - 'light': Light background (#faf8f5)
   * - 'dark': Dark background (#0f0f10)
   * Default: 'light'
   */
  variant?: 'light' | 'dark';

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;

  /**
   * Optional ARIA role (default: 'main')
   */
  role?: string;

  /**
   * Optional element id
   */
  id?: string;
}

/**
 * PageContainer Component
 *
 * Full-page container for chapter/case study layouts.
 * Provides consistent page-level width constraints and surface colors.
 *
 * Specifications from Figma (Node 164:2):
 * - Desktop width: 1440px
 * - Responsive: 100% on smaller screens
 * - Light variant: #faf8f5
 * - Dark variant: #0f0f10
 *
 * Use cases:
 * - Wrapper for entire case study pages
 * - Wrapper for chapter pages
 * - Container for multi-section layouts
 * - Ensures consistent max-width and surface color
 *
 * Responsive behavior:
 * - Desktop (1440px+): Full width with max-width constraint
 * - Tablet (768px+): 100% width with padding
 * - Mobile (390px): 100% width with padding
 *
 * Accessibility:
 * - Default role: 'main' (primary content area)
 * - Semantic page structure
 */
export function PageContainer({
  children,
  variant = 'light',
  className,
  style,
  role = 'main',
  id,
}: PageContainerProps) {
  const bgColor = variant === 'dark' ? 'var(--color-near-black, #0f0f10)' : 'var(--color-paper, #faf8f5)';

  const containerStyle: CSSProperties = {
    backgroundColor: bgColor,
    width: '100%',
    minHeight: '100vh',
    ...style,
  };

  return (
    <div
      className={className || 'w-full mx-auto overflow-x-clip'}
      style={containerStyle}
      data-node-id="164:2"
      data-name="Template_Case_Study_Page"
      id={id ?? (role === 'main' ? 'main-content' : undefined)}
      role={role}
    >
      {children}
    </div>
  );
}

/**
 * PageContainerInset Component
 *
 * Inner container for centered content within a page.
 * Provides consistent horizontal padding and max-width.
 *
 * Use cases:
 * - Content sections with consistent padding
 * - Centered text columns
 * - Full-width layouts that need inner constraints
 */
interface PageContainerInsetProps {
  /**
   * Inset content
   */
  children: ReactNode;

  /**
   * Content max-width (CSS value)
   * Default: 1280px (1440px container - 160px total padding)
   */
  maxWidth?: string | number;

  /**
   * Horizontal padding (CSS value)
   * Default: 80px (40px per side)
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

export function PageContainerInset({
  children,
  maxWidth = '1280px',
  padding = '80px',
  className,
  style,
}: PageContainerInsetProps) {
  const insetStyle: CSSProperties = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: typeof padding === 'number' ? `${padding}px` : padding,
    paddingRight: typeof padding === 'number' ? `${padding}px` : padding,
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    ...style,
  };

  return (
    <div
      className={className || 'mx-auto w-full'}
      style={insetStyle}
    >
      {children}
    </div>
  );
}
