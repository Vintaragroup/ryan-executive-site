import { getProjectBySlug, publishedCaseStudyProjects } from '@/lib/projects';

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyEvidenceImage {
  src: string;
  alt: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  name: string;
  discipline: string;
  period: string;
  opening: {
    subtitle: string;
    title: string;
    heroDescription: string;
    heroImageUrl: string;
  };
  context: {
    heading: string;
    paragraphs: string[];
  };
  metrics: CaseStudyMetric[];
  challenge: {
    heading: string;
    body: string;
  };
  system: {
    heading: string;
    body: string;
  };
  evidence: CaseStudyEvidenceImage[];
  reflection: {
    quote: string;
    coda: string;
  };
  nextProject: {
    id: string;
    name: string;
  };
  previousProject: {
    id: string;
    name: string;
  };
}

const sharedTemplate = {
  evidence: [
    {
      src: '/images/work/template/evidence-01.png',
      alt: 'Case study evidence image one.',
    },
    {
      src: '/images/work/template/evidence-02.png',
      alt: 'Case study evidence image two.',
    },
    {
      src: '/images/work/template/evidence-03.png',
      alt: 'Case study evidence image three.',
    },
  ],
};

const fifaCaseStudyContent = {
  heroDescription:
    "Orchestrating operational infrastructure for the world's largest single-sport event across multiple host cities",
  context: {
    heading: 'A Nation Building in Real Time',
    paragraphs: [
      'The 2022 FIFA World Cup was not an event — it was the construction of a temporary nation. Across 16 cities and 8 stadiums, an operational infrastructure had to emerge from desert in under 48 months. Every system — broadcast, logistics, security, hospitality, transportation — had to function as one organism from day one.',
      `The brief was deceptively simple: make it work. But "working" meant coordinating 32 vendors across 3 nations, managing 1,200 production staff in rotating shifts, and delivering 64 matches without a single operational failure visible to 5 billion viewers.`,
    ],
  },
  metrics: [
    { value: '1,200+', label: 'PRODUCTION STAFF' },
    { value: '16', label: 'HOST CITIES' },
    { value: '99.7%', label: 'UPTIME ACROSS VENUES' },
    { value: '32+', label: 'VENDOR PARTNERS' },
  ],
  challenge: {
    heading: 'Simultaneity at Continental Scale',
    body:
      'The defining constraint was simultaneity. Multiple stadiums running concurrent matches, each requiring independent broadcast infrastructure, security protocols, and hospitality operations — but all feeding into a single unified command structure. A failure in one venue could cascade across the entire network. Traditional event management treats each venue as autonomous. This engagement required treating eight stadiums as one distributed system, with shared resources, synchronized timelines, and real-time load balancing across physical infrastructure.',
  },
  system: {
    heading: 'Distributed Command Architecture',
    body:
      'We designed a hub-and-spoke operational framework with a central command center feeding real-time data to venue operations teams. Each spoke operated with local autonomy for tactical decisions but synchronized on resource allocation, staff rotation, and incident response through a unified communications protocol. The vendor coordination layer mapped 32 partners into functional clusters — broadcast, logistics, security, hospitality — with clear escalation paths and SLA-driven accountability. Timeline management used a phase-gate system across the 48-month build, with each gate requiring sign-off from operations, engineering, and the client.',
  },
  reflection: {
    quote:
      'Scale does not forgive ambiguity. At this level, every undefined process becomes a failure vector, and every assumption becomes a liability that compounds under pressure.',
    coda: 'Building the machine that disappears.',
  },
};

function createPlaceholderCaseStudyContent(projectName: string, discipline: string, period: string) {
  return {
    heroDescription: `[VALIDATION REQUIRED — ${projectName} hero description]`,
    context: {
      heading: `[VALIDATION REQUIRED — ${projectName} brief heading]`,
      paragraphs: [
        `[VALIDATION REQUIRED — ${projectName} brief paragraph 01 for ${discipline.toLowerCase()} engagement]`,
        `[VALIDATION REQUIRED — ${projectName} brief paragraph 02 covering program scope from ${period}]`,
      ],
    },
    metrics: [
      { value: '[VALIDATION REQUIRED]', label: `${discipline} KPI 01` },
      { value: '[VALIDATION REQUIRED]', label: `${discipline} KPI 02` },
      { value: '[VALIDATION REQUIRED]', label: `${discipline} KPI 03` },
      { value: '[VALIDATION REQUIRED]', label: `${discipline} KPI 04` },
    ],
    challenge: {
      heading: `[VALIDATION REQUIRED — ${projectName} challenge heading]`,
      body: `[VALIDATION REQUIRED — ${projectName} challenge narrative]`,
    },
    system: {
      heading: `[VALIDATION REQUIRED — ${projectName} system heading]`,
      body: `[VALIDATION REQUIRED — ${projectName} system narrative]`,
    },
    reflection: {
      quote: `[VALIDATION REQUIRED — ${projectName} reflection quote]`,
      coda: `[VALIDATION REQUIRED — ${projectName} closing coda]`,
    },
  };
}

export const caseStudies: Record<string, CaseStudy> = publishedCaseStudyProjects.reduce<Record<string, CaseStudy>>(
  (accumulator, project, index) => {
    const previousProject =
      publishedCaseStudyProjects[
        (index - 1 + publishedCaseStudyProjects.length) % publishedCaseStudyProjects.length
      ];
    const nextProject =
      publishedCaseStudyProjects[(index + 1) % publishedCaseStudyProjects.length];
    const content =
      project.id === 'fifa-world-cup'
        ? fifaCaseStudyContent
        : createPlaceholderCaseStudyContent(project.name, project.discipline, project.period);

    accumulator[project.id] = {
      id: project.id,
      slug: project.id,
      name: project.name,
      discipline: project.discipline,
      period: project.period,
      opening: {
        subtitle: `${project.period} · ${project.discipline}`,
        title: project.name,
        heroDescription: content.heroDescription,
        heroImageUrl: '/images/work/template/hero.png',
      },
      context: {
        heading: content.context.heading,
        paragraphs: [...content.context.paragraphs],
      },
      metrics: content.metrics.map((metric) => ({ ...metric })),
      challenge: { ...content.challenge },
      system: { ...content.system },
      evidence: sharedTemplate.evidence.map((image) => ({ ...image })),
      reflection: { ...content.reflection },
      nextProject: {
        id: nextProject.id,
        name: nextProject.name,
      },
      previousProject: {
        id: previousProject.id,
        name: previousProject.name,
      },
    };

    return accumulator;
  },
  {},
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const project = getProjectBySlug(slug);

  if (!project || project.isPublishedCaseStudy === false) {
    return undefined;
  }

  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return publishedCaseStudyProjects.map((project) => project.id);
}

export function caseStudyExists(slug: string): boolean {
  return Boolean(getCaseStudyBySlug(slug));
}