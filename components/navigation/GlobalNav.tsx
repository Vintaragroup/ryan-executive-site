'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import styles from './GlobalNav.module.css';

interface NavLink {
  label: string;
  href: string;
  isActive?: (pathname: string) => boolean;
}

interface GlobalNavProps {
  brandText?: string;
  links?: NavLink[];
  ariaLabel?: string;
}

const defaultLinks: NavLink[] = [
  {
    label: 'Work',
    href: '/work',
    isActive: (pathname) => pathname === '/work' || pathname.startsWith('/work/'),
  },
  {
    label: 'System',
    href: '/system',
    isActive: (pathname) => pathname === '/system',
  },
  {
    label: 'Journey',
    href: '/journey',
    isActive: (pathname) => pathname === '/journey',
  },
  {
    label: 'Field Notes',
    href: '/field-notes',
    isActive: (pathname) => pathname === '/field-notes',
  },
  {
    label: 'Thinking',
    href: '/thinking',
    isActive: (pathname) => pathname === '/thinking' || pathname.startsWith('/thinking/'),
  },
  {
    label: 'Contact',
    href: '/contact',
    isActive: (pathname) => pathname === '/contact',
  },
];

export function GlobalNav({
  brandText = 'RYAN MORROW',
  links = defaultLinks,
  ariaLabel = 'Global navigation',
}: GlobalNavProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const previousMenuOpenRef = useRef(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuId = useId();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (previousMenuOpenRef.current && !mobileMenuOpen) {
      triggerRef.current?.focus();
    }

    previousMenuOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={styles.root} data-node-id="161:276" data-name="Navigation/Global_Nav">
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <nav className={styles.bar} aria-label={ariaLabel}>
        <Link className={styles.brand} href="/" aria-current={pathname === '/' ? 'page' : undefined}>
          {brandText}
        </Link>

        <div className={styles.links}>
          {links.map((link) => {
            const isActive = link.isActive?.(pathname) ?? pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${isActive ? styles.linkCurrent : ''}`.trim()}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          ref={triggerRef}
          type="button"
          className={styles.menuButton}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls={menuId}
        >
          <span className={styles.menuLine} aria-hidden="true" />
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className={styles.overlay}>
          <button
            type="button"
            className={styles.overlayBackdrop}
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          />

          <div className={styles.overlayContent}>
            <nav className={styles.overlayHeader} aria-label={ariaLabel}>
              <Link className={styles.brand} href="/" onClick={closeMobileMenu} aria-current={pathname === '/' ? 'page' : undefined}>
                {brandText}
              </Link>

              <button
                type="button"
                className={styles.overlayClose}
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                aria-expanded="true"
                aria-controls={menuId}
              >
                <span className={styles.menuLine} aria-hidden="true" />
              </button>
            </nav>

            <div className={styles.overlayPanel} id={menuId}>
              <div className={styles.overlayLinks}>
                {links.map((link) => {
                  const isActive = link.isActive?.(pathname) ?? pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`${styles.overlayLink} ${isActive ? styles.overlayLinkCurrent : ''}`.trim()}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

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
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.link} ${isActive ? styles.linkCurrent : ''} ${className || ''}`.trim()}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
