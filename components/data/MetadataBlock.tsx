import { ReactNode, CSSProperties } from 'react';

interface MetadataBlockProps {
  /**
   * Metadata label (e.g., "LOCATION", "DATE", "CATEGORY")
   * Displayed in uppercase with generous tracking
   * Style: IBM Plex Mono, Medium, 10px, 2px tracking, Copper color
   */
  label: string | ReactNode;

  /**
   * Metadata value content
   * Can be text, number, or React node
   * Style: Inter Regular, 14px, dark text
   */
  value: string | number | ReactNode;

  /**
   * Optional CSS class for wrapper customization
   */
  className?: string;

  /**
   * Optional inline styles for customization
   */
  style?: CSSProperties;

  /**
   * Optional handler for click events
   */
  onClick?: () => void;

  /**
   * Whether to uppercase the label (default: true)
   */
  uppercase?: boolean;
}

/**
 * Metadata Block Component
 *
 * Label-value pair for displaying structured metadata (dates, locations, categories, etc.).
 * Specifications from Figma (161:326):
 * - Label: IBM Plex Mono, Medium, 10px, 2px tracking, Copper color (#a6825e)
 * - Value: Inter Regular, 14px, Near Black text (#1a1a1a)
 * - Gap between label and value: 4px
 * - Width: Variable (fits content)
 * - Height: 34px
 *
 * Common use cases:
 * - Displaying photo metadata (date, location, camera)
 * - Project metadata (year, client, discipline)
 * - Timeline entries (phase, date, status)
 * - Data cards (attribute + value pairs)
 *
 * Responsive behavior:
 * - Label scales down slightly on mobile (9px)
 * - Value maintains readability across all breakpoints
 * - Wrapping handled via flex-col layout
 *
 * Accessibility:
 * - Semantic structure (label describes value)
 * - High contrast: Copper text on light/dark surfaces
 * - Value has sufficient color contrast (WCAG AA)
 *
 * Variants:
 * - Inline: Use MetadataInline for horizontal layout
 * - Row: Use MetadataRow for table-like layouts
 */
export function MetadataBlock({
  label,
  value,
  className,
  style,
  onClick,
  uppercase = true,
}: MetadataBlockProps) {
  return (
    <div
      className={`
        flex flex-col gap-1 overflow-hidden
        ${onClick ? 'cursor-pointer' : ''}
        ${className || ''}
      `}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : 'definition'}
      data-node-id="161:326"
      data-name="Data/Metadata_Block"
    >
      {/* Label */}
      <label
        className="font-mono font-medium text-xs tracking-wide text-copper"
        style={{
          fontSize: '10px',
          letterSpacing: '2px',
          color: 'var(--color-copper, #a6825e)',
          fontFamily: 'var(--font-mono, monospace)',
          textTransform: uppercase ? 'uppercase' : 'none',
          lineHeight: '1.2',
        }}
      >
        {label}
      </label>

      {/* Value */}
      <div
        className="font-sans text-sm text-near-black wrap-break-word"
        style={{
          fontSize: '14px',
          color: 'var(--color-near-black, #1a1a1a)',
          fontFamily: 'var(--font-sans, sans-serif)',
          fontWeight: 400,
          lineHeight: '1.4',
        }}
      >
        {value}
      </div>
    </div>
  );
}

/**
 * Inline Metadata Component
 * For horizontal layout of label-value pairs
 * Useful for compact displays (status badges, pills, tags)
 */
interface MetadataInlineProps {
  label: string | ReactNode;
  value: string | number | ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function MetadataInline({
  label,
  value,
  className,
  style,
}: MetadataInlineProps) {
  return (
    <div
      className={`flex gap-2 items-baseline ${className || ''}`}
      style={style}
      role="definition"
    >
      {/* Label */}
      <span
        className="font-mono font-medium text-xs tracking-wide text-copper shrink-0"
        style={{
          fontSize: '10px',
          letterSpacing: '2px',
          color: 'var(--color-copper, #a6825e)',
          fontFamily: 'var(--font-mono, monospace)',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>

      {/* Separator */}
      <span className="text-gray-secondary">·</span>

      {/* Value */}
      <span
        className="font-sans text-sm text-near-black"
        style={{
          fontSize: '14px',
          color: 'var(--color-near-black, #1a1a1a)',
          fontFamily: 'var(--font-sans, sans-serif)',
        }}
      >
        {value}
      </span>
    </div>
  );
}

/**
 * Metadata Row Component
 * For table-like layouts with multiple metadata blocks
 * Useful for displaying structured data in rows (project details, timeline events, etc.)
 */
interface MetadataRowItem {
  label: string | ReactNode;
  value: string | number | ReactNode;
}

interface MetadataRowProps {
  items: MetadataRowItem[];
  className?: string;
  direction?: 'row' | 'column';
  gap?: 'sm' | 'md' | 'lg';
}

export function MetadataRow({
  items,
  className,
  direction = 'row',
  gap = 'md',
}: MetadataRowProps) {
  const gapClass = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }[gap];

  const directionClass = direction === 'row' ? 'flex-row' : 'flex-col';

  return (
    <div className={`flex ${directionClass} ${gapClass} ${className || ''}`}>
      {items.map((item, index) => (
        <MetadataBlock
          key={index}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
}

/**
 * Metadata List Component
 * For displaying multiple metadata blocks as a vertical list
 * Useful for details, specifications, or information pages
 */
interface MetadataListProps {
  items: MetadataRowItem[];
  columns?: 1 | 2 | 3;
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export function MetadataList({
  items,
  columns = 1,
  className,
  gap = 'md',
}: MetadataListProps) {
  const gapClass = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }[gap];

  const columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }[columns];

  return (
    <div className={`grid ${columnClass} ${gapClass} ${className || ''}`}>
      {items.map((item, index) => (
        <MetadataBlock
          key={index}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
}
