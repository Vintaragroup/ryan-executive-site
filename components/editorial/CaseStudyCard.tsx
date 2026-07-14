import { ReactNode } from 'react';
import Image from 'next/image';

interface CaseStudyCardProps {
  /**
   * Project image source URL
   * Recommended: 440px width, 280px height for optimal display
   */
  image?: string;

  /**
   * Alt text for image (required for accessibility)
   */
  imageAlt?: string;

  /**
   * Metadata label (e.g., "2022 · GLOBAL EVENT")
   * Displayed in copper, IBM Plex Mono, 10px, 1.5px tracking
   */
  metadata: string | ReactNode;

  /**
   * Project name or title
   * Displayed in Instrument Serif, 28px, -0.3px tracking, dark text
   */
  title: string | ReactNode;

  /**
   * Brief project description (1–2 sentences)
   * Displayed in Inter, 15px, 1.6 line height
   */
  description: string | ReactNode;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional link href (makes card clickable if provided)
   */
  href?: string;
}

/**
 * Case Study Card Component
 *
 * Editorial card displaying project/case study information with image and metadata.
 * Specifications from Figma (161:322):
 * - Card width: 440px
 * - Image frame height: 280px, dark gray background
 * - Metadata: Copper (#a6825e), IBM Plex Mono, 10px, 1.5px tracking
 * - Title: Instrument Serif, 28px, -0.3px tracking, dark text
 * - Description: Inter, 15px, 1.6 line height, gray text
 * - Gap between elements: 16px
 *
 * Use cases:
 * - Project portfolio cards
 * - Case study listing pages
 * - Work samples in galleries
 * - Project archive displays
 *
 * Responsive behavior:
 * - Desktop (1440px): Full 440px width
 * - Tablet (768px): 90% width or 2-column grid
 * - Mobile (390px): Full width, single column
 *
 * Accessibility:
 * - Semantic structure with proper heading hierarchy
 * - Image alt text required for screen readers
 * - Optional link behavior for navigation
 * - High contrast text on all backgrounds
 *
 * Variants:
 * - Clickable: Pass href or onClick for interactive behavior
 * - Static: Display-only mode for information
 */
export function CaseStudyCard({
  image,
  imageAlt = 'Project image',
  metadata,
  title,
  description,
  className,
  onClick,
  href,
}: CaseStudyCardProps) {
  const content = (
    <div
      className={className || 'flex flex-col gap-4 w-full max-w-[440px]'}
      data-node-id="161:322"
      data-name="Editorial/Case_Study_Card"
    >
      {/* Image Frame */}
      <div
        className="relative bg-surface-dark-secondary w-full overflow-hidden"
        style={{
          aspectRatio: '440 / 280',
          backgroundColor: 'var(--color-surface-dark-secondary, #2a2a2a)',
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 390px) 100vw, (max-width: 768px) 100vw, 440px"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-secondary text-sm">
            [Image placeholder]
          </div>
        )}
      </div>

      {/* Metadata Label */}
      <div
        className="font-mono text-copper text-xs tracking-wide"
        style={{
          fontSize: '10px',
          letterSpacing: '1.5px',
          color: 'var(--color-copper, #a6825e)',
          fontFamily: 'var(--font-mono, monospace)',
          whiteSpace: 'nowrap',
        }}
      >
        {metadata}
      </div>

      {/* Title */}
      <h3
        className="font-serif text-near-black break-words"
        style={{
          fontSize: '28px',
          letterSpacing: '-0.3px',
          color: 'var(--color-near-black, #1a1a1a)',
          fontFamily: 'var(--font-serif, Georgia, serif)',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-sans text-gray-secondary break-words"
        style={{
          fontSize: '15px',
          lineHeight: 1.6,
          color: 'var(--color-gray-secondary, #6b6b6b)',
          fontFamily: 'var(--font-sans, sans-serif)',
        }}
      >
        {description}
      </p>
    </div>
  );

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className="block hover:opacity-80 transition-opacity duration-200"
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
        className="block text-left hover:opacity-80 transition-opacity duration-200 bg-transparent border-none cursor-pointer p-0"
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
 * Case Study Grid Component
 * For displaying multiple case study cards in a responsive grid
 */
interface CaseStudyGridProps {
  items: Array<{
    id: string;
    image?: string;
    imageAlt?: string;
    metadata: string;
    title: string;
    description: string;
    href?: string;
    onClick?: () => void;
  }>;
  columns?: 1 | 2 | 3;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CaseStudyGrid({
  items,
  columns = 2,
  gap = 'md',
  className,
}: CaseStudyGridProps) {
  const gapClass = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
  }[gap];

  const columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }[columns];

  return (
    <div
      className={`grid ${columnClass} ${gapClass} ${className || ''}`}
      role="region"
      aria-label="Case studies"
    >
      {items.map((item) => (
        <CaseStudyCard
          key={item.id}
          image={item.image}
          imageAlt={item.imageAlt}
          metadata={item.metadata}
          title={item.title}
          description={item.description}
          href={item.href}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
