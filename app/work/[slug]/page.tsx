import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/lib/case-studies';
import { CaseStudyClient } from './CaseStudyClient';

/**
 * Generate static params for all case study routes
 * Pre-renders all /work/[slug] pages at build time
 */
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate dynamic metadata for each case study
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'This case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.name} — Ryan Morrow`,
    description: caseStudy.opening.heroDescription,
    openGraph: {
      title: caseStudy.name,
      description: caseStudy.opening.heroDescription,
    },
  };
}

/**
 * Case Study Page (Server Component)
 *
 * Delegates rendering to CaseStudyClient component.
 * Keeps static generation logic separate from interactive content.
 */
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <CaseStudyClient slug={slug} />;
}
