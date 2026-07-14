import { ReactNode } from 'react';

interface NavLink {
  label: string;
  href: string;
  /** Current route path for active state detection */
  isActive?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

interface GlobalNavProps {
  /** Brand/logo text */
  brandText?: string;
  /** Navigation links */
  links: NavLink[];
  /** Optional CSS class for customization */
  className?: string;
  /** Optional handler for link clicks */
  onLinkClick?: (href: string) => void;
}

/**
 * Global Navigation Bar Component
 *
 * Fixed horizontal navigation with brand name and navigation links.
 * Specifications from Figma (161:276):
 * - Height: 80px
 * - Horizontal padding: 80px
 * - Brand text: 14px, Semi Bold, 3px tracking
 * - Nav links: 11px, Medium, 1.5px tracking
 * - Gap between links: 48px
 * - Colors: Dark surface (near black) with warm white and gray text
 *
 * Responsive behavior:
 * - Desktop (1440px): Full layout with all links visible
 * - Tablet (768px): Reduced padding, same link structure
 * - Mobile (390px): Simplified layout (implementation varies by project needs)
 *
 * Accessibility:
 * - Semantic nav element
 * - Links are focusable and keyboard accessible
 * - Active link state indicated via isActive prop
 * - Proper contrast ratios (WCAG AA)
 */
export function GlobalNav({
  brandText = 'RYAN MORROW',
  links,
  className,
  onLinkClick,
}: GlobalNavProps) {
  return (
    <nav
      className={className || 'w-full bg-near-black h-20 flex items-center justify-between px-20'}
      role="navigation"
      aria-label="Main navigation"
      data-node-id="161:276"
      data-name="Navigation/Global_Nav"
    >
      {/* Brand/Logo */}
      <div className="shrink-0">
        <span
          className="font-sans font-semibold text-warm-white text-sm tracking-wider"
          style={{ letterSpacing: '3px', fontSize: '14px' }}
        >
          {brandText}
        </span>
      </div>

      {/* Navigation Links */}
      <ul
        className="flex gap-12 items-center shrink-0"
        role="menubar"
        style={{ gap: '48px' }}
      >
        {links.map((link, index) => (
          <li key={`${link.href}-${index}`} role="none">
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                link.onClick?.();
                onLinkClick?.(link.href);
              }}
              className={`
                font-sans font-medium text-xs tracking-wider
                transition-colors duration-200
                ${
                  link.isActive
                    ? 'text-warm-white'
                    : 'text-gray-secondary hover:text-warm-white'
                }
              `}
              style={{
                letterSpacing: '1.5px',
                fontSize: '11px',
                color: link.isActive ? 'var(--color-warm-white)' : 'var(--color-gray-secondary)',
              }}
              role="menuitem"
              aria-current={link.isActive ? 'page' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Navigation Link Item Component
 * For use outside of GlobalNav when individual link styling is needed
 */
export function NavLinkItem({
  href,
  children,
  isActive,
  onClick,
  className,
}: {
  href: string;
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`
        font-sans font-medium text-xs tracking-wider
        transition-colors duration-200
        ${
          isActive
            ? 'text-warm-white'
            : 'text-gray-secondary hover:text-warm-white'
        }
        ${className || ''}
      `}
      style={{
        letterSpacing: '1.5px',
        fontSize: '11px',
        color: isActive ? 'var(--color-warm-white)' : 'var(--color-gray-secondary)',
      }}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
}
