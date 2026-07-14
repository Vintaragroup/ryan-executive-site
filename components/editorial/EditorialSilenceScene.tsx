'use client';

import { CSSProperties, ReactNode } from 'react';

interface EditorialSilenceSceneProps {
  /**
   * Scene content
   * Can be text, images, or other React components
   */
  children?: ReactNode;

  /**
   * Background color (hex or CSS color value)
   * Default: Near black (#0f0f10)
   */
  backgroundColor?: string;

  /**
   * Scene width (CSS value)
   * Default: 100% (responsive)
   * Figma spec: 1440px
   */
  width?: string | number;

  /**
   * Scene height (CSS value)
   * Default: 900px (from Figma)
   * Can be 'auto' for flexible height
   */
  height?: string | number;

  /**
   * Minimum height (CSS value)
   * Default: 900px
   */
  minHeight?: string | number;

  /**
   * Content padding (CSS value)
   * Default: 0 (no padding - full bleed)
   */
  padding?: string | number;

  /**
   * Content alignment
   * - 'center': Center content both horizontally and vertically
   * - 'start': Align to top-left
   * - 'end': Align to bottom-right
   * - 'stretch': Fill available space
   * Default: 'center'
   */
  align?: 'center' | 'start' | 'end' | 'stretch';

  /**
   * Vertical alignment of content
   * Default: 'center'
   */
  verticalAlign?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * Optional CSS class for customization
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: CSSProperties;

  /**
   * Optional ARIA role (default: 'main')
   */
  role?: string;

  /**
   * Optional aria-label for accessibility
   */
  ariaLabel?: string;
}

/**
 * Editorial/Silence_Scene Component
 *
 * Dark, full-bleed scene container for editorial moments of silence.
 *
 * Specifications from Figma (Node 161:332):
 * - Width: 1440px (responsive)
 * - Height: 900px
 * - Background: Near black (#0f0f10)
 * - Layout: Full-bleed container
 * - Overflow: Hidden (clipping)
 *
 * Use cases:
 * - Full-screen editorial moments
 * - Quiet, contemplative scenes
 * - Featured image/video backgrounds
 * - Section transitions/breaks
 * - Hero sections with dark aesthetic
 * - Breathing room in dense content
 * - Featured testimonials or quotes
 * - Visual breaks between chapters
 * - Dark mode section dividers
 *
 * Design philosophy:
 * - "Silence" in editorial context represents whitespace/breathing room
 * - Dark background creates contemplative mood
 * - Flexible content allows for images, text, or mixed media
 * - Full-bleed layout emphasizes content over page structure
 *
 * Responsive behavior:
 * - Desktop (1440px): Full width and height as specified
 * - Tablet (768px+): Maintains aspect ratio, scales proportionally
 * - Mobile (390px): Full viewport width, maintains min height
 * - All tiers: Responsive via width/height props
 *
 * Content strategy:
 * - Leave substantial padding for content breathing room
 * - Prioritize minimal content for maximum impact
 * - Use negative space as design element
 * - Consider light text on dark background for contrast
 * - Support images, video, or text overlays
 *
 * Accessibility:
 * - Default role: 'main' (primary content area)
 * - Supports ariaLabel for context
 * - High contrast background for text overlay
 * - Semantic content structure within scene
 * - No keyboard traps or navigation issues
 */
export function EditorialSilenceScene({
  children,
  backgroundColor = '#0f0f10',
  width = '100%',
  height = '900px',
  minHeight = '900px',
  padding = 0,
  align = 'center',
  verticalAlign = 'center',
  className,
  style,
  role = 'main',
  ariaLabel,
}: EditorialSilenceSceneProps) {
  // Determine flex alignment based on align prop
  let justifyContent = 'center';
  if (align === 'start') justifyContent = 'flex-start';
  if (align === 'end') justifyContent = 'flex-end';
  if (align === 'stretch') justifyContent = 'stretch';

  // Determine flex vertical alignment based on verticalAlign prop
  let alignItems = 'center';
  if (verticalAlign === 'start') alignItems = 'flex-start';
  if (verticalAlign === 'end') alignItems = 'flex-end';
  if (verticalAlign === 'stretch') alignItems = 'stretch';

  const containerStyle: CSSProperties = {
    backgroundColor,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
    display: 'flex',
    justifyContent,
    alignItems,
    overflow: 'hidden',
    position: 'relative',
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    ...style,
  };

  return (
    <div
      className={className || 'overflow-clip relative'}
      style={containerStyle}
      data-node-id="161:332"
      data-name="Editorial/Silence_Scene"
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

/**
 * EditorialSilenceSceneWithText Component
 *
 * Scene pre-configured with centered text content.
 *
 * Use cases:
 * - Centered quotes or messages
 * - Section titles over dark background
 * - Featured testimonials
 * - Interstitial moments between sections
 */
interface EditorialSilenceSceneWithTextProps
  extends Omit<EditorialSilenceSceneProps, 'children'> {
  /**
   * Text content to center in the scene
   */
  text: ReactNode;

  /**
   * Text color
   * Default: light (#f5f5f5)
   */
  textColor?: string;

  /**
   * Text alignment
   * Default: 'center'
   */
  textAlign?: 'left' | 'center' | 'right';

  /**
   * Text size (CSS value or number for px)
   * Default: 48px
   */
  textSize?: string | number;

  /**
   * Max width for text (CSS value)
   * Default: 80% of container
   */
  maxWidth?: string | number;
}

export function EditorialSilenceSceneWithText({
  text,
  textColor = '#f5f5f5',
  textAlign = 'center',
  textSize = '48px',
  maxWidth = '80%',
  backgroundColor = '#0f0f10',
  width = '100%',
  height = '900px',
  minHeight = '900px',
  padding = '48px',
  align = 'center',
  verticalAlign = 'center',
  className,
  style,
  role = 'main',
  ariaLabel,
}: EditorialSilenceSceneWithTextProps) {
  const textStyle: CSSProperties = {
    color: textColor,
    fontSize: typeof textSize === 'number' ? `${textSize}px` : textSize,
    textAlign: textAlign as any,
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    lineHeight: '1.4',
    margin: 0,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
  };

  return (
    <EditorialSilenceScene
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      minHeight={minHeight}
      padding={0}
      align={align}
      verticalAlign={verticalAlign}
      className={className}
      style={style}
      role={role}
      ariaLabel={ariaLabel}
    >
      <p style={textStyle}>
        {text}
      </p>
    </EditorialSilenceScene>
  );
}

/**
 * EditorialSilenceSceneWithImage Component
 *
 * Scene pre-configured with background or centered image.
 *
 * Use cases:
 * - Full-bleed hero images
 * - Featured project images
 * - Atmospheric backgrounds
 * - Image + text overlay combinations
 */
interface EditorialSilenceSceneWithImageProps
  extends Omit<EditorialSilenceSceneProps, 'children'> {
  /**
   * Image source URL
   */
  imageSrc: string;

  /**
   * Image alt text
   */
  imageAlt: string;

  /**
   * Image object-fit CSS value
   * Default: 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';

  /**
   * Image object-position CSS value
   * Default: 'center'
   */
  objectPosition?: string;

  /**
   * Overlay content (optional)
   * Displayed on top of image
   */
  overlay?: ReactNode;

  /**
   * Overlay background color for dark overlay effect
   * Example: 'rgba(0, 0, 0, 0.4)'
   * Default: undefined (no overlay)
   */
  overlayColor?: string;
}

export function EditorialSilenceSceneWithImage({
  imageSrc,
  imageAlt,
  objectFit = 'cover',
  objectPosition = 'center',
  overlay,
  overlayColor,
  backgroundColor = '#0f0f10',
  width = '100%',
  height = '900px',
  minHeight = '900px',
  padding = 0,
  align = 'center',
  verticalAlign = 'center',
  className,
  style,
  role = 'main',
  ariaLabel,
}: EditorialSilenceSceneWithImageProps) {
  return (
    <EditorialSilenceScene
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      minHeight={minHeight}
      padding={padding}
      align={align}
      verticalAlign={verticalAlign}
      className={className}
      style={style}
      role={role}
      ariaLabel={ariaLabel}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit,
          objectPosition,
        }}
      />
      {overlayColor && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: overlayColor,
          }}
        />
      )}
      {overlay && (
        <div
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          {overlay}
        </div>
      )}
    </EditorialSilenceScene>
  );
}
