/**
 * Field Notes Chapter - Data Definitions
 * Operational artifacts and logistics documentation
 * Extracted from Figma design file: Node 155-597 (desktop), 167-4 (tablet), 167-148 (mobile)
 */

export interface FieldNote {
  id: string;
  title: string;
  type: 'schedule' | 'credential' | 'manifest' | 'sketch' | 'artifact' | 'scan';
  date?: string;
  location?: string;
  description: string;
  metadata?: Record<string, string | number>;
  artifactUrl?: string;
}

export interface OperationalSection {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  content: FieldNote[];
}

export interface ShippingMetric {
  label: string;
  value: string;
}

export interface ScheduleEntry {
  time: string;
  phase: string;
  objective: string;
  status: 'CLEARED' | 'ONGOING' | 'PENDING' | 'SCHEDULED';
}

/**
 * Opening Hero Section
 */
export const fieldNotesHero = {
  chapterNumber: '05',
  title: 'Field Notes',
  subtitle: 'The Operational Artifacts of Scale',
  description:
    'A documentary deep-dive into the raw, unpolished substrates of international orchestration. These are the schedules, security protocols, and route structures that make complexity functional.',
  volumeLabel: 'LOGISTICS DIRECTORY // VOL 09',
  coordinates: '47° N, 122° W — ACTIVE MONITORING',
};

/**
 * Section 1: Manifest & Assets
 * Cargo Tracing & Venue Topography
 */
export const shippingMetrics: ShippingMetric[] = [
  { label: 'Total Volume', value: '14,200 metric tons' },
  { label: 'Core Containers', value: '412 FEU' },
  { label: 'Clearing Ports', value: 'JFK // MIA // LHR // DOH' },
  { label: 'Customs Status', value: 'Pre-approved Priority' },
  { label: 'SLA Window', value: '99.98% On-Time Target' },
];

export const manifestSection: OperationalSection = {
  id: 'manifests',
  number: '01',
  label: 'Manifest & Assets',
  title: 'Cargo Tracing & Venue Topography',
  description: 'Physical zoning layer mapping of ingress and egress pathways for heavy freight and broadcast machinery across stadium zones.',
  content: [
    {
      id: 'venue-coordination',
      title: 'FIG 1.2 — VENUE COORDINATION SCHEMATIC',
      type: 'artifact',
      description: 'Physical zoning layer mapping of ingress and egress pathways for heavy freight and broadcast machinery across stadium zones.',
      location: 'MIA Cargo Hub - Venue 09',
    },
  ],
};

/**
 * Section 2: Credentials & Identity Protocols
 * Access & Accreditation Design
 */
export const credentialBadge = {
  title: 'SECURE ACCREDITATION',
  name: 'Ryan Morrow',
  code: 'RM-EX-904-OPS',
  accessZones: ['ZONE 1', 'ZONE 2', 'ZONE 4', 'ZONE 9'],
  accessLevel: 'ALL ACCESS PASS',
};

export const credentialsSection: OperationalSection = {
  id: 'credentials',
  number: '02',
  label: 'Identity Protocols',
  title: 'Access & Accreditation Design',
  description: 'Accreditation design is the first line of operational security. For over 200,000 personnel, we mapped out a unified protocol that uses physical micro-optics and encrypted near-field chips. Zones are mapped directly to physical routing lanes, ensuring zero overlapping security friction at key structural thresholds.',
  content: [
    {
      id: 'extreme-access-architecture',
      title: '// EXTREME ACCESS ARCHITECTURE',
      type: 'credential',
      description:
        'For over 200,000 personnel, we mapped out a unified protocol that uses physical micro-optics and encrypted near-field chips. Zones are mapped directly to physical routing lanes, ensuring zero overlapping security friction at key structural thresholds.',
    },
  ],
};

/**
 * Section 3: Operational Sequence
 * Timeline & Critical Paths
 */
export const scheduleEntries: ScheduleEntry[] = [
  {
    time: '06:00 L',
    phase: 'PRE-FLIGHT',
    objective: 'Customs Manifest check-in & priority clearance at MIA cargo hub.',
    status: 'CLEARED',
  },
  {
    time: '10:30 L',
    phase: 'VENUE INGRESS',
    objective: 'First-wave vendor caravan entry. Heavy hardware rigging (Lanes 4-9).',
    status: 'ONGOING',
  },
  {
    time: '15:00 L',
    phase: 'BROADCAST SYNC',
    objective: 'Global satellite uplink sequence testing across major host cities.',
    status: 'PENDING',
  },
  {
    time: '21:00 L',
    phase: 'DEBRIEF',
    objective: 'Operational sign-off with executive governance committee.',
    status: 'SCHEDULED',
  },
];

export const schedulesSection: OperationalSection = {
  id: 'schedules',
  number: '03',
  label: 'The Sequence',
  title: 'Operational Timeline & Critical Paths',
  description: '[VALIDATION REQUIRED — Schedule operational context and deployment framework description]',
  content: [
    {
      id: 'deployment-timeline',
      title: 'Critical Path Operations',
      type: 'schedule',
      description: 'Coordinated logistics deployment with synchronized global timing.',
    },
  ],
};

/**
 * Section 4: Global Transit & Routing
 * Transit Nodes & Flight Paths
 */
export const transitMetadata = {
  cargoId: 'EXP-47',
  routeId: 'W47',
  venueId: 'VENUE-09',
  logisticsCode: 'LOG-TRANS',
  flightPath: 'MIA → JFK → LHR → DOH',
  strategy: 'Logistics must match the fluid scaling of global events. We operate a multi-port transit strategy utilizing key air and maritime lanes across four main continents. Continuous diagnostic checks ensure freight is cleared, cataloged, and deployed on site prior to the main technical crew arrival.',
};

export const transitSection: OperationalSection = {
  id: 'transit',
  number: '04',
  label: 'Global Transit',
  title: 'Transit Nodes & Flight Paths',
  description: 'Multi-port strategy for international logistics coordination.',
  content: [
    {
      id: 'multi-port-strategy',
      title: 'MULTI-PORT STRATEGY',
      type: 'manifest',
      description: 'Logistics must match the fluid scaling of global events. We operate a multi-port transit strategy utilizing key air and maritime lanes across four main continents.',
    },
  ],
};

/**
 * Additional Field Notes Artifacts
 * Notebook spreads with technical details
 */
export const notebookArtifacts: FieldNote[] = [
  {
    id: 'schedule-fragment',
    title: '[Schedule Fragment]',
    type: 'scan',
    description: '[VALIDATION REQUIRED — Schedule fragment content and operational context]',
    location: 'Archive Desk Spread',
  },
  {
    id: 'credential-badge',
    title: '[Credential Badge]',
    type: 'credential',
    description: '[VALIDATION REQUIRED — Security credential design documentation]',
  },
  {
    id: 'city-routing',
    title: '[City Routing]',
    type: 'manifest',
    description: '[VALIDATION REQUIRED — City routing and venue coordination details]',
  },
  {
    id: 'material-sample',
    title: '[Material Sample]',
    type: 'artifact',
    description: '[VALIDATION REQUIRED — Physical material sample documentation and specifications]',
  },
  {
    id: 'technical-sketch',
    title: '[Technical Sketch - LED Wall Zone]',
    type: 'sketch',
    description: '[VALIDATION REQUIRED — Technical sketches for LED wall integration and zone mapping]',
  },
  {
    id: 'call-sheet',
    title: '[Call Sheet]',
    type: 'schedule',
    description: '[VALIDATION REQUIRED — Call sheet and personnel coordination details]',
  },
  {
    id: 'shipping-label',
    title: '[Shipping Label]',
    type: 'scan',
    description: '[VALIDATION REQUIRED — Shipping and cargo tracking documentation]',
  },
  {
    id: 'whiteboard-sketch',
    title: '[Whiteboard Sketch]',
    type: 'sketch',
    description: '[VALIDATION REQUIRED — Whiteboard sketches for operational planning]',
  },
  {
    id: 'equipment-label',
    title: '[Equipment Label]',
    type: 'scan',
    description: '[VALIDATION REQUIRED — Equipment labeling and inventory documentation]',
  },
  {
    id: 'timeline-annotation',
    title: '[Timeline Annotation]',
    type: 'manifest',
    description: '[VALIDATION REQUIRED — Timeline annotations and critical path markers]',
  },
];

/**
 * Gallery Artifacts
 * Full-page field note documentation
 */
export const galleryArtifacts: FieldNote[] = [
  {
    id: 'artifact-01',
    title: '[Field Notes Artifact 01]',
    type: 'artifact',
    description: '[VALIDATION REQUIRED — Primary field notes artifact documentation]',
    date: '[VALIDATION REQUIRED]',
  },
  {
    id: 'artifact-02',
    title: '[Field Notes Artifact 02]',
    type: 'artifact',
    description: '[VALIDATION REQUIRED — Secondary field notes artifact documentation]',
    date: '[VALIDATION REQUIRED]',
  },
  {
    id: 'artifact-03',
    title: '[Field Notes Artifact 03]',
    type: 'artifact',
    description: '[VALIDATION REQUIRED — Gallery artifact 03 documentation]',
    date: '[VALIDATION REQUIRED]',
  },
  {
    id: 'artifact-04',
    title: '[Field Notes Artifact 04]',
    type: 'artifact',
    description: '[VALIDATION REQUIRED — Gallery artifact 04 documentation]',
    date: '[VALIDATION REQUIRED]',
  },
  {
    id: 'artifact-05',
    title: '[Field Notes Artifact 05]',
    type: 'artifact',
    description: '[VALIDATION REQUIRED — Gallery artifact 05 documentation]',
    date: '[VALIDATION REQUIRED]',
  },
];

/**
 * Operational Sections in sequence
 */
export const fieldNoteSections: OperationalSection[] = [
  manifestSection,
  credentialsSection,
  schedulesSection,
  transitSection,
];

/**
 * Closing Reflection
 */
export const fieldNotesClosing = {
  quote:
    '[VALIDATION REQUIRED — Reflective closing statement on operational complexity and systematic design]',
  attribution: 'Ryan Morrow',
};

/**
 * Page metadata
 */
export const fieldNotesPageMetadata = {
  title: 'Field Notes // Operational Documentation',
  chapter: '05',
  subtitle: 'The Operational Artifacts of Scale',
  description: 'Documentary deep-dive into the logistics and systems behind global operations',
};
