/**
 * Thinking Chapter - Data Definitions
 * Journal index and article content records
 * Extracted from Figma design file: Node 155-697 (desktop), 166-971 (tablet), 166-1049 (mobile)
 */

export interface Figure {
  id: string;
  title: string;
  caption: string;
  source?: string;
}

export interface Marginalia {
  id: string;
  content: string;
  placement?: string; // e.g., "top", "middle", "bottom" within article
}

export interface Citation {
  id: string;
  text: string;
  author: string;
  source: string;
  url?: string;
}

export interface PullQuote {
  id: string;
  text: string;
  attribution?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingTime: number; // minutes
  category: string;
  excerpt: string;
  heroImageUrl?: string;
  content?: string; // Could be MDX or plain text
  figures?: Figure[];
  marginalia?: Marginalia[];
  citations?: Citation[];
  pullQuotes?: PullQuote[];
}

/**
 * Opening Hero Section
 */
export const thinkingHero = {
  chapterNumber: '06',
  title: 'Thinking',
  subtitle: 'Frameworks for Scale & Resilience',
  description:
    'A journal of strategic thinking across international operations, organizational design, and the principles that enable teams to navigate complexity at global scale.',
  volumeLabel: 'THINKING JOURNAL // VOL 12',
  coordinates: '[COORDINATES: Available from session data]',
};

/**
 * Article collection
 * [VALIDATION REQUIRED] for all article content — placeholder records with semantic structure
 */
export const articles: Article[] = [
  {
    id: 'article-001',
    slug: 'operational-resilience-frameworks',
    title: '[ARTICLE TITLE: Operational Resilience Frameworks]',
    dek: '[DEK: Subtitle or thesis statement about operational resilience]',
    date: '[DATE: TBD]',
    readingTime: 8,
    category: 'Operations',
    excerpt:
      '[EXCERPT: Brief summary of article focus and key takeaway about building resilient operational systems]',
    heroImageUrl: '[Hero Image URL: TBD]',
    content: '[CONTENT: Placeholder — full article text to be supplied]',
    figures: [
      {
        id: 'fig-1',
        title: '[FIG 1: Resilience Framework Diagram]',
        caption: '[CAPTION: Description of operational resilience framework structure]',
      },
      {
        id: 'fig-2',
        title: '[FIG 2: System Recovery Timeline]',
        caption: '[CAPTION: Visualization of recovery patterns across operational phases]',
      },
    ],
    marginalia: [
      {
        id: 'marg-1',
        content: '[MARGINALIA: Side note on framework applicability across contexts]',
      },
      {
        id: 'marg-2',
        content: '[MARGINALIA: Reference to parallel case studies]',
      },
    ],
    citations: [
      {
        id: 'cite-1',
        text: 'Operational resilience principle',
        author: '[Author Name]',
        source: '[Source Title]',
      },
    ],
    pullQuotes: [
      {
        id: 'quote-1',
        text: '[PULL QUOTE: Key insight or observation about operational resilience]',
        attribution: '[Attribution: If applicable]',
      },
    ],
  },
  {
    id: 'article-002',
    slug: 'scaling-human-coordination',
    title: '[ARTICLE TITLE: Scaling Human Coordination]',
    dek: '[DEK: Subtitle about coordination mechanisms and human factors at scale]',
    date: '[DATE: TBD]',
    readingTime: 10,
    category: 'Strategy',
    excerpt:
      '[EXCERPT: Overview of coordination challenges and frameworks for teams operating at global scale]',
    heroImageUrl: '[Hero Image URL: TBD]',
    content: '[CONTENT: Placeholder — full article text to be supplied]',
    figures: [
      {
        id: 'fig-1',
        title: '[FIG 1: Coordination Topology]',
        caption: '[CAPTION: Visualization of coordination patterns across organizational layers]',
      },
      {
        id: 'fig-2',
        title: '[FIG 2: Communication Flow Diagram]',
        caption: '[CAPTION: Information flow pathways in scaled coordination]',
      },
      {
        id: 'fig-3',
        title: '[FIG 3: Decision Latency Analysis]',
        caption: '[CAPTION: Response time patterns across different coordination models]',
      },
    ],
    marginalia: [
      {
        id: 'marg-1',
        content: '[MARGINALIA: Comparison to biological coordination systems]',
      },
    ],
    citations: [
      {
        id: 'cite-1',
        text: 'Human factors in scaled operations',
        author: '[Author Name]',
        source: '[Source Title]',
      },
      {
        id: 'cite-2',
        text: 'Organizational coordination theory',
        author: '[Author Name]',
        source: '[Source Title]',
      },
    ],
    pullQuotes: [
      {
        id: 'quote-1',
        text: '[PULL QUOTE: Core insight about coordination at scale]',
        attribution: '[Attribution: If applicable]',
      },
    ],
  },
  {
    id: 'article-003',
    slug: 'design-thinking-operations',
    title: '[ARTICLE TITLE: Design Thinking in Operations]',
    dek: '[DEK: Integration of design principles into operational planning]',
    date: '[DATE: TBD]',
    readingTime: 7,
    category: 'Design Thinking',
    excerpt:
      '[EXCERPT: How design thinking principles improve operational planning and execution]',
    heroImageUrl: '[Hero Image URL: TBD]',
    content: '[CONTENT: Placeholder — full article text to be supplied]',
    figures: [
      {
        id: 'fig-1',
        title: '[FIG 1: Design Thinking Process]',
        caption: '[CAPTION: Phases of design thinking applied to operations]',
      },
    ],
    marginalia: [
      {
        id: 'marg-1',
        content: '[MARGINALIA: Case study reference — design thinking in action]',
      },
    ],
    citations: [
      {
        id: 'cite-1',
        text: 'Design thinking methodology',
        author: '[Author Name]',
        source: '[Source Title]',
      },
    ],
    pullQuotes: [
      {
        id: 'quote-1',
        text: '[PULL QUOTE: Key principle about human-centered design in operations]',
        attribution: '[Attribution: If applicable]',
      },
    ],
  },
  {
    id: 'article-004',
    slug: 'technology-infrastructure-decisions',
    title: '[ARTICLE TITLE: Technology & Infrastructure Decisions]',
    dek: '[DEK: Framework for evaluating technology choices at scale]',
    date: '[DATE: TBD]',
    readingTime: 9,
    category: 'Operations',
    excerpt:
      '[EXCERPT: Decision-making framework for technology and infrastructure investments]',
    heroImageUrl: '[Hero Image URL: TBD]',
    content: '[CONTENT: Placeholder — full article text to be supplied]',
    figures: [
      {
        id: 'fig-1',
        title: '[FIG 1: Technology Evaluation Matrix]',
        caption: '[CAPTION: Framework for assessing technology options]',
      },
      {
        id: 'fig-2',
        title: '[FIG 2: Infrastructure Scaling Patterns]',
        caption: '[CAPTION: Patterns for infrastructure evolution over time]',
      },
    ],
    marginalia: [
      {
        id: 'marg-1',
        content: '[MARGINALIA: Trade-offs between flexibility and standardization]',
      },
    ],
    citations: [
      {
        id: 'cite-1',
        text: 'Technology decision frameworks',
        author: '[Author Name]',
        source: '[Source Title]',
      },
    ],
    pullQuotes: [
      {
        id: 'quote-1',
        text: '[PULL QUOTE: Insight about technology as enabler of operational strategy]',
        attribution: '[Attribution: If applicable]',
      },
    ],
  },
];

/**
 * Helper functions
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function articleExists(slug: string): boolean {
  return articles.some((article) => article.slug === slug);
}
