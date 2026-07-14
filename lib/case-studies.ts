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
      heroImageUrl: "/placeholder-case-study-fifa-hero.jpg",
    },

    context: {
      heading: "[Context Heading — what was the situation]",
      paragraphs: [
        "[Project context — two to three paragraphs describing the operational challenge, the scale of the engagement, and the stakes involved. This should read like documentary narration, not a case study.]",
      ],
    },

    metrics: [
      { value: "[00+]", label: "[METRIC LABEL]" },
      { value: "[00]", label: "[METRIC LABEL]" },
      { value: "[00%]", label: "[METRIC LABEL]" },
      { value: "[00+]", label: "[METRIC LABEL]" },
    ],

    challenge: {
      heading: "[What made this hard]",
      paragraphs: [
        "[Detailed description of the operational complexity — the logistical puzzle, the coordination challenge, the scale problem. Written as narrative, not bullet points.]",
      ],
    },

    system: {
      heading: "[How the system was built]",
      paragraphs: [
        "[Description of the operational framework, team structure, vendor coordination, timeline management, and system architecture deployed for this project]",
      ],
    },

    gallery: {
      images: [
        {
          src: "/placeholder-gallery-01.jpg",
          alt: "[Gallery image 1 alt text]",
          caption: "[Gallery caption 01]",
        },
        {
          src: "/placeholder-gallery-02.jpg",
          alt: "[Gallery image 2 alt text]",
          caption: "[Gallery caption 02]",
        },
        {
          src: "/placeholder-gallery-03.jpg",
          alt: "[Gallery image 3 alt text]",
          caption: "[Gallery caption 03]",
        },
      ],
    },

    reflection: {
      quote: "[Reflective quote — what this project revealed about operational leadership]",
      attribution: "[Attribution]",
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
    year: 2024,
    category: "Sports Organization",

    opening: {
      subtitle: "[Subtitle_Placeholder]",
      title: "Golden State Warriors",
      heroDescription: "[Project tagline]",
      heroImageUrl: "/placeholder-case-study-warriors-hero.jpg",
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
      id: "universal-studios",
      name: "Universal Studios",
    },
  },

  "universal-studios": {
    id: "universal-studios",
    slug: "universal-studios",
    name: "Universal Studios",
    year: 2023,
    category: "Entertainment",

    opening: {
      subtitle: "[Subtitle_Placeholder]",
      title: "Universal Studios",
      heroDescription: "[Project tagline]",
      heroImageUrl: "/placeholder-case-study-universal-hero.jpg",
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
      id: "special-olympics",
      name: "Special Olympics",
    },
  },

  "special-olympics": {
    id: "special-olympics",
    slug: "special-olympics",
    name: "Special Olympics",
    year: 2022,
    category: "Global Sports Event",

    opening: {
      subtitle: "[Subtitle_Placeholder]",
      title: "Special Olympics",
      heroDescription: "[Project tagline]",
      heroImageUrl: "/placeholder-case-study-special-olympics-hero.jpg",
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
    year: 2021,
    category: "Brand Activation",

    opening: {
      subtitle: "[Subtitle_Placeholder]",
      title: "AMP Energy",
      heroDescription: "[Project tagline]",
      heroImageUrl: "/placeholder-case-study-amp-hero.jpg",
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
      id: "caa",
      name: "CAA",
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
    year: 2019,
    category: "Brand Campaign",

    opening: {
      subtitle: "[Subtitle_Placeholder]",
      title: "Nike",
      heroDescription: "[Project tagline]",
      heroImageUrl: "/placeholder-case-study-nike-hero.jpg",
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
