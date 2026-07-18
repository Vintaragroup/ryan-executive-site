import Image from 'next/image';
import Link from 'next/link';
import { GlobalNav } from '@/components/navigation';
import { publishedCaseStudyProjects } from '@/lib/projects';

const featuredStory = {
  title: 'FIFA 2026: The Substrate',
  label: 'FEATURED CASE STUDY',
  desktopContextLabel: 'A Continental Operating System',
  openingDescription:
    'A selection of operational substrates built for global culture, sporting excellence, and transformation at scale.',
  mobileDescription:
    'A selection of operational substrates built for global culture and sporting excellence.',
  contextParagraphs: [
    'The 2026 World Cup represents a departure from single-nation logistics into the realm of continental synchronization. Spanning three sovereign nations and sixteen host cities, the operational architecture required more than management — it required a governance ecosystem.',
    'My team architected the physical and digital routing for 32 core vendor partners, managing $1.2B in production overhead with zero margin for drift. Every stadium cluster was treated as a high-density data node within a singular OS.',
    "The challenge wasn't scale alone — it was the compression of political, cultural, and logistical complexity into a single executable timeline. Three governments, sixteen municipalities, and hundreds of stakeholders, all synchronized to one opening whistle.",
  ],
  tabletParagraphs: [
    'The 2026 World Cup represents a departure from single-nation logistics into the realm of continental synchronization. Spanning three sovereign nations and sixteen host cities, the operational architecture required more than management—it required a governance ecosystem.',
    'My team architected the physical and digital routing for 32 core vendor partners, managing $1.2B in production overhead with zero margin for drift. Every stadium cluster was treated as a high-density data node within a singular OS.',
  ],
  mobileParagraphs: [
    'The 2026 World Cup represents a departure from single-nation logistics into the realm of continental synchronization. Spanning three sovereign nations and sixteen host cities.',
    'My team architected the physical and digital routing for 32 core vendor partners, managing $1.2B in production overhead with zero margin for drift.',
  ],
  metadata: [
    { label: 'PROGRAM', value: 'FIFA 2026' },
    { label: 'SCALE', value: '16 CITIES' },
    { label: 'DURATION', value: '48 MONTHS' },
    { label: 'VENDORS', value: '32+ CORE' },
    { label: 'BUDGET', value: '$1.2B' },
    { label: 'STAFF', value: '1,200+' },
    { label: 'NATIONS', value: '3' },
  ],
  condensedMetadata: [
    { label: 'PROGRAM', value: 'FIFA 2026' },
    { label: 'SCALE', value: '16 CITIES' },
    { label: 'DURATION', value: '48 MONTHS' },
    { label: 'VENDORS', value: '32+ CORE' },
  ],
  challengeBullets: [
    'Continental Synchronization — Three sovereign nations, sixteen municipalities, one timeline.',
    'Vendor Orchestration — 32 core partners across distributed geography with zero tolerance for drift.',
    'Credential Architecture — High-security access fabrication at unprecedented scale across three nations.',
    'Decision Velocity — Real-time escalation protocols under compressed political and logistical timelines.',
  ],
  governanceLayers: [
    {
      title: 'LOGISTICS MAPPING',
      layer: 'LAYER_01_OPS',
      description: 'Vendor orchestration across 3 sovereign nations.',
    },
    {
      title: 'CREDENTIAL FABRICATION',
      layer: 'LAYER_02_SEC',
      description: 'Managing high-stakes access at global scale.',
    },
    {
      title: 'DECISION VISIBILITY',
      layer: 'LAYER_03_GOV',
      description: 'Executive dashboards for real-time escalation.',
    },
    {
      title: 'PRODUCTION LOGISTICS',
      layer: 'LAYER_04_FAB',
      description: 'Environmental fabrication and LED integration across host cities.',
    },
    {
      title: 'TIMELINE ENGINEERING',
      layer: 'LAYER_05_SCH',
      description: '48-month milestone architecture with zero-drift tolerance.',
    },
    {
      title: 'COMMUNICATION MATRIX',
      layer: 'LAYER_06_COM',
      description: 'Multi-stakeholder reporting across three government bodies.',
    },
  ],
  condensedGovernanceLayers: [
    {
      title: 'LOGISTICS MAPPING',
      layer: 'LAYER_01_OPS',
      description: 'Vendor orchestration across 3 sovereign nations.',
    },
    {
      title: 'CREDENTIAL FABRICATION',
      layer: 'LAYER_02_SEC',
      description: 'Managing high-stakes access at global scale.',
    },
    {
      title: 'DECISION VISIBILITY',
      layer: 'LAYER_03_GOV',
      description: 'Executive dashboards for real-time escalation.',
    },
  ],
  numbers: [
    { value: '16', label: 'CITIES INTEGRATED' },
    { value: '03', label: 'NATIONS SYNCED' },
    { value: '32+', label: 'VENDORS MANAGED' },
    { value: '200K', label: 'ACCREDITED STAFF' },
  ],
  tabletMetrics: [
    { value: '16', label: 'CITIES INTEGRATED' },
    { value: '1.2B', label: 'MANAGED OVERHEAD' },
    { value: '48', label: 'MONTHS OF RUNWAY' },
    { value: '200k', label: 'ACCREDITED STAFF' },
  ],
  mobileMetrics: [
    { value: '16', label: 'CITIES INTEGRATED' },
    { value: '1.2B', label: 'MANAGED OVERHEAD' },
    { value: '48', label: 'MONTHS RUNWAY' },
    { value: '200k', label: 'ACCREDITED STAFF' },
  ],
};

const projects = publishedCaseStudyProjects;
const tabletProjects = projects.filter((project) => project.images.tablet);
const mobileProjects = projects.filter((project) => project.images.mobile || project.images.tablet);

export default function WorkPage() {
  return (
    <main className="bg-paper text-charcoal">
      <GlobalNav />

      <div className="hidden lg:block">
        <section className="relative flex h-[1080px] items-end px-20 pb-20 pt-20 text-[#f5f5f5]">
          <Image
            src="/images/work/desktop/chapter-opening.png"
            alt="The Work chapter opening"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(10,10,11,0.6)]" />
          <div className="absolute left-20 top-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.02em] text-copper">
              CH. 02 // THE WORK
            </p>
          </div>
          <h1 className="relative max-w-[900px] font-serif text-[110px] leading-[0.95] tracking-[-2px]">
            Mastering Global Complexity
          </h1>
        </section>

        <section className="bg-[#f9f7f2] px-20 py-[200px]">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="flex items-baseline justify-between border-b border-light-gray py-10 transition-opacity hover:opacity-75"
            >
              <div className="flex items-center gap-6">
                <span className="h-2 w-2 rounded-full bg-copper" />
                <p className="font-serif text-[48px] leading-none">{project.discipline}</p>
              </div>
              <div className="flex items-center gap-3 font-mono text-[14px]">
                {project.desktopMetaOrder === 'name-first' ? (
                  <>
                    <span className="text-copper">{project.name}</span>
                    <span className="text-charcoal opacity-40">{'//'}</span>
                    <span className="text-charcoal opacity-60">{project.period}</span>
                  </>
                ) : (
                  <>
                    <span className="text-copper">{project.period}</span>
                    <span className="text-charcoal opacity-40">{'//'}</span>
                    <span className="text-charcoal opacity-60">{project.name}</span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </section>

        <section className="relative flex h-[1080px] items-end px-20 pb-20 text-[#f5f5f5]">
          <Image
            src="/images/work/desktop/featured-hero.png"
            alt="FIFA 2026 featured case study hero"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(10,10,11,0.3)]" />
          <Link href="/work/fifa-world-cup" className="relative block">
            <p className="font-mono text-[14px]">{featuredStory.label}</p>
            <p className="mt-4 font-serif text-[80px] italic leading-none">{featuredStory.title}</p>
          </Link>
        </section>

        <section className="bg-[#f9f7f2] px-40 py-40">
          <div className="grid grid-cols-[minmax(0,1fr)_400px] gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase text-copper">
                {featuredStory.desktopContextLabel}
              </p>
              <div className="mt-10 space-y-10 font-sans text-[22px] leading-[1.6] text-charcoal">
                {featuredStory.contextParagraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? '' : 'opacity-80'}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {featuredStory.metadata.map((item) => (
                <div key={item.label} className="border-b border-light-gray pb-4">
                  <p className="font-mono text-[10px] uppercase text-copper">{item.label}</p>
                  <p className="mt-2 font-sans text-[16px] font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative h-[900px]">
          <Image
            src="/images/work/desktop/operations-hero.png"
            alt="FIFA operations hero image"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        <section className="bg-[#f9f7f2] px-40 py-40">
          <div className="grid grid-cols-[minmax(0,1fr)_682px] items-center gap-[120px]">
            <p className="font-serif text-[64px] leading-[1.2]">{'// THE OPERATIONAL CHALLENGE'}</p>
            <div className="space-y-6 font-mono text-[12px] leading-normal">
              {featuredStory.challengeBullets.map((bullet) => (
                <div key={bullet} className="flex gap-3">
                  <span className="text-copper">→</span>
                  <p className="text-charcoal opacity-60">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-near-black px-40 py-24 text-[#f5f5f5]">
          <p className="font-mono text-[11px] uppercase text-copper">LOGISTICS MAPPING</p>
          <div className="mt-14 space-y-4">
            {featuredStory.governanceLayers.map((layer, index) => (
              <div key={layer.layer}>
                <div className="flex gap-6">
                  <div className="flex w-10 shrink-0 justify-center">
                    <div className="mt-1 h-10 w-10 rounded-[20px] border border-[rgba(166,130,94,0.2)] bg-[rgba(166,130,94,0.1)] p-[14px]">
                      <div className="h-3 w-3 rounded-[6px] bg-copper" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[12px] uppercase text-copper">{layer.layer}</p>
                    <p className="mt-2 font-serif text-[18px] leading-[1.5]">{layer.description}</p>
                  </div>
                </div>
                {index < featuredStory.governanceLayers.length - 1 ? (
                  <div className="ml-5 mt-4 flex gap-6">
                    <div className="flex w-10 justify-center">
                      <div className="h-14 w-px bg-copper opacity-35" />
                    </div>
                    <p className="font-mono text-[10px] uppercase text-copper opacity-75">
                      {featuredStory.governanceLayers[index + 1].title}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f9f7f2] px-40 py-40">
          <div className="grid grid-cols-4 gap-8">
            {featuredStory.numbers.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-[160px] leading-[0.9]">{metric.value}</p>
                <p className="mt-4 font-mono text-[12px] uppercase text-copper">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative h-[800px] overflow-hidden bg-[#f9f7f2] px-40 py-40">
          <div className="absolute left-40 top-[111px] w-[340px] rotate-[-1.5deg] bg-[#f5edd8] p-6 font-mono text-[9px] shadow-[4px_8px_12px_rgba(0,0,0,0.18)]">
            <p className="uppercase text-copper opacity-80">{'// EVIDENCE OF EXECUTION'}</p>
            <div className="mt-3 space-y-1.5 text-charcoal opacity-60">
              <p>Zero vendor drift across 48-month production runway</p>
              <p>$1.2B managed overhead with full audit compliance</p>
              <p>200,000+ accredited personnel across three nations</p>
              <p>16 stadium clusters synchronized to a single operational timeline</p>
            </div>
          </div>
          <div className="absolute left-[590px] top-[300px] w-[200px] rotate-2 rounded-[4px] border border-[#ddd] bg-white p-3 shadow-[2px_4px_6px_rgba(0,0,0,0.1)]">
            <div className="relative h-[140px] w-full overflow-hidden rounded-[2px] bg-copper">
              <Image
                src="/images/work/desktop/gallery-04.png"
                alt="Credential badge evidence"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <p className="mt-4 font-mono text-[14px] font-semibold leading-normal text-black">
              First tri-nation World Cup delivered without operational failure
            </p>
            <div className="mt-4 h-[10px] w-10 bg-[#eee]" />
          </div>
          <div className="absolute left-[878px] top-[100px] h-[260px] w-[400px] rotate-[0.5deg] overflow-hidden shadow-[4px_8px_24px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/work/desktop/evidence-support.png"
              alt="Supporting FIFA operational evidence"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </section>

        <section className="bg-[#f9f7f2] px-20 py-20">
          <div className="grid h-[1000px] grid-cols-2 gap-8">
            <div className="flex h-full flex-col gap-8">
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <Image
                  src="/images/work/desktop/gallery-01.png"
                  alt="Gallery image one"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/images/work/desktop/gallery-02.png"
                  alt="Gallery image two"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
            <div className="flex h-full flex-col gap-8 pt-[120px]">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/work/desktop/gallery-03.png"
                  alt="Gallery image three"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <Image
                  src="/images/work/desktop/gallery-04.png"
                  alt="Gallery image four"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f9f7f2] px-[200px] py-[200px] text-center">
          <div className="mx-auto h-px w-[60px] bg-copper" />
          <p className="mx-auto mt-12 max-w-[1000px] font-serif text-[80px] italic leading-[1.1]">
            The substrate isn&apos;t the spectacle — it&apos;s the system that makes the spectacle possible. Every credential, every vendor route, every LED panel, every security perimeter exists within a governance architecture designed to be invisible.
          </p>
          <p className="mt-12 font-mono text-[14px] font-semibold uppercase text-copper">
            That is the discipline. Building the machine that disappears.
          </p>
        </section>

        <section className="bg-[#f9f7f2] px-20 py-20">
          <div className="h-px w-full bg-[#d9d4cb]" />
          <div className="mt-20 flex items-baseline justify-between">
            <p className="font-mono text-[14px] text-copper">The next conversation.</p>
            <a
              href="mailto:office@ryanmorrow.com"
              className="font-serif text-[48px] text-charcoal underline underline-offset-4"
            >
              OFFICE@RYANMORROW.COM
            </a>
          </div>
        </section>
      </div>

      <div className="hidden md:block lg:hidden">
        <section className="px-12 pb-[120px] pt-[200px]">
          <p className="font-mono text-[11px] uppercase text-copper">CH. 02 // THE WORK</p>
          <h1 className="mt-10 font-serif text-[72px] leading-[0.95] text-near-black">
            Mastering Global Complexity
          </h1>
          <p className="mt-3 max-w-[500px] font-sans text-[17px] leading-[1.7] text-charcoal opacity-60">
            {featuredStory.openingDescription}
          </p>
        </section>

        <section className="px-12 pb-[120px]">
          <p className="font-mono text-[11px] uppercase text-copper">{'// THE PROJECT INDEX'}</p>
          <div className="mt-16 grid grid-cols-2 gap-6">
            {tabletProjects.map((project) => (
              <Link key={project.id} href={`/work/${project.id}`} className="block">
                <div className="relative h-80 overflow-hidden rounded-[2px]">
                  <Image
                    src={project.images.tablet!}
                    alt={`${project.name} project card`}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <p className="mt-4 font-mono text-[9px] uppercase text-near-black opacity-40">
                  {project.discipline}
                </p>
                <p className="mt-1 font-serif text-[28px] leading-[1.1] text-near-black">
                  {project.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative flex h-[720px] items-end px-12 pb-20 pt-[120px] text-paper">
          <Image
            src="/images/work/tablet/featured-hero.png"
            alt="FIFA featured hero tablet"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(15,15,16,0.6)]" />
          <Link href="/work/fifa-world-cup" className="relative block">
            <p className="font-mono text-[11px] uppercase opacity-60">{featuredStory.label}</p>
            <p className="mt-3 font-serif text-[72px] leading-[0.95]">{featuredStory.title}</p>
          </Link>
        </section>

        <section className="grid grid-cols-[minmax(0,1fr)_240px] gap-6 px-12 py-[100px]">
          <div className="space-y-8 font-sans text-[17px] leading-[1.7] text-charcoal">
            {featuredStory.tabletParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? '' : 'opacity-80'}>
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            {featuredStory.condensedMetadata.map((item) => (
              <div
                key={item.label}
                className="border-b border-light-gray pb-3 pt-0 first:pt-0 [&:not(:first-child)]:mt-6"
              >
                <p className="font-mono text-[9px] uppercase text-copper">{item.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase text-charcoal">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-warm-white px-12 py-20">
          <p className="font-mono text-[11px] uppercase text-copper">{'// OPERATIONAL KPIS'}</p>
          <div className="mt-12 grid grid-cols-2 gap-6">
            {featuredStory.tabletMetrics.map((metric) => (
              <div key={metric.label} className="border-b border-light-gray py-8">
                <p className="font-serif text-[64px] leading-none text-charcoal">{metric.value}</p>
                <p className="mt-2 font-mono text-[9px] uppercase text-copper">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-near-black px-12 py-[120px] text-paper">
          <p className="font-mono text-[11px] uppercase text-copper">{'// THE GOVERNANCE OS'}</p>
          <div className="mt-16 space-y-10">
            {featuredStory.condensedGovernanceLayers.map((layer) => (
              <div key={layer.layer}>
                <div className="flex items-center justify-between font-mono text-[12px] uppercase">
                  <p className="text-copper">{layer.title}</p>
                  <p className="text-paper opacity-40">{layer.layer}</p>
                </div>
                <div className="mt-4 h-px w-full bg-copper opacity-20" />
                <p className="mt-4 font-serif text-[24px] leading-[1.1]">{layer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-12 py-[120px]">
          <div className="relative h-[420px] overflow-hidden">
            <Image
              src="/images/work/tablet/evidence-big.png"
              alt="Large operational evidence image"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="/images/work/tablet/evidence-01.png"
                alt="Operational evidence image one"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="/images/work/tablet/evidence-02.png"
                alt="Operational evidence image two"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </section>

        <section className="px-12 pb-20 pt-[120px]">
          <p className="font-serif text-[56px] leading-[1.05] text-black">The next conversation.</p>
          <div className="mt-8 font-mono text-[14px] uppercase text-charcoal">
            <p>
              <a href="mailto:office@ryanmorrow.com" className="underline">
                OFFICE@RYANMORROW.COM
              </a>
            </p>
            <p className="mt-3">
              <a href="https://linkedin.com/in/ryanmorrow" className="underline">
                LINKEDIN / RMORROW
              </a>
            </p>
          </div>
          <div className="mt-[120px]">
            <div className="h-px w-full bg-copper opacity-20" />
            <div className="mt-6 flex items-center justify-between font-mono text-[9px] uppercase text-black">
              <p className="opacity-60">© 2026 RYAN MORROW MONOGRAPH</p>
              <p className="opacity-60">LONDON / NYC / SYDNEY</p>
            </div>
          </div>
        </section>
      </div>

      <div className="md:hidden">
        <section className="px-6 pb-16 pt-[100px]">
          <p className="font-mono text-[10px] uppercase text-copper">CH. 02 // THE WORK</p>
          <h1 className="mt-8 font-serif text-[40px] leading-[0.95] text-near-black">
            Mastering Global Complexity
          </h1>
          <p className="mt-4 font-sans text-[16px] leading-[1.7] text-charcoal opacity-60">
            {featuredStory.mobileDescription}
          </p>
        </section>

        <section className="px-6 pb-20">
          <p className="font-mono text-[10px] uppercase text-copper">{'// THE PROJECT INDEX'}</p>
          <div className="mt-12 space-y-10">
            {mobileProjects.map((project) => (
              <Link key={project.id} href={`/work/${project.id}`} className="block">
                <div className="relative h-60 overflow-hidden rounded-[2px]">
                  <Image
                    src={project.images.mobile ?? project.images.tablet!}
                    alt={`${project.name} project card`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <p className="mt-4 font-mono text-[9px] uppercase text-near-black opacity-40">
                  {project.discipline}
                </p>
                <p className="mt-1 font-serif text-[24px] leading-[1.1] text-near-black">
                  {project.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative flex h-[520px] items-end px-6 pb-12 pt-[60px] text-paper">
          <Image
            src="/images/work/mobile/featured-hero.png"
            alt="FIFA featured hero mobile"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(15,15,16,0.6)]" />
          <Link href="/work/fifa-world-cup" className="relative block">
            <p className="font-mono text-[10px] uppercase opacity-60">{featuredStory.label}</p>
            <p className="mt-3 font-serif text-[40px] leading-[0.95]">{featuredStory.title}</p>
          </Link>
        </section>

        <section className="px-6 py-16">
          <div className="space-y-6 font-sans text-[16px] leading-[1.7] text-charcoal">
            {featuredStory.mobileParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? '' : 'opacity-80'}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12">
            {featuredStory.condensedMetadata.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between border-b border-light-gray py-3 font-mono uppercase"
              >
                <p className="text-[9px] text-copper">{item.label}</p>
                <p className="text-[10px] text-charcoal">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-warm-white px-6 py-16">
          <p className="font-mono text-[10px] uppercase text-copper">{'// OPERATIONAL KPIS'}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {featuredStory.mobileMetrics.map((metric) => (
              <div key={metric.label} className="border-b border-light-gray py-6">
                <p className="font-serif text-[48px] leading-none text-charcoal">{metric.value}</p>
                <p className="mt-2 font-mono text-[9px] uppercase text-copper">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-near-black px-6 pb-20 pt-16 text-paper">
          <p className="font-mono text-[10px] uppercase text-copper">{'// THE GOVERNANCE OS'}</p>
          <div className="mt-12 space-y-10">
            {featuredStory.condensedGovernanceLayers.map((layer) => (
              <div key={layer.layer}>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase">
                  <p className="text-copper">{layer.title}</p>
                  <p className="text-paper opacity-40">{layer.layer}</p>
                </div>
                <div className="mt-4 h-px w-full bg-copper opacity-20" />
                <p className="mt-4 font-serif text-[20px] leading-[1.1]">{layer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="relative h-[280px] overflow-hidden">
            <Image
              src="/images/work/mobile/evidence-big.png"
              alt="Large mobile evidence image"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="relative h-[180px] overflow-hidden">
              <Image
                src="/images/work/mobile/evidence-01.png"
                alt="Mobile evidence image one"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative h-[180px] overflow-hidden">
              <Image
                src="/images/work/mobile/evidence-02.png"
                alt="Mobile evidence image two"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-16">
          <p className="font-serif text-[40px] leading-[1.05] text-black">The next conversation.</p>
          <div className="mt-8 font-mono text-[12px] uppercase text-charcoal">
            <p>
              <a href="mailto:office@ryanmorrow.com" className="underline">
                OFFICE@RYANMORROW.COM
              </a>
            </p>
            <p className="mt-3">
              <a href="https://linkedin.com/in/ryanmorrow" className="underline">
                LINKEDIN / RMORROW
              </a>
            </p>
          </div>
          <div className="mt-16">
            <div className="h-px w-full bg-copper opacity-20" />
            <div className="mt-6 space-y-2 font-mono text-[9px] uppercase text-black">
              <p className="opacity-60">© 2026 RYAN MORROW MONOGRAPH</p>
              <p className="opacity-60">LONDON / NYC / SYDNEY</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}