/**
 * Components Index
 *
 * Central export for all application components
 * Organized by functional area
 */

// Layouts
export {
  PageContainer,
  PageContainerInset,
  SectionContainer,
  SectionGrid,
  ChapterShell,
  ChapterSectionWithLabel,
  ChapterSectionFullBleed,
} from './layouts';

// Navigation
export { GlobalNav } from './navigation/GlobalNav';
export { Footer } from './navigation/Footer';

// Typography
export {
  DisplayHero,
  DisplayTitle,
  DisplaySubtitle,
  DisplayItalic,
  HeadingH1,
  HeadingH2,
  Heading,
} from './typography/Display';
export { BodyLarge, BodyRegular, BodySmall, Body, Lead } from './typography/Body';
export { NavLink, ButtonLabel, UIText } from './typography/UI';
export {
  MetaLabel,
  MetaCaption,
  MetaSmall,
  Meta,
  Timestamp,
  Citation,
} from './typography/Meta';
export { SectionLabel, SectionLabelWithDescription } from './typography/SectionLabel';

// Buttons
export { CTAButton, CTAButtonGroup } from './buttons/CTAButton';

// Data
export {
  MetadataBlock,
  MetadataInline,
  MetadataRow,
  MetadataList,
} from './data/MetadataBlock';
export { MetricCard, MetricGrid } from './data/MetricCard';
export { TimelineNode, Timeline } from './data/TimelineNode';

// Media
export { GalleryImage, GalleryGrid } from './media/GalleryImage';
export { ImagePlaceholder, ImagePlaceholderGrid } from './media/ImagePlaceholder';

// Editorial
export { CaseStudyCard, CaseStudyGrid } from './editorial/CaseStudyCard';
export {
  ChapterOpening,
  ChapterOpeningMinimal,
} from './editorial/ChapterOpening';
export {
  PullQuote,
  PullQuoteBlock,
  PullQuoteSeries,
} from './editorial/PullQuote';
export { DividersLine, DividersLineGroup } from './editorial/DividersLine';
export {
  EditorialSilenceScene,
  EditorialSilenceSceneWithText,
  EditorialSilenceSceneWithImage,
} from './editorial/EditorialSilenceScene';
