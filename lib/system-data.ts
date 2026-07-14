/**
 * System Chapter - Data Definitions
 * All system definitions extracted from Figma design file
 * Node: 155-228 (desktop), 166-436 (tablet), 166-603 (mobile)
 */

export interface SystemPhase {
  number: string;
  period: string;
  title: string;
  description: string;
}

export interface VendorModule {
  number: string;
  status: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TelemetryChannel {
  name: string;
  status: string;
}

export interface RiskProtocol {
  number: string;
  title: string;
  description: string;
}

export interface SystemMetric {
  value: string;
  label: string;
}

export interface ArchitectureModule {
  number: string;
  title: string;
  description: string;
}

/**
 * Operational Status Display
 * Appears in philosophy section as overview of system readiness
 */
export const operationalStatus = {
  state: "STANDBY",
  description: "Active mapping of 3 sovereign nations, 16 host cities, and 32 core enterprise vendors.",
  designation: "Operational OS",
};

/**
 * Vendor Engine Modules
 * Core procurement and supply chain components
 */
export const vendorModules: VendorModule[] = [
  {
    number: "01",
    status: "ACTIVE",
    title: "Access & Control",
    subtitle: "Decentralized Credentialing",
    description: "Managing secure physical and digital routing for 200,000+ accredited personnel across non-contiguous stadium networks.",
  },
  {
    number: "02",
    status: "SYNCED",
    title: "Fabrication & Supply",
    subtitle: "Localized Production Hubs",
    description: "Redundant supply lines and regional fabricators deployed to counter cross-border customs latency.",
  },
];

/**
 * Project Runway Phases
 * Four-phase methodology for systems implementation
 */
export const runwayPhases: SystemPhase[] = [
  {
    number: "01",
    period: "Months 01–12",
    title: "Structural Genesis",
    description: "Establishing sovereign treaty alignment and physical container masterplans.",
  },
  {
    number: "02",
    period: "Months 13–24",
    title: "Vendor Integration",
    description: "Decoupled procurement sprints and operational hardware testing.",
  },
  {
    number: "03",
    period: "Months 25–36",
    title: "Redundancy Drills",
    description: "Live site load simulation and multi-tier stress scenarios.",
  },
  {
    number: "04",
    period: "Active",
    title: "Global Execution",
    description: "The synchronized launch across non-contiguous host locations.",
  },
];

/**
 * Operational Telemetry Engine
 * Real-time monitoring channels and their statuses
 */
export const telemetryChannels: TelemetryChannel[] = [
  { name: "LED Integration", status: "94% Complete" },
  { name: "Broadcast Fiber Lay", status: "Sync Active" },
  { name: "Power Grid Latency", status: "0.04ms OK" },
  { name: "Vendor Route Sync", status: "Critical Path Active" },
];

/**
 * Integrity Failsafe Protocols
 * Risk mitigation and system resilience strategies
 */
export const integrityProtocols: RiskProtocol[] = [
  {
    number: "01",
    title: "Boundary Containment",
    description: "Isolate immediate physical site variables from affecting the master digital pipeline.",
  },
  {
    number: "02",
    title: "Asynchronous Handoff",
    description: "Independent micro-schedules run in parallel to decouple critical dependencies.",
  },
  {
    number: "03",
    title: "Bilateral Redundancy",
    description: "Secondary localized power and hardware elements actively mirror primary feeds.",
  },
];

/**
 * System Data Metrics
 * Key performance indicators for operational scale
 */
export const systemMetrics: SystemMetric[] = [
  { value: "16", label: "Cities Integrated" },
  { value: "32+", label: "Core Partners" },
  { value: "1.2K", label: "Staff Orchestrated" },
  { value: "48m", label: "Roadmap Sync" },
];

/**
 * Architecture Blueprint Modules
 * Seven-module operational system blueprint (desktop view only)
 */
export const blueprintModules: ArchitectureModule[] = [
  {
    number: "01",
    title: "[Brand Systems Element]",
    description: "[Module description for operational brand infrastructure]",
  },
  {
    number: "02",
    title: "[Operational Systems Element]",
    description: "[Module description for core operational framework]",
  },
  {
    number: "03",
    title: "[Technology Systems Element]",
    description: "[Module description for technology infrastructure]",
  },
  {
    number: "04",
    title: "[Production Systems Element]",
    description: "[Module description for production operations]",
  },
  {
    number: "05",
    title: "[Leadership Systems Element]",
    description: "[Module description for leadership structure]",
  },
  {
    number: "06",
    title: "[Experience Systems Element]",
    description: "[Module description for experiential operations]",
  },
  {
    number: "07",
    title: "[Measurement Systems Element]",
    description: "[Module description for measurement framework]",
  },
];

/**
 * Navigation Links
 * Chapter navigation points on system page
 */
export const systemNavigation = {
  philosophy: "Philosophy",
  methodology: "Methodology",
  contact: "Contact",
};

/**
 * Page metadata
 */
export const systemPageMetadata = {
  title: "The System // Operational Methodology",
  subtitle: "THE SYSTEM",
  description: "Comprehensive operational systems and methodologies",
};
