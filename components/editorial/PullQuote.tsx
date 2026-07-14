import { ReactNode } from 'react';

interface PullQuoteProps {
  /**
   * The quote text to display
   * Displayed in Instrument Serif Italic, 28px, dark text
   * 1.5 line height for comfortable reading
   */
  children: string | ReactNode;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional quotation mark style
   * Default: Uses styled quotation mark from Instrument Serif
   */
  showQuoteMark?: boolean;

  /**
   * Optional attribution/source
   * Appears below the quote in smaller text
   */
  attribution?: string | ReactNode;

  /**
   * Optional author name
   * Displayed as metadata below quote
   */
  author?: string;
}

/**
 * Pull Quote Component
 *
 * Highlighted quotation for editorial emphasis.
 * Creates visual break and emphasizes memorable text passages.
 * Specifications from Figma (161:292):
 * - Container width: 800px (responsive)
 * - Horizontal padding: 80px
 * - Vertical padding: 48px
 * - Height: Flexible based on content
 * - Opening quote mark: 72px, copper (#a6825e), Instrument Serif
 * - Quote text: Instrument Serif Italic, 28px, dark text (#1a1a1a)
 * - Line height: 1.5 for readable, spaced text
 * - Gap between mark and text: 24px
 *
 * Common use cases:
 * - Editorial pull quotes from articles/essays
 * - Highlighted testimonials or insights
 * - Narrative content emphasis
 * - Featured statements or declarations
 * - Article sidebars or highlights
 *
 * Responsive behavior:
 * - Desktop (1440px): 800px width, centered
 * - Tablet (768px): 90% width with reduced padding
 * - Mobile (390px): Full width, reduced padding, responsive font size
 * - Quote mark size reduces on mobile
 *
 * Accessibility:
 * - Semantic blockquote element
 * - Quote text is readable and high contrast
 * - Proper line height for legibility
 * - Optional: figure/figcaption for attribution
 *
 * Design considerations:
 * - Copper quote mark provides visual accent
 * - Italic styling emphasizes quotation quality
 * - Large text commands attention
 * - Works well as page feature or article element
 * - Can be combined with metadata components
 *
 * Variants:
 * - With attribution: Full attribution below quote
 * - Author only: Simple author line
 * - Quote only: Minimal, focus on text alone
 */
export function PullQuote({
  children,
  className,
  showQuoteMark = true,
  attribution,
  author,
}: PullQuoteProps) {
  return (
    <figure
      className={
        className ||
        'flex flex-col gap-6 px-20 py-12 w-full max-w-content mx-auto'
      }
      data-node-id="161:292"
      data-name="Editorial/Pull_Quote"
    >
      {/* Opening Quote Mark (Optional) */}
      {showQuoteMark && (
        <div
          className="text-copper text-left shrink-0"
          style={{
            fontSize: 'clamp(48px, 8vw, 72px)',
            color: 'var(--color-copper, #a6825e)',
            fontFamily: 'var(--font-serif, Georgia, serif)',
            lineHeight: 1,
            marginBottom: '8px',
            letterSpacing: '-0.5px',
          }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
      )}

      {/* Quote Text */}
      <blockquote
        className="font-serif italic text-near-black text-center wrap-break-word m-0"
        style={{
          fontSize: 'clamp(20px, 4vw, 28px)',
          lineHeight: 1.5,
          color: 'var(--color-near-black, #1a1a1a)',
          fontFamily: 'var(--font-serif, Georgia, serif)',
          fontStyle: 'italic',
        }}
      >
        {children}
      </blockquote>

      {/* Attribution (Optional) */}
      {(attribution || author) && (
        <figcaption
          className="font-mono text-gray-secondary text-center text-xs tracking-wide"
          style={{
            fontSize: '11px',
            letterSpacing: '1.5px',
            color: 'var(--color-gray-secondary, #6b6b6b)',
            fontFamily: 'var(--font-mono, monospace)',
            marginTop: '8px',
          }}
        >
          {attribution && <div>{attribution}</div>}
          {author && <div style={{ marginTop: '4px' }}>— {author}</div>}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Pull Quote Block Component
 * Full-width pull quote section for page feature
 */
export function PullQuoteBlock({
  children,
  attribution,
  author,
  className,
}: Omit<PullQuoteProps, 'showQuoteMark'> & { className?: string }) {
  return (
    <div className="w-full bg-paper py-16 px-4">
      <PullQuote
        className={className || 'w-full max-w-4xl mx-auto'}
        attribution={attribution}
        author={author}
        showQuoteMark
      >
        {children}
      </PullQuote>
    </div>
  );
}

/**
 * Pull Quote Series Component
 * For displaying multiple related pull quotes
 */
interface PullQuoteItem {
  id: string;
  text: string | ReactNode;
  attribution?: string;
  author?: string;
}

interface PullQuoteSeriesProps {
  items: PullQuoteItem[];
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export function PullQuoteSeries({
  items,
  className,
  gap = 'lg',
}: PullQuoteSeriesProps) {
  const gapClass = {
    sm: 'gap-6',
    md: 'gap-8',
    lg: 'gap-12',
  }[gap];

  return (
    <div
      className={`flex flex-col ${gapClass} ${className || ''}`}
      role="region"
      aria-label="Pull quotes"
    >
      {items.map((item) => (
        <PullQuote
          key={item.id}
          attribution={item.attribution}
          author={item.author}
        >
          {item.text}
        </PullQuote>
      ))}
    </div>
  );
}
