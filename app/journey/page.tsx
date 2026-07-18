import { GlobalNav } from '@/components/navigation';

/* eslint-disable @next/next/no-img-element */

const imgHeroDesktop = 'https://www.figma.com/api/mcp/asset/f48a07fc-49f0-4825-b992-60a01a05f437';
const imgHeroTablet = 'https://www.figma.com/api/mcp/asset/a2706324-8ce6-464f-8700-34d87257a29b';
const imgHeroMobile = 'https://www.figma.com/api/mcp/asset/c696fb6a-7776-4da4-8c0d-33d175be0593';

const imgProgramHeroDesktop = 'https://www.figma.com/api/mcp/asset/921e3d78-4f59-44e6-929c-5b090b3d33e5';
const imgProgramHeroTablet = 'https://www.figma.com/api/mcp/asset/a8b6b2e1-564f-46c2-9611-862da68cbe83';
const imgProgramHeroMobile = 'https://www.figma.com/api/mcp/asset/5a66473b-e711-435d-bb9f-c3e8d83595db';

const imgProgramSupportDesktop = 'https://www.figma.com/api/mcp/asset/99da3319-86e3-4dff-bcea-d1058bc0b112';
const imgProgramSupportTablet = 'https://www.figma.com/api/mcp/asset/6e3774ff-fd5d-4c06-a28f-4773b6a5f95c';
const imgProgramSupportMobile = 'https://www.figma.com/api/mcp/asset/dbecde80-77bc-44d4-ad5c-e5c28aff5cdb';

const imgProjectOneDesktop = 'https://www.figma.com/api/mcp/asset/66826e5d-cf1a-4fac-a58c-69c5ddf7e106';
const imgProjectTwoDesktop = 'https://www.figma.com/api/mcp/asset/7e4fa95c-d0fe-4478-ad20-aa05392e66dd';
const imgProjectOneTablet = 'https://www.figma.com/api/mcp/asset/fccbb2e2-e35a-41e0-a5fc-9c5538ebb58a';
const imgProjectTwoTablet = 'https://www.figma.com/api/mcp/asset/b767ee80-b9d6-441c-9f5a-3e3828708e30';
const imgProjectOneMobile = 'https://www.figma.com/api/mcp/asset/44a8d9f8-3086-4dae-94a0-2c3125179a97';
const imgProjectTwoMobile = 'https://www.figma.com/api/mcp/asset/1ca55c4a-fd75-4c2a-9329-96145e782bd7';

const imgTimelineDesktop = 'https://www.figma.com/api/mcp/asset/6729c5b3-6d1d-48c0-8a1d-addadba31581';
const imgTimelineDesktopEnd = 'https://www.figma.com/api/mcp/asset/0fcf660d-b2f7-4940-88f0-83fc9b0bf94b';
const imgTimelineMobile = 'https://www.figma.com/api/mcp/asset/da0ddfe3-9a7a-49cf-b7c8-fb8254834f4e';
const imgLineDesktop = 'https://www.figma.com/api/mcp/asset/6656f6cd-bda8-4986-95c2-4ec169c27b90';
const imgLineTablet = 'https://www.figma.com/api/mcp/asset/c2bffb20-6523-4f08-9ec6-3ef0375d4d7e';

const collaborationsDesktop = [
  'FIFA',
  'Universal Studios',
  'Golden State Warriors',
  'CAA',
  'Special Olympics',
  'iON Creative Studios',
] as const;

const collaborationsTablet = ['FIFA', 'Universal Studios', 'Golden State Warriors', 'CAA', 'Special Olympics', 'iON Creative'] as const;
const collaborationsMobile = ['FIFA', 'Universal Studios', 'Golden State Warriors', 'CAA', 'Special Olympics', 'iON Creative'] as const;

const governanceFlow = ['Leadership', 'Governance', 'Production', 'Visibility', 'Confidence'] as const;

const architectureDesktop = [
  ['BRAND SYSTEMS', 'Coherent identity execution at massive scale.'],
  ['OPERATIONAL SYSTEMS', 'The engine of measurable efficiency.'],
  ['TECHNOLOGY SYSTEMS', 'AI-integrated workflows and data stacks.'],
  ['PRODUCTION SYSTEMS', 'World-class environmental orchestration.'],
  ['LEADERSHIP SYSTEMS', 'High-level governance and visibility models.'],
] as const;

const architectureCompact = [
  ['BRAND SYSTEMS', 'Coherent identity execution at massive scale.'],
  ['OPERATIONAL SYSTEMS', 'The engine of measurable efficiency.'],
  ['TECHNOLOGY SYSTEMS', 'AI-integrated workflows and data stacks.'],
  ['LEADERSHIP SYSTEMS', 'High-level governance and visibility models.'],
] as const;

const desktopJourney = [
  ['2008-10', 'Universal Studios', 'Production Associate'],
  ['2010-12', 'AMP Energy', 'Ops Lead'],
  ['2012-15', 'CAA', 'Creative Ops'],
  ['2015-18', 'Golden State Warriors', 'Dir. Innovation'],
  ['2018-22', 'Special Olympics', 'Chief Production'],
  ['2022-26', 'FIFA', 'Exec Ops & Production'],
] as const;

const compactJourney = [
  ['2010-12', 'Universal Studios', 'Ops Lead'],
  ['2012-15', 'CAA', 'Creative Ops'],
  ['2015-18', 'Golden State Warriors', 'Dir. Innovation'],
  ['2022-26', 'FIFA', 'Exec Ops & Production'],
] as const;

const desktopMetrics = [
  ['32+', 'VENDORS MANAGED'],
  ['16', 'CITIES INTEGRATED'],
  ['1.2K', 'STAFF ORCHESTRATED'],
  ['03', 'NATIONS SYNCED'],
] as const;

const compactMetrics = [
  ['32+', 'VENDORS'],
  ['16', 'CITIES'],
  ['1.2K', 'STAFF'],
] as const;

function DesktopJourneyPage() {
  return (
    <div className="bg-[#f9f7f2] text-charcoal">
      <section className="relative h-[900px] overflow-hidden">
        <div className="absolute inset-0">
          <img alt="" className="size-full object-cover" src={imgHeroDesktop} />
          <div className="absolute inset-0 bg-[rgba(5,5,5,0.65)]" />
        </div>
        <div className="relative flex h-full items-end p-20">
          <div className="flex w-[1061px] flex-col gap-10 text-[#f5f5f5]">
            <h1 className="font-serif text-[110px] leading-[0.95]">
              I build the operational systems that transform ambitious ideas into <span className="text-copper">extraordinary</span> experiences.
            </h1>
            <div className="flex items-end justify-between font-mono text-[12px] uppercase">
              <div className="flex flex-col gap-2 opacity-40">
                <p>{'// STRATEGY'}</p>
                <p>{'// OPERATIONS'}</p>
                <p>{'// INNOVATION'}</p>
              </div>
              <div className="text-right text-[11px] leading-normal opacity-40">
                <p>LONDON / NEW YORK / SYDNEY</p>
                <p>EXECUTIVE BRAND PLATFORM V1.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 px-20 py-[240px]">
        <div className="h-[120px] w-px bg-copper" />
        <p className="w-[1000px] text-center font-serif text-[80px] leading-none">Scale demands systems. Systems demand clarity. Clarity demands leadership.</p>
        <div className="h-[120px] w-px bg-copper" />
      </section>

      <section className="flex flex-col gap-16 px-20 pb-[120px] pt-20">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">Collaborations</p>
        </div>
        <div className="flex items-center justify-between">
          {collaborationsDesktop.map((item, index) => (
            <div className="flex items-center gap-3" key={item}>
              <p className="font-sans text-[18px] font-medium opacity-80">{item}</p>
              {index < collaborationsDesktop.length - 1 ? <div className="size-1 rounded-[2px] bg-copper" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="h-[800px] w-full">
          <img alt="" className="size-full object-cover" src={imgProgramHeroDesktop} />
        </div>
        <div className="flex">
          <div className="h-[720px] w-[813px]">
            <img alt="" className="size-full object-cover" src={imgProgramSupportDesktop} />
          </div>
          <div className="flex flex-1 flex-col justify-center p-20">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 font-mono text-[11px] font-semibold uppercase">
                <p className="text-copper">PROGRAM // FIFA WORLD CUP 2026</p>
                <p className="text-[#888]">ROLE // EXECUTIVE PRODUCTION &amp; OPS</p>
                <p className="text-[#888]">SCALE // 16 CITIES · 3 NATIONS · 32+ VENDORS</p>
              </div>
              <p className="font-serif text-[64px] leading-[1.1]">The Architecture of a Global Phenomenon.</p>
              <p className="font-sans text-[18px] leading-[1.6] opacity-70">Designing the governance and operational engine required to synchronize massive complexity across borders, cultures, and timelines.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-20 p-[120px]">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-copper" />
            <p className="font-mono text-[11px] font-medium uppercase text-copper">The Governance Flow</p>
          </div>
          <div className="flex items-center">
            {governanceFlow.map((item, index) => (
              <div className="flex items-center" key={item}>
                <div className="flex w-[160px] flex-col items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-[24px] border border-copper">
                    <p className="font-mono text-[12px] text-copper">{`0${index + 1}`}</p>
                  </div>
                  <p className="font-mono text-[10px] uppercase">{item}</p>
                </div>
                {index < governanceFlow.length - 1 ? <img alt="" className="h-px w-20" src={imgLineDesktop} /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[240px] gap-8 bg-[#050505] p-20 text-center text-[#f5f5f5]">
          {desktopMetrics.map(([value, label]) => (
            <div className="flex flex-1 flex-col items-center justify-center gap-3" key={label}>
              <p className="font-serif text-[64px]">{value}</p>
              <p className="font-mono text-[10px] uppercase text-copper">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center bg-[#f9f7f2] px-20 py-40">
          <p className="w-[800px] text-center font-serif text-[40px] italic leading-[1.4]">&quot;Complexity is not solved with more effort, but with more rigorous systems. We build the substrate for confidence.&quot;</p>
        </div>
      </section>

      <section className="bg-[#050505] p-[120px] text-[#f5f5f5]">
        <div className="flex w-[843px] flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-copper" />
            <p className="font-mono text-[11px] font-medium uppercase">Interconnected Systems</p>
          </div>
          <p className="font-serif text-[72px]">The Command Architecture</p>
        </div>
        <div className="mt-[120px] flex flex-col gap-8">
          {architectureDesktop.map(([label, description]) => (
            <div className="flex items-center gap-10" key={label}>
              <p className="w-[240px] font-mono text-[14px] text-copper">{label}</p>
              <div className="h-px min-w-px flex-1 bg-[#333]" />
              <p className="w-[500px] font-serif text-[32px]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-20 bg-[#f9f7f2] p-[120px]">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">The Journey</p>
        </div>
        <div>
          {desktopJourney.map(([year, company, role], index) => (
            <div className="flex items-center gap-10" key={`${year}-${company}`}>
              <div className="w-40">
                <p className="font-mono text-[12px] text-copper">{year}</p>
              </div>
              <div className={`${index === desktopJourney.length - 1 ? 'h-3' : 'h-28'} w-10 shrink-0`}>
                <img alt="" className="size-full" src={index === desktopJourney.length - 1 ? imgTimelineDesktopEnd : imgTimelineDesktop} />
              </div>
              <div className="min-w-0 flex-1 pb-10">
                <p className="font-serif text-[32px]">{company}</p>
                <p className="font-sans text-[16px] text-[#888]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-40 bg-[#f9f7f2] p-[120px]">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">Signature Projects</p>
        </div>
        <div className="flex items-center gap-20">
          <div className="h-[600px] w-[733px] overflow-hidden rounded-[2px]">
            <img alt="" className="size-full object-cover" src={imgProjectOneDesktop} />
          </div>
          <div className="flex w-[515px] flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase text-[#888]">2023 // SPORTS &amp; EXPERIENCE // GOLDEN STATE WARRIORS</p>
              <p className="font-serif text-[56px]">Chase Center Ops</p>
            </div>
            <p className="font-sans text-[18px] leading-[1.7] text-[#888]">Redesigning the fan journey through integrated technology and high-pacing operational flows.</p>
            <div className="flex items-center gap-2">
              <p className="font-sans text-[14px] font-semibold uppercase">Read Chapter</p>
              <div className="h-px w-8 bg-copper" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex w-[515px] flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase text-[#888]">2024 // GLOBAL ADVOCACY // SPECIAL OLYMPICS</p>
              <p className="font-serif text-[56px]">Inclusive Scale</p>
            </div>
            <p className="font-sans text-[18px] leading-[1.7] text-[#888]">Building a production engine that translates global mission into consistent local impact across 120 nations.</p>
            <div className="flex items-center gap-2">
              <p className="font-sans text-[14px] font-semibold uppercase">Read Chapter</p>
              <div className="h-px w-8 bg-copper" />
            </div>
          </div>
          <div className="h-[600px] w-[733px] overflow-hidden rounded-[2px]">
            <img alt="" className="size-full object-cover" src={imgProjectTwoDesktop} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-16 bg-charcoal p-40 text-[#f5f5f5]">
        <p className="font-mono text-[12px] uppercase text-copper">{'// THE PHILOSOPHY'}</p>
        <p className="w-[1000px] text-center font-serif text-[80px] italic leading-[1.1]">&quot;Great ideas are fragile. Only rigorous systems provide the environment for them to survive contact with reality.&quot;</p>
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-copper" />
          <p className="font-sans text-[16px] font-semibold uppercase">RYAN MORROW</p>
        </div>
      </section>

      <section className="flex flex-col gap-12 bg-[#f9f7f2] p-40">
        <p className="font-serif text-[80px]">Let&apos;s discuss what&apos;s next.</p>
        <div className="flex flex-col gap-6">
          <p className="w-[600px] font-sans text-[24px] text-[#888]">Available for executive advisory, operational audit, and systemic brand transformation.</p>
          <div className="flex gap-12 font-mono text-[14px] font-semibold text-charcoal">
            <a className="underline" href="mailto:office@ryanmorrow.com">OFFICE@RYANMORROW.COM</a>
            <a className="underline" href="https://linkedin.com/in/ryanmorrow" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-16 bg-[#050505] p-20 text-[#f5f5f5]">
        <div className="h-px w-full bg-[#333]" />
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <p className="font-serif text-[120px] opacity-5">RYAN MORROW</p>
            <div className="flex items-center gap-8 font-mono text-[14px]">
              <p className="text-[#888]">© 2026 RYAN MORROW EXECUTIVE</p>
              <p className="text-[#888]">LONDON / NEW YORK</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 font-mono text-[14px]">
            <p className="text-copper">STATUS: AVAILABILITY H2 2026</p>
            <p className="text-[#888]">MASTER_INDEX_V.01</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TabletJourneyPage() {
  return (
    <div className="bg-[#f9f7f2] text-charcoal">
      <section className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img alt="" className="size-full object-cover" src={imgHeroTablet} />
          <div className="absolute inset-0 bg-[rgba(5,5,5,0.65)]" />
        </div>
        <div className="relative flex h-full items-end px-16 pb-20">
          <div className="flex flex-1 flex-col gap-10 text-[#f5f5f5]">
            <h1 className="font-serif text-[80px] leading-[0.95]">I build the operational systems that transform ambitious ideas into <span className="text-copper">extraordinary</span> experiences.</h1>
            <div className="flex w-full gap-6 font-mono text-[11px]">
              <div className="flex flex-col gap-2 opacity-40 uppercase">
                <p>{'// STRATEGY'}</p>
                <p>{'// OPERATIONS'}</p>
                <p>{'// INNOVATION'}</p>
              </div>
              <div className="min-w-0 flex-1 text-right leading-normal opacity-40">
                <p>LONDON / NEW YORK / SYDNEY</p>
                <p>EXECUTIVE BRAND PLATFORM V1.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 px-16 py-40">
        <div className="h-[120px] w-px bg-copper" />
        <p className="w-full text-center font-serif text-[48px] leading-[1.1]">Scale demands systems. Systems demand clarity. Clarity demands leadership.</p>
        <div className="h-[120px] w-px bg-copper" />
      </section>

      <section className="flex flex-col gap-12 px-16 pb-20 pt-16">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">Collaborations</p>
        </div>
        <div className="grid h-[100px] grid-cols-3 gap-x-8 gap-y-6">
          {collaborationsTablet.map((item) => (
            <div className="flex items-center gap-3" key={item}>
              <p className="font-sans text-[18px] font-medium opacity-80">{item}</p>
              <div className="size-1 rounded-[2px] bg-copper" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="h-[600px] w-full">
          <img alt="" className="size-full object-cover" src={imgProgramHeroTablet} />
        </div>
        <div className="flex">
          <div className="w-[400px] self-stretch">
            <img alt="" className="size-full object-cover" src={imgProgramSupportTablet} />
          </div>
          <div className="flex flex-1 flex-col gap-8 p-16">
            <div className="flex flex-col gap-3 font-mono text-[11px] font-semibold uppercase">
              <p className="text-copper">PROGRAM // FIFA WORLD CUP 2026</p>
              <p className="text-[#888]">ROLE // EXECUTIVE PRODUCTION &amp; OPS</p>
              <p className="text-[#888]">SCALE // 16 CITIES · 3 NATIONS</p>
            </div>
            <p className="font-serif text-[56px] leading-[1.1]">The Architecture of a Global Phenomenon.</p>
            <p className="font-sans text-[18px] leading-[1.6] text-charcoal opacity-70">Designing the governance and operational engine required to synchronize massive complexity across borders and cultures.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16 p-20">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-copper" />
            <p className="font-mono text-[11px] font-medium uppercase text-copper">The Governance Flow</p>
          </div>
          <div className="flex w-full items-center">
            {governanceFlow.map((item, index) => (
              <div className="flex min-w-0 flex-1 items-center" key={item}>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-[20px] border border-copper">
                    <p className="font-mono text-[12px] text-copper">{`0${index + 1}`}</p>
                  </div>
                  <p className="text-center font-mono text-[10px] uppercase">{item}</p>
                </div>
                {index < governanceFlow.length - 1 ? <img alt="" className="h-px w-[100px]" src={imgLineTablet} /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 bg-[#0a0a0a] p-16 text-[#f5f5f5]">
          {compactMetrics.map(([value, label]) => (
            <div className="flex flex-1 flex-col items-center gap-2" key={label}>
              <p className="font-serif text-[48px]">{value}</p>
              <p className="font-mono text-[10px] uppercase text-copper">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a0a0a] p-20 text-[#f5f5f5]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-copper" />
            <p className="font-mono text-[11px] font-medium uppercase text-copper">Interconnected Systems</p>
          </div>
          <p className="font-serif text-[56px]">The Command Architecture</p>
        </div>
        <div className="mt-20 flex flex-col gap-6">
          {architectureCompact.map(([label, description]) => (
            <div className="flex items-center gap-8" key={label}>
              <p className="w-[200px] font-mono text-[12px] text-copper">{label}</p>
              <div className="h-px min-w-px flex-1 bg-[#333]" />
              <p className="w-[340px] font-serif text-[24px]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-16 bg-[#f9f7f2] p-20">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">The Journey</p>
        </div>
        <div>
          {compactJourney.map(([year, company, role], index) => (
            <div className="flex items-start gap-10" key={`${year}-${company}`}>
              <p className="w-[100px] font-mono text-[12px] text-copper">{year}</p>
              <div className="flex w-4 flex-col items-center">
                <div className="size-3 rounded-[6px] bg-copper" />
                {index < compactJourney.length - 1 ? <div className="h-[100px] w-px bg-light-gray" /> : null}
              </div>
              <div className="min-w-0 flex-1 pb-10">
                <p className="font-serif text-[28px]">{company}</p>
                <p className="font-sans text-[14px] text-[#888]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[120px] bg-[#f9f7f2] p-20">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">Signature Projects</p>
        </div>
        <div className="flex items-center gap-12">
          <div className="aspect-[4/3] min-w-0 flex-1 overflow-hidden rounded-[2px]">
            <img alt="" className="size-full object-cover" src={imgProjectOneTablet} />
          </div>
          <div className="flex w-80 flex-col gap-6">
            <p className="font-mono text-[10px] text-[#888]">GOLDEN STATE WARRIORS // EXPERIENCE</p>
            <p className="font-serif text-[40px]">Chase Center Ops</p>
            <p className="font-sans text-[16px] leading-[1.6] text-[#888]">Redesigning the fan journey through integrated technology and high-pacing operational flows.</p>
            <div className="flex items-center gap-2">
              <p className="font-sans text-[14px] font-semibold uppercase">Read Chapter</p>
              <div className="h-px w-8 bg-copper" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex w-80 flex-col gap-6">
            <p className="font-mono text-[10px] text-[#888]">SPECIAL OLYMPICS // GLOBAL IMPACT</p>
            <p className="font-serif text-[40px]">Inclusive Scale</p>
            <p className="font-sans text-[16px] leading-[1.6] text-[#888]">Building a production engine that translates global mission into consistent local impact across 120 nations.</p>
            <div className="flex items-center gap-2">
              <p className="font-sans text-[14px] font-semibold uppercase">Read Chapter</p>
              <div className="h-px w-8 bg-copper" />
            </div>
          </div>
          <div className="aspect-[4/3] min-w-0 flex-1 overflow-hidden rounded-[2px]">
            <img alt="" className="size-full object-cover" src={imgProjectTwoTablet} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-10 bg-[#f9f7f2] px-16 py-[120px]">
          <p className="font-serif text-[64px]">Let&apos;s discuss what&apos;s next.</p>
          <p className="w-[500px] font-sans text-[20px] text-[#888]">Available for executive advisory, operational audit, and systemic brand transformation.</p>
          <div className="flex gap-8 font-mono text-[14px] font-semibold text-charcoal">
            <a className="underline" href="mailto:office@ryanmorrow.com">OFFICE@RYANMORROW.COM</a>
            <a className="underline" href="https://linkedin.com/in/ryanmorrow" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
        </div>
        <footer className="flex flex-col gap-12 bg-[#0a0a0a] px-16 pb-10 pt-20 text-[#f5f5f5]">
          <div className="h-px w-full bg-[#333]" />
          <div className="flex flex-col gap-6">
            <p className="font-serif text-[80px] opacity-5">RYAN MORROW</p>
            <div className="flex items-end justify-between font-mono text-[10px]">
              <div className="flex flex-col gap-3">
                <p className="text-[#888]">© 2026 RYAN MORROW EXECUTIVE</p>
                <p className="text-copper">STATUS: AVAILABILITY H2 2026</p>
              </div>
              <p className="text-[#888]">LONDON / NYC / MASTER_INDEX_V.01</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

function MobileJourneyPage() {
  return (
    <div className="bg-[#f9f7f2] text-charcoal">
      <section className="relative h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <img alt="" className="size-full object-cover" src={imgHeroMobile} />
          <div className="absolute inset-0 bg-[rgba(5,5,5,0.65)]" />
        </div>
        <div className="relative flex h-full items-end px-6 pb-16 pt-20">
          <div className="flex flex-1 flex-col gap-8 text-[#f5f5f5]">
            <h1 className="font-serif text-[44px] leading-[0.95]">I build the operational systems that transform ambitious ideas into <span className="text-copper">extraordinary</span> experiences.</h1>
            <div className="flex flex-col gap-2 font-mono text-[11px] uppercase opacity-40">
              <p>{'// STRATEGY'}</p>
              <p>{'// OPERATIONS'}</p>
              <p>{'// INNOVATION'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 px-6 py-20">
        <div className="h-16 w-px bg-copper" />
        <p className="w-full text-center font-serif text-[32px] leading-[1.1]">Scale demands systems. Systems demand clarity. Clarity demands leadership.</p>
        <div className="h-16 w-px bg-copper" />
      </section>

      <section className="flex flex-col gap-12 px-6 pb-20 pt-16">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">Collaborations</p>
        </div>
        <div className="flex flex-col gap-6">
          {collaborationsMobile.map((item) => (
            <div className="flex items-center gap-3" key={item}>
              <p className="font-sans text-[18px] font-medium opacity-80">{item}</p>
              <div className="h-px min-w-px flex-1 bg-light-gray" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="h-[360px] w-full">
          <img alt="" className="size-full object-cover" src={imgProgramHeroMobile} />
        </div>
        <div>
          <div className="h-[360px] w-full">
            <img alt="" className="size-full object-cover" src={imgProgramSupportMobile} />
          </div>
          <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-3 font-mono text-[11px] font-semibold uppercase">
              <p className="text-copper">PROGRAM // FIFA WORLD CUP 2026</p>
              <p className="text-[#888]">ROLE // EXECUTIVE PRODUCTION &amp; OPS</p>
              <p className="text-[#888]">SCALE // 16 CITIES · 3 NATIONS</p>
            </div>
            <p className="font-serif text-[40px] leading-[1.1]">The Architecture of a Global Phenomenon.</p>
            <p className="font-sans text-[18px] leading-[1.6] text-charcoal opacity-70">Designing the governance and operational engine required to synchronize massive complexity across borders and cultures.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16 p-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-copper" />
            <p className="font-mono text-[11px] font-medium uppercase text-copper">The Governance Flow</p>
          </div>
          <div className="flex w-full flex-col gap-8">
            {governanceFlow.map((item, index) => (
              <div className="flex flex-col items-start" key={item}>
                <div className="flex w-[120px] flex-col items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-[20px] border border-copper">
                    <p className="font-mono text-[12px] text-copper">{`0${index + 1}`}</p>
                  </div>
                  <p className="font-mono text-[10px] uppercase">{item}</p>
                </div>
                {index < governanceFlow.length - 1 ? <img alt="" className="ml-[59px] h-16 w-px" src={imgTimelineMobile} /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 bg-[#0a0a0a] p-10 text-[#f5f5f5]">
          {compactMetrics.map(([value, label]) => (
            <div className="flex flex-col items-center gap-2" key={label}>
              <p className="font-serif text-[48px]">{value}</p>
              <p className="font-mono text-[10px] uppercase text-copper">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a0a0a] p-12 text-[#f5f5f5]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-copper" />
            <p className="font-mono text-[11px] font-medium uppercase text-copper">Interconnected Systems</p>
          </div>
          <p className="font-serif text-[40px]">The Command Architecture</p>
        </div>
        <div className="mt-16 flex flex-col gap-6">
          {architectureCompact.map(([label, description]) => (
            <div className="flex flex-col gap-3" key={label}>
              <p className="font-mono text-[12px] text-copper">{label}</p>
              <p className="font-serif text-[24px]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-16 bg-[#f9f7f2] p-12">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">The Journey</p>
        </div>
        <div>
          {compactJourney.map(([year, company, role], index) => (
            <div className="flex items-start gap-6" key={`${year}-${company}`}>
              <p className="w-20 font-mono text-[12px] text-copper">{year}</p>
              <div className="flex w-4 flex-col items-center">
                <div className="size-3 rounded-[6px] bg-copper" />
                {index < compactJourney.length - 1 ? <div className="h-[100px] w-px bg-light-gray" /> : null}
              </div>
              <div className="min-w-0 flex-1 pb-10">
                <p className="font-serif text-[28px] leading-[1.2]">{company}</p>
                <p className="font-sans text-[14px] text-[#888]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-20 bg-[#f9f7f2] p-12">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-copper" />
          <p className="font-mono text-[11px] font-medium uppercase text-copper">Signature Projects</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="overflow-hidden rounded-[2px]">
            <img alt="" className="aspect-[4/3] w-full object-cover" src={imgProjectOneMobile} />
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-mono text-[10px] text-[#888]">GOLDEN STATE WARRIORS // EXPERIENCE</p>
            <p className="font-serif text-[40px]">Chase Center Ops</p>
            <p className="font-sans text-[16px] leading-[1.6] text-[#888]">Redesigning the fan journey through integrated technology and high-pacing operational flows.</p>
            <div className="flex items-center gap-2">
              <p className="font-sans text-[14px] font-semibold uppercase">Read Chapter</p>
              <div className="h-px w-8 bg-copper" />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <p className="font-mono text-[10px] text-[#888]">SPECIAL OLYMPICS // GLOBAL IMPACT</p>
              <p className="font-serif text-[40px]">Inclusive Scale</p>
              <p className="font-sans text-[16px] leading-[1.6] text-[#888]">Building a production engine that translates global mission into consistent local impact across 120 nations.</p>
              <div className="flex items-center gap-2">
                <p className="font-sans text-[14px] font-semibold uppercase">Read Chapter</p>
                <div className="h-px w-8 bg-copper" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[2px]">
              <img alt="" className="aspect-[4/3] w-full object-cover" src={imgProjectTwoMobile} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-10 bg-[#f9f7f2] px-6 py-20">
          <p className="font-serif text-[48px]">Let&apos;s discuss what&apos;s next.</p>
          <p className="font-sans text-[20px] text-[#888]">Available for executive advisory, operational audit, and systemic brand transformation.</p>
          <div className="flex flex-col gap-8 font-mono text-[14px] font-semibold text-charcoal">
            <a className="underline" href="mailto:office@ryanmorrow.com">OFFICE@RYANMORROW.COM</a>
            <a className="underline" href="https://linkedin.com/in/ryanmorrow" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
        </div>
        <footer className="flex flex-col gap-12 bg-[#0a0a0a] px-6 pb-10 pt-20 text-[#f5f5f5]">
          <div className="h-px w-full bg-[#333]" />
          <div className="flex flex-col gap-6">
            <p className="font-serif text-[48px] opacity-5">RYAN MORROW</p>
            <div className="flex flex-col gap-4 font-mono text-[10px]">
              <div className="flex flex-col gap-3">
                <p className="text-[#888]">© 2026 RYAN MORROW EXECUTIVE</p>
                <p className="text-copper">STATUS: AVAILABILITY H2 2026</p>
              </div>
              <p className="text-[#888]">LONDON / NYC / MASTER_INDEX_V.01</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default function JourneyPage() {
  return (
    <main id="main-content">
      <GlobalNav />
      <div className="hidden lg:block">
        <DesktopJourneyPage />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabletJourneyPage />
      </div>
      <div className="md:hidden">
        <MobileJourneyPage />
      </div>
    </main>
  );
}