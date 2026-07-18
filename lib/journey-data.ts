/**
 * Journey Chapter - Data Definitions
 * Career timeline and professional evolution
 * All journey definitions extracted from Figma design file
 * Node: 155-386 (desktop), 166-766 (tablet), 166-870 (mobile)
 */

export interface JourneyNode {
  id: string;
  year: string;
  role: string;
  title: string;
  description: string;
  hasImage?: boolean;
  imagePosition?: 'left' | 'right';
}

export interface TimelinePhase {
  id: string;
  label: string;
  title: string;
  nodes: JourneyNode[];
}

export interface JourneyMetric {
  value: string;
  label: string;
}

export interface JourneyConnection {
  fromNodeId: string;
  toNodeId: string;
  description?: string;
}

/**
 * Foundation Phase (2008-2015)
 * Learning the physics of experience
 */
export const foundationNodes: JourneyNode[] = [
  {
    id: "universal-studios-2008",
    year: "2008–10",
    role: "[VALIDATION REQUIRED — Foundation era role]",
    title: "Universal Studios",
    description: "[VALIDATION REQUIRED — Universal Studios phase description]",
    hasImage: true,
    imagePosition: "right",
  },
  {
    id: "amp-energy-2012",
    year: "2010–12",
    role: "[VALIDATION REQUIRED — Middle foundation role]",
    title: "AMP Energy",
    description: "[VALIDATION REQUIRED — AMP Energy phase description]",
  },
  {
    id: "caa-2014",
    year: "2012–15",
    role: "[VALIDATION REQUIRED — Late foundation role]",
    title: "CAA",
    description: "[VALIDATION REQUIRED — CAA phase description]",
  },
];

/**
 * Acceleration Phase (2015-2022)
 * Building operational systems at scale
 */
export const accelerationNodes: JourneyNode[] = [
  {
    id: "american-furniture-rentals",
    year: "[VALIDATION REQUIRED — AFR year]",
    role: "[VALIDATION REQUIRED — AFR role]",
    title: "American Furniture Rentals",
    description: "[VALIDATION REQUIRED — AFR description]",
    hasImage: true,
    imagePosition: "left",
  },
  {
    id: "ion-creative-studios",
    year: "[VALIDATION REQUIRED — iON year]",
    role: "[VALIDATION REQUIRED — iON role]",
    title: "iON Creative Studios",
    description: "[VALIDATION REQUIRED — iON description]",
  },
  {
    id: "golden-state-warriors",
    year: "[VALIDATION REQUIRED — Warriors year]",
    role: "[VALIDATION REQUIRED — Warriors role]",
    title: "Golden State Warriors",
    description: "[VALIDATION REQUIRED — Warriors description: arena operations and technology integration]",
    hasImage: true,
    imagePosition: "right",
  },
  {
    id: "special-olympics",
    year: "[VALIDATION REQUIRED — Special Olympics year]",
    role: "[VALIDATION REQUIRED — Special Olympics role]",
    title: "Special Olympics",
    description: "[VALIDATION REQUIRED — Special Olympics description]",
  },
];

/**
 * Global Stage Phase (2018-Present)
 * Orchestrating global operations
 */
export const globalStageNodes: JourneyNode[] = [
  {
    id: "datavault",
    year: "2018–22",
    role: "[VALIDATION REQUIRED — Datavault role]",
    title: "Datavault",
    description: "[VALIDATION REQUIRED — Datavault description]",
  },
  {
    id: "fifa-world-cup",
    year: "2022–26",
    role: "[VALIDATION REQUIRED — FIFA role]",
    title: "FIFA World Cup 2026",
    description: "[VALIDATION REQUIRED — FIFA description: global operations coordination]",
    hasImage: true,
    imagePosition: "left",
  },
];

/**
 * Journey Timeline Phases - Grouped by era
 */
export const journeyPhases: TimelinePhase[] = [
  {
    id: "foundations",
    label: "02.1 THE FOUNDATIONS",
    title: "Learning the Physics of Experience",
    nodes: foundationNodes,
  },
  {
    id: "acceleration",
    label: "[VALIDATION REQUIRED — Acceleration era label]",
    title: "[VALIDATION REQUIRED — Acceleration era title]",
    nodes: accelerationNodes,
  },
  {
    id: "global-stage",
    label: "02.2 THE GLOBAL STAGE",
    title: "The World at Scale",
    nodes: globalStageNodes,
  },
];

/**
 * Node Connections - Career trajectory links
 */
export const journeyConnections: JourneyConnection[] = [
  {
    fromNodeId: "universal-studios-2008",
    toNodeId: "amp-energy-2012",
    description: "Transitioned from hospitality operations to experiential marketing",
  },
  {
    fromNodeId: "amp-energy-2012",
    toNodeId: "caa-2014",
    description: "Moved into corporate brand management and talent operations",
  },
  {
    fromNodeId: "caa-2014",
    toNodeId: "american-furniture-rentals",
    description: "Applied systems thinking to supply chain and logistics",
  },
  {
    fromNodeId: "golden-state-warriors",
    toNodeId: "fifa-world-cup",
    description: "Scaled from arena operations to global sporting events",
  },
];

/**
 * Featured Focus Moment - "Building the Stadium Operating System"
 * Golden State Warriors era highlight
 */
export const focusFeature = {
  title: "Building the Stadium Operating System",
  description:
    "At the Golden State Warriors, the mission shifted from production to innovation. We were designing the future of arena experience — integrating real-time technology with physical logistics to manage the friction of 18,000 nightly visitors.",
  linkedNodeId: "golden-state-warriors",
};

/**
 * Career Evolution Metrics - Global stage achievements
 */
export const journeyMetrics: JourneyMetric[] = [
  { value: "16", label: "CITIES INTEGRATED" },
  { value: "1.2K", label: "STAFF ORCHESTRATED" },
  { value: "03", label: "NATIONS SYNCED" },
];

/**
 * Closing Reflection
 */
export const journeyClosing = {
  quote:
    "[VALIDATION REQUIRED — Reflective closing quote about operational journey and future direction]",
  attribution: "Ryan Morrow",
};

/**
 * Page metadata
 */
export const journeyPageMetadata = {
  title: "The Journey // Career Evolution",
  subtitle: "THE JOURNEY",
  description: "Professional evolution through operational systems design",
};
