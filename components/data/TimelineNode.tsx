import { ReactNode, CSSProperties } from 'react';

interface TimelineNodeProps {
  /**
   * Timeline year or date
   * Displayed in copper, IBM Plex Mono, 11px, 2px tracking
   */
  year: string | number | ReactNode;

  /**
   * Role, milestone, or event title
   * Displayed in Instrument Serif, 24px, -0.3px tracking, dark text
   */
  title: string | ReactNode;

  /**
   * Organization or institution name
   * Displayed in Inter, 14px, gray text
   */
  organization: string | ReactNode;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional link href
   */
  href?: string;
}

/**
 * Timeline Node Component
 *
 * Card representing a single timeline event, milestone, or career progression.
 * Specifications from Figma (161:316):
 * - Card width: 320px
 * - Border: 1px light gray (#e5e2da) solid
 * - Padding: 24px on all sides
 * - Year: Copper (#a6825e), IBM Plex Mono, 11px, 2px tracking
 * - Title: Instrument Serif, 24px, -0.3px tracking, dark text
 * - Organization: Inter, 14px, gray text
 * - Gap between elements: 12px
 *
 * Common use cases:
 * - Career timeline displays
 * - Project history timelines
 * - Company milestones
 * - Educational/experience chronology
 * - Event histories
 *
 * Responsive behavior:
 * - Desktop (1440px): Fixed 320px width in grid/row layout
 * - Tablet (768px): 90% width or 2-column grid
 * - Mobile (390px): Full width, single column
 *
 * Accessibility:
 * - Semantic structure with proper headings
 * - High contrast border and text
 * - Optional link behavior for navigation
 * - Keyboard accessible
 *
 * Design considerations:
 * - Light border provides subtle visual containment
 * - Copper year highlights timeline progression
 * - Clean layout supports scanning
 * - Works well in vertical or horizontal timelines
 */
export function TimelineNode({
  year,
  title,
  organization,
  className,
  style,
  onClick,
  href,
}: TimelineNodeProps) {
  const content = (
    <div
      className={
        className ||
        'flex flex-col gap-3 p-6 border border-light-gray w-full max-w-[320px]'
      }
      style={{
        borderColor: 'var(--color-light-gray, #e5e2da)',
        ...style,
      }}
      data-node-id="161:316"
      data-name="Data/Timeline_Node"
    >
      {/* Year/Date */}
      <div
        className="font-mono text-copper text-xs tracking-wide shrink-0"
        style={{
          fontSize: '11px',
          letterSpacing: '2px',
          color: 'var(--color-copper, #a6825e)',
          fontFamily: 'var(--font-mono, monospace)',
          whiteSpace: 'nowrap',
        }}
      >
        {year}
      </div>

      {/* Title */}
      <h3
        className="font-serif text-near-black"
        style={{
          fontSize: '24px',
          letterSpacing: '-0.3px',
          color: 'var(--color-near-black, #1a1a1a)',
          fontFamily: 'var(--font-serif, Georgia, serif)',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h3>

      {/* Organization */}
      <p
        className="font-sans text-gray-secondary"
        style={{
          fontSize: '14px',
          color: 'var(--color-gray-secondary, #6b6b6b)',
          fontFamily: 'var(--font-sans, sans-serif)',
        }}
      >
        {organization}
      </p>
    </div>
  );

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className="block hover:opacity-80 transition-opacity duration-200 no-underline"
        role="article"
      >
        {content}
      </a>
    );
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="block text-left hover:opacity-80 transition-opacity duration-200 bg-transparent border-none cursor-pointer p-0 m-0"
        role="article"
        type="button"
      >
        {content}
      </button>
    );
  }

  // Otherwise render as static div
  return content;
}

/**
 * Timeline Component
 * For displaying multiple timeline nodes in a vertical or horizontal layout
 */
interface TimelineItem {
  id: string;
  year: string | number;
  title: string;
  organization: string;
  href?: string;
  onClick?: () => void;
}

interface TimelineProps {
  items: TimelineItem[];
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

export function Timeline({
  items,
  direction = 'vertical',
  className,
}: TimelineProps) {
  const directionClass =
    direction === 'vertical'
      ? 'flex-col'
      : 'flex-row overflow-x-auto pb-4';

  return (
    <div
      className={`flex ${directionClass} gap-4 ${className || ''}`}
      role="region"
      aria-label="Timeline"
    >
      {items.map((item) => (
        <TimelineNode
          key={item.id}
          year={item.year}
          title={item.title}
          organization={item.organization}
          href={item.href}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
