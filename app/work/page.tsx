'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PageContainer, PageContainerInset, SectionContainer } from '@/components/layouts';
import { GlobalNav } from '@/components/navigation';
import { Footer } from '@/components/navigation';
import { DisplayHero, DisplayTitle, HeadingH1, HeadingH2, Body, Meta } from '@/components/typography';
import { SectionLabel } from '@/components/typography';
import { CTAButton } from '@/components/buttons';
import { MetricCard } from '@/components/data';
import { EditorialSilenceScene } from '@/components/editorial';
import { projects } from '@/lib/projects';

export default function WorkPage() {
  const navLinks = [
    { label: 'Chapter', href: '/work' },
    { label: 'Systems', href: '/system' },
    { label: 'Journey', href: '/journey' },
    { label: 'Contact', href: '/contact' },
  ];

  const footerLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ryanmorrow' },
    { label: 'Email', href: 'mailto:hello@ryanmorrow.dev' },
    { label: 'Resume', href: '/resume.pdf' },
  ];

  // Featured project (FIFA - first in list)
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <PageContainer variant="light">
      <GlobalNav links={navLinks} />

      {/* SCENE 1: CHAPTER OPENING */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-warm-white"
        id="scene-work-opening"
      >
        <div className="relative w-full h-full">
          <Image
            src="/placeholder-chapter-opening-work.jpg"
            alt="The Work chapter opening - executive case studies and portfolio"
            priority={true}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <DisplayHero className="text-center text-warm-white px-8">
              The Work
            </DisplayHero>
          </div>
        </div>
      </section>

      {/* SCENE 2: PROJECT INDEX */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-project-index"
      >
        <PageContainerInset>
          <SectionContainer>
            <div className="space-y-12">
              {/* Section Label */}
              <SectionLabel>Projects</SectionLabel>

              {/* Project Grid - All 8 projects as clickable cards */}
              <div className="space-y-8">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/work/${project.id}`}
                    className="group block"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-6 border-b border-light-gray hover:bg-gray-50 transition-colors px-4 -mx-4 last:border-0">
                      {/* Project Name */}
                      <div className="lg:col-span-1 flex items-center">
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-copper mt-2 shrink-0" />
                          <div className="grow">
                            <Body className="text-near-black font-semibold group-hover:text-copper transition-colors">
                              {project.name}
                            </Body>
                            <Meta className="text-gray-secondary">{project.year}</Meta>
                          </div>
                        </div>
                      </div>

                      {/* Spacer on desktop */}
                      <div className="hidden lg:block lg:col-span-2" />

                      {/* Metrics */}
                      <div className="lg:col-span-1 flex items-center">
                        <div className="space-y-1">
                          <Body className="text-near-black font-semibold">
                            {project.metric}
                          </Body>
                          <Meta className="text-gray-secondary">
                            {project.metricLabel}
                          </Meta>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SCENE 3: FEATURED PROJECT HERO */}
      <section
        className="relative w-full h-screen flex items-end bg-warm-white"
        id="scene-featured-hero"
      >
        <div className="relative w-full h-full">
          <Image
            src={featuredProject.thumbnailUrl}
            alt={`${featuredProject.name} - hero image`}
            priority={true}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SCENE 4: FEATURED PROJECT CONTEXT */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-featured-context"
      >
        <PageContainerInset>
          <div className="space-y-16">
            {/* Section Label */}
            <SectionLabel>Featured</SectionLabel>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Project Context */}
              <div className="space-y-8">
                <div>
                  <Meta className="text-copper block mb-2">FEATURED PROJECT</Meta>
                  <HeadingH1 className="text-near-black mb-8">
                    {featuredProject.name}
                  </HeadingH1>
                </div>

                <Body className="text-near-black">
                  [Project Context Paragraph 1 - [Placeholder_Project_Context_01]]
                </Body>
                <Body className="text-near-black">
                  [Project Context Paragraph 2 - [Placeholder_Project_Context_02]]
                </Body>
                <Body className="text-near-black">
                  [Project Context Paragraph 3 - [Placeholder_Project_Context_03]]
                </Body>

                <div className="pt-4">
                  <CTAButton variant="dark" href={`/work/${featuredProject.id}`}>
                    Explore Case Study
                  </CTAButton>
                </div>
              </div>

              {/* Right: Project Metadata */}
              <div className="space-y-8">
                <div>
                  <Meta className="text-copper block mb-2">YEAR</Meta>
                  <Body className="text-near-black font-semibold">{featuredProject.year}</Body>
                </div>
                <div>
                  <Meta className="text-copper block mb-2">CATEGORY</Meta>
                  <Body className="text-near-black font-semibold">{featuredProject.category}</Body>
                </div>
                <div>
                  <Meta className="text-copper block mb-2">KEY METRIC</Meta>
                  <Body className="text-near-black font-semibold">{featuredProject.metric}</Body>
                </div>
                <div>
                  <Meta className="text-copper block mb-2">SCALE</Meta>
                  <Body className="text-near-black font-semibold">[Placeholder_Scale_Description]</Body>
                </div>
                <div>
                  <Meta className="text-copper block mb-2">DURATION</Meta>
                  <Body className="text-near-black font-semibold">[Placeholder_Duration_Description]</Body>
                </div>
                <div>
                  <Meta className="text-copper block mb-2">TEAM</Meta>
                  <Body className="text-near-black font-semibold">[Placeholder_Team_Size]</Body>
                </div>
              </div>
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 5: SILENCE */}
      <EditorialSilenceScene className="min-h-[60vh] md:min-h-[40vh]" />

      {/* SCENE 6: CHALLENGE */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-featured-challenge"
      >
        <PageContainerInset>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Challenge Narrative */}
            <div className="space-y-8">
              <div>
                <Meta className="text-copper block mb-4">CHALLENGE</Meta>
                <DisplayTitle className="text-near-black mb-8">
                  [Placeholder_Challenge_Title]
                </DisplayTitle>
              </div>

              <Body className="text-near-black">
                [Challenge Context Paragraph 1 - [Placeholder_Challenge_01]]
              </Body>
              <Body className="text-near-black">
                [Challenge Context Paragraph 2 - [Placeholder_Challenge_02]]
              </Body>
            </div>

            {/* Right: Challenge Bullets */}
            <div className="space-y-8">
              <Meta className="text-copper block text-center lg:text-left">
                KEY CHALLENGES
              </Meta>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-copper text-lg leading-none shrink-0">→</span>
                    <Body className="text-near-black">
                      [Placeholder_Challenge_{i}]
                    </Body>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 7: OPERATIONAL SYSTEM */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-featured-system"
      >
        <PageContainerInset>
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <Meta className="text-copper block mb-4">OPERATIONAL SYSTEM</Meta>
              <HeadingH2 className="text-near-black mb-4">
                [Placeholder_System_Title]
              </HeadingH2>
              <Body className="text-gray-secondary max-w-2xl">
                [Placeholder_System_Description]
              </Body>
            </div>

            {/* System Diagram - Vertical flow with nodes */}
            <div className="space-y-8 py-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-6">
                  {/* Node */}
                  <div className="flex gap-6 items-start">
                    <div className="w-2.5 h-2.5 rounded-full bg-copper mt-2 shrink-0" />
                    <div className="grow">
                      <Meta className="text-copper block mb-2">
                        [System_Node_{i}_Label]
                      </Meta>
                      <Body className="text-near-black font-semibold mb-2">
                        [System_Node_{i}_Title]
                      </Body>
                      <Body className="text-gray-secondary">
                        [System_Node_{i}_Description]
                      </Body>
                    </div>
                  </div>

                  {/* Connector (except after last node) */}
                  {i < 4 && (
                    <div className="flex gap-6 items-center py-4">
                      <div className="w-0.5 h-12 bg-light-gray ml-1" />
                      <Meta className="text-gray-secondary text-xs">
                        [Connection_{i}]
                      </Meta>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 8: METRICS */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-featured-metrics"
      >
        <PageContainerInset>
          <div className="space-y-12">
            {/* Section Label */}
            <SectionLabel>Results</SectionLabel>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricCard
                value="[Metric_01_Value]"
                label="[Metric_01_Label]"
              />
              <MetricCard
                value="[Metric_02_Value]"
                label="[Metric_02_Label]"
              />
              <MetricCard
                value="[Metric_03_Value]"
                label="[Metric_03_Label]"
              />
              <MetricCard
                value="[Metric_04_Value]"
                label="[Metric_04_Label]"
              />
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 9: EVIDENCE GALLERY */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-featured-gallery"
      >
        <PageContainerInset>
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <Meta className="text-copper block mb-4">EVIDENCE</Meta>
              <HeadingH2 className="text-near-black mb-4">
                Project Documentation
              </HeadingH2>
              <Body className="text-gray-secondary max-w-2xl">
                [Placeholder_Gallery_Description]
              </Body>
            </div>

            {/* Gallery Grid - 2-up on desktop, 1-up on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2, 3].map((i) => (
                <figure key={i} className="space-y-4">
                  <Image
                    src={`/placeholder-case-study-evidence-${i}.jpg`}
                    alt={`[Placeholder_Gallery_Image_${i}_Alt]`}
                    width={640}
                    height={480}
                    className="w-full h-auto bg-gray-100"
                  />
                  <figcaption>
                    <Meta className="text-gray-secondary">
                      [Placeholder_Gallery_Caption_${i}]
                    </Meta>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 10: REFLECTION / CONCLUSION */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-featured-reflection"
      >
        <PageContainerInset>
          <SectionContainer>
            <div className="max-w-3xl">
              <Meta className="text-copper block mb-8">REFLECTION</Meta>
              <DisplayTitle className="text-near-black mb-12">
                [Placeholder_Reflection_Quote]
              </DisplayTitle>
              <Body className="text-gray-secondary mb-12">
                — [Placeholder_Attribution]
              </Body>

              {/* Next Project Navigation */}
              <div className="pt-8 border-t border-light-gray">
                <div className="space-y-4">
                  <Meta className="text-copper">NEXT PROJECT</Meta>
                  {otherProjects.length > 0 && (
                    <Link
                      href={`/work/${otherProjects[0].id}`}
                      className="group block"
                    >
                      <div className="space-y-2">
                        <HeadingH2 className="text-near-black group-hover:text-copper transition-colors">
                          {otherProjects[0].name}
                        </HeadingH2>
                        <Meta className="text-gray-secondary">{otherProjects[0].year}</Meta>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SCENE 11: FOOTER */}
      <Footer links={footerLinks} />
    </PageContainer>
  );
}
