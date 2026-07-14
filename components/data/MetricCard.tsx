import { CSSProperties, ReactNode } from 'react';

interface MetricCardProps {
  /**
   * The metric value to display
   * Can be text, number, or React node
   * Style: Instrument Serif, 48px, -1px tracking, copper color
   */
  value: string | number | ReactNode;

  /**
   * The metric label describing the value
   * Style: IBM Plex Mono, 11px, 2px tracking, gray text, uppercase
   */
  label: string | ReactNode;

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
 * Metric Card Component
 *
 * Small card displaying a single metric with label.
 * Useful for dashboards, statistics displays, and key performance indicators.
 * Specifications from Figma (161:296):
 * - Card size: 280px width, 140px height
 * - Padding: 32px on all sides
 * - Border: 1px light gray (#e5e2da) solid
 * - Metric value: Instrument Serif, 48px, -1px tracking, copper color (#a6825e)
 * - Label: IBM Plex Mono, 11px, 2px tracking, gray text (#6b6b6b)
 * - Gap between value and label: 8px
 *
 * Common use cases:
 * - Dashboard metrics (users, revenue, growth)
 * - Statistics pages (years of experience, projects completed)
 * - Key performance indicators (KPIs)
 * - Capability matrices (vendor partners, team size)
 * - Achievement cards (awards, milestones)
 *
 * Responsive behavior:
 * - Desktop (1440px): Fixed 280px width
 * - Tablet (768px): 90% width or 2-column grid
 * - Mobile (390px): Full width, single column
 *
 * Accessibility:
 * - Semantic structure (value in heading, label in subheading)
 * - High contrast: Copper on light background, gray label
 * - Optional link behavior for clickable metrics
 * - Screen reader friendly
 *
 * Design considerations:
 * - Copper metrics create visual hierarchy
 * - Gray border provides subtle containment
 * - Generous spacing for comfortable reading
 * - Works well in grids or scattered layouts
 */
export function MetricCard({
  value,
  label,
  className,
  style,
  onClick,
  href,
}: MetricCardProps) {
  const content = (
    <div
      className={
        className ||
        'flex flex-col gap-2 p-8 border border-light-gray w-full max-w-[280px] h-[140px] justify-start'
      }
      style={{
        borderColor: 'var(--color-light-gray, #e5e2da)',
        ...style,
      }}
      data-node-id="161:296"
      data-name="Data/Metric_Card"
    >
      {/* Metric Value */}
      <div
        className="font-serif text-copper leading-tight"
        style={{
          fontSize: '48px',
          letterSpacing: '-1px',
          color: 'var(--color-copper, #a6825e)',
          fontFamily: 'var(--font-serif, Georgia, serif)',
          fontWeight: 400,
          lineHeight: 1,
          marginBottom: '4px',
        }}
      >
        {value}
      </div>

      {/* Metric Label */}
      <div
        className="font-mono text-gray-secondary text-xs tracking-wide"
        style={{
          fontSize: '11px',
          letterSpacing: '2px',
          color: 'var(--color-gray-secondary, #6b6b6b)',
          fontFamily: 'var(--font-mono, monospace)',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        {label}
      </div>
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
 * Metric Grid Component
 * For displaying multiple metrics in a responsive grid layout
 */
interface MetricGridProps {
  items: Array<{
    id: string;
    value: string | number;
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MetricGrid({
  items,
  columns = 3,
  gap = 'md',
  className,
}: MetricGridProps) {
  const gapClass = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  }[gap];

  const columnClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div
      className={`grid ${columnClass} ${gapClass} ${className || ''}`}
      role="region"
      aria-label="Metrics"
    >
      {items.map((item) => (
        <MetricCard
          key={item.id}
          value={item.value}
          label={item.label}
          href={item.href}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
