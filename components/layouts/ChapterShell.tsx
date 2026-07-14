'use client';

import { CSSProperties, ReactNode } from 'react';
import { PageContainer, PageContainerInset } from './PageContainer';
import { SectionContainer } from './SectionContainer';

interface ChapterShellProps {
  /**
   * Page surface variant
   * - 'light': Light background
   * - 'dark': Dark background
   * Default: 'light'
   */
  variant?: 'light' | 'dark';

  /**
   * Hero section content
   */
  heroSection?: ReactNode;

  /**
   * Hero section height (CSS value)
   * Default: 800px (from Figma)
   */
  heroHeight?: string | number;

  /**
   * Hero image section
   */
  heroImageSection?: ReactNode;

  /**
   * Hero image height (CSS value)
   * Default: 800px
   */
  heroImageHeight?: string | number;

  /**
   * Main content area
   * Multiple sections can be nested here
   */
  children: ReactNode;

  /**
   * Optional navigation component (header)
   * Rendered above hero
   */
  header?: ReactNode;

  /**
   * Optional footer component
   * Rendered below content
   */
  footer?: ReactNode;

  /**
   * Optional CSS class
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;
}

/**
 * ChapterShell Component
 *
 * Complete layout wrapper for case study and chapter pages.
 * Combines page container with typical section structure.
 *
 * Specifications from Figma (Node 164:2):
 * - Hero section: 800px height
 * - Hero image: 800px height
 * - Content sections follow standard spacing
 * - Supports light and dark surfaces
 *
 * Structure:
 * - Header (optional)
 * - Hero section (optional)
 * - Hero image section (optional)
 * - Main content area (flexible sections)
 * - Footer (optional)
 *
 * Use cases:
 * - Case study page layouts
 * - Chapter page layouts
 * - Project showcase layouts
 * - Multi-section content pages
 *
 * Example usage:
 * ```tsx
 * <ChapterShell
 *   variant="light"
 *   header={<GlobalNav />}
 *   heroSection={<h1>Project Title</h1>}
 *   heroImageSection={<img src="..." />}
 *   footer={<Footer />}
 * >
 *   <SectionContainer height={400}>Content</SectionContainer>
 *   <SectionContainer height={500}>More content</SectionContainer>
 * </ChapterShell>
 * ```
 *
 * Responsive behavior:
 * - Desktop (1440px): Full-width sections with specified heights
 * - Tablet (768px+): Responsive sections with flexible heights
 * - Mobile (390px): Stacked sections, single column
 */
export function ChapterShell({
  variant = 'light',
  heroSection,
  heroHeight = '800px',
  heroImageSection,
  heroImageHeight = '800px',
  children,
  header,
  footer,
  className,
  style,
}: ChapterShellProps) {
  return (
    <PageContainer
      variant={variant}
      className={className}
      style={style}
    >
      {/* Header/Navigation */}
      {header && (
        <div
          data-node-id="164:0"
          data-name="Header"
        >
          {header}
        </div>
      )}

      {/* Hero Section */}
      {heroSection && (
        <SectionContainer
          height={heroHeight}
          verticalAlign="center"
          data-node-id="164:3"
          data-name="Section_Hero"
        >
          <PageContainerInset>
            {heroSection}
          </PageContainerInset>
        </SectionContainer>
      )}

      {/* Hero Image Section */}
      {heroImageSection && (
        <SectionContainer
          height={heroImageHeight}
          data-node-id="164:7"
          data-name="Section_Hero_Image"
        >
          {heroImageSection}
        </SectionContainer>
      )}

      {/* Main Content Area */}
      <div
        data-node-id="164:8-45"
        data-name="Main_Content"
      >
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div
          data-node-id="164:46"
          data-name="Footer"
        >
          {footer}
        </div>
      )}
    </PageContainer>
  );
}

/**
 * ChapterSectionWithLabel Component
 *
 * Standard content section with label and content area.
 * Used for sections like "THE BRIEF", "THE CHALLENGE", etc.
 *
 * Use cases:
 * - Labeled content sections
 * - Context/challenge/system sections
 * - Consistent section structure
 * - Readable text-based sections
 */
interface ChapterSectionWithLabelProps {
  /**
   * Section label (e.g., "THE BRIEF")
   */
  label?: ReactNode;

  /**
   * Section heading
   */
  heading?: ReactNode;

  /**
   * Section body content
   */
  children: ReactNode;

  /**
   * Section height (CSS value)
   * Default: auto
   */
  height?: string | number;

  /**
   * Vertical padding (CSS value)
   * Default: 96px
   */
  padding?: string | number;

  /**
   * Background color
   * Default: transparent
   */
  backgroundColor?: string;

  /**
   * Optional CSS class
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;
}

export function ChapterSectionWithLabel({
  label,
  heading,
  children,
  height,
  padding = '96px',
  backgroundColor,
  className,
  style,
}: ChapterSectionWithLabelProps) {
  const paddingValue = typeof padding === 'number' ? `${padding}px` : padding;

  return (
    <SectionContainer
      height={height}
      padding={paddingValue}
      backgroundColor={backgroundColor}
      className={className}
      style={style}
    >
      <PageContainerInset>
        {/* Label */}
        {label && (
          <div style={{ marginBottom: '46px' }}>
            {label}
          </div>
        )}

        {/* Heading */}
        {heading && (
          <div style={{ marginBottom: '80px' }}>
            {heading}
          </div>
        )}

        {/* Body Content */}
        {children}
      </PageContainerInset>
    </SectionContainer>
  );
}

/**
 * ChapterSectionFullBleed Component
 *
 * Full-bleed section for images, silence moments, or special content.
 * Extends edge-to-edge with no padding.
 *
 * Use cases:
 * - Hero images
 * - Silence/breathing room sections
 * - Special visual moments
 * - Full-width galleries
 */
interface ChapterSectionFullBleedProps {
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
   * Background color
   * Default: inherit
   */
  backgroundColor?: string;

  /**
   * Optional CSS class
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;
}

export function ChapterSectionFullBleed({
  children,
  height,
  backgroundColor,
  className,
  style,
}: ChapterSectionFullBleedProps) {
  return (
    <SectionContainer
      height={height}
      backgroundColor={backgroundColor}
      className={className}
      style={style}
    >
      {children}
    </SectionContainer>
  );
}
