import { GlobalNav } from '@/components/navigation';

/* eslint-disable @next/next/no-img-element */

const imgBlueprintDiagramDivider01 = 'https://www.figma.com/api/mcp/asset/eddcecaf-42eb-445e-91f2-4d5b9f9dc6e1';
const imgSystemImage02 = 'https://www.figma.com/api/mcp/asset/26f3f37a-fd7e-486a-bec2-a69555562847';
const imgSystemImage03 = 'https://www.figma.com/api/mcp/asset/667c91dc-ffce-4dd7-9de2-63cfc2ba1154';
const imgSystemImage04 = 'https://www.figma.com/api/mcp/asset/85dbaa31-814b-479f-a995-2353f7a5774b';
const imgGridDivider = 'https://www.figma.com/api/mcp/asset/b04eed5f-cbc8-462b-8749-3e047b57cd00';
const imgNetworkGraphDivider01 = 'https://www.figma.com/api/mcp/asset/f66689cb-53cc-4a67-a2ad-aec094fc960e';
const imgNetworkGraphDivider02 = 'https://www.figma.com/api/mcp/asset/e77bff6b-7a17-47a3-b58e-426c400f0795';
const imgNetworkGraphDivider04 = 'https://www.figma.com/api/mcp/asset/0cc62b77-2897-4497-8f0a-14bd2006b3b2';
const imgNetworkGraphDivider05 = 'https://www.figma.com/api/mcp/asset/0176afdf-54e3-4689-8f86-d7b5fb81fcc4';
const imgNetworkGraphDivider06 = 'https://www.figma.com/api/mcp/asset/14f5dc23-ac89-4e95-b4d3-e658c5c2f84e';
const imgNetworkGraphDivider07 = 'https://www.figma.com/api/mcp/asset/77532106-4d30-4a59-9cb9-d2c31a3c4507';
const imgDividerDesktop = 'https://www.figma.com/api/mcp/asset/0efd3345-e5e7-4f09-9c74-565aa5f13a80';
const imgDividerTablet = 'https://www.figma.com/api/mcp/asset/5dc1c205-9ad6-419c-8091-4ee08ee46e1c';
const imgTimelineTablet = 'https://www.figma.com/api/mcp/asset/f970c41c-6ea1-47f9-80f8-a27e4faaae98';
const imgTimelineTabletEnd = 'https://www.figma.com/api/mcp/asset/3aa7684c-12b3-478c-85f6-d4e4fda695c1';
const imgCircleTablet = 'https://www.figma.com/api/mcp/asset/bfd82971-2638-45e8-85b5-ff55f9d23414';
const imgDividerTabletDark = 'https://www.figma.com/api/mcp/asset/416df138-d881-498a-9081-cd225821bfdd';
const imgDividerMobile = 'https://www.figma.com/api/mcp/asset/355cf1f9-9481-4781-b5a2-8bf2c5d82615';
const imgTimelineMobile = 'https://www.figma.com/api/mcp/asset/dac7005e-d0e9-4a5d-89bf-a065ff634247';
const imgTimelineMobileEnd = 'https://www.figma.com/api/mcp/asset/fa6417b8-ad55-4c56-8e58-f2ed12335f3f';
const imgCircleMobile = 'https://www.figma.com/api/mcp/asset/cc7bc87f-da1a-4ac1-9cb8-de18cd63a24b';
const imgFooterMobile = 'https://www.figma.com/api/mcp/asset/316091f8-f7f7-4538-a4c9-dc7a50a625ea';

const systemStatus = {
  label: 'SYSTEM STATUS: STANDBY',
  description: 'Active mapping of 3 sovereign nations, 16 host cities, and 32 core enterprise vendors.',
  badge: 'Operational OS',
};

const vendorModules = [
  {
    code: 'MOD_01 // ACCESS & CONTROL',
    status: 'ACTIVE',
    title: 'Decentralized Credentialing',
    description:
      'Managing secure physical and digital routing for 200,000+ accredited personnel across non-contiguous stadium networks.',
  },
  {
    code: 'MOD_02 // FABRICATION & SUPPLY',
    status: 'SYNCED',
    title: 'Localized Production Hubs',
    description:
      'Redundant supply lines and regional fabricators deployed to counter cross-border customs latency.',
  },
] as const;

const phases = [
  {
    code: 'PH_01',
    desktopPeriod: 'Months 01–12',
    mobilePeriod: 'M 01–12',
    title: 'Structural Genesis',
    description: 'Establishing sovereign treaty alignment and physical container masterplans.',
  },
  {
    code: 'PH_02',
    desktopPeriod: 'Months 13–24',
    mobilePeriod: 'M 13–24',
    title: 'Vendor Integration',
    description: 'Decoupled procurement sprints and operational hardware testing.',
  },
  {
    code: 'PH_03',
    desktopPeriod: 'Months 25–36',
    mobilePeriod: 'M 25–36',
    title: 'Redundancy Drills',
    description: 'Live site load simulation and multi-tier stress scenarios.',
  },
  {
    code: 'PH_04',
    desktopPeriod: 'Active',
    mobilePeriod: 'Active',
    title: 'Global Execution',
    description: 'The synchronized launch across non-contiguous host locations.',
  },
] as const;

const telemetryChannels = [
  { name: 'LED Integration', status: '94% Complete', color: 'text-[#22c55e]' },
  { name: 'Broadcast Fiber Lay', status: 'Sync Active', color: 'text-[#22c55e]' },
  { name: 'Power Grid Latency', status: '0.04ms OK', color: 'text-[#22c55e]' },
  { name: 'Vendor Route Sync', status: 'Critical Path Active', color: 'text-[#a6825e]' },
] as const;

const protocols = [
  {
    code: 'L_01',
    title: 'Boundary Containment',
    description: 'Isolate immediate physical site variables from affecting the master digital pipeline.',
  },
  {
    code: 'L_02',
    title: 'Asynchronous Handoff',
    description: 'Independent micro-schedules run in parallel to decouple critical dependencies.',
  },
  {
    code: 'L_03',
    title: 'Bilateral Redundancy',
    description: 'Secondary localized power and hardware elements actively mirror primary feeds.',
  },
] as const;

const metrics = [
  { value: '16', label: 'Cities Integrated' },
  { value: '32+', label: 'Core Partners' },
  { value: '1.2K', label: 'Staff Orchestrated' },
  { value: '48m', label: 'Roadmap Sync' },
] as const;

const blueprintNodes = [
  {
    id: '01',
    title: 'Decentralized Credentialing',
    description:
      'Managing secure physical and digital routing for 200,000+ accredited personnel across non-contiguous stadium networks.',
    top: 100,
    left: 40,
  },
  {
    id: '02',
    title: 'Localized Production Hubs',
    description: 'Redundant supply lines and regional fabricators deployed to counter cross-border customs latency.',
    top: 260,
    left: 280,
  },
  {
    id: '03',
    title: 'Structural Genesis',
    description: 'Establishing sovereign treaty alignment and physical container masterplans.',
    top: 420,
    left: 520,
  },
  {
    id: '04',
    title: 'Vendor Integration',
    description: 'Decoupled procurement sprints and operational hardware testing.',
    top: 580,
    left: 760,
  },
  {
    id: '05',
    title: 'Redundancy Drills',
    description: 'Live site load simulation and multi-tier stress scenarios.',
    top: 740,
    left: 400,
  },
  {
    id: '06',
    title: 'Global Execution',
    description: 'The synchronized launch across non-contiguous host locations.',
    top: 900,
    left: 640,
  },
  {
    id: '07',
    title: 'Chronological Phasing',
    description: '48-month milestone architecture with zero-drift tolerance.',
    top: 1060,
    left: 900,
  },
] as const;

const blueprintSignals = [
  { text: 'SYSTEM STATUS: STANDBY', top: 210, left: 233.12, width: 104.362, height: 78.085 },
  {
    text: 'Active mapping of 3 sovereign nations, 16 host cities, and 32 core enterprise vendors.',
    top: 370,
    left: 473.12,
    width: 387.789,
    height: 276.543,
  },
  { text: 'Operational OS', top: 530, left: 713.12, width: 69.138, height: 53.422 },
  { text: 'Decoupled Vendor Orchestration', top: 830, left: 573.12, width: 139.586, height: 102.749 },
] as const;

const graphNodes = [
  { text: 'Operational Geometry of the World Cup', top: 146, left: 196 },
  { text: 'OPS', top: 96, left: 496 },
  { text: '16', top: 146, left: 796 },
  { text: 'Cities Integrated', top: 96, left: 1096 },
  { text: '32+', top: 396, left: 346 },
  { text: 'EXP', top: 346, left: 646 },
  { text: 'Core Partners', top: 396, left: 946 },
] as const;

const graphLabels = [
  { text: '1.2K', top: 130, left: 350 },
  { text: 'Staff Orchestrated', top: 110, left: 650 },
  { text: '48m', top: 130, left: 950 },
  { text: 'Roadmap Sync', top: 380, left: 500 },
] as const;

export default function SystemPage() {
  return (
    <main id="main-content" className="bg-[#faf8f5] text-[#1a1a1a]">
      <GlobalNav />
      <div className="hidden lg:block">
        <section className="flex h-[1080px] items-center justify-center bg-[#0a0a0b] px-20 py-20">
          <div className="relative flex flex-col items-center gap-12">
            <div className="absolute left-20 top-20">
              <p className="font-mono text-[12px] text-[#a6825e]">{'// 01 THE OPERATIONAL CRITERION'}</p>
            </div>
            <h1 className="w-[800px] text-center font-serif text-[96px] leading-none text-[#f5f5f5]">
              Complexity is not a challenge to be minimized, but a geometry to be mastered.
            </h1>
            <div className="h-px w-[120px] bg-[#a6825e]" />
          </div>
        </section>

        <section className="bg-[#f9f7f2] px-20 py-[240px]" id="philosophy">
          <p className="w-[860px] font-serif text-[64px] italic leading-[1.1] text-[#1a1a1a]">
            Behind every world-class brand experience lies an intricate matrix of operational substrates. We design systems that run with such absolute mathematical precision that the logistics dissolve entirely, leaving only the pure, uncompromised creative event.
          </p>
        </section>

        <section className="relative h-[1200px] overflow-hidden bg-[#f9f7f2] p-20">
          <p className="relative z-10 font-mono text-[11px] uppercase text-[#a6825e]">{'// 02 THE VENDOR ENGINE'}</p>
          <div className="absolute inset-0 flex flex-col justify-between">
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="relative h-0 w-full" key={`grid-${index + 1}`}>
                <img alt="" className="absolute inset-[-1px_0_0_0] h-full w-full" src={imgGridDivider} />
              </div>
            ))}
          </div>

          <div className="relative mt-10 h-[1120px] w-full">
            <div className="absolute left-[140px] top-[150px] flex h-[630.934px] w-[901.067px] items-center justify-center">
              <div className="rotate-[35deg]">
                <img alt="" className="h-px w-[1100px] max-w-none" src={imgBlueprintDiagramDivider01} />
              </div>
            </div>

            {blueprintNodes.map((node) => (
              <div
                className="absolute flex w-[280px] flex-col gap-3"
                key={node.id}
                style={{ top: `${node.top}px`, left: `${node.left}px` }}
              >
                <div className="flex items-center gap-3">
                  <p className="font-mono text-[12px] text-[#a6825e]">{node.id}</p>
                  <div className="h-px w-8 bg-[#a6825e] opacity-50" />
                  <p className="font-mono text-[10px] uppercase text-[#a6825e]">{node.title}</p>
                </div>
                <p className="font-serif text-[20px] leading-[1.3] text-[#1a1a1a]">{node.description}</p>
              </div>
            ))}

            {blueprintSignals.map((signal) => (
              <div
                className="absolute flex items-center justify-center"
                key={`${signal.text}-${signal.top}`}
                style={{ top: `${signal.top}px`, left: `${signal.left}px`, width: `${signal.width}px`, height: `${signal.height}px` }}
              >
                <p className="rotate-[35deg] font-mono text-[9px] text-[#a6825e]">{signal.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f9f7f2] p-20">
          <div className="py-[120px]">
            <p className="font-mono text-[11px] uppercase text-[#a6825e]">{'// 04 THE TELEMETRY PROTOCOL'}</p>
            <p className="mt-6 w-[800px] font-serif text-[48px] text-[#1a1a1a]">Clean Dashboard &amp; Escalation Signal</p>
          </div>
          <div className="h-px w-full bg-[#a6825e] opacity-20" />

          <div className="flex items-center gap-20 py-[120px]">
            <img alt="" className="h-[480px] w-[640px] object-cover" src={imgSystemImage02} />
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-mono text-[11px] uppercase text-[#a6825e]">LED Integration</p>
              <p className="font-serif text-[32px] leading-[1.4] text-[#1a1a1a]">94% Complete</p>
            </div>
          </div>
          <div className="h-px w-full bg-[#a6825e] opacity-20" />

          <div className="flex flex-col items-center gap-8 py-[120px] text-center">
            <p className="font-mono text-[11px] uppercase text-[#a6825e]">Broadcast Fiber Lay</p>
            <p className="w-[900px] font-serif text-[48px] italic text-[#1a1a1a]">Sync Active</p>
            <div className="h-px w-10 bg-[#a6825e]" />
          </div>
          <div className="h-px w-full bg-[#a6825e] opacity-20" />

          <div className="flex items-center gap-20 py-[120px]">
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-mono text-[11px] uppercase text-[#a6825e]">Power Grid Latency</p>
              <p className="font-serif text-[32px] leading-[1.4] text-[#1a1a1a]">0.04ms OK</p>
            </div>
            <img alt="" className="h-[480px] w-[640px] object-cover" src={imgSystemImage03} />
          </div>
          <div className="h-px w-full bg-[#a6825e] opacity-20" />

          <div className="py-[120px]">
            <p className="font-mono text-[11px] uppercase text-[#a6825e]">Vendor Route Sync</p>
            <p className="mt-6 w-[800px] font-serif text-[48px] text-[#1a1a1a]">Critical Path Active</p>
          </div>
          <div className="h-px w-full bg-[#a6825e] opacity-20" />

          <div className="flex items-center gap-20 py-[120px]">
            <img alt="" className="h-[480px] w-[640px] object-cover" src={imgSystemImage04} />
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-mono text-[11px] uppercase text-[#a6825e]">{'// 05 THE INTEGRITY FAILSAFE'}</p>
              <p className="font-serif text-[32px] leading-[1.4] text-[#1a1a1a]">Dynamic Risk Abatement Matrix</p>
            </div>
          </div>
          <div className="h-px w-full bg-[#a6825e] opacity-20" />

          <div className="flex flex-col items-center gap-8 py-[120px] text-center">
            <p className="w-[900px] font-mono text-[11px] uppercase text-[#a6825e]">
              We construct systemic redundancy so that when the unpredictable manifests, the experience remains unaffected.
            </p>
            <p className="w-[900px] font-serif text-[48px] italic text-[#1a1a1a]">
              Our contingency layers operate independently, allowing local failure containing zero propagation risk.
            </p>
            <div className="h-px w-10 bg-[#a6825e]" />
          </div>
        </section>

        <section className="flex h-[900px] items-center justify-center bg-[#0a0a0b] p-20">
          <div className="flex w-full flex-col items-center gap-16">
            <p className="font-mono text-[11px] uppercase text-[#a6825e]">{'// 06 THE DATA METRIC'}</p>
            <div className="relative h-[500px] w-[1200px]">
              <div className="absolute left-[200px] top-[97.91px] flex h-[52.094px] w-[295.442px] items-center justify-center">
                <img alt="" className="h-px w-[300px] rotate-[-10deg]" src={imgNetworkGraphDivider01} />
              </div>
              <div className="absolute left-[500px] top-[100px] flex h-[52.094px] w-[295.442px] items-center justify-center">
                <img alt="" className="h-px w-[300px] rotate-[10deg]" src={imgNetworkGraphDivider02} />
              </div>
              <div className="absolute left-[800px] top-[97.91px] flex h-[52.094px] w-[295.442px] items-center justify-center">
                <img alt="" className="h-px w-[300px] rotate-[-10deg]" src={imgNetworkGraphDivider01} />
              </div>
              <div className="absolute left-[200px] top-[150px] flex h-[259.808px] w-[150px] items-center justify-center">
                <img alt="" className="h-px w-[300px] rotate-[60deg]" src={imgNetworkGraphDivider04} />
              </div>
              <div className="absolute left-[500px] top-[100px] flex h-[229.813px] w-[192.836px] items-center justify-center">
                <img alt="" className="h-px w-[300px] rotate-[50deg]" src={imgNetworkGraphDivider05} />
              </div>
              <div className="absolute left-[800px] top-[150px] flex h-[192.836px] w-[229.813px] items-center justify-center">
                <img alt="" className="h-px w-[300px] rotate-[40deg]" src={imgNetworkGraphDivider06} />
              </div>
              <div className="absolute left-[817.16px] top-[100px] flex size-[282.843px] items-center justify-center">
                <img alt="" className="h-px w-[400px] rotate-[135deg]" src={imgNetworkGraphDivider07} />
              </div>

              {graphNodes.map((node) => (
                <div
                  className="absolute size-2 rounded-[4px] bg-[#a6825e]"
                  key={`${node.text}-${node.top}`}
                  style={{ top: `${node.top}px`, left: `${node.left}px` }}
                >
                  <p className="absolute inset-[-4px_-8px_0_16px] overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[10px] text-[#f5f5f5]">
                    {node.text}
                  </p>
                </div>
              ))}

              {graphLabels.map((label) => (
                <p
                  className="absolute font-mono text-[8px] text-[#a6825e] opacity-50"
                  key={`${label.text}-${label.top}`}
                  style={{ top: `${label.top}px`, left: `${label.left}px` }}
                >
                  {label.text}
                </p>
              ))}
            </div>
            <p className="w-[600px] text-center font-serif text-[24px] text-[#f5f5f5]">ALL CHANNELS SYNCHRONIZED</p>
          </div>
        </section>

        <section className="bg-[#f9f7f2] py-[240px]" id="contact">
          <div className="mx-auto flex w-fit flex-col items-center gap-10">
            <p className="w-[800px] text-center font-serif text-[64px] italic leading-[1.1] text-[#1a1a1a]">
              Let&apos;s discuss how we build your custom operational engine.
            </p>
            <a className="font-mono text-[12px] uppercase text-[#a6825e]" href="mailto:office@ryanmorrow.com">
              OFFICE@RYANMORROW.COM
            </a>
          </div>
        </section>

        <section className="bg-[#f9f7f2] p-20">
          <div className="h-px w-full opacity-20">
            <img alt="" className="h-full w-full" src={imgDividerDesktop} />
          </div>
          <div className="mt-[120px] flex flex-col gap-4">
            <p className="font-mono text-[11px] text-[#a6825e]">© 2026 RYAN MORROW EXECUTIVE</p>
            <p className="font-serif text-[64px] text-[#1a1a1a]">LONDON / NYC / SYDNEY / TOKYO</p>
          </div>
        </section>
      </div>

      <div className="hidden md:block lg:hidden bg-[#faf8f5]">
        <section className="flex flex-col gap-8 bg-[#faf8f5] px-12 pb-20 pt-[100px]" id="philosophy">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 01 THE OPERATIONAL CRITERION'}</p>
          <p className="font-serif text-[52px] leading-[1.05] tracking-[-1px] text-[#1a1a1a]">
            Complexity is not a challenge to be minimized, but a <span className="text-[#a6825e]">geometry</span> to be mastered.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[#6b6b6b]">
            Behind every world-class brand experience lies an intricate matrix of operational substrates. We design systems that run with such absolute mathematical precision that the logistics dissolve entirely, leaving only the pure, uncompromised creative event.
          </p>
          <div className="flex items-start gap-6 rounded-[2px] border border-[#e5e2da] bg-[#f5f2ed] p-6">
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="font-mono text-[11px] font-semibold text-[#a6825e]">{systemStatus.label}</p>
              <p className="font-sans text-[13px] leading-[1.5] text-[#1a1a1a]">{systemStatus.description}</p>
            </div>
            <div className="rounded-[2px] bg-[#0f0f10] px-4 py-2">
              <p className="font-mono text-[10px] uppercase text-[#f5f2ed]">{systemStatus.badge}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0f0f10] px-12 py-20 text-[#f5f2ed]">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 02 THE VENDOR ENGINE'}</p>
          <p className="mt-10 font-serif text-[36px] leading-[1.1]">Decoupled Vendor Orchestration</p>
          <div className="mt-10 flex flex-col gap-6">
            {vendorModules.map((module) => (
              <div className="rounded-[2px] border border-[#2a2a2e] bg-[#1a1a1c] p-6" key={module.code}>
                <div className="flex items-center justify-between font-mono text-[12px]">
                  <p className="text-[#a6825e]">{module.code}</p>
                  <p className="text-[10px] text-[#6b6b6b]">{module.status}</p>
                </div>
                <div className="mt-4 h-px w-full">
                  <img alt="" className="h-full w-full" src={imgDividerTablet} />
                </div>
                <p className="mt-4 font-serif text-[28px]">{module.title}</p>
                <p className="mt-4 font-sans text-[14px] leading-[1.6] text-[#e5e2da] opacity-80">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#faf8f5] px-12 py-20" id="methodology">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 03 THE RUNWAY METHODOLOGY'}</p>
          <p className="mt-10 font-serif text-[36px] leading-[1.1] text-[#1a1a1a]">Chronological Phasing Strategy</p>
          <div className="mt-10 flex flex-col">
            {phases.map((phase, index) => (
              <div className="flex items-start gap-6" key={phase.code}>
                <div className="flex w-20 flex-col gap-1 pt-0.5 font-mono">
                  <p className="text-[12px] font-semibold text-[#a6825e]">{phase.code}</p>
                  <p className="text-[10px] text-[#6b6b6b]">{phase.desktopPeriod}</p>
                </div>
                <div className={`relative w-4 shrink-0 ${index === phases.length - 1 ? 'h-[10px]' : 'h-[110px]'}`}>
                  <img alt="" className="absolute inset-0 h-full w-full" src={index === phases.length - 1 ? imgTimelineTabletEnd : imgTimelineTablet} />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 pb-10">
                  <p className="font-serif text-[24px] text-[#1a1a1a]">{phase.title}</p>
                  <p className="font-sans text-[14px] leading-[1.5] text-[#6b6b6b]">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f0f10] px-12 py-20 text-[#f5f2ed]">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 04 THE TELEMETRY PROTOCOL'}</p>
          <p className="mt-8 font-serif text-[36px] leading-[1.1]">Clean Dashboard &amp; Escalation Signal</p>
          <div className="mt-8 rounded-[4px] border border-[#2a2a2e] bg-[#161618] p-8">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-[1px] text-[#c8a882]">OPERATIONAL TELEMETRY ENGINE v2.6</p>
              <div className="flex items-center gap-2">
                <img alt="" className="size-[6px]" src={imgCircleTablet} />
                <p className="font-mono text-[9px] text-[#e5e2da] opacity-60">ALL CHANNELS SYNCHRONIZED</p>
              </div>
            </div>
            <div className="mt-6 h-px w-full">
              <img alt="" className="h-full w-full" src={imgDividerTabletDark} />
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {telemetryChannels.map((channel) => (
                <div className="flex items-center justify-between" key={channel.name}>
                  <p className="font-sans text-[13px] text-[#f5f2ed]">{channel.name}</p>
                  <p className={`font-mono text-[11px] ${channel.color}`}>{channel.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f5] px-12 py-20">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 05 THE INTEGRITY FAILSAFE'}</p>
          <p className="mt-10 font-serif text-[36px] leading-[1.1] text-[#1a1a1a]">Dynamic Risk Abatement Matrix</p>
          <p className="mt-6 font-sans text-[15px] leading-[1.6] text-[#6b6b6b]">
            We construct systemic redundancy so that when the unpredictable manifests, the experience remains unaffected. Our contingency layers operate independently, allowing local failure containing zero propagation risk.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {protocols.map((protocol) => (
              <div className="flex items-start gap-4 border border-[#e5e2da] bg-[#f5f2ed] p-4" key={protocol.code}>
                <p className="font-mono text-[12px] font-semibold text-[#a6825e]">{protocol.code}</p>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="font-serif text-[20px] text-[#1a1a1a]">{protocol.title}</p>
                  <p className="font-sans text-[13px] leading-[1.4] text-[#6b6b6b]">{protocol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f0f10] px-12 py-20 text-[#f5f2ed]">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 06 THE DATA METRIC'}</p>
          <p className="mt-8 font-serif text-[36px] leading-[1.1]">Operational Geometry of the World Cup</p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {metrics.map((metric) => (
              <div className="rounded-[2px] bg-[#1a1a1c] p-6" key={metric.label}>
                <p className="font-serif text-[64px] leading-none text-[#f5f2ed]">{metric.value}</p>
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[1.5px] text-[#a6825e]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f2ed] px-12 pb-20 pt-[100px]" id="contact">
          <div className="flex flex-col gap-8">
            <p className="font-serif text-[44px] leading-[1.1] text-[#1a1a1a]">Let&apos;s discuss how we build your custom operational engine.</p>
            <div className="flex flex-col gap-4 font-mono text-[14px] font-semibold text-[#1a1a1a]">
              <a className="underline decoration-from-font underline-offset-2" href="mailto:office@ryanmorrow.com">OFFICE@RYANMORROW.COM</a>
              <a className="underline decoration-from-font underline-offset-2" href="https://linkedin.com/in/ryanmorrow" target="_blank" rel="noreferrer">LINKEDIN/RYANMORROW</a>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-6">
            <div className="h-px w-full">
              <img alt="" className="h-full w-full" src={imgDividerDesktop} />
            </div>
            <div className="flex flex-col gap-4 font-mono">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] text-[#a6825e]">© 2026 RYAN MORROW EXECUTIVE</p>
                <p className="text-[10px] text-[#1a1a1a] opacity-50">LONDON / NYC / SYDNEY / TOKYO</p>
                <p className="text-[9px] tracking-[0.8px] text-[#1a1a1a] opacity-40">Currently: Los Angeles · Tokyo Advisory</p>
              </div>
              <p className="text-[10px] text-[#a6825e]">Currently accepting select advisory engagements.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="md:hidden bg-[#faf8f5]">
        <section className="flex flex-col gap-7 bg-[#faf8f5] px-6 py-16" id="philosophy">
          <p className="font-mono text-[10px] tracking-[1.5px] text-[#a6825e]">{'// 01 THE OPERATIONAL CRITERION'}</p>
          <p className="font-serif text-[40px] leading-[1.05] tracking-[-1px] text-[#1a1a1a]">
            Complexity is not a challenge to be minimized, but a <span className="text-[#a6825e]">geometry</span> to be mastered.
          </p>
          <p className="font-sans text-[15px] leading-[1.65] text-[#6b6b6b]">
            Behind every world-class brand experience lies an intricate matrix of operational substrates. We design systems that run with such absolute mathematical precision that the logistics dissolve entirely, leaving only the pure, uncompromised creative event.
          </p>
          <div className="flex flex-col gap-4 rounded-[2px] border border-[#e5e2da] bg-[#f5f2ed] p-5">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[11px] font-semibold text-[#a6825e]">{systemStatus.label}</p>
              <p className="font-sans text-[13px] leading-[1.45] text-[#1a1a1a]">{systemStatus.description}</p>
            </div>
            <div className="w-fit rounded-[2px] bg-[#0f0f10] px-4 py-2">
              <p className="font-mono text-[10px] uppercase text-[#f5f2ed]">{systemStatus.badge}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0f0f10] px-6 py-16 text-[#f5f2ed]">
          <p className="font-mono text-[10px] tracking-[1.5px] text-[#a6825e]">{'// 02 THE VENDOR ENGINE'}</p>
          <p className="mt-8 font-serif text-[32px] leading-[1.1]">Decoupled Vendor Orchestration</p>
          <div className="mt-8 flex flex-col gap-4">
            {vendorModules.map((module) => (
              <div className="rounded-[2px] border border-[#2a2a2a] bg-[#1a1a1c] p-5" key={module.code}>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <p className="text-[#a6825e]">{module.code}</p>
                  <p className="text-[10px] text-[#6b6b6b]">{module.status}</p>
                </div>
                <div className="mt-3 h-px w-full">
                  <img alt="" className="h-full w-full" src={imgDividerMobile} />
                </div>
                <p className="mt-3 font-serif text-[24px]">{module.title}</p>
                <p className="mt-3 font-sans text-[13px] leading-[1.5] text-[#e5e2da] opacity-80">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#faf8f5] px-6 py-16" id="methodology">
          <p className="font-mono text-[10px] tracking-[1.5px] text-[#a6825e]">{'// 03 THE RUNWAY METHODOLOGY'}</p>
          <p className="mt-8 font-serif text-[32px] leading-[1.1] text-[#1a1a1a]">Chronological Phasing Strategy</p>
          <div className="mt-8 flex flex-col">
            {phases.map((phase, index) => (
              <div className="flex items-start gap-4" key={phase.code}>
                <div className="flex w-16 flex-col gap-0.5 pt-0.5 font-mono">
                  <p className="text-[12px] font-semibold text-[#a6825e]">{phase.code}</p>
                  <p className="text-[9px] text-[#6b6b6b]">{phase.mobilePeriod}</p>
                </div>
                <div className={`relative w-4 shrink-0 ${index === phases.length - 1 ? 'h-2' : 'h-32'}`}>
                  <img alt="" className="absolute inset-0 h-full w-full" src={index === phases.length - 1 ? imgTimelineMobileEnd : imgTimelineMobile} />
                </div>
                <div className={`flex flex-1 flex-col gap-1.5 ${index === phases.length - 1 ? 'pb-4' : 'pb-8'}`}>
                  <p className="font-serif text-[22px] text-[#1a1a1a]">{phase.title}</p>
                  <p className="font-sans text-[13px] leading-[1.5] text-[#6b6b6b]">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f0f10] px-6 py-16 text-[#f5f2ed]">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 04 THE TELEMETRY PROTOCOL'}</p>
          <p className="mt-7 font-serif text-[32px] leading-[1.1]">Clean Dashboard &amp; Escalation Signal</p>
          <div className="mt-7 rounded-[4px] border border-[#2a2a2a] bg-[#161618] p-5">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[9px] tracking-[0.5px] text-[#c8a882]">OPERATIONAL TELEMETRY ENGINE v2.6</p>
              <div className="flex items-center gap-1.5">
                <img alt="" className="size-[6px]" src={imgCircleMobile} />
                <p className="font-mono text-[9px] text-[#e5e2da] opacity-60">ALL CHANNELS SYNCHRONIZED</p>
              </div>
            </div>
            <div className="mt-5 h-px w-full">
              <img alt="" className="h-full w-full" src={imgDividerMobile} />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {telemetryChannels.map((channel) => (
                <div className="flex items-center justify-between" key={channel.name}>
                  <p className="font-sans text-[13px] text-[#f5f2ed]">{channel.name}</p>
                  <p className={`font-mono text-[11px] ${channel.color}`}>{channel.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f5] px-6 py-16">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 05 THE INTEGRITY FAILSAFE'}</p>
          <p className="mt-7 font-serif text-[32px] leading-[1.1] text-[#1a1a1a]">Dynamic Risk Abatement Matrix</p>
          <p className="mt-6 font-sans text-[15px] leading-[1.6] text-[#6b6b6b]">
            We construct systemic redundancy so that when the unpredictable manifests, the experience remains unaffected. Our contingency layers operate independently, allowing local failure containing zero propagation risk.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {protocols.map((protocol) => (
              <div className="flex items-start gap-3 border border-[#e5e2da] bg-[#f5f2ed] p-4" key={protocol.code}>
                <p className="font-mono text-[12px] font-semibold text-[#a6825e]">{protocol.code}</p>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="font-serif text-[20px] text-[#1a1a1a]">{protocol.title}</p>
                  <p className="font-sans text-[13px] leading-[1.4] text-[#6b6b6b]">{protocol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f0f10] px-6 py-16 text-[#f5f2ed]">
          <p className="font-mono text-[10px] tracking-[2px] text-[#a6825e]">{'// 06 THE DATA METRIC'}</p>
          <p className="mt-7 font-serif text-[32px] leading-[1.1]">Operational Geometry of the World Cup</p>
          <div className="mt-7 flex flex-col gap-4">
            {metrics.map((metric) => (
              <div className="rounded-[2px] bg-[#1a1a1a] p-5" key={metric.label}>
                <p className="font-serif text-[56px] leading-none text-[#f5f2ed]">{metric.value}</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[1px] text-[#a6825e]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f2ed] px-6 pb-16 pt-20" id="contact">
          <div className="flex flex-col gap-6">
            <p className="font-serif text-[36px] leading-[1.1] text-[#1a1a1a]">Let&apos;s discuss how we build your custom operational engine.</p>
            <div className="flex flex-col gap-3 font-mono text-[13px] font-semibold text-[#1a1a1a]">
              <a className="w-full underline decoration-from-font underline-offset-2" href="mailto:office@ryanmorrow.com">OFFICE@RYANMORROW.COM</a>
              <a className="w-full underline decoration-from-font underline-offset-2" href="https://linkedin.com/in/ryanmorrow" target="_blank" rel="noreferrer">LINKEDIN/RYANMORROW</a>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-6">
            <div className="h-px w-full">
              <img alt="" className="h-full w-full" src={imgFooterMobile} />
            </div>
            <div className="flex flex-col gap-4 font-mono">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] text-[#a6825e]">© 2026 RYAN MORROW EXECUTIVE</p>
                <p className="text-[10px] text-[#1a1a1a] opacity-50">LONDON / NYC / SYDNEY / TOKYO</p>
                <p className="text-[9px] tracking-[0.8px] text-[#1a1a1a] opacity-40">Currently: Los Angeles · Tokyo Advisory</p>
              </div>
              <p className="text-[10px] text-[#a6825e]">Currently accepting select advisory engagements.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
