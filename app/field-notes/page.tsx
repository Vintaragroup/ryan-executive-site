/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { GlobalNav } from '@/components/navigation';

const imgScene4ArtifactGallery = 'https://www.figma.com/api/mcp/asset/00b3fd0d-db9a-4be8-aa3e-c539e7b67d2f';
const imgEquipmentLabelBlock01Divider01 = 'https://www.figma.com/api/mcp/asset/03ba810c-d60d-4031-bf14-9937838992fb';
const imgFieldNotesArtifact02 = 'https://www.figma.com/api/mcp/asset/abef84cf-d26c-4499-bbe9-d3f0c9a59c75';
const imgFieldNotesArtifact03 = 'https://www.figma.com/api/mcp/asset/8369bf94-8856-4a52-81ac-93317d3b9f6c';
const imgFieldNotesArtifact04 = 'https://www.figma.com/api/mcp/asset/9f61f730-d7c2-4a4a-b7bd-313c83a75e94';
const imgFieldNotesArtifact05 = 'https://www.figma.com/api/mcp/asset/1c9412fc-f075-48b5-b8a9-cd9fa4c5007c';
const imgScheduleFragmentDivider01 = 'https://www.figma.com/api/mcp/asset/0858c62e-a4e6-40fb-bb37-19e974452b12';
const imgCityRoutingDivider01 = 'https://www.figma.com/api/mcp/asset/cef7e5fe-4f94-484f-a3e2-449412a44228';
const imgDivider03 = 'https://www.figma.com/api/mcp/asset/073d716a-1500-4784-b00d-ac8d2cb14234';
const imgDivider04 = 'https://www.figma.com/api/mcp/asset/f187fbac-6aad-4e88-bdcf-508c4d65d3bd';
const imgScene9ChapterTransitionDivider01 = 'https://www.figma.com/api/mcp/asset/eb9954e2-81c3-4de0-b043-b24bcc3b6b58';

const imgTabletHero = 'https://www.figma.com/api/mcp/asset/879bc5c5-0260-4350-ad03-e40c3373a926';
const imgTabletVenueMap = 'https://www.figma.com/api/mcp/asset/c0bbf5d9-8974-4984-b099-387f3233b67e';
const imgTabletSecuredAvatar = 'https://www.figma.com/api/mcp/asset/a172c486-e8df-435b-9f09-95e497df95af';

const imgMobileHero = 'https://www.figma.com/api/mcp/asset/1ff411db-4fa4-4fc7-a8b9-bd061286a216';
const imgMobileVenueMap = 'https://www.figma.com/api/mcp/asset/a6d7c351-faa4-4f56-b80b-ccaca1aa5a58';
const imgMobileSecuredAvatar = 'https://www.figma.com/api/mcp/asset/42afd4eb-708d-4a86-886b-3af43232bda6';

const shippingMetrics = [
  ['Total Volume', '14,200 metric tons'],
  ['Core Containers', '412 FEU'],
  ['Clearing Ports', 'JFK // MIA // LHR // DOH'],
  ['Customs Status', 'Pre-approved Priority'],
  ['SLA Window', '99.98% On-Time Target'],
] as const;

const scheduleEntries = [
  ['06:00 L', 'PRE-FLIGHT', 'Customs Manifest check-in & priority clearance at MIA cargo hub.', 'CLEARED', 'text-[#10b981]'],
  ['10:30 L', 'VENUE INGRESS', 'First-wave vendor caravan entry. Heavy hardware rigging (Lanes 4-9).', 'ONGOING', 'text-[#3b82f6]'],
  ['15:00 L', 'BROADCAST SYNC', 'Global satellite uplink sequence testing across major host cities.', 'PENDING', 'text-[#f59e0b]'],
  ['21:00 L', 'DEBRIEF', 'Operational sign-off with executive governance committee.', 'SCHEDULED', 'text-[#8a8a8a]'],
] as const;

function DesktopFieldNotesPage() {
  return (
    <div className="bg-[#f9f7f2] text-charcoal">
      <section className="flex h-[900px] items-center justify-center bg-[#f3efe6] px-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-[12px] font-medium text-[#a6825e]">05 // FIELD NOTES</p>
          <h1 className="w-[800px] font-serif text-[96px] leading-none">The Operational Artifacts of Scale</h1>
        </div>
      </section>

      <section className="h-[850px] border-y border-light-gray bg-[#f9f7f2] px-20 py-20">
        <p className="font-mono text-[11px] text-[#a6825e] opacity-50">WORKING SYSTEM STUDY — ARCHIVE DESK SPREAD</p>
        <div className="relative mt-0 h-[600px] w-full">
          <div className="absolute left-[77px] top-[60px] rotate-2 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-mono text-[10px] text-[#a6825e]">A documentary deep-dive into the raw, unpolished substrates of international orchestration.</p>
            <div className="relative mt-2 h-px w-[280px]">
              <img alt="" className="absolute inset-0 size-full" src={imgScheduleFragmentDivider01} />
            </div>
            <p className="mt-2 whitespace-nowrap font-mono text-[12px] leading-[1.6] text-[#1a1a1a]">These are the schedules, security protocols, and route structures that make complexity functional.</p>
          </div>

          <div className="absolute left-[520px] top-[148px] -rotate-1 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <div className="flex w-[220px] flex-col items-center gap-4">
              <div className="rounded-[4px] bg-[rgba(166,130,94,0.27)] px-1.5 py-1.5">
                <p className="font-mono text-[9px] font-semibold text-[#a6825e]">LOGISTICS DIRECTORY // VOL 09</p>
              </div>
              <p className="text-center font-serif text-[28px] leading-none text-[#1a1a1a]">47° N, 122° W — ACTIVE MONITORING</p>
              <p className="font-mono text-[10px] text-[#a6825e]">01 // Manifest &amp; Assets</p>
              <div className="h-2 w-[180px] bg-[#1a1a1a] opacity-80" />
            </div>
          </div>

          <div className="absolute left-[880px] top-[35px] -rotate-3 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-mono text-[10px] text-[#a6825e]">Cargo Tracing &amp; Venue Topography</p>
            <div className="relative mt-2 h-px w-[240px]">
              <img alt="" className="absolute inset-0 size-full" src={imgCityRoutingDivider01} />
            </div>
            <p className="mt-2 font-mono text-[13px] font-semibold text-[#1a1a1a]">FIG 1.2 — VENUE COORDINATION SCHEMATIC</p>
            <p className="mt-2 whitespace-nowrap font-mono text-[9px] text-[#1a1a1a] opacity-40">Physical zoning layer mapping of ingress and egress pathways for heavy freight and broadcast machinery across stadium zones.</p>
          </div>

          <div className="absolute left-[233px] top-[380px] rotate-4 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3">
              <div className="size-16 rounded-[1px] bg-[#8a7663]" />
              <div className="flex flex-col gap-1">
                <p className="font-mono text-[11px] font-semibold text-[#1a1a1a]">Total Volume</p>
                <p className="font-mono text-[10px] text-[#a6825e]">14,200 metric tons</p>
                <p className="font-mono text-[9px] text-[#1a1a1a] opacity-40">Core Containers</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[848px] top-[350px] rotate-1 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-mono text-[10px] text-[#a6825e]">412 FEU</p>
            <div className="mt-[10px] rounded-[2px] bg-[#f3efe6] p-4">
              <div className="relative h-[100px] w-[300px]">
                <div className="absolute left-[10px] top-[10px] h-20 w-[280px] border border-[#a6825e]" />
                <div className="absolute left-[90px] top-[20px] h-[60px] w-[120px] border border-dashed border-[#a6825e]" />
                <div className="absolute left-[10px] top-[50px] h-px w-[280px]">
                  <img alt="" className="absolute inset-0 size-full" src={imgDivider03} />
                </div>
                <p className="absolute left-[100px] top-[40px] whitespace-nowrap font-mono text-[9px] text-[#a6825e]">LED WALL ZONE A — INTEGRATION SEQUENCE</p>
                <p className="absolute left-[15px] top-[15px] whitespace-nowrap font-mono text-[8px] text-[#a6825e]">Clearing Ports</p>
              </div>
            </div>
            <p className="mt-[10px] font-mono text-[9px] text-[#1a1a1a] opacity-40">JFK // MIA // LHR // DOH</p>
          </div>

          <div className="absolute left-[580px] top-[437px] -rotate-2 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-mono text-[10px] text-[#a6825e]">SLA Window</p>
            <p className="mt-2 font-mono text-[11px] font-semibold text-[#1a1a1a]">99.98% On-Time Target</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-[#f9f7f2] px-20 py-40">
        <p className="font-mono text-[11px] font-medium text-[#a6825e]">02 // Identity Protocols</p>
        <h2 className="w-[960px] font-serif text-[56px] italic leading-[1.25]">Access &amp; Accreditation Design</h2>
      </section>

      <section className="relative h-[900px] w-full overflow-hidden">
        <img alt="Operational field notes gallery" className="absolute inset-0 size-full object-cover" src={imgScene4ArtifactGallery} />
        <div className="absolute inset-0 bg-[rgba(10,10,11,0.35)]" />
      </section>

      <section className="h-[800px] border-y border-light-gray bg-[#f9f7f2] px-20 py-20">
        <p className="font-mono text-[11px] text-[#a6825e] opacity-50">WORK INGESTION ARCHIVE — DEPLOYMENT NOTES</p>
        <div className="relative h-[550px] w-full">
          <div className="absolute left-[120px] top-[75px] -rotate-3 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-mono text-[10px] text-[#a6825e]">SECURE ACCREDITATION</p>
            <div className="relative mt-1.5 h-px w-[280px]">
              <img alt="" className="absolute inset-0 size-full" src={imgScheduleFragmentDivider01} />
            </div>
            <p className="mt-1.5 whitespace-nowrap font-mono text-[12px] leading-[1.5] text-[#1a1a1a]">Accreditation design is the first line of operational security. For over 200,000 personnel, we mapped out a unified protocol that uses physical micro-optics and encrypted near-field chips.</p>
          </div>

          <div className="absolute left-[537px] top-10 rotate-2 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <div className="flex w-80 flex-col gap-3">
              <p className="font-mono text-[10px] text-[#a6825e]">Ryan Morrow</p>
              <div className="rounded-[2px] bg-[#f3efe6] p-3">
                <div className="relative h-[140px] w-[296px]">
                  <div className="absolute left-[10px] top-[50px] h-10 w-[60px] border border-[#a6825e]" />
                  <div className="absolute left-[110px] top-[50px] h-10 w-[70px] border border-[#a6825e]" />
                  <div className="absolute left-[220px] top-[50px] h-10 w-16 border border-[#a6825e]" />
                  <div className="absolute left-[70px] top-[70px] h-px w-10">
                    <img alt="" className="absolute inset-0 size-full" src={imgDivider04} />
                  </div>
                  <div className="absolute left-[180px] top-[70px] h-px w-10">
                    <img alt="" className="absolute inset-0 size-full" src={imgDivider04} />
                  </div>
                  <p className="absolute left-5 top-[62px] whitespace-nowrap font-mono text-[9px] text-[#a6825e]">CODE: RM-EX-904-OPS</p>
                  <p className="absolute left-[122px] top-[62px] whitespace-nowrap font-mono text-[9px] text-[#a6825e]">ALL ACCESS PASS</p>
                  <p className="absolute left-[232px] top-[62px] whitespace-nowrap font-mono text-[9px] text-[#a6825e]">ZONE 1, 2, 4, 9</p>
                </div>
              </div>
              <p className="font-mono text-[9px] text-[#1a1a1a] opacity-40">{'// EXTREME ACCESS ARCHITECTURE'}</p>
            </div>
          </div>

          <div className="absolute left-[938px] top-[120px] rotate-1 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <div className="w-[220px] border border-[#a6825e] bg-[#f3efe6] p-4">
              <p className="font-mono text-[9px] font-semibold text-[#a6825e]">03 // The Sequence</p>
              <p className="mt-1 whitespace-nowrap font-mono text-[14px] font-semibold text-[#1a1a1a]">Operational Timeline &amp; Critical Paths</p>
              <p className="mt-1 whitespace-nowrap font-mono text-[11px] text-[#1a1a1a]">Zones are mapped directly to physical routing lanes, ensuring zero overlapping security friction at key structural thresholds.</p>
              <div className="relative mt-1.5 h-px w-[188px]">
                <img alt="" className="absolute inset-0 size-full" src={imgEquipmentLabelBlock01Divider01} />
              </div>
              <p className="mt-1.5 font-mono text-[9px] text-[#1a1a1a] opacity-50">SHIPPING METRICS</p>
            </div>
          </div>

          <div className="absolute left-[360px] top-[357px] -rotate-2 rounded-[2px] border border-[#e5e2da] bg-white p-5 shadow-[2px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-mono text-[10px] text-[#a6825e]">Customs Status</p>
            <p className="mt-2 font-mono text-[13px] font-semibold text-[#1a1a1a]">Pre-approved Priority</p>
          </div>
        </div>
      </section>

      <section className="flex items-center gap-20 bg-[#f9f7f2] p-20">
        <div className="h-[440px] w-[580px] overflow-hidden rounded-[2px]">
          <img alt="Operational timeline field note" className="size-full object-cover" src={imgFieldNotesArtifact02} />
        </div>
        <div className="flex w-[620px] flex-col gap-10">
          <p className="font-mono text-[11px] font-medium text-[#a6825e]">TIME · PHASE · DEPLOYMENT OBJECTIVE</p>
          <p className="font-serif text-[40px] italic leading-[1.3]">The production timeline is not a schedule — it is a spatial map of converging constraints. Each phase represents a narrowing corridor of acceptable outcomes.</p>
        </div>
      </section>

      <section className="flex gap-10 bg-[#f9f7f2] px-20 pb-[120px] pt-20">
        <div className="h-[480px] w-[360px] overflow-hidden rounded-[2px]">
          <img alt="Field notes artifact three" className="size-full object-cover" src={imgFieldNotesArtifact03} />
        </div>
        <div className="size-[480px] overflow-hidden rounded-[2px]">
          <img alt="Field notes artifact four" className="size-full object-cover" src={imgFieldNotesArtifact04} />
        </div>
        <div className="h-[480px] w-[400px] overflow-hidden rounded-[2px]">
          <img alt="Field notes artifact five" className="size-full object-cover" src={imgFieldNotesArtifact05} />
        </div>
      </section>

      <section className="border-t border-light-gray bg-[#f9f7f2] px-20 pb-[200px] pt-[120px]">
        <p className="w-[800px] font-mono text-[11px] font-medium text-[#a6825e]">© 2026 RYAN MORROW EXECUTIVE</p>
        <p className="mt-6 w-[720px] font-mono text-[15px] leading-[1.6] text-[#1a1a1a] opacity-70">LONDON / NYC / SYDNEY</p>
      </section>

      <section className="bg-[#f3efe6] px-20 py-20">
        <div className="relative h-px w-full">
          <img alt="" className="absolute inset-0 size-full" src={imgScene9ChapterTransitionDivider01} />
        </div>
        <Link className="mt-10 flex items-center justify-between" href="/thinking">
          <p className="font-mono text-[11px] font-medium text-[#a6825e]">NEXT CHAPTER: THINKING</p>
          <p className="font-serif text-[40px] text-[#1a1a1a]">→</p>
        </Link>
      </section>
    </div>
  );
}

function TabletFieldNotesPage() {
  return (
    <div className="bg-paper text-charcoal">
      <section className="bg-[#0f0f10] px-12 pb-20 pt-[100px] text-[#f5f2ed]">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[11px] tracking-[3px] text-[#c8a882]">05 // FIELD NOTES</p>
          <h1 className="font-serif text-[64px] tracking-[-1.5px]">The Operational Artifacts of Scale</h1>
          <p className="font-sans text-[16px] leading-[1.6] text-[rgba(250,248,245,0.5)]">A documentary deep-dive into the raw, unpolished substrates of international orchestration. These are the schedules, security protocols, and route structures that make complexity functional.</p>
        </div>
        <div className="mt-10 h-[400px] overflow-hidden rounded-[2px]">
          <img alt="Field notes hero image" className="size-full object-cover" src={imgTabletHero} />
          <div className="relative -mt-[400px] h-[400px] rounded-[2px] bg-[rgba(15,15,16,0.3)]" />
        </div>
        <div className="mt-10 flex items-center justify-between font-mono text-[9px] tracking-[1px]">
          <p className="text-[#c8a882]">LOGISTICS DIRECTORY // VOL 09</p>
          <p className="text-[#f5f2ed] opacity-40">47° N, 122° W — ACTIVE MONITORING</p>
        </div>
      </section>

      <section className="bg-[#f5f2ed] px-12 py-[100px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#a6825e]" />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[2px] text-[#a6825e]">01 // Manifest &amp; Assets</p>
          </div>
          <h2 className="font-serif text-[40px] tracking-[-1px]">Cargo Tracing &amp; Venue Topography</h2>
        </div>
        <div className="mt-12 flex gap-8">
          <div className="min-w-0 flex-1">
            <div className="h-[260px] overflow-hidden rounded-[2px]">
              <img alt="Venue coordination schematic" className="size-full object-cover" src={imgTabletVenueMap} />
            </div>
            <p className="mt-6 font-mono text-[10px] text-[#a6825e]">FIG 1.2 — VENUE COORDINATION SCHEMATIC</p>
            <p className="mt-2 font-sans text-[13px] leading-[1.5] text-[#4a4a4a]">Physical zoning layer mapping of ingress and egress pathways for heavy freight and broadcast machinery across stadium zones.</p>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[12px] font-semibold tracking-[1px] text-[#1a1a1a]">SHIPPING METRICS</p>
            <div className="mt-4 h-px bg-[#e5e2da]" />
            <div className="mt-0">
              {shippingMetrics.map(([label, value]) => (
                <div className="flex items-start justify-between border-b border-[#e5e2da] py-3" key={label}>
                  <p className="font-mono text-[10px] uppercase tracking-[1px] text-[#a6825e]">{label}</p>
                  <p className="font-sans text-[12px] font-medium text-[#1a1a1a]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f0f10] px-12 py-[100px] text-[#f5f2ed]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#a6825e]" />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[2px] text-[#c8a882]">02 // Identity Protocols</p>
          </div>
          <h2 className="font-serif text-[40px] tracking-[-1px]">Access &amp; Accreditation Design</h2>
        </div>
        <div className="mt-14 flex items-center gap-8">
          <div className="w-80 shrink-0 rounded-[8px] border-[1.5px] border-[#a6825e] bg-[#f5f2ed] p-6 text-[#1a1a1a] shadow-[0px_12px_12px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] tracking-[2px] text-[#a6825e]">SECURE ACCREDITATION</p>
              <div className="size-[10px] rounded-[5px] bg-[#ef4444]" />
            </div>
            <div className="mt-8 h-[140px] overflow-hidden rounded-[4px]">
              <img alt="Secured accreditation portrait" className="size-full object-cover" src={imgTabletSecuredAvatar} />
            </div>
            <p className="mt-8 font-serif text-[24px]">Ryan Morrow</p>
            <p className="mt-2 font-mono text-[9px] tracking-[1px] text-[#4a4a4a]">CODE: RM-EX-904-OPS</p>
            <div className="mt-8 h-px bg-[#e5e2da]" />
            <div className="mt-8 flex items-start justify-between font-mono text-[10px]">
              <p className="font-semibold text-[#1a1a1a]">ALL ACCESS PASS</p>
              <p className="text-[#a6825e]">ZONE 1, 2, 4, 9</p>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <p className="font-mono text-[12px] font-semibold tracking-[1.5px] text-[#c8a882]">{'// EXTREME ACCESS ARCHITECTURE'}</p>
            <p className="font-sans text-[15px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Accreditation design is the first line of operational security. For over 200,000 personnel, we mapped out a unified protocol that uses physical micro-optics and encrypted near-field chips.</p>
            <p className="font-sans text-[15px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Zones are mapped directly to physical routing lanes, ensuring zero overlapping security friction at key structural thresholds.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] px-12 py-[100px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#a6825e]" />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[2px] text-[#a6825e]">03 // The Sequence</p>
          </div>
          <h2 className="font-serif text-[40px] tracking-[-1px]">Operational Timeline &amp; Critical Paths</h2>
        </div>
        <div className="mt-12 overflow-hidden rounded-[4px] border border-[#e5e2da] bg-[#f5f2ed]">
          <div className="grid grid-cols-[80px_120px_minmax(0,1fr)_80px] gap-6 border-b border-light-gray bg-paper p-4 font-mono text-[10px] font-semibold tracking-[1px] text-copper">
            <p>TIME</p>
            <p>PHASE</p>
            <p>DEPLOYMENT OBJECTIVE</p>
            <p className="text-right">STATUS</p>
          </div>
          {scheduleEntries.map(([time, phase, objective, status, color]) => (
            <div className="grid grid-cols-[80px_120px_minmax(0,1fr)_80px] gap-6 border-b border-[#e5e2da] p-4 last:border-b-0" key={time}>
              <p className="font-mono text-[12px] text-[#1a1a1a]">{time}</p>
              <p className="font-mono text-[10px] uppercase tracking-[1px] text-[#4a4a4a]">{phase}</p>
              <p className="font-sans text-[13px] text-[#1a1a1a]">{objective}</p>
              <p className={`text-right font-mono text-[10px] font-semibold ${color}`}>{status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f0f10] px-12 py-[100px] text-[#f5f2ed]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#a6825e]" />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[2px] text-[#c8a882]">04 // Global Transit</p>
          </div>
          <h2 className="font-serif text-[40px] tracking-[-1px]">Transit Nodes &amp; Flight Paths</h2>
        </div>
        <div className="mt-12 flex gap-8">
          <div className="w-[280px] shrink-0 rounded-[4px] border-[1.5px] border-[#a6825e] bg-[#f5f2ed] p-6 text-[#1a1a1a]">
            <div className="flex items-start justify-between font-mono text-[13px] font-semibold">
              <p>CARGO // EXP-47</p>
              <p>RM</p>
            </div>
            <div className="mt-5 h-px bg-[#e5e2da]" />
            <p className="mt-5 font-serif text-[44px] leading-[0.9]">MIA → JFK</p>
            <p className="font-serif text-[44px] leading-[0.9]">→ LHR → DOH</p>
            <div className="mt-5 h-px bg-[#e5e2da]" />
            <p className="mt-5 font-mono text-[8px] tracking-[1px] text-[#8a8a8a]">FLIGHT PATH ID</p>
            <p className="mt-1 font-mono text-[10px]">W47 // VENUE-09 // LOG-TRANS</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-5">
            <p className="font-mono text-[12px] font-semibold tracking-[1.5px] text-[#c8a882]">MULTI-PORT STRATEGY</p>
            <p className="font-sans text-[15px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Logistics must match the fluid scaling of global events. We operate a multi-port transit strategy utilizing key air and maritime lanes across four main continents.</p>
            <p className="font-sans text-[15px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Continuous diagnostic checks ensure freight is cleared, cataloged, and deployed on site prior to the main technical crew arrival.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2ed] px-12 py-[120px] text-center">
        <div className="mx-auto flex max-w-[672px] flex-col items-center gap-8">
          <div className="h-px w-[60px] bg-[#a6825e]" />
          <p className="font-serif text-[38px] leading-[1.25] text-[#1a1a1a]">&quot;The document is the physical proof of system integrity. When the blueprint is flawless, execution is merely a matter of time.&quot;</p>
          <p className="font-mono text-[11px] font-semibold uppercase text-[#a6825e]">Ryan Morrow // Field Notes</p>
        </div>
      </section>

      <section className="bg-paper px-12 pb-16 pt-[100px]">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-[40px] text-[#1a1a1a]">Let&apos;s discuss what&apos;s next.</h2>
          <div className="flex flex-col gap-3 font-mono text-[14px] font-semibold text-[#1a1a1a]">
            <a className="underline" href="mailto:office@ryanmorrow.com">OFFICE@RYANMORROW.COM</a>
            <a className="underline" href="https://linkedin.com/in/ryanmorrow" rel="noreferrer" target="_blank">LINKEDIN</a>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-6">
          <div className="h-px w-full bg-[rgba(166,130,94,0.2)]" />
          <div className="flex flex-col gap-4 font-mono">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-[#a6825e]">© 2026 RYAN MORROW EXECUTIVE</p>
              <p className="text-[10px] text-[#1a1a1a] opacity-40">LONDON / NYC / SYDNEY</p>
              <p className="text-[9px] text-[#1a1a1a] opacity-25">Currently: Los Angeles · New York · Advisory</p>
            </div>
            <p className="text-[10px] text-[#a6825e]">Currently accepting select advisory engagements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileFieldNotesPage() {
  return (
    <div className="bg-paper text-charcoal">
      <section className="bg-[#0f0f10] px-6 pb-14 pt-14 text-[#f5f2ed]">
        <div className="flex flex-col gap-4">
          <p className="w-full font-mono text-[11px] tracking-[3px] text-[#c8a882]">05 // FIELD NOTES</p>
          <h1 className="w-full font-serif text-[40px] leading-[1.1] tracking-[-1px]">The Operational Artifacts of Scale</h1>
          <p className="w-full font-sans text-[15px] leading-[1.6] text-[rgba(250,248,245,0.5)]">A documentary deep-dive into the raw, unpolished substrates of international orchestration. These are the schedules, security protocols, and route structures that make complexity functional.</p>
        </div>
        <div className="mt-8 h-60 overflow-hidden rounded-[2px]">
          <img alt="Field notes hero image" className="size-full object-cover" src={imgMobileHero} />
          <div className="relative -mt-60 h-60 rounded-[2px] bg-[rgba(15,15,16,0.2)]" />
        </div>
        <div className="mt-8 flex flex-col gap-2 font-mono text-[9px] tracking-[1px]">
          <p className="text-[#c8a882]">LOGISTICS DIRECTORY // VOL 09</p>
          <p className="text-[rgba(245,242,237,0.25)]">47° N, 122° W — ACTIVE MONITORING</p>
        </div>
      </section>

      <section className="bg-[#f5f2ed] px-6 py-16">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#a6825e]" />
            <p className="font-mono text-[10px] font-medium uppercase text-[#a6825e]">01 // Manifest &amp; Assets</p>
          </div>
          <h2 className="w-full font-serif text-[28px] tracking-[-0.5px]">Cargo Tracing &amp; Venue Topography</h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <div className="h-[200px] overflow-hidden rounded-[2px]">
            <img alt="Venue coordination schematic" className="size-full object-cover" src={imgMobileVenueMap} />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="w-full font-mono text-[10px] text-[#a6825e]">FIG 1.2 — VENUE COORDINATION SCHEMATIC</p>
            <p className="w-full font-sans text-[13px] leading-[1.5] text-[#4a4a4a]">Physical zoning layer mapping of ingress and egress pathways for heavy freight and broadcast machinery across stadium zones.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <p className="w-full font-mono text-[12px] font-semibold tracking-[1px]">SHIPPING METRICS</p>
          <div className="h-px w-full bg-[#e5e2da]" />
          {shippingMetrics.map(([label, value]) => (
            <div className="flex items-start justify-between border-b border-[#e5e2da] py-3" key={label}>
              <p className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.5px] text-[#a6825e]">{label}</p>
              <p className="min-w-0 flex-1 text-right font-sans text-[13px] font-medium text-[#1a1a1a]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f0f10] px-6 py-16 text-[#f5f2ed]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#c8a882]" />
            <p className="font-mono text-[10px] font-medium uppercase text-[#c8a882]">02 // Identity Protocols</p>
          </div>
          <h2 className="w-full font-serif text-[28px] tracking-[-0.5px]">Access &amp; Accreditation Design</h2>
        </div>
        <div className="mt-10 rounded-[8px] border-[1.5px] border-[#a6825e] bg-[#f5f2ed] p-5 text-[#1a1a1a] shadow-[0px_8px_8px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[9px] tracking-[2px] text-[#a6825e]">SECURE ACCREDITATION</p>
            <div className="size-[10px] rounded-[5px] bg-[#ef4444]" />
          </div>
          <div className="mt-6 h-40 overflow-hidden rounded-[4px]">
            <img alt="Secured accreditation portrait" className="size-full object-cover" src={imgMobileSecuredAvatar} />
          </div>
          <p className="mt-6 w-full font-serif text-[22px]">Ryan Morrow</p>
          <p className="mt-1 w-full font-mono text-[9px] tracking-[1px] text-[#4a4a4a]">CODE: RM-EX-904-OPS</p>
          <div className="mt-6 h-px w-full bg-[#e5e2da]" />
          <div className="mt-6 flex items-start justify-between font-mono text-[10px]">
            <p className="font-semibold text-[#1a1a1a]">ALL ACCESS PASS</p>
            <p className="text-[#a6825e]">ZONE 1, 2, 4, 9</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <p className="w-full font-mono text-[12px] font-semibold tracking-[1.5px] text-[#c8a882]">{'// EXTREME ACCESS ARCHITECTURE'}</p>
          <p className="w-full font-sans text-[14px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Accreditation design is the first line of operational security. For over 200,000 personnel, we mapped out a unified protocol that uses physical micro-optics and encrypted near-field chips.</p>
          <p className="w-full font-sans text-[14px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Zones are mapped directly to physical routing lanes, ensuring zero overlapping security friction at key structural thresholds.</p>
        </div>
      </section>

      <section className="bg-paper px-6 py-16">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#a6825e]" />
            <p className="font-mono text-[10px] font-medium uppercase text-[#a6825e]">03 // The Sequence</p>
          </div>
          <h2 className="w-full font-serif text-[28px] tracking-[-0.5px]">Operational Timeline &amp; Critical Paths</h2>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {scheduleEntries.map(([time, phase, objective, status, color]) => (
            <div className="rounded-[6px] border border-[#e5e2da] bg-[#f5f2ed] p-4" key={time}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-mono text-[12px] font-semibold text-[#1a1a1a]">{time}</p>
                  <div className="h-[10px] w-px bg-[rgba(166,130,94,0.2)]" />
                  <p className="font-mono text-[10px] tracking-[1px] text-[#4a4a4a]">{phase}</p>
                </div>
                <p className={`font-mono text-[10px] font-semibold ${color}`}>{status}</p>
              </div>
              <p className="mt-3 w-full font-sans text-[13px] leading-[1.5] text-[#1a1a1a]">{objective}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f0f10] px-6 py-16 text-[#f5f2ed]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-[6px] rounded-[3px] bg-[#c8a882]" />
            <p className="font-mono text-[10px] font-medium uppercase text-[#c8a882]">04 // Global Transit</p>
          </div>
          <h2 className="w-full font-serif text-[28px] tracking-[-0.5px]">Transit Nodes &amp; Flight Paths</h2>
        </div>
        <div className="mt-8 rounded-[4px] border-[1.5px] border-[#a6825e] bg-[#f5f2ed] p-5 text-[#1a1a1a]">
          <div className="flex items-start justify-between font-mono text-[11px] font-semibold">
            <p>CARGO // EXP-47</p>
            <p>RM</p>
          </div>
          <div className="mt-4 h-px bg-[#e5e2da]" />
          <div className="mt-4 flex flex-col gap-1 font-serif text-[32px] leading-none">
            <p>MIA → JFK</p>
            <p>→ LHR → DOH</p>
          </div>
          <div className="mt-4 h-px bg-[#e5e2da]" />
          <p className="mt-4 font-mono text-[8px] tracking-[1px] text-[#8a8a8a]">FLIGHT PATH ID</p>
          <p className="mt-1 font-mono text-[10px]">W47 // VENUE-09 // LOG-TRANS</p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <p className="w-full font-mono text-[12px] font-semibold tracking-[1.5px] text-[#c8a882]">MULTI-PORT STRATEGY</p>
          <p className="w-full font-sans text-[14px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Logistics must match the fluid scaling of global events. We operate a multi-port transit strategy utilizing key air and maritime lanes across four main continents.</p>
          <p className="w-full font-sans text-[14px] leading-[1.6] text-[rgba(250,248,245,0.5)]">Continuous diagnostic checks ensure freight is cleared, cataloged, and deployed on site prior to the main technical crew arrival.</p>
        </div>
      </section>

      <section className="bg-[#f5f2ed] px-6 py-20 text-center">
        <div className="mx-auto flex max-w-[342px] flex-col items-center gap-6">
          <div className="h-px w-12 bg-[#a6825e]" />
          <p className="w-full font-serif text-[26px] leading-[1.3] text-[#1a1a1a]">&quot;The document is the physical proof of system integrity. When the blueprint is flawless, execution is merely a matter of time.&quot;</p>
          <p className="w-full font-mono text-[11px] font-semibold uppercase text-[#a6825e]">Ryan Morrow // Field Notes</p>
        </div>
      </section>

      <section className="bg-paper px-6 pb-12 pt-16">
        <div className="flex flex-col gap-5">
          <h2 className="w-full font-serif text-[32px] text-[#1a1a1a]">Let&apos;s discuss what&apos;s next.</h2>
          <div className="flex flex-col gap-3 font-mono text-[13px] font-semibold text-[#1a1a1a]">
            <a className="w-full underline" href="mailto:office@ryanmorrow.com">OFFICE@RYANMORROW.COM</a>
            <a className="w-full underline" href="https://linkedin.com/in/ryanmorrow" rel="noreferrer" target="_blank">LINKEDIN</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-6">
          <div className="h-px w-full bg-[rgba(166,130,94,0.2)]" />
          <div className="flex flex-col gap-4 font-mono">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-[#a6825e]">© 2026 RYAN MORROW EXECUTIVE</p>
              <p className="text-[10px] text-[#1a1a1a] opacity-40">LONDON / NYC / SYDNEY</p>
              <p className="text-[9px] text-[#1a1a1a] opacity-25">Currently: Los Angeles · New York · Advisory</p>
            </div>
            <p className="text-[10px] text-[#a6825e]">Currently accepting select advisory engagements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FieldNotesPage() {
  return (
    <main id="main-content" className="bg-paper pt-20">
      <GlobalNav />
      <div className="hidden lg:block">
        <DesktopFieldNotesPage />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabletFieldNotesPage />
      </div>
      <div className="md:hidden">
        <MobileFieldNotesPage />
      </div>
    </main>
  );
}