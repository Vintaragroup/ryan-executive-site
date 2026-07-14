import { ReactNode } from 'react';

interface ChapterOpeningProps {
  /**
   * Chapter label (e.g., "CHAPTER 01", "PART 1", "SECTION A")
   * Displayed in copper, IBM Plex Mono, 11px, 3px tracking, uppercase
   */
  chapterLabel: string | ReactNode;

  /**
   * Chapter title or main heading
   * Displayed in Instrument Serif, 72px, -1.5px tracking, warm white
   * Center-aligned for emphasis
   */
  title: string | ReactNode;

  /**
   * Chapter subtitle or contextual description
   * Displayed in Inter Light, 17px, 1.7 line height, gray text
   * Optional; subtitle can be empty string or null to omit
   */
  subtitle?: string | ReactNode;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional height constraint (default: auto-height based on content)
   */
  height?: string | number;

  /**
   * Optional vertical padding (default: 48px)
   */
  verticalPadding?: string | number;
}

/**
 * Chapter Opening Component
 *
 * Full-width chapter divider or section break with centered typography.
 * Creates dramatic visual separation between content sections.
 * Specifications from Figma (161:311):
 * - Full viewport width (responsive)
 * - Background: Near black (#0f0f10)
 * - Vertical padding: 48px (adjustable)
 * - Chapter label: Copper (#a6825e), IBM Plex Mono, 11px, 3px tracking
 * - Title: Instrument Serif, 72px, -1.5px tracking, warm white (#f5f2ed)
 * - Subtitle: Inter Light, 17px, 1.7 line height, gray text
 * - Gap between elements: 24px
 * - Layout: Flex column, centered
 *
 * Common use cases:
 * - Section/chapter breaks in long-form content
 * - Portfolio section dividers
 * - Narrative content chapter markers
 * - Editorial content structures
 * - Dark content transitions
 *
 * Responsive behavior:
 * - Desktop (1440px): Full width with 1440px max-width container
 * - Tablet (768px): Full viewport width
 * - Mobile (390px): Full viewport width with responsive padding
 * - Title scales down on mobile via existing typography system
 *
 * Accessibility:
 * - Semantic section element
 * - Proper heading hierarchy (title as h2)
 * - High contrast: Warm white on dark background
 * - Subtitle as supplementary text
 *
 * Design considerations:
 * - Dark background provides visual drama
 * - Copper label adds visual interest
 * - Large typography commands attention
 * - Works well as page section dividers
 * - Can include optional decorative elements
 *
 * Variants:
 * - With subtitle: Full descriptive opening
 * - Subtitle-less: Minimal, focus on title
 * - Custom height: For hero sections or featured openings
 */
export function ChapterOpening({
  chapterLabel,
  title,
  subtitle,
  className,
  height,
  verticalPadding = 48,
}: ChapterOpeningProps) {
  return (
    <section
      className={
        className ||
        'w-full bg-near-black flex flex-col gap-6 items-center justify-center overflow-clip px-20'
      }
      style={{
        backgroundColor: 'var(--color-near-black, #0f0f10)',
        paddingTop: typeof verticalPadding === 'number' ? `${verticalPadding}px` : verticalPadding,
        paddingBottom: typeof verticalPadding === 'number' ? `${verticalPadding}px` : verticalPadding,
        ...(height && {
          minHeight: typeof height === 'number' ? `${height}px` : height,
        }),
      }}
      data-node-id="161:311"
      data-name="Editorial/Chapter_Opening"
    >
      {/* Chapter Label */}
      <p
        className="font-mono text-copper text-xs tracking-widest"
        style={{
          fontSize: '11px',
          letterSpacing: '3px',
          color: 'var(--color-copper, #a6825e)',
          fontFamily: 'var(--font-mono, monospace)',
          fontWeight: 500,
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        {chapterLabel}
      </p>

      {/* Chapter Title */}
      <h2
        className="font-serif text-warm-white text-center wrap-break-word"
        style={{
          fontSize: 'clamp(48px, 8vw, 72px)',
          letterSpacing: '-1.5px',
          color: 'var(--color-warm-white, #f5f2ed)',
          fontFamily: 'var(--font-serif, Georgia, serif)',
          lineHeight: 1.1,
          margin: 0,
          maxWidth: '90%',
        }}
      >
        {title}
      </h2>

      {/* Chapter Subtitle (Optional) */}
      {subtitle && (
        <p
          className="font-sans text-gray-secondary text-center wrap-break-word"
          style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--color-gray-secondary, #6b6b6b)',
            fontFamily: 'var(--font-sans, sans-serif)',
            fontWeight: 300,
            margin: 0,
            maxWidth: '90%',
          }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}

/**
 * Minimal Chapter Opening Component
 * For simple chapter breaks without subtitle
 */
export function ChapterOpeningMinimal({
  chapterLabel,
  title,
  className,
}: {
  chapterLabel: string | ReactNode;
  title: string | ReactNode;
  className?: string;
}) {
  return (
    <ChapterOpening
      chapterLabel={chapterLabel}
      title={title}
      subtitle={undefined}
      className={className}
      verticalPadding={32}
    />
  );
}
