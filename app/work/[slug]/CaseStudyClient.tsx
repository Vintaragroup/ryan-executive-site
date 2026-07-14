'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import {
  PageContainer,
  PageContainerInset,
  SectionContainer,
  GlobalNav,
  Footer,
  DisplayHero,
  DisplayTitle,
  HeadingH1,
  HeadingH2,
  Body,
  Meta,
  MetricCard,
  EditorialSilenceScene,
} from '@/components';

interface CaseStudyClientProps {
  slug: string;
}

/**
 * Case Study Client Component
 *
 * Renders the interactive case study page content.
 * Kept separate from page.tsx to allow static generation at the parent level.
 */
export function CaseStudyClient({ slug }: CaseStudyClientProps) {
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'System', href: '/system' },
    { label: 'Journey', href: '/journey' },
    { label: 'Contact', href: '/contact' },
  ];

  const footerLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Email', href: 'mailto:hello@ryanmorrow.com' },
  ];

  return (
    <PageContainer>
      {/* Navigation */}
      <GlobalNav links={navLinks} />

      {/* SECTION 1: OPENING SPREAD */}
      <section>
        <SectionContainer>
          <div className="pt-20 pb-12 md:pt-24 md:pb-16">
            <div className="space-y-6">
              <Meta className="text-copper">{caseStudy.opening.subtitle}</Meta>
              <DisplayHero className="text-near-black">
                {caseStudy.opening.title}
              </DisplayHero>
              <Body className="text-gray-secondary max-w-2xl">
                {caseStudy.opening.heroDescription}
              </Body>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* SECTION 2: HERO IMAGE */}
      <section className="relative h-96 md:h-screen lg:h-screen overflow-hidden bg-light-gray">
        <Image
          src={caseStudy.opening.heroImageUrl}
          alt={caseStudy.opening.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* SECTION 3: CONTEXT (THE BRIEF) */}
      <section>
        <PageContainerInset>
          <SectionContainer>
            <div className="py-20 md:py-24 space-y-8">
              <div>
                <Meta className="text-copper block mb-4">THE BRIEF</Meta>
                <HeadingH1 className="text-near-black mb-8">
                  {caseStudy.context.heading}
                </HeadingH1>
              </div>

              <div className="space-y-6 max-w-3xl">
                {caseStudy.context.paragraphs.map((paragraph, idx) => (
                  <Body key={idx} className="text-near-black">
                    {paragraph}
                  </Body>
                ))}
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SECTION 4: METRICS (4-UP GRID) */}
      <section>
        <PageContainerInset>
          <SectionContainer>
            <div className="py-12 md:py-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {caseStudy.metrics.map((metric, idx) => (
                  <MetricCard key={idx} value={metric.value} label={metric.label} />
                ))}
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SECTION 5: SILENCE (EDITORIAL SPACE) */}
      <EditorialSilenceScene className="min-h-[60vh] md:min-h-[40vh]" />

      {/* SECTION 6: CHALLENGE (THE CHALLENGE) */}
      <section>
        <PageContainerInset>
          <SectionContainer>
            <div className="py-20 md:py-24 space-y-8">
              <div>
                <Meta className="text-copper block mb-4">THE CHALLENGE</Meta>
                <HeadingH1 className="text-near-black mb-8">
                  {caseStudy.challenge.heading}
                </HeadingH1>
              </div>

              <div className="space-y-6 max-w-3xl">
                {caseStudy.challenge.paragraphs.map((paragraph, idx) => (
                  <Body key={idx} className="text-near-black">
                    {paragraph}
                  </Body>
                ))}
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SECTION 7: SYSTEM (THE OPERATIONAL SYSTEM) */}
      <section>
        <PageContainerInset>
          <SectionContainer>
            <div className="py-20 md:py-24 space-y-8">
              <div>
                <Meta className="text-copper block mb-4">THE OPERATIONAL SYSTEM</Meta>
                <HeadingH1 className="text-near-black mb-8">
                  {caseStudy.system.heading}
                </HeadingH1>
              </div>

              <div className="space-y-6 max-w-3xl">
                {caseStudy.system.paragraphs.map((paragraph, idx) => (
                  <Body key={idx} className="text-near-black">
                    {paragraph}
                  </Body>
                ))}
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SECTION 8: EVIDENCE GALLERY */}
      <section>
        <PageContainerInset>
          <SectionContainer>
            <div className="py-20 md:py-24 space-y-12">
              <Meta className="text-copper block">EVIDENCE</Meta>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {caseStudy.gallery.images.map((image, idx) => (
                  <figure key={idx} className="space-y-4">
                    <div className="relative aspect-square overflow-hidden bg-light-gray rounded">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {image.caption && (
                      <figcaption>
                        <Meta className="text-gray-secondary">{image.caption}</Meta>
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SECTION 9: REFLECTION (CLOSING QUOTE) */}
      <section>
        <PageContainerInset>
          <SectionContainer>
            <div className="py-20 md:py-24 max-w-3xl">
              <div className="space-y-6">
                <DisplayTitle className="text-near-black">
                  {`"${caseStudy.reflection.quote}"`}
                </DisplayTitle>
                {caseStudy.reflection.attribution && (
                  <Body className="text-gray-secondary">
                    {`\u2014 ${caseStudy.reflection.attribution}`}
                  </Body>
                )}
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SECTION 10: NEXT PROJECT NAVIGATION */}
      {caseStudy.nextProject && (
        <section>
          <PageContainerInset>
            <SectionContainer>
              <div className="py-20 md:py-24 space-y-12 border-t border-light-gray pt-12">
                <Meta className="text-copper">NEXT PROJECT</Meta>
                <Link href={`/work/${caseStudy.nextProject.id}`} className="group block">
                  <HeadingH2 className="text-near-black group-hover:text-copper transition-colors">
                    {caseStudy.nextProject.name} →
                  </HeadingH2>
                </Link>
              </div>
            </SectionContainer>
          </PageContainerInset>
        </section>
      )}

      {/* SECTION 11: FOOTER */}
      <Footer links={footerLinks} />
    </PageContainer>
  );
}
