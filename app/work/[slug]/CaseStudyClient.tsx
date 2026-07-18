import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer, GlobalNav } from '@/components/navigation';
import { getCaseStudyBySlug } from '@/lib/case-studies';

interface CaseStudyClientProps {
  slug: string;
}

export function CaseStudyClient({ slug }: CaseStudyClientProps) {
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const footerLinks = [
    { label: 'Work', href: '/work' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ryanmorrow' },
    { label: 'Email', href: 'mailto:office@ryanmorrow.com' },
  ];

  return (
    <main className="bg-paper text-charcoal">
      <GlobalNav />

      <section className="border-b border-light-gray px-6 py-5 sm:px-10 lg:px-20">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[2px] text-[#6b6b6b] sm:text-[11px]">
          <Link href="/work" className="text-copper underline-offset-4 hover:underline">
            Back to Work
          </Link>
          <span className="opacity-40">/</span>
          <span>{caseStudy.name}</span>
        </div>
      </section>

      <section className="bg-near-black px-6 py-24 text-center text-warm-white sm:px-10 sm:py-32 lg:flex lg:h-200 lg:flex-col lg:items-center lg:justify-center lg:px-20 lg:py-0">
        <p className="text-copper font-mono text-[10px] uppercase tracking-[3px] sm:text-[11px]">
          {caseStudy.opening.subtitle}
        </p>
        <h1 className="mt-6 font-serif text-[44px] leading-[0.95] tracking-[-0.8px] sm:text-[56px] lg:text-[72px] lg:tracking-[-1.5px]">
          {caseStudy.opening.title}
        </h1>
        <p className="mx-auto mt-6 max-w-190 font-sans text-[16px] leading-[1.7] text-[#6b6b6b] sm:text-[18px] lg:text-[20px] lg:font-light">
          {caseStudy.opening.heroDescription}
        </p>
      </section>

      <section className="relative h-105 sm:h-140 lg:h-200">
        <Image
          src={caseStudy.opening.heroImageUrl}
          alt={`${caseStudy.name} hero image`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-80 lg:py-24">
        <p className="text-copper font-mono text-[10px] uppercase tracking-[3px] sm:text-[11px]">
          THE BRIEF
        </p>
        <h2 className="mt-6 font-serif text-[32px] leading-[1.1] tracking-[-0.4px] sm:text-[36px] lg:text-[40px] lg:tracking-[-0.5px]">
          {caseStudy.context.heading}
        </h2>
        <div className="mt-8 space-y-6 font-sans text-[16px] leading-[1.7] text-[#4a4a4a] sm:text-[17px]">
          {caseStudy.context.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-near-black px-6 py-14 sm:px-10 lg:flex lg:h-62.5 lg:items-center lg:justify-between lg:px-30 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:flex lg:w-full lg:justify-between">
          {caseStudy.metrics.map((metric) => (
            <div key={metric.label} className="text-center lg:min-w-45">
              <p className="text-copper font-serif text-[40px] tracking-[-1px] sm:text-[44px] lg:text-[48px]">
                {metric.value}
              </p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[2px] text-[#6b6b6b] sm:text-[10px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="h-55 bg-near-black sm:h-70 lg:h-100" />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-80 lg:py-24">
        <p className="text-copper font-mono text-[10px] uppercase tracking-[3px] sm:text-[11px]">
          THE CHALLENGE
        </p>
        <h2 className="mt-6 font-serif text-[32px] leading-[1.1] tracking-[-0.4px] sm:text-[36px] lg:text-[40px] lg:tracking-[-0.5px]">
          {caseStudy.challenge.heading}
        </h2>
        <p className="mt-8 font-sans text-[16px] leading-[1.7] text-[#4a4a4a] sm:text-[17px]">
          {caseStudy.challenge.body}
        </p>
      </section>

      <section className="bg-near-black px-6 py-16 text-warm-white sm:px-10 sm:py-20 lg:px-30 lg:py-24">
        <p className="text-copper font-mono text-[10px] uppercase tracking-[3px] sm:text-[11px]">
          THE OPERATIONAL SYSTEM
        </p>
        <h2 className="mt-6 font-serif text-[32px] leading-[1.1] tracking-[-0.4px] sm:text-[36px] lg:text-[40px] lg:tracking-[-0.5px]">
          {caseStudy.system.heading}
        </h2>
        <p className="mt-8 max-w-max font-sans text-[16px] leading-[1.7] text-[#6b6b6b] sm:text-[17px] lg:font-light">
          {caseStudy.system.body}
        </p>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <p className="text-copper font-mono text-[10px] uppercase tracking-[3px] sm:text-[11px]">
          EVIDENCE
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {caseStudy.evidence.map((image) => (
            <div
              key={image.src}
              className="relative h-80 overflow-hidden bg-dark-gray sm:h-105 lg:h-125"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-near-black px-6 py-20 text-center text-warm-white sm:px-10 lg:px-20 lg:py-24">
        <p className="text-copper font-serif text-[56px] leading-none lg:text-[72px]">&quot;</p>
        <p className="mx-auto mt-4 max-w-225 font-serif text-[24px] italic leading-normal sm:text-[26px] lg:text-[28px]">
          {caseStudy.reflection.quote}
        </p>
        <p className="text-copper mt-8 font-mono text-[10px] uppercase tracking-[2px] sm:text-[11px]">
          {caseStudy.reflection.coda}
        </p>
      </section>

      <section className="border-t border-light-gray px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[2px] text-[#6b6b6b]">Back to Work</p>
            <Link
              href="/work"
              className="inline-block font-serif text-[28px] tracking-[-0.3px] text-charcoal underline-offset-4 hover:underline sm:text-[30px] lg:text-[32px]"
            >
              ← All Case Studies
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[#6b6b6b]">Previous Project</p>
              <Link
                href={`/work/${caseStudy.previousProject.id}`}
                className="inline-block font-serif text-[28px] tracking-[-0.3px] text-charcoal underline-offset-4 hover:underline sm:text-[30px] lg:text-[32px]"
              >
                ← {caseStudy.previousProject.name}
              </Link>
            </div>

            <div className="space-y-4 lg:text-right">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[#6b6b6b]">Next Project</p>
              <Link
                href={`/work/${caseStudy.nextProject.id}`}
                className="inline-block font-serif text-[28px] tracking-[-0.3px] text-charcoal underline-offset-4 hover:underline sm:text-[30px] lg:text-[32px]"
              >
                {caseStudy.nextProject.name} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer links={footerLinks} />
    </main>
  );
}