export interface ProjectImageSet {
  tablet?: string;
  mobile?: string;
}

export interface Project {
  id: string;
  name: string;
  discipline: string;
  period: string;
  images: ProjectImageSet;
  desktopMetaOrder?: 'period-first' | 'name-first';
  isPublishedCaseStudy?: boolean;
}

export const projects: Project[] = [
  {
    id: 'fifa-world-cup',
    name: 'FIFA World Cup',
    discipline: 'GLOBAL SPORTING',
    period: '2022–2026',
    images: {
      tablet: '/images/work/tablet/project-01.png',
      mobile: '/images/work/mobile/project-01.png',
    },
    isPublishedCaseStudy: true,
  },
  {
    id: 'universal-studios',
    name: 'Universal Studios',
    discipline: 'THEME PARK OPS',
    period: '2008–2010',
    images: {
      tablet: '/images/work/tablet/project-02.png',
      mobile: '/images/work/mobile/project-02.png',
    },
    isPublishedCaseStudy: true,
  },
  {
    id: 'golden-state-warriors',
    name: 'Golden State Warriors',
    discipline: 'NBA EXPERIENCE',
    period: '2015–2018',
    images: {
      tablet: '/images/work/tablet/project-03.png',
      mobile: '/images/work/mobile/project-03.png',
    },
    isPublishedCaseStudy: true,
  },
  {
    id: 'special-olympics',
    name: 'Special Olympics',
    discipline: 'INCLUSIVE SPORT',
    period: '2018–2022',
    images: {
      tablet: '/images/work/tablet/project-04.png',
      mobile: '/images/work/mobile/project-04.png',
    },
    isPublishedCaseStudy: true,
  },
  {
    id: 'nike',
    name: 'Nike',
    discipline: 'EXPERIENTIAL',
    period: '2016–2019',
    images: {
      tablet: '/images/work/tablet/project-05.png',
    },
    isPublishedCaseStudy: true,
  },
  {
    id: 'amp',
    name: 'AMP',
    discipline: 'MARKET GROWTH',
    period: '2010–2012',
    images: {
      tablet: '/images/work/tablet/project-06.png',
    },
    isPublishedCaseStudy: true,
  },
  {
    id: 'datavault',
    name: 'Datavault',
    discipline: 'FINTECH INFRA',
    period: '2021–2022',
    images: {
      tablet: '/images/work/tablet/project-07.png',
    },
    isPublishedCaseStudy: false,
  },
  {
    id: 'vintara',
    name: 'Vintara',
    discipline: 'HOSPITALITY',
    period: '2023–2025',
    images: {
      tablet: '/images/work/tablet/project-08.png',
    },
    isPublishedCaseStudy: true,
  },
  {
    id: 'ion-creative-studios',
    name: 'iON Creative Studios',
    discipline: 'CREATIVE OPS',
    period: '2015–2018',
    images: {},
    desktopMetaOrder: 'name-first',
    isPublishedCaseStudy: false,
  },
];

export const publishedCaseStudyProjects = projects.filter(
  (project) => project.isPublishedCaseStudy !== false,
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}