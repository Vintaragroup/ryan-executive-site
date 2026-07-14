import { ReactNode } from 'react';
import Image from 'next/image';

interface GalleryImageProps {
  /**
   * Image source URL
   * Can be: relative path, external URL, or Next.js Image optimized URL
   */
  src?: string;

  /**
   * Alt text for image (required for accessibility)
   */
  alt?: string;

  /**
   * Image caption text or React node
   * Displays below the image frame
   * Placeholder: "[Image caption — location, date, context]"
   */
  caption?: string | ReactNode;

  /**
   * Image width (for Next.js Image, defaults to 600)
   */
  width?: number;

  /**
   * Image height (for Next.js Image, defaults to 400)
   */
  height?: number;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Image will fill its container while maintaining aspect ratio
   */
  fill?: boolean;

  /**
   * Optional handler for image click
   */
  onClick?: () => void;

  /**
   * Optional loading behavior
   */
  loading?: 'lazy' | 'eager';
}

/**
 * Gallery Image Component
 *
 * Image display with caption, optimized for image galleries and portfolios.
 * Specifications from Figma (161:330):
 * - Container width: 600px (responsive)
 * - Image frame height: 400px
 * - Caption text size: 11px, Regular, 0.5px tracking (IBM Plex Mono)
 * - Caption color: Gray secondary (#6b6b6b)
 * - Gap between image and caption: 12px
 * - Background: Dark gray (#2a2a2a)
 *
 * Responsive behavior:
 * - Desktop (1440px): Full 600px width
 * - Tablet (768px): Scaled proportionally
 * - Mobile (390px): Full viewport width with proper scaling
 *
 * Accessibility:
 * - Alt text required for SEO and screen readers
 * - Semantic figure/figcaption structure
 * - High contrast caption text
 * - Supports lazy loading for performance
 *
 * Next.js Image Integration:
 * - Uses Next.js Image for automatic optimization
 * - Responsive images via srcSet
 * - Lazy loading by default
 * - Optional: pass fill={true} for container-fill behavior
 */
export function GalleryImage({
  src,
  alt = 'Gallery image',
  caption = '[Image caption — location, date, context]',
  width = 600,
  height = 400,
  className,
  fill = false,
  onClick,
  loading = 'lazy',
}: GalleryImageProps) {
  return (
    <figure
      className={className || 'flex flex-col gap-3 w-full max-w-[600px]'}
      data-node-id="161:330"
      data-name="Media/Gallery_Image"
    >
      {/* Image Frame */}
      <div
        className="relative bg-surface-dark-secondary w-full overflow-hidden"
        style={{
          aspectRatio: `${width} / ${height}`,
          backgroundColor: 'var(--color-surface-dark-secondary, #2a2a2a)',
        }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        aria-label={alt}
      >
        {src ? (
          fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 390px) 100vw, (max-width: 768px) 100vw, 600px"
              className="object-cover"
              loading={loading}
              priority={loading === 'eager'}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 390px) 100vw, (max-width: 768px) 100vw, 600px"
              className="w-full h-full object-cover"
              loading={loading}
              priority={loading === 'eager'}
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-secondary text-sm">
            [Image placeholder]
          </div>
        )}
      </div>

      {/* Caption */}
      <figcaption
        className="font-mono text-gray-secondary text-xs tracking-tight w-full break-words"
        style={{
          fontSize: '11px',
          letterSpacing: '0.5px',
          color: 'var(--color-gray-secondary, #6b6b6b)',
          fontFamily: 'var(--font-mono, monospace)',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * Gallery Grid Component for multiple images
 * Useful for displaying multiple GalleryImage components in a responsive grid
 */
interface GalleryGridProps {
  images: Array<{
    id: string;
    src?: string;
    alt: string;
    caption?: string | ReactNode;
  }>;
  columns?: 1 | 2 | 3;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GalleryGrid({
  images,
  columns = 2,
  gap = 'md',
  className,
}: GalleryGridProps) {
  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  }[gap];

  const columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }[columns];

  return (
    <div className={`grid ${columnClass} ${gapClass} ${className || ''}`}>
      {images.map((image) => (
        <GalleryImage
          key={image.id}
          src={image.src}
          alt={image.alt}
          caption={image.caption}
        />
      ))}
    </div>
  );
}
