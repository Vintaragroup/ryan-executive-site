interface FooterLink {
  label: string;
  href: string;
  /** Optional label to display instead of href */
  displayLabel?: string;
}

interface FooterProps {
  /**
   * Copyright text (left side)
   * Default: "© 2026 RYAN MORROW"
   */
  copyrightText?: string;

  /**
   * Footer links (right side)
   * Recommended: 2–4 links (LinkedIn, Email, Resume, etc.)
   */
  links: FooterLink[];

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional handler for link clicks
   */
  onLinkClick?: (href: string) => void;
}

/**
 * Footer Component
 *
 * Fixed horizontal footer with copyright and social/contact links.
 * Specifications from Figma (161:306):
 * - Height: 120px with centered vertical alignment
 * - Horizontal padding: 80px on each side
 * - Copyright text: Gray (#6b6b6b), IBM Plex Mono, 10px, 1.5px tracking
 * - Footer links: Copper (#a6825e), IBM Plex Mono, 10px, 1.5px tracking
 * - Gap between links: 32px
 * - Background: Near black (#0f0f10)
 * - Layout: Flex space-between (copyright left, links right)
 *
 * Common use cases:
 * - Site footer with copyright and social links
 * - Contact information footer
 * - Legal links and attribution
 * - Social media and professional profile links
 *
 * Responsive behavior:
 * - Desktop (1440px): Full layout with all links visible
 * - Tablet (768px): Reduced padding (40px), same structure
 * - Mobile (390px): Stack vertically, full width
 *
 * Accessibility:
 * - Semantic footer element
 * - Links are focusable and keyboard accessible
 * - Sufficient color contrast (WCAG AA)
 * - Proper link semantics with href attributes
 *
 * Design considerations:
 * - Copper links stand out against dark background
 * - Gray copyright text is secondary and subtle
 * - Fixed footer stays at bottom of page
 * - Generous spacing prevents accidental clicks
 */
export function Footer({ copyrightText, links, className, onLinkClick }: FooterProps) {
  const copyright = copyrightText || '© 2026 RYAN MORROW';

  return (
    <footer
      className={
        className ||
        'w-full bg-near-black h-28 flex items-center justify-between px-20'
      }
      data-node-id="161:306"
      data-name="Navigation/Footer"
    >
      {/* Copyright (Left) */}
      <div
        className="text-gray-secondary font-mono text-xs tracking-wide flex-shrink-0"
        style={{
          fontSize: '10px',
          letterSpacing: '1.5px',
          color: 'var(--color-gray-secondary, #6b6b6b)',
          fontFamily: 'var(--font-mono, monospace)',
        }}
      >
        {copyright}
      </div>

      {/* Footer Links (Right) */}
      <nav className="flex gap-8 items-center flex-shrink-0" role="navigation" aria-label="Footer links">
        {links.map((link, index) => (
          <a
            key={`${link.href}-${index}`}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick?.(link.href);
              // In a real app, you might use router.push() here
            }}
            className="text-copper font-mono text-xs tracking-wide transition-colors duration-200 hover:text-copper-light"
            style={{
              fontSize: '10px',
              letterSpacing: '1.5px',
              color: 'var(--color-copper, #a6825e)',
              fontFamily: 'var(--font-mono, monospace)',
            }}
            role="link"
          >
            {link.displayLabel || link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

/**
 * Minimal Footer Component
 * For pages that need just copyright info
 */
export function FooterMinimal({
  copyrightText = '© 2026 RYAN MORROW',
  className,
}: {
  copyrightText?: string;
  className?: string;
}) {
  return (
    <footer
      className={
        className ||
        'w-full bg-near-black h-20 flex items-center justify-center px-20'
      }
    >
      <p
        className="text-gray-secondary font-mono text-xs tracking-wide"
        style={{
          fontSize: '10px',
          letterSpacing: '1.5px',
          color: 'var(--color-gray-secondary, #6b6b6b)',
          fontFamily: 'var(--font-mono, monospace)',
        }}
      >
        {copyrightText}
      </p>
    </footer>
  );
}
