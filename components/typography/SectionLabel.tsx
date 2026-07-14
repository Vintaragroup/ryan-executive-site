'use client';

import { CSSProperties, ReactNode } from 'react';

interface SectionLabelProps {
  /**
   * Label text to display
   * Displayed in IBM Plex Mono, 11px, Medium, 2px tracking, uppercase
   * Default: "SECTION LABEL"
   */
  children?: ReactNode;

  /**
   * Show/hide the accent line
   * Default: true
   */
  showAccent?: boolean;

  /**
   * Accent line color (hex or CSS color)
   * Default: copper (#a6825e)
   */
  accentColor?: string;

  /**
   * Accent line width (CSS value)
   * Default: 24px
   */
  accentWidth?: string | number;

  /**
   * Label text color (hex or CSS color)
   * Default: gray (#6b6b6b)
   */
  textColor?: string;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;

  /**
   * Optional aria-label for accessibility
   */
  ariaLabel?: string;

  /**
   * Alignment of the label
   * Default: 'start'
   */
  align?: 'start' | 'center' | 'end';
}

/**
 * Labels/Section_Label Component
 *
 * Section label with optional copper accent line.
 *
 * Specifications from Figma (Node 161:280):
 * - Accent line: 24px wide, 1px tall, copper (#a6825e)
 * - Gap between line and text: 12px
 * - Text: IBM Plex Mono, Medium, 11px, gray (#6b6b6b)
 * - Text tracking: 2px
 * - Text transform: uppercase
 * - Layout: flex with items-start
 *
 * Use cases:
 * - Section headers with accent
 * - Category labels
 * - Content dividers
 * - Editorial section markers
 * - Metadata/taxonomy labels
 *
 * Variants:
 * - Standard: With copper accent line (default)
 * - No accent: showAccent=false
 * - Custom colors: accentColor, textColor props
 *
 * Responsive behavior:
 * - Desktop: Full size with 24px accent line
 * - Tablet/Mobile: Accent line scales proportionally
 * - Text remains readable at all sizes
 *
 * Accessibility:
 * - Semantic use of text content
 * - ariaLabel for screen readers if needed
 * - Proper color contrast (7:1+ ratio)
 * - IBM Plex Mono for legibility
 */
export function SectionLabel({
  children = 'SECTION LABEL',
  showAccent = true,
  accentColor = '#a6825e',
  accentWidth = '24px',
  textColor = '#6b6b6b',
  className,
  style,
  ariaLabel,
  align = 'start',
}: SectionLabelProps) {
  const alignClass =
    align === 'center' ? 'justify-center' : align === 'end' ? 'justify-end' : '';

  const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    ...style,
  };

  const accentStyle: CSSProperties = {
    backgroundColor: accentColor,
    height: '1px',
    width: typeof accentWidth === 'number' ? `${accentWidth}px` : accentWidth,
    flexShrink: 0,
  };

  const textStyle: CSSProperties = {
    color: textColor,
    fontSize: '11px',
    fontFamily: 'var(--font-mono, "IBM Plex Mono")',
    fontWeight: 500,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    margin: 0,
  };

  return (
    <div
      className={className || `content-stretch flex gap-[12px] items-start overflow-clip relative ${alignClass}`}
      style={containerStyle}
      data-node-id="161:280"
      data-name="Labels/Section_Label"
      role="heading"
      aria-level={3}
      aria-label={ariaLabel}
    >
      {showAccent && (
        <div
          style={accentStyle}
          data-node-id="161:278"
          data-name="Accent_Line"
          role="presentation"
        />
      )}
      <p
        style={textStyle}
        data-node-id="161:279"
      >
        {children}
      </p>
    </div>
  );
}

/**
 * SectionLabelWithDescription Component
 *
 * Section label paired with optional description text.
 *
 * Use cases:
 * - Section headers with subtitles
 * - Category labels with descriptions
 * - Editorial section introduction
 * - Metadata sections with explanations
 */
interface SectionLabelWithDescriptionProps extends SectionLabelProps {
  /**
   * Description text below the label
   */
  description?: ReactNode;

  /**
   * Description text color
   * Default: #999999
   */
  descriptionColor?: string;

  /**
   * Description font size
   * Default: 14px
   */
  descriptionSize?: string | number;
}

export function SectionLabelWithDescription({
  children = 'SECTION LABEL',
  description,
  descriptionColor = '#999999',
  descriptionSize = '14px',
  showAccent = true,
  accentColor = '#a6825e',
  accentWidth = '24px',
  textColor = '#6b6b6b',
  className,
  style,
  ariaLabel,
  align = 'start',
}: SectionLabelWithDescriptionProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        ...style,
      }}
    >
      <SectionLabel
        showAccent={showAccent}
        accentColor={accentColor}
        accentWidth={accentWidth}
        textColor={textColor}
        className={className}
        ariaLabel={ariaLabel}
        align={align}
      >
        {children}
      </SectionLabel>
      {description && (
        <p
          style={{
            color: descriptionColor,
            fontSize: typeof descriptionSize === 'number' ? `${descriptionSize}px` : descriptionSize,
            margin: 0,
            fontFamily: 'var(--font-sans, "Inter")',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
