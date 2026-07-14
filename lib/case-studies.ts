/**
 * Case Study Content Schema
 *
 * Structured data for individual project case studies (/work/[slug] routes).
 * Each case study extends the Project index entry with full editorial content.
 *
 * Structure (12 sections):
 * 1. Opening spread (hero + title + description)
 * 2. Context (the brief)
 * 3. Metrics (4-up grid)
 * 4. Challenge (the challenge)
 * 5. System (operational system)
 * 6. Evidence (gallery)
 * 7. Reflection (closing quote)
 * 8. Navigation (next project)
 *
 * All placeholder text uses [Placeholder_*] convention.
 * No hard-coded project-specific content in layout components.
 */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  // Index metadata
  id: string;
  slug: string;
  name: string;
  year: number;
  category: string;

  // Opening spread
  opening: {
    subtitle: string; // e.g., "2022 · GLOBAL SPORTING EVENT"
    title: string; // e.g., "FIFA World Cup"
    heroDescription: string; // Subtitle/tagline
    heroImageUrl: string;
  };

  // Context section (THE BRIEF)
  context: {
    heading: string; // e.g., "[Context Heading — what was the situation]"
    paragraphs: string[]; // 2-3 narrative paragraphs
  };

  // Metrics (4-up grid)
  metrics: CaseStudyMetric[];

  // Challenge section (THE CHALLENGE)
  challenge: {
    heading: string;
    paragraphs: string[]; // Narrative description, not bullets
  };

  // System section (THE OPERATIONAL SYSTEM)
  system: {
    heading: string;
    paragraphs: string[]; // Framework, structure, vendors, timeline
  };

  // Evidence gallery (3-image grid)
  gallery: {
    images: GalleryImage[];
  };

  // Reflection (closing quote)
  reflection: {
    quote: string;
    attribution?: string;
  };

  // Navigation to next project
  nextProject?: {
    id: string;
    name: string;
  };
}

/**
 * Case Studies Database
 *
 * Currently populated with FIFA 2026 and placeholders for others.
 * Content team will populate remaining project details.
 */
export const caseStudies: Record<string, CaseStudy> = {
  "fifa-world-cup": {
    id: "fifa-world-cup",
    slug: "fifa-world-cup",
    name: "FIFA World Cup 2026",
    year: 2026,
    category: "Global Sports Event",

    opening: {
      subtitle: "2026 · GLOBAL SPORTING EVENT",
      title: "FIFA World Cup",
      heroDescription:
        "Orchestrating operational infrastructure for the world's largest single-sport event across multiple host cities",
      heroImageUrl: "[VALIDATION REQUIRED — provide FIFA World Cup hero image URL]",
    },

    context: {
      heading: "[VALIDATION REQUIRED — Context heading for FIFA World Cup]",
      paragraphs: [
        "[VALIDATION REQUIRED — Project context paragraph 1: operational challenge, scale, stakes]",
        "[VALIDATION REQUIRED — Project context paragraph 2: continuation of narrative]",
        "[VALIDATION REQUIRED — Project context paragraph 3: stakes and importance]",
      ],
    },

    metrics: [
      { value: "[VALIDATION REQUIRED — Metric 1 value]", label: "[VALIDATION REQUIRED — Metric 1 label]" },
      { value: "[VALIDATION REQUIRED — Metric 2 value]", label: "[VALIDATION REQUIRED — Metric 2 label]" },
      { value: "[VALIDATION REQUIRED — Metric 3 value]", label: "[VALIDATION REQUIRED — Metric 3 label]" },
      { value: "[VALIDATION REQUIRED — Metric 4 value]", label: "[VALIDATION REQUIRED — Metric 4 label]" },
    ],

    challenge: {
      heading: "[VALIDATION REQUIRED — Challenge heading for FIFA World Cup]",
      paragraphs: [
        "[VALIDATION REQUIRED — Challenge description: logistical puzzle, coordination challenge, scale problem]",
      ],
    },

    system: {
      heading: "[VALIDATION REQUIRED — System heading for FIFA World Cup]",
      paragraphs: [
        "[VALIDATION REQUIRED — System description: operational framework, team structure, vendor coordination, timeline, architecture]",
      ],
    },

    gallery: {
      images: [
        {
          src: "[VALIDATION REQUIRED — Gallery image 1 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 1 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 1]",
        },
        {
          src: "[VALIDATION REQUIRED — Gallery image 2 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 2 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 2]",
        },
        {
          src: "[VALIDATION REQUIRED — Gallery image 3 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 3 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 3]",
        },
      ],
    },

    reflection: {
      quote: "[VALIDATION REQUIRED — Reflective quote about operational leadership]",
      attribution: "[VALIDATION REQUIRED — Attribution]",
    },

    nextProject: {
      id: "golden-state-warriors",
      name: "Golden State Warriors",
    },
  },

  "golden-state-warriors": {
    id: "golden-state-warriors",
    slug: "golden-state-warriors",
    name: "Golden State Warriors",
    year: 2019,
    category: "Professional Sports",

    opening: {
      subtitle: "2019 · PROFESSIONAL SPORTS",
      title: "Golden State Warriors",
      heroDescription:
        "Building the operational backbone for a championship-caliber franchise's event and fan experience programs",
      heroImageUrl: "[VALIDATION REQUIRED — provide Golden State Warriors hero image URL]",
    },

    context: {
      heading: "[VALIDATION REQUIRED — Context heading for Golden State Warriors]",
      paragraphs: [
        "[VALIDATION REQUIRED — Project context paragraph 1: operational challenge for franchise]",
        "[VALIDATION REQUIRED — Project context paragraph 2: scale and fan experience scope]",
        "[VALIDATION REQUIRED — Project context paragraph 3: championship organization stakes]",
      ],
    },

    metrics: [
      { value: "[VALIDATION REQUIRED — Metric 1 value]", label: "[VALIDATION REQUIRED — Metric 1 label]" },
      { value: "[VALIDATION REQUIRED — Metric 2 value]", label: "[VALIDATION REQUIRED — Metric 2 label]" },
      { value: "[VALIDATION REQUIRED — Metric 3 value]", label: "[VALIDATION REQUIRED — Metric 3 label]" },
      { value: "[VALIDATION REQUIRED — Metric 4 value]", label: "[VALIDATION REQUIRED — Metric 4 label]" },
    ],

    challenge: {
      heading: "[VALIDATION REQUIRED — Challenge heading for Warriors]",
      paragraphs: [
        "[VALIDATION REQUIRED — Challenge description: operational complexity of franchise management]",
      ],
    },

    system: {
      heading: "[VALIDATION REQUIRED — System heading for Warriors]",
      paragraphs: [
        "[VALIDATION REQUIRED — System description: franchise operational framework and fan experience architecture]",
      ],
    },

    gallery: {
      images: [
        {
          src: "[VALIDATION REQUIRED — Gallery image 1 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 1 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 1]",
        },
        {
          src: "[VALIDATION REQUIRED — Gallery image 2 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 2 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 2]",
        },
        {
          src: "[VALIDATION REQUIRED — Gallery image 3 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 3 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 3]",
        },
      ],
    },

    reflection: {
      quote: "[VALIDATION REQUIRED — Reflective quote about franchise operations]",
      attribution: "[VALIDATION REQUIRED — Attribution]",
    },

    nextProject: {
      id: "universal-studios",
      name: "Universal Studios",
    },
  },

  "universal-studios": {
    id: "universal-studios",
    slug: "universal-studios",
    name: "Universal Studios",
    year: 2020,
    category: "Entertainment & Hospitality",

    opening: {
      subtitle: "2020 · ENTERTAINMENT & HOSPITALITY",
      title: "Universal Studios",
      heroDescription:
        "Designing operational systems for immersive guest experiences at scale across theme park properties",
      heroImageUrl: "[VALIDATION REQUIRED — provide Universal Studios hero image URL]",
    },

    context: {
      heading: "[VALIDATION REQUIRED — Context heading for Universal Studios]",
      paragraphs: [
        "[VALIDATION REQUIRED — Project context paragraph 1: theme park operational challenge]",
        "[VALIDATION REQUIRED — Project context paragraph 2: guest experience scale across properties]",
        "[VALIDATION REQUIRED — Project context paragraph 3: immersion and operational stakes]",
      ],
    },

    metrics: [
      { value: "[VALIDATION REQUIRED — Metric 1 value]", label: "[VALIDATION REQUIRED — Metric 1 label]" },
      { value: "[VALIDATION REQUIRED — Metric 2 value]", label: "[VALIDATION REQUIRED — Metric 2 label]" },
      { value: "[VALIDATION REQUIRED — Metric 3 value]", label: "[VALIDATION REQUIRED — Metric 3 label]" },
      { value: "[VALIDATION REQUIRED — Metric 4 value]", label: "[VALIDATION REQUIRED — Metric 4 label]" },
    ],

    challenge: {
      heading: "[VALIDATION REQUIRED — Challenge heading for Universal Studios]",
      paragraphs: [
        "[VALIDATION REQUIRED — Challenge description: immersive experience at scale across multiple properties]",
      ],
    },

    system: {
      heading: "[VALIDATION REQUIRED — System heading for Universal Studios]",
      paragraphs: [
        "[VALIDATION REQUIRED — System description: guest experience framework, operational architecture, multi-property coordination]",
      ],
    },

    gallery: {
      images: [
        {
          src: "[VALIDATION REQUIRED — Gallery image 1 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 1 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 1]",
        },
        {
          src: "[VALIDATION REQUIRED — Gallery image 2 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 2 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 2]",
        },
        {
          src: "[VALIDATION REQUIRED — Gallery image 3 URL]",
          alt: "[VALIDATION REQUIRED — Gallery image 3 alt text]",
          caption: "[VALIDATION REQUIRED — Gallery caption 3]",
        },
      ],
    },

    reflection: {
      quote: "[VALIDATION REQUIRED — Reflective quote about immersive experiences and operations]",
      attribution: "[VALIDATION REQUIRED — Attribution]",
    },

    nextProject: {
      id: "special-olympics",
      name: "Special Olympics",
    },
  },

  "special-olympics": {
    id: "special-olympics",
    slug: "special-olympics",
    name: "Special Olympics",
    year: 2018,
    category: "Global Nonprofit",

    opening: {
      subtitle: "2018 · GLOBAL NONPROFIT",
      title: "Special Olympics",
      heroDescription: "Coordinating multi-national event logistics with volunteer-driven operational infrastructure",
      heroImageUrl: "[VALIDATION REQUIRED — provide Special Olympics hero image URL]",
    },

    context: {
      heading: "[Context Heading]",
      paragraphs: ["[Context paragraph 1]"],
    },

    metrics: [
      { value: "[00+]", label: "[METRIC LABEL]" },
      { value: "[00]", label: "[METRIC LABEL]" },
      { value: "[00%]", label: "[METRIC LABEL]" },
      { value: "[00+]", label: "[METRIC LABEL]" },
    ],

    challenge: {
      heading: "[Challenge Heading]",
      paragraphs: ["[Challenge description]"],
    },

    system: {
      heading: "[System Heading]",
      paragraphs: ["[System description]"],
    },

    gallery: {
      images: [
        {
          src: "/placeholder-gallery-01.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-02.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-03.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
      ],
    },

    reflection: {
      quote: "[Reflection quote]",
      attribution: "[Attribution]",
    },

    nextProject: {
      id: "amp-energy",
      name: "AMP Energy",
    },
  },

  "amp-energy": {
    id: "amp-energy",
    slug: "amp-energy",
    name: "AMP Energy",
    year: 2017,
    category: "Consumer Brand",

    opening: {
      subtitle: "2017 · CONSUMER BRAND",
      title: "AMP Energy",
      heroDescription: "Building experiential marketing operations bridging brand activations with live event production",
      heroImageUrl: "[VALIDATION REQUIRED — provide AMP Energy hero image URL]",
    },

    context: {
      heading: "[Context Heading]",
      paragraphs: ["[Context paragraph 1]"],
    },

    metrics: [
      { value: "[00+]", label: "[METRIC LABEL]" },
      { value: "[00]", label: "[METRIC LABEL]" },
      { value: "[00%]", label: "[METRIC LABEL]" },
      { value: "[00+]", label: "[METRIC LABEL]" },
    ],

    challenge: {
      heading: "[Challenge Heading]",
      paragraphs: ["[Challenge description]"],
    },

    system: {
      heading: "[System Heading]",
      paragraphs: ["[System description]"],
    },

    gallery: {
      images: [
        {
          src: "/placeholder-gallery-01.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-02.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-03.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
      ],
    },

    reflection: {
      quote: "[Reflection quote]",
      attribution: "[Attribution]",
    },

    nextProject: {
      id: "nike",
      name: "Nike",
    },
  },

  caa: {
    id: "caa",
    slug: "caa",
    name: "CAA",
    year: 2020,
    category: "Corporate",

    opening: {
      subtitle: "[Subtitle_Placeholder]",
      title: "CAA",
      heroDescription: "[Project tagline]",
      heroImageUrl: "/placeholder-case-study-caa-hero.jpg",
    },

    context: {
      heading: "[Context Heading]",
      paragraphs: ["[Context paragraph 1]"],
    },

    metrics: [
      { value: "[00+]", label: "[METRIC LABEL]" },
      { value: "[00]", label: "[METRIC LABEL]" },
      { value: "[00%]", label: "[METRIC LABEL]" },
      { value: "[00+]", label: "[METRIC LABEL]" },
    ],

    challenge: {
      heading: "[Challenge Heading]",
      paragraphs: ["[Challenge description]"],
    },

    system: {
      heading: "[System Heading]",
      paragraphs: ["[System description]"],
    },

    gallery: {
      images: [
        {
          src: "/placeholder-gallery-01.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-02.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-03.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
      ],
    },

    reflection: {
      quote: "[Reflection quote]",
      attribution: "[Attribution]",
    },

    nextProject: {
      id: "nike",
      name: "Nike",
    },
  },

  nike: {
    id: "nike",
    slug: "nike",
    name: "Nike",
    year: 2021,
    category: "Global Brand",

    opening: {
      subtitle: "2021 · GLOBAL BRAND",
      title: "Nike",
      heroDescription: "Executing premium brand experiences requiring military-grade operational precision at global scale",
      heroImageUrl: "[VALIDATION REQUIRED — provide Nike hero image URL]",
    },

    context: {
      heading: "[Context Heading]",
      paragraphs: ["[Context paragraph 1]"],
    },

    metrics: [
      { value: "[00+]", label: "[METRIC LABEL]" },
      { value: "[00]", label: "[METRIC LABEL]" },
      { value: "[00%]", label: "[METRIC LABEL]" },
      { value: "[00+]", label: "[METRIC LABEL]" },
    ],

    challenge: {
      heading: "[Challenge Heading]",
      paragraphs: ["[Challenge description]"],
    },

    system: {
      heading: "[System Heading]",
      paragraphs: ["[System description]"],
    },

    gallery: {
      images: [
        {
          src: "/placeholder-gallery-01.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-02.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-03.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
      ],
    },

    reflection: {
      quote: "[Reflection quote]",
      attribution: "[Attribution]",
    },

    nextProject: {
      id: "additional-project",
      name: "[Additional_Project_Name]",
    },
  },

  "additional-project": {
    id: "additional-project",
    slug: "additional-project",
    name: "[Additional_Project_Name]",
    year: 2024,
    category: "[Category]",

    opening: {
      subtitle: "[Subtitle_Placeholder]",
      title: "[Project Title]",
      heroDescription: "[Project tagline]",
      heroImageUrl: "/placeholder-case-study-additional-hero.jpg",
    },

    context: {
      heading: "[Context Heading]",
      paragraphs: ["[Context paragraph 1]"],
    },

    metrics: [
      { value: "[00+]", label: "[METRIC LABEL]" },
      { value: "[00]", label: "[METRIC LABEL]" },
      { value: "[00%]", label: "[METRIC LABEL]" },
      { value: "[00+]", label: "[METRIC LABEL]" },
    ],

    challenge: {
      heading: "[Challenge Heading]",
      paragraphs: ["[Challenge description]"],
    },

    system: {
      heading: "[System Heading]",
      paragraphs: ["[System description]"],
    },

    gallery: {
      images: [
        {
          src: "/placeholder-gallery-01.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-02.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
        {
          src: "/placeholder-gallery-03.jpg",
          alt: "[Gallery image alt]",
          caption: "[Gallery caption]",
        },
      ],
    },

    reflection: {
      quote: "[Reflection quote]",
      attribution: "[Attribution]",
    },
  },
};

/**
 * Utility Functions
 */

/**
 * Get a case study by slug
 * Returns the case study if found, undefined otherwise
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

/**
 * Get all case study slugs (for static generation)
 */
export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}

/**
 * Check if a slug exists
 */
export function caseStudyExists(slug: string): boolean {
  return slug in caseStudies;
}
