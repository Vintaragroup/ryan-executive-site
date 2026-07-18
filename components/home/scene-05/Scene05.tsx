import Image from 'next/image';
import styles from './Scene05.module.css';

const META = [
  ['PROGRAM', 'FIFA World Cup 2026'],
  ['ROLE', 'Executive Production & Ops'],
  ['SCALE', '16 Cities · 3 Nations'],
  ['VENDORS', '32+ Core Partners'],
  ['DURATION', '48-Month Roadmap'],
] as const;

const BODY_COPY = [
  'The scale of a World Cup is not measured in minutes on a clock, but in the synchronization of thousands of variables across continents. My role was the design of the operational substrate — credentialing systems, vendor orchestration, stadium logistics, LED integration, and the human choreography of 1,200+ production staff across three nations.',
  'We moved beyond traditional project management into systems architecture. Every decision — from the physical routing of 32 core vendor partners to the fan journey mapping across six stadium clusters — required a framework that could absorb complexity without breaking down.',
  "Success at this level requires a unique synthesis of editorial vision and mathematical precision. You aren't just shipping a product; you are orchestrating a moment of global culture with 48 months of preparation converging on a single opening whistle.",
] as const;

const METRICS = [
  ['16', 'CITIES INTEGRATED'],
  ['32+', 'VENDORS MANAGED'],
  ['1.2K', 'STAFF ORCHESTRATED'],
  ['03', 'NATIONS SYNCED'],
] as const;

const GOVERNANCE_STEPS = [
  'Executive Leadership',
  'Operational Governance',
  'Production Excellence',
  'Executive Visibility',
  'Decision Confidence',
] as const;

const NOTE_LINES = [
  'W47 D3 — CREDENTIAL LANES: ACTIVE',
  'LED INTEGRATION: 94% COMPLETE',
  'VENDOR CHECK-IN: 0600 LOCAL',
] as const;

function MetaBlocks({ variant }: { variant: 'desktop' | 'tablet' | 'mobile' }) {
  return (
    <div className={styles[`${variant}MetaColumn`]}>
      {META.map(([label, value]) => (
        <div className={styles[`${variant}MetaBlock`]} key={label}>
          <p className={styles[`${variant}MetaLabel`]}>{label}</p>
          <p className={styles[`${variant}MetaValue`]}>{value}</p>
        </div>
      ))}
    </div>
  );
}

function MetricCards({ variant }: { variant: 'desktop' | 'tablet' | 'mobile' }) {
  return (
    <div className={styles[`${variant}MetricsRow`]}>
      {METRICS.map(([value, label]) => (
        <div className={styles[`${variant}MetricCard`]} key={label}>
          <p className={styles[`${variant}MetricValue`]}>{value}</p>
          <p className={styles[`${variant}MetricLabel`]}>{label}</p>
        </div>
      ))}
    </div>
  );
}

function GovernanceFlow({ variant }: { variant: 'desktop' | 'tablet' | 'mobile' }) {
  return (
    <div className={styles[`${variant}EditorialBlock`]}>
      <p className={styles[`${variant}EditorialHeading`]}>{'// THE GOVERNANCE FLOW'}</p>
      <div className={styles[`${variant}GovernanceTrack`]}>
        {GOVERNANCE_STEPS.map((step, index) => {
          const stepClass =
            index === GOVERNANCE_STEPS.length - 1
              ? styles[`${variant}GovernanceStepLast`]
              : styles[`${variant}GovernanceStep`];

          return (
            <div className={stepClass} key={step}>
              <div className={styles[`${variant}GovernanceContent`]}>
                <div className={styles[`${variant}GovernanceCircle`]}>
                  <p className={styles[`${variant}GovernanceNumber`]}>{`0${index + 1}`}</p>
                </div>
                <p className={styles[`${variant}GovernanceLabel`]}>{step}</p>
              </div>
              {index < GOVERNANCE_STEPS.length - 1 ? (
                <div className={styles[`${variant}GovernanceConnector`]} />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuoteBlock({ variant }: { variant: 'desktop' | 'tablet' | 'mobile' }) {
  return (
    <div className={styles[`${variant}QuoteSection`]}>
      <p className={styles[`${variant}Quote`]}>
        {
          '"Complexity is not solved with more effort, but with more rigorous systems. We build the substrate for confidence."'
        }
      </p>
    </div>
  );
}

function NoteCard({ variant }: { variant: 'desktop' | 'tablet' | 'mobile' }) {
  return (
    <div className={styles[`${variant}NoteAnchor`]}>
      <div className={styles[`${variant}Note`]}>
        <p className={styles[`${variant}NoteHeading`]}>{'PROD SCHEDULE // VENUE 09 · MIA'}</p>
        {NOTE_LINES.map((line) => (
          <p className={styles[`${variant}NoteBody`]} key={line}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Scene05() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:30 166:47 166:285"
      data-name="SCENE_5_CHAPTER"
      aria-label="Featured case study"
    >
      <div className={styles.desktopVariant} data-node-id="150:30">
        <div className={styles.desktopIntroBlock}>
          <div className={styles.desktopIntroContent}>
            <p className={styles.desktopChapterLabel}>{'01 // CHAPTER'}</p>
            <p className={styles.desktopHeading}>{'The Architecture of a Global Phenomenon'}</p>
            <p className={styles.desktopDescription}>
              {
                "How operational architecture became the invisible foundation of the world's largest sporting event"
              }
            </p>
          </div>
        </div>

        <div className={styles.desktopHeroFrame}>
          <Image
            src="/images/home/scene-05/hero-desktop.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>

        <div className={styles.desktopFeatured}>
          <div className={styles.desktopBodyColumn}>
            {BODY_COPY.map((paragraph) => (
              <p className={styles.desktopBody} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <MetaBlocks variant="desktop" />
        </div>

        <MetricCards variant="desktop" />
        <GovernanceFlow variant="desktop" />
        <QuoteBlock variant="desktop" />

        <div className={styles.desktopGallerySection}>
          <div className={styles.desktopGalleryPrimary}>
            <Image
              src="/images/home/scene-05/gallery-primary-desktop.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 733px, 100vw"
              className={styles.image}
            />
            <NoteCard variant="desktop" />
          </div>

          <div className={styles.desktopGallerySecondary}>
            <div className={styles.desktopGallerySecondaryImage}>
              <Image
                src="/images/home/scene-05/gallery-secondary-top-desktop.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 515px, 100vw"
                className={styles.image}
              />
            </div>
            <div className={styles.desktopGallerySecondaryImage}>
              <Image
                src="/images/home/scene-05/gallery-secondary-bottom-desktop.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 515px, 100vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tabletVariant} data-node-id="166:47">
        <div className={styles.tabletIntroBlock}>
          <p className={styles.tabletChapterLabel}>{'01 // CHAPTER'}</p>
          <p className={styles.tabletHeading}>{'The Architecture of a Global Phenomenon'}</p>
          <p className={styles.tabletDescription}>
            {
              "How operational architecture became the invisible foundation of the world's largest sporting event"
            }
          </p>
        </div>

        <div className={styles.tabletHeroFrame}>
          <Image
            src="/images/home/scene-05/hero-tablet.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>

        <div className={styles.tabletFeatured}>
          <div className={styles.tabletNarration}>
            {BODY_COPY.map((paragraph) => (
              <p className={styles.tabletBody} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <MetaBlocks variant="tablet" />
        </div>

        <MetricCards variant="tablet" />
        <GovernanceFlow variant="tablet" />
        <QuoteBlock variant="tablet" />

        <div className={styles.tabletGallerySection}>
          <div className={styles.tabletGalleryPrimary}>
            <Image
              src="/images/home/scene-05/gallery-primary-tablet.jpg"
              alt=""
              fill
              sizes="(min-width: 480px) 672px, 100vw"
              className={styles.image}
            />
            <NoteCard variant="tablet" />
          </div>

          <div className={styles.tabletGallerySecondary}>
            <div className={styles.tabletGallerySecondaryImage}>
              <Image
                src="/images/home/scene-05/gallery-secondary-top-tablet.jpg"
                alt=""
                fill
                sizes="(min-width: 480px) 672px, 100vw"
                className={styles.image}
              />
            </div>
            <div className={styles.tabletGallerySecondaryImage}>
              <Image
                src="/images/home/scene-05/gallery-secondary-bottom-tablet.jpg"
                alt=""
                fill
                sizes="(min-width: 480px) 672px, 100vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileVariant} data-node-id="166:285">
        <div className={styles.mobileIntroBlock}>
          <p className={styles.mobileChapterLabel}>{'01 // CHAPTER'}</p>
          <p className={styles.mobileHeading}>{'The Architecture of a Global Phenomenon'}</p>
          <p className={styles.mobileDescription}>
            {
              "How operational architecture became the invisible foundation of the world's largest sporting event"
            }
          </p>
        </div>

        <div className={styles.mobileHeroFrame}>
          <Image
            src="/images/home/scene-05/hero-mobile.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>

        <div className={styles.mobileBodySection}>
          <div className={styles.mobileNarration}>
            {BODY_COPY.map((paragraph) => (
              <p className={styles.mobileBody} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <MetaBlocks variant="mobile" />
        </div>

        <MetricCards variant="mobile" />
        <GovernanceFlow variant="mobile" />
        <QuoteBlock variant="mobile" />

        <div className={styles.mobileGallerySection}>
          <div className={styles.mobileGalleryPrimary}>
            <Image
              src="/images/home/scene-05/gallery-primary-tablet.jpg"
              alt=""
              fill
              sizes="100vw"
              className={styles.image}
            />
            <NoteCard variant="mobile" />
          </div>
          <div className={styles.mobileGallerySecondaryImage}>
            <Image
              src="/images/home/scene-05/gallery-secondary-top-tablet.jpg"
              alt=""
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
          <div className={styles.mobileGallerySecondaryImage}>
            <Image
              src="/images/home/scene-05/gallery-secondary-bottom-tablet.jpg"
              alt=""
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}