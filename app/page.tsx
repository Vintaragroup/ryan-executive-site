'use client';

import React from "react";
import Image from "next/image";
import { PageContainer, PageContainerInset, SectionContainer } from "@/components/layouts";
import { GlobalNav } from "@/components/navigation";
import { Footer } from "@/components/navigation";
import { DisplayHero, DisplayTitle, HeadingH1, HeadingH2, Body, Meta } from "@/components/typography";
import { SectionLabel } from "@/components/typography";
import { CTAButton } from "@/components/buttons";
import { MetricCard } from "@/components/data";
import { TimelineNode } from "@/components/data";
import { EditorialSilenceScene } from "@/components/editorial";

export default function HomePage() {
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

  return (
    <PageContainer variant="light">
      <GlobalNav links={navLinks} />

      {/* SCENE 1: OPENING */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-warm-white"
        id="scene-opening"
      >
        <div className="relative w-full h-full">
          <Image
            src="/placeholder-hero-opening.jpg"
            alt="Documentary opening scene establishing Ryan Morrow's executive production practice"
            priority={true}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <DisplayHero className="text-center text-warm-white px-8">
              [Opening Scene Title]
            </DisplayHero>
          </div>
        </div>
      </section>

      {/* SCENE 2: STATEMENT */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-statement"
      >
        <PageContainerInset>
          <SectionContainer>
            <div className="grid grid-cols-1 gap-12">
              {/* Section Label */}
              <div className="flex items-start gap-4">
                <SectionLabel>Statement</SectionLabel>
              </div>

              {/* Hero Statement */}
              <DisplayTitle className="text-near-black leading-tight">
                [Hero Statement — Word-by-word reveal animation placeholder]
              </DisplayTitle>

              {/* Operational Context */}
              <div className="mt-8">
                <Meta className="text-gray-secondary">
                  [Operational Stats: 5 metrics with labels]
                </Meta>
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SCENE 3: SILENCE */}
      <EditorialSilenceScene className="min-h-[60vh] md:min-h-[40vh]" />

      {/* SCENE 4: CLIENT NAMES */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-clients"
      >
        <PageContainerInset>
          <SectionContainer>
            <div className="space-y-12">
              {/* Section Label */}
            <SectionLabel>Clients</SectionLabel>
              <div className="space-y-8">
                <div className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-near-black">
                  [Placeholder_Client_FIFA]
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-near-black">
                  [Placeholder_Client_Golden_State_Warriors]
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-near-black">
                  [Placeholder_Client_Universal_Studios]
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-near-black">
                  [Placeholder_Client_Special_Olympics]
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-near-black">
                  [Placeholder_Client_AMP_Energy]
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-near-black">
                  [Additional Client Names - TBD]
                </div>
              </div>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SCENE 5: FEATURED CASE STUDY */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-chapter"
      >
        <PageContainerInset>
          {/* Chapter Intro */}
          <div className="mb-16">
            <Meta className="text-copper mb-4">01 // CHAPTER</Meta>
            <HeadingH1 className="text-near-black mb-4">
              [Section Heading]
            </HeadingH1>
            <Body className="text-gray-secondary max-w-2xl">
              [Section Description - Lorem ipsum placeholder]
            </Body>
          </div>

          {/* Chapter Hero Image */}
          <div className="mb-16 -mx-8 md:mx-0">
            <Image
              src="/placeholder-case-study-hero.jpg"
              alt="[Homepage_Chapter_Preview_Image_01] - Case study hero image"
              width={1440}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Case Study Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Case Study Body Copy */}
            <div className="space-y-6">
              <Body className="text-near-black">
                [Case Study Context Paragraph 1]
              </Body>
              <Body className="text-near-black">
                [Case Study Context Paragraph 2]
              </Body>
              <Body className="text-near-black">
                [Case Study Context Paragraph 3]
              </Body>
            </div>

            {/* Right: Case Study Metadata */}
            <div className="space-y-6">
              <div>
                <Meta className="text-copper block mb-2">PROGRAM</Meta>
                <Body className="text-near-black font-semibold">FIFA World Cup 2026</Body>
              </div>
              <div>
                <Meta className="text-copper block mb-2">ROLE</Meta>
                <Body className="text-near-black font-semibold">Executive Production & Ops</Body>
              </div>
              <div>
                <Meta className="text-copper block mb-2">SCALE</Meta>
                <Body className="text-near-black font-semibold">16 Cities · 3 Nations</Body>
              </div>
              <div>
                <Meta className="text-copper block mb-2">VENDORS</Meta>
                <Body className="text-near-black font-semibold">32+ Core Partners</Body>
              </div>
              <div>
                <Meta className="text-copper block mb-2">DURATION</Meta>
                <Body className="text-near-black font-semibold">48-Month Roadmap</Body>
              </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="mt-20">
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

          {/* Editorial Block: Key Principles */}
          <div className="mt-20 pt-20 border-t border-light-gray">
            <Meta className="text-copper block mb-8 text-center">[Project Heading]</Meta>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-copper flex items-center justify-center mx-auto mb-6">
                  <span className="text-warm-white font-bold text-lg">01</span>
                </div>
                <Meta className="text-near-black font-semibold">
                  Executive Leadership
                </Meta>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-copper flex items-center justify-center mx-auto mb-6">
                  <span className="text-warm-white font-bold text-lg">02</span>
                </div>
                <Meta className="text-near-black font-semibold">
                  Operational Governance
                </Meta>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-copper flex items-center justify-center mx-auto mb-6">
                  <span className="text-warm-white font-bold text-lg">03</span>
                </div>
                <Meta className="text-near-black font-semibold">
                  Production Excellence
                </Meta>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-copper flex items-center justify-center mx-auto mb-6">
                  <span className="text-warm-white font-bold text-lg">04</span>
                </div>
                <Meta className="text-near-black font-semibold">
                  Executive Visibility
                </Meta>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-copper flex items-center justify-center mx-auto mb-6">
                  <span className="text-warm-white font-bold text-lg">05</span>
                </div>
                <Meta className="text-near-black font-semibold">
                  Decision Confidence
                </Meta>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-20 pt-20 border-t border-light-gray">
            <Body className="text-center text-near-black max-w-3xl mx-auto mb-12">
              [Gallery description and context — Lorem ipsum placeholder for supporting images]
            </Body>
          </div>

          {/* Secondary Case Study Preview */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative group">
              <Image
                src="/placeholder-case-study-preview-02.jpg"
                alt="[Homepage_Chapter_Preview_Image_02] - Secondary case study preview"
                width={733}
                height={560}
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 bg-black/70 p-4 text-warm-white">
                <Meta className="text-copper mb-2">PROJECT CONTEXT</Meta>
                <Body className="text-warm-white text-sm">
                  LED INTEGRATION: 94% COMPLETE
                </Body>
                <Body className="text-warm-white text-sm">
                  VENDOR CHECK-IN: 0600 LOCAL
                </Body>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Image
                src="/placeholder-case-study-preview-03.jpg"
                alt="[Homepage_Chapter_Preview_Image_03] - Supporting case study image"
                width={515}
                height={264}
                className="w-full h-auto"
              />
              <Image
                src="/placeholder-case-study-preview-04.jpg"
                alt="[Homepage_Chapter_Preview_Image_04] - Supporting case study image"
                width={515}
                height={264}
                className="w-full h-auto"
              />
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 6: OPERATING SYSTEM */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-system"
      >
        <PageContainerInset>
          <div className="space-y-12">
            {/* Section Label */}
            <SectionLabel>The System</SectionLabel>

            {/* OS Module Grid */}
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-b border-light-gray last:border-0"
                >
                  <div>
                    <Meta className="text-copper block mb-2">[Module Title]</Meta>
                    <Body className="text-gray-secondary">[Module Subtitle]</Body>
                  </div>
                  <div />
                  <div>
                    <Body className="text-near-black">
                      [Module Description — Lorem ipsum placeholder for methodology details]
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 7: JOURNEY / TIMELINE */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-journey"
      >
        <PageContainerInset>
          <div className="space-y-12">
            {/* Section Label */}
            <SectionLabel>The Journey</SectionLabel>

            {/* Timeline Grid */}
            <div className="space-y-8">
              <TimelineNode
                year="[Timeline Year 1]"
                title="[Timeline Milestone — Universal Studios]"
                organization="[Timeline Role]"
              />
              <TimelineNode
                year="[Timeline Year 2]"
                title="[Timeline Milestone — AMP Energy]"
                organization="[Timeline Role]"
              />
              <TimelineNode
                year="[Timeline Year 3]"
                title="[Timeline Milestone — CAA]"
                organization="[Timeline Role]"
              />
              <TimelineNode
                year="[Timeline Year 4]"
                title="[Timeline Milestone — Golden State Warriors]"
                organization="[Timeline Role]"
              />
              <TimelineNode
                year="[Timeline Year 5]"
                title="[Timeline Milestone — Special Olympics]"
                organization="[Timeline Role]"
              />
              <TimelineNode
                year="[Timeline Year 6]"
                title="[Timeline Milestone — Additional Project]"
                organization="[Timeline Role]"
              />
            </div>
          </div>
        </PageContainerInset>
      </section>

      {/* SCENE 8: PHILOSOPHY / CLOSING */}
      <section
        className="w-full py-32 bg-warm-white"
        id="scene-philosophy"
      >
        <PageContainerInset>
          <SectionContainer>
            <div className="max-w-3xl">
              <HeadingH2 className="text-near-black mb-8">
                [Closing Philosophy Statement]
              </HeadingH2>
              <Body className="text-near-black mb-12">
                [Philosophy Description — Lorem ipsum placeholder for reflective closing]
              </Body>
              <CTAButton variant="dark" href="/work">
                Explore Case Studies
              </CTAButton>
            </div>
          </SectionContainer>
        </PageContainerInset>
      </section>

      {/* SCENE 9: FOOTER */}
      <Footer links={footerLinks} />
    </PageContainer>
  );
}
