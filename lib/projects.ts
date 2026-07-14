/**
 * Project Index Data Source
 *
 * Stores all approved project metadata for the work portfolio.
 * Used by /work route and /work/[slug] dynamic routes.
 *
 * Schema per project:
 * - id: Unique identifier (used in URL slug)
 * - name: Project/client name
 * - year: Project year (4-digit)
 * - category: Project category/type
 * - metric: Key metric value (displayed in index)
 * - metricLabel: Metric description
 * - thumbnailUrl: Project thumbnail image (used in index grid)
 * - description: Short project description (2-3 sentences)
 *
 * Note: Individual case study pages (/work/[slug]) not implemented in this task.
 * Links in project index point to future case study routes.
 */

export interface Project {
  id: string;
  name: string;
  year: number;
  category: string;
  metric: string;
  metricLabel: string;
  thumbnailUrl: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "fifa-world-cup",
    name: "FIFA World Cup 2026",
    year: 2026,
    category: "Global Sports Event",
    metric: "[Metric_Value_01]",
    metricLabel: "[Metric_Label_01]",
    thumbnailUrl: "/placeholder-project-fifa.jpg",
    description: "[Project_Context_Description_01]",
  },
  {
    id: "golden-state-warriors",
    name: "Golden State Warriors",
    year: 2024,
    category: "Sports Organization",
    metric: "[Metric_Value_02]",
    metricLabel: "[Metric_Label_02]",
    thumbnailUrl: "/placeholder-project-warriors.jpg",
    description: "[Project_Context_Description_02]",
  },
  {
    id: "universal-studios",
    name: "Universal Studios",
    year: 2023,
    category: "Entertainment",
    metric: "[Metric_Value_03]",
    metricLabel: "[Metric_Label_03]",
    thumbnailUrl: "/placeholder-project-universal.jpg",
    description: "[Project_Context_Description_03]",
  },
  {
    id: "special-olympics",
    name: "Special Olympics",
    year: 2022,
    category: "Global Sports Event",
    metric: "[Metric_Value_04]",
    metricLabel: "[Metric_Label_04]",
    thumbnailUrl: "/placeholder-project-special-olympics.jpg",
    description: "[Project_Context_Description_04]",
  },
  {
    id: "amp-energy",
    name: "AMP Energy",
    year: 2021,
    category: "Brand Activation",
    metric: "[Metric_Value_05]",
    metricLabel: "[Metric_Label_05]",
    thumbnailUrl: "/placeholder-project-amp.jpg",
    description: "[Project_Context_Description_05]",
  },
  {
    id: "caa",
    name: "CAA (Creative Artists Agency)",
    year: 2020,
    category: "Corporate",
    metric: "[Metric_Value_06]",
    metricLabel: "[Metric_Label_06]",
    thumbnailUrl: "/placeholder-project-caa.jpg",
    description: "[Project_Context_Description_06]",
  },
  {
    id: "nike",
    name: "Nike",
    year: 2019,
    category: "Brand Campaign",
    metric: "[Metric_Value_07]",
    metricLabel: "[Metric_Label_07]",
    thumbnailUrl: "/placeholder-project-nike.jpg",
    description: "[Project_Context_Description_07]",
  },
  {
    id: "additional-project",
    name: "[Additional_Project_Name]",
    year: 2024,
    category: "[Project_Category]",
    metric: "[Metric_Value_08]",
    metricLabel: "[Metric_Label_08]",
    thumbnailUrl: "/placeholder-project-additional.jpg",
    description: "[Project_Context_Description_08]",
  },
];

/**
 * Get project by ID (slug)
 * Used by dynamic case study routes: /work/[slug]
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

/**
 * Get all projects for index
 */
export function getAllProjects(): Project[] {
  return projects;
}
