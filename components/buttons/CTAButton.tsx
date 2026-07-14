import { ReactNode, CSSProperties } from 'react';

interface CTAButtonProps {
  /**
   * Button label/text to display
   * Displayed in Inter Medium, 12px, 2px tracking, uppercase
   */
  children: string | ReactNode;

  /**
   * Button variant
   * - 'light': Light background (#faf8f5), dark text (#1a1a1a), copper border
   * - 'dark': Dark background (#0f0f10), copper text (#a6825e), copper border
   */
  variant?: 'light' | 'dark';

  /**
   * Optional href for link behavior
   * Renders as <a> element when provided
   */
  href?: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;

  /**
   * Optional disabled state
   */
  disabled?: boolean;

  /**
   * Optional aria-label for accessibility
   */
  ariaLabel?: string;

  /**
   * Optional type (default: 'button')
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * CTA Button Component
 *
 * Call-to-action button with light and dark variants.
 * Specifications from Figma:
 *
 * Light Variant (161:288):
 * - Background: Paper (#faf8f5)
 * - Border: 1px copper (#a6825e) solid
 * - Padding: 48px horizontal, 16px vertical
 * - Text: Inter Medium, 12px, 2px tracking, dark (#1a1a1a), uppercase
 *
 * Dark Variant (161:285):
 * - Background: Near black (#0f0f10)
 * - Border: 1px copper (#a6825e) solid
 * - Padding: 48px horizontal, 16px vertical
 * - Text: Inter Medium, 12px, 2px tracking, copper (#a6825e), uppercase
 *
 * Common use cases:
 * - Primary call-to-action buttons
 * - Navigation buttons on landing pages
 * - Featured action prompts
 * - Section dividers with action buttons
 * - Contact/inquiry buttons
 *
 * Responsive behavior:
 * - Desktop (1440px): Full size with defined padding
 * - Tablet (768px): Maintained proportions, full-width or 90% width
 * - Mobile (390px): Full-width or stacked layout
 * - Padding scales down on mobile for better touch targets
 *
 * Accessibility:
 * - Semantic button or link element
 * - High contrast text (WCAG AA+)
 * - Copper border provides visual feedback
 * - Focus states (via CSS focus-visible)
 * - Optional aria-label for icon-only variants
 * - Disabled state support
 *
 * Design considerations:
 * - Copper border provides consistent visual language
 * - Light variant suits dark backgrounds
 * - Dark variant suits light backgrounds
 * - Full-width or fixed sizing depending on context
 * - Can be used with icon combinations
 *
 * Variants:
 * - Light (default): For use over dark backgrounds or in white space
 * - Dark: For use over light backgrounds or in dark sections
 *
 * Interactions:
 * - Hover: Opacity change (80%)
 * - Focus: Outline via focus-visible
 * - Active: No additional state (relies on :active pseudo-class)
 */
export function CTAButton({
  children,
  variant = 'light',
  href,
  onClick,
  className,
  style,
  disabled = false,
  ariaLabel,
  type = 'button',
}: CTAButtonProps) {
  const isLight = variant === 'light';

  const baseStyles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '48px',
    paddingRight: '48px',
    paddingTop: '16px',
    paddingBottom: '16px',
    border: '1px solid',
    borderColor: 'var(--color-copper, #a6825e)',
    backgroundColor: isLight
      ? 'var(--color-light-gray, #faf8f5)'
      : 'var(--color-near-black, #0f0f10)',
    color: isLight
      ? 'var(--color-near-black, #1a1a1a)'
      : 'var(--color-copper, #a6825e)',
    fontFamily: 'var(--font-sans, sans-serif)',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'opacity 150ms ease, background-color 150ms ease',
    whiteSpace: 'nowrap',
    ...style,
  };

  const content = (
    <span
      className={className || ''}
      style={baseStyles}
      data-node-id={isLight ? '161:288' : '161:285'}
      data-name={isLight ? 'Buttons/CTA_Light' : 'Buttons/CTA_Dark'}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLElement).style.opacity = '0.8';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.opacity = '1';
      }}
    >
      {children}
    </span>
  );

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className="inline-block no-underline"
        style={{
          pointerEvents: disabled ? 'none' : 'auto',
        }}
        aria-label={ariaLabel}
        role="button"
      >
        {content}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      className="inline-block focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {content}
    </button>
  );
}

/**
 * CTA Button Group Component
 * For displaying multiple CTA buttons in a row or column
 */
interface CTAButtonGroupProps {
  buttons: Array<{
    id: string;
    label: string;
    variant?: 'light' | 'dark';
    href?: string;
    onClick?: () => void;
  }>;
  direction?: 'row' | 'column';
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CTAButtonGroup({
  buttons,
  direction = 'row',
  gap = 'md',
  className,
}: CTAButtonGroupProps) {
  const gapSize = {
    sm: '12px',
    md: '24px',
    lg: '32px',
  }[gap];

  const directionFlex = direction === 'row' ? 'flex-row' : 'flex-col';

  return (
    <div
      className={`flex ${directionFlex} flex-wrap ${className || ''}`}
      style={{
        gap: gapSize,
      }}
      role="group"
    >
      {buttons.map((button) => (
        <CTAButton
          key={button.id}
          variant={button.variant}
          href={button.href}
          onClick={button.onClick}
        >
          {button.label}
        </CTAButton>
      ))}
    </div>
  );
}
