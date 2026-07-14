'use client';

import { GlobalNav, Footer } from '@/components/navigation';
import { PageContainer, SectionContainer } from '@/components/layouts';
import { MetricCard } from '@/components/data';
import {
  operationalStatus,
  vendorModules,
  runwayPhases,
  telemetryChannels,
  integrityProtocols,
  systemMetrics,
} from '@/lib/system-data';

/**
 * System Chapter Page
 * Displays comprehensive operational systems and methodologies
 * Responsive across desktop (1440px), tablet (768px), and mobile (390px)
 */
export default function SystemPage() {
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
    <PageContainer>
      <GlobalNav links={navLinks} />

      {/* Hero Section - Opening spread */}
      <section className="relative w-full h-screen md:h-auto md:min-h-[600px] lg:h-screen flex items-center justify-center bg-white">
        <SectionContainer>
          <div className="flex flex-col items-center justify-center gap-8 py-16 lg:py-32">
            <div className="max-w-2xl text-center">
              <p className="text-sm tracking-widest uppercase text-gray-600 mb-6">
                The Operational Methodology
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif -tracking-wide mb-8 text-black">
                The System
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Comprehensive operational frameworks that transform enterprise complexity into coordinated precision.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Philosophy Section - Operational Status */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">
                01 THE OPERATIONAL CRITERION
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif -tracking-wide text-black mb-8">
                Operational Readiness
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl">
                Continuous monitoring of system status and vendor ecosystem alignment ensures operational readiness
                across all deployment tiers.
              </p>
            </div>

            {/* Status Display Card */}
            <div className="border border-gray-200 rounded-lg p-6 md:p-8 bg-gray-50">
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-600 mb-2">
                    System Status
                  </p>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-black">
                    {operationalStatus.state}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-base leading-relaxed text-gray-700">
                    {operationalStatus.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-copper rounded-full" />
                  <p className="text-xs tracking-widest uppercase text-gray-600">
                    {operationalStatus.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Vendor Engine Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">
                02 THE VENDOR ENGINE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif -tracking-wide text-black mb-8">
                Procurement Architecture
              </h2>
            </div>

            {/* Vendor Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vendorModules.map((module) => (
                <div
                  key={module.number}
                  className="border border-gray-200 rounded-lg p-6 md:p-8 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="space-y-4 mb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs tracking-widest uppercase text-gray-500">
                          Module {module.number}
                        </p>
                        <p className="text-xl md:text-2xl font-serif font-bold text-black mt-2">
                          {module.title}
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs tracking-wider uppercase rounded">
                        {module.status}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <p className="text-sm font-medium text-gray-600">
                      {module.subtitle}
                    </p>
                    <p className="text-base leading-relaxed text-gray-700">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Runway Methodology Timeline Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">
                03 THE RUNWAY METHODOLOGY
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif -tracking-wide text-black mb-8">
                Implementation Timeline
              </h2>
            </div>

            {/* Timeline - Responsive Layout */}
            <div className="space-y-8">
              {runwayPhases.map((phase, index) => (
                <div
                  key={phase.number}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
                >
                  {/* Phase Label - Responsive */}
                  <div className="md:col-span-3">
                    <p className="text-sm font-mono tracking-wider uppercase text-gray-600">
                      Phase {phase.number}
                    </p>
                    <p className="text-base font-medium text-gray-700 mt-1">
                      {phase.period}
                    </p>
                  </div>

                  {/* Timeline Line - Hidden on mobile */}
                  <div className="hidden md:flex md:col-span-1 justify-center">
                    <div className="relative flex flex-col items-center h-24">
                      <div className="w-2 h-2 bg-copper rounded-full" />
                      {index < runwayPhases.length - 1 && (
                        <div className="w-0.5 h-20 bg-gradient-to-b from-copper to-gray-200 my-1" />
                      )}
                    </div>
                  </div>

                  {/* Phase Content */}
                  <div className="md:col-span-8">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-black mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Telemetry Protocol Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">
                04 THE TELEMETRY PROTOCOL
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif -tracking-wide text-black mb-8">
                Operational Telemetry Engine
              </h2>
            </div>

            {/* Telemetry Channels */}
            <div className="border border-gray-200 rounded-lg p-6 md:p-8 bg-gray-50">
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-sm font-mono tracking-widest uppercase text-gray-700">
                  Operational Telemetry Engine v2.6
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-xs tracking-widest uppercase text-green-700">
                    All Channels Synchronized
                  </p>
                </div>
              </div>

              {/* Channel Status List */}
              <div className="space-y-4">
                {telemetryChannels.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-b-0">
                    <p className="text-base font-medium text-gray-700">
                      {channel.name}
                    </p>
                    <span className="inline-block px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded">
                      {channel.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Integrity Failsafe Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">
                05 THE INTEGRITY FAILSAFE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif -tracking-wide text-black mb-8">
                Risk Mitigation Protocols
              </h2>
            </div>

            {/* Protocols List */}
            <div className="space-y-6 md:space-y-8">
              {integrityProtocols.map((protocol) => (
                <div
                  key={protocol.number}
                  className="border-l-4 border-copper pl-6 py-2"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-3xl font-serif font-bold text-copper min-w-fit">
                      L_{protocol.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-black pt-1">
                      {protocol.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 ml-16">
                    {protocol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Data Metrics Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">
                06 THE DATA METRIC
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif -tracking-wide text-black mb-8">
                System Performance Indicators
              </h2>
            </div>

            {/* Metrics Grid - Responsive 2x2 or 1x4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {systemMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  value={metric.value}
                  label={metric.label}
                  className="border border-gray-200 rounded-lg p-6 md:p-8 bg-white hover:bg-gray-50 transition-colors"
                />
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Closing Section with CTA */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8 md:space-y-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif -tracking-wide text-black mb-8">
                Ready to explore operational possibilities?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
                Connect to discuss how systematic operational frameworks can transform enterprise complexity.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a
                href="mailto:office@ryanmorrow.com"
                className="inline-block px-6 py-3 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-gray-900 transition-colors"
              >
                office@ryanmorrow.com
              </a>
              <a
                href="https://linkedin.com/in/ryanmorrow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-black text-black text-sm font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
              >
                linkedin/ryanmorrow
              </a>
            </div>
          </div>
        </SectionContainer>
      </section>

      <Footer links={footerLinks} />
    </PageContainer>
  );
}
