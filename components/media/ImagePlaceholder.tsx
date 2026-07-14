import { CSSProperties, ReactNode } from 'react';

interface ImagePlaceholderProps {
  /**
   * Optional placeholder text
   * Default: "[IMAGE PLACEHOLDER]"
   * Displayed in IBM Plex Mono, 12px, 2px tracking, gray text
   */
  text?: string | ReactNode;

  /**
   * Container width
   * Default: 800px (responsive)
   */
  width?: string | number;

  /**
   * Container height
   * Default: auto-height based on content
   */
  height?: string | number;

  /**
   * Optional aspect ratio to maintain
   * Examples: '16/9', '4/3', '1/1'
   */
  aspectRatio?: string;

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
   * Optional role (default: 'img')
   */
  role?: string;

  /**
   * Optional aria-label for accessibility
   */
  ariaLabel?: string;
}

/**
 * Image Placeholder Component
 *
 * Dark container for displaying image placeholders.
 * Used during development, design mockups, or when actual images are unavailable.
 * Specifications from Figma (161:299):
 * - Background: Dark secondary surface (#2a2a2a)
 * - Width: 800px (responsive to container)
 * - Height: Flexible based on content or aspect ratio
 * - Placeholder text: IBM Plex Mono, 12px, 2px tracking, gray (#6b6b6b)
 * - Centered flex layout with centered content
 *
 * Common use cases:
 * - Placeholder for missing images
 * - Gallery or portfolio mockups
 * - Design system documentation
 * - Responsive image testing
 * - Temporary content while images load
 * - Figma design handoff mockups
 *
 * Responsive behavior:
 * - Desktop (1440px): Full 800px width
 * - Tablet (768px): 90% width or responsive to container
 * - Mobile (390px): Full width with reduced height
 * - Aspect ratio maintained if specified
 *
 * Accessibility:
 * - Semantic img role (or custom role)
 * - Optional aria-label for context
 * - High contrast placeholder text
 * - Proper semantic structure
 *
 * Design considerations:
 * - Dark background contrasts with light page backgrounds
 * - Gray placeholder text provides visual hierarchy
 * - Monospace font signals temporary/placeholder status
 * - Can replace with actual image without layout shift
 *
 * Variants:
 * - Text placeholder: With centered label text
 * - Aspect ratio: Maintains specific ratio (16:9, 4:3, 1:1, etc.)
 * - Sized: Fixed dimensions or responsive sizing
 *
 * Integration:
 * - Can be replaced with GalleryImage component for production
 * - Works well in grid layouts (e.g., GalleryGrid)
 * - Useful for Figma design file mockups and handoffs
 */
export function ImagePlaceholder({
  text = '[IMAGE PLACEHOLDER]',
  width = '800px',
  height,
  aspectRatio,
  className,
  style,
  onClick,
  role = 'img',
  ariaLabel,
}: ImagePlaceholderProps) {
  const containerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--surface-dark-secondary, #2a2a2a)',
    width: typeof width === 'number' ? `${width}px` : width,
    ...(height && {
      height: typeof height === 'number' ? `${height}px` : height,
    }),
    ...(aspectRatio && {
      aspectRatio,
    }),
    cursor: onClick ? 'pointer' : 'default',
    transition: 'opacity 150ms ease',
    ...style,
  };

  return (
    <div
      className={className || 'overflow-clip'}
      style={containerStyles}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel || 'Image placeholder'}
      data-node-id="161:299"
      data-name="Media/Image_Placeholder"
      onMouseEnter={(e) => {
        if (onClick) {
          (e.currentTarget as HTMLElement).style.opacity = '0.8';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.opacity = '1';
      }}
    >
      {/* Placeholder Text */}
      <p
        className="font-mono text-gray-secondary text-xs tracking-wide flex-shrink-0 m-0"
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '12px',
          letterSpacing: '2px',
          color: 'var(--color-gray-secondary, #6b6b6b)',
          fontWeight: 400,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </p>
    </div>
  );
}

/**
 * Image Placeholder Grid Component
 * For displaying multiple placeholders in a grid layout
 */
interface ImagePlaceholderGridProps {
  /**
   * Number of columns in grid
   * Default: 3 (responsive: 1 on mobile, 2 on tablet, 3 on desktop)
   */
  columns?: number | { mobile: number; tablet: number; desktop: number };

  /**
   * Gap between grid items
   * Default: '24px'
   */
  gap?: string;

  /**
   * Number of placeholder items to display
   * Default: 6
   */
  count?: number;

  /**
   * Custom placeholder text for each item
   * If array provided, used for specific items
   */
  text?: string | string[];

  /**
   * Placeholder width
   * Default: '100%' (fill grid cell)
   */
  width?: string | number;

  /**
   * Placeholder height
   * Default: '400px'
   */
  height?: string | number;

  /**
   * Optional className
   */
  className?: string;
}

export function ImagePlaceholderGrid({
  columns = 3,
  gap = '24px',
  count = 6,
  text = '[IMAGE PLACEHOLDER]',
  width = '100%',
  height = '400px',
  className,
}: ImagePlaceholderGridProps) {
  const textArray = Array.isArray(text) ? text : Array(count).fill(text);

  return (
    <div
      className={`grid ${className || ''}`}
      style={{
        gridTemplateColumns:
          typeof columns === 'number'
            ? `repeat(${columns}, 1fr)`
            : `repeat(${columns.desktop}, 1fr)`,
        gap,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <ImagePlaceholder
          key={index}
          text={textArray[index] || '[IMAGE PLACEHOLDER]'}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
}
