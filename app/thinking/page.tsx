/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { GlobalNav } from '@/components/navigation';

const imgDesktopArchitecturalStill = 'https://www.figma.com/api/mcp/asset/383f7134-9deb-4d47-b4f0-df316692993c';
const imgTabletArchitecturalStill = 'https://www.figma.com/api/mcp/asset/cf745adc-1e50-480c-9397-6cd3dfa67a41';
const imgMobileArchitecturalStill = 'https://www.figma.com/api/mcp/asset/a88d8f49-5d3a-47b8-90ee-10bd930ee043';

const axioms = [
  {
    number: '01',
    title: 'Visibility is a prerequisite for Trust.',
    description:
      'An executive cannot lead what they cannot see. Real-time data is the only cure for institutional anxiety.',
  },
  {
    number: '02',
    title: 'Standardization is not Stagnation.',
    description:
      'Standardized protocols provide the freedom to focus on the unique challenges of the moment.',
  },
  {
    number: '03',
    title: 'Elegance is found in the Edge Cases.',
    description:
      'A system is defined not by how it handles the routine, but by how it manages the unexpected.',
  },
  {
    number: '04',
    title: 'Math precedes Emotion.',
    description:
      'Operational decisions must be built on a foundation of measurable variables, not subjective gut-feel.',
  },
  {
    number: '05',
    title: 'Silence is the highest Metric.',
    description:
      'A perfectly running system is quiet. The lack of noise is the ultimate measure of operational success.',
  },
] as const;

function DesktopThinkingPage() {
  return (
    <div className="bg-[#f9f7f2] text-[#1a1a1a]">
      <section className="px-20 py-[160px]">
        <p className="font-mono text-[10px] font-medium uppercase text-[#a6825e]">06 // OPERATIONAL PHILOSOPHY</p>
        <div className="mt-8 w-[900px] font-serif text-[96px] leading-[0.95] tracking-[-3px]">
          <p>The Architecture</p>
          <p>of Thought.</p>
        </div>
        <div className="w-[720px] pt-4">
          <p className="font-sans text-[18px] leading-[1.6] text-[#4a4a4a]">
            Operational excellence is often mistaken for the absence of friction. In reality, it is the mastery of it. To build a system that manages a global sporting event is to build a living organism that must breathe under immense atmospheric pressure.
          </p>
        </div>
      </section>

      <div className="h-px w-full bg-[#e5e2da]" />

      <section className="px-20 pb-[160px] pt-[120px]">
        <p className="pb-20 font-mono text-[10px] font-medium uppercase text-[#a6825e]">{'// THE AXIOMS'}</p>
        <div className="flex flex-col gap-[120px]">
          <article className="flex flex-col gap-6">
            <div className="flex items-baseline justify-between">
              <h2 className="w-[720px] font-serif text-[48px] leading-[1.1]">Five Truths of Scale.</h2>
              <div className="flex items-center gap-4 whitespace-nowrap text-[12px] leading-normal">
                <p className="font-mono text-[#8c8c8c]">01</p>
                <p className="font-mono text-[#a6825e]">{'//'}</p>
                <p className="font-mono font-semibold uppercase text-[#a6825e]">Visibility is a prerequisite for Trust.</p>
              </div>
            </div>
            <p className="w-[800px] font-serif text-[22px] italic leading-[1.4] text-[#4a4a4a]">
              An executive cannot lead what they cannot see. Real-time data is the only cure for institutional anxiety.
            </p>
            <div className="h-px w-full bg-[#a6825e] opacity-60" />
          </article>

          <article className="flex flex-col gap-6">
            <div className="flex items-baseline justify-between">
              <h2 className="w-[720px] font-serif text-[48px] leading-[1.1]">02</h2>
              <div className="flex items-center gap-4 whitespace-nowrap text-[12px] leading-normal">
                <p className="font-mono text-[#8c8c8c]">Standardization is not Stagnation.</p>
                <p className="font-mono text-[#a6825e]">{'//'}</p>
                <p className="font-mono font-semibold uppercase text-[#a6825e]">03</p>
              </div>
            </div>
            <p className="w-[800px] font-serif text-[22px] italic leading-[1.4] text-[#4a4a4a]">Elegance is found in the Edge Cases.</p>
            <div className="h-px w-full bg-[#a6825e] opacity-60" />
          </article>

          <article className="flex flex-col gap-6">
            <div className="flex items-baseline justify-between">
              <h2 className="w-[720px] font-serif text-[48px] leading-[1.1]">
                Standardized protocols provide the freedom to focus on the unique challenges of the moment.
              </h2>
              <div className="flex items-center gap-4 whitespace-nowrap text-[12px] leading-normal">
                <p className="font-mono text-[#8c8c8c]">04</p>
                <p className="font-mono text-[#a6825e]">{'//'}</p>
                <p className="font-mono font-semibold uppercase text-[#a6825e]">Math precedes Emotion.</p>
              </div>
            </div>
            <p className="w-[800px] font-serif text-[22px] italic leading-[1.4] text-[#4a4a4a]">
              Operational decisions must be built on a foundation of measurable variables, not subjective gut-feel.
            </p>
            <div className="h-px w-full bg-[#a6825e] opacity-60" />
          </article>
        </div>
      </section>

      <div className="h-px w-full bg-[#e5e2da]" />

      <section className="px-20 py-[160px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 whitespace-nowrap text-[10px] leading-normal">
            <p className="font-mono font-medium uppercase text-[#a6825e]">&quot;Complexity is not solved with more effort, but with more rigorous systems. We build the substrate for confidence.&quot;</p>
            <p className="font-mono text-[12px] text-[#8c8c8c]">•</p>
            <p className="font-mono text-[12px] text-[#4a4a4a]">— Ryan Morrow</p>
          </div>
          <h2 className="w-full font-serif text-[80px] leading-none">REF. FIG_06.4 // SPATIAL OPERATIONAL FLOW</h2>
          <p className="w-[960px] font-serif text-[28px] italic leading-[1.3] text-[#4a4a4a]">
            Complexity is not an enemy to be defeated; it is a geometry to be mapped. When I look at the governance of a production schedule involving 32 core partners and 16 host cities, I don&apos;t see a list of tasks. I see a network of dependencies — a series of decision nodes that require absolute clarity.
          </p>
          <div className="pt-4">
            <p className="font-mono text-[11px] text-[#4a4a4a]">05</p>
          </div>
          <div className="h-px w-full bg-[#a6825e] opacity-60" />
        </div>

        <div className="mt-20 flex gap-20">
          <div className="flex w-[760px] flex-col gap-8 font-sans text-[18px] leading-[1.8] text-[#1a1a1a]">
            <p>Silence is the highest Metric.</p>
            <p>A perfectly running system is quiet. The lack of noise is the ultimate measure of operational success.</p>
            <p>We must shift our perspective from &apos;project management&apos; to &apos;operational substrate design.&apos; The substrate is the invisible layer that makes confidence possible.</p>
            <p>It is the credential lane that never bottlenecks, the vendor who knows their route before they arrive, and the executive who sees the truth of the situation in a single dashboard view.</p>
          </div>

          <div className="flex w-[440px] flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] font-medium uppercase text-[#a6825e]">NEXT CHAPTER</p>
              <p className="font-mono text-[12px] leading-[1.6] text-[#4a4a4a]">The Journey</p>
            </div>

            <Link className="border-l border-[#a6825e] pl-6" href="/journey">
              <p className="font-serif text-[24px] italic leading-[1.4] text-[#a6825e]">
                A career trajectory from theme park operations to global operational architecture.
              </p>
              <p className="mt-4 font-mono text-[10px] text-[#8c8c8c]">→</p>
            </Link>

            <div className="flex flex-col gap-3">
              <div className="h-[240px] w-full overflow-hidden">
                <img alt="Architectural still" className="size-full object-cover" src={imgDesktopArchitecturalStill} />
              </div>
              <p className="w-full font-mono text-[10px] text-[#8c8c8c]">© 2026 RYAN MORROW EXECUTIVE</p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 bg-[#f2efe7] px-10 py-16">
          <div className="h-px w-10 bg-[#a6825e]" />
          <p className="font-serif text-[48px] italic leading-[1.2] text-[#1a1a1a]">THINKING // MANIFESTO VOL. 1</p>
          <p className="font-mono text-[11px] uppercase text-[#a6825e]">FIELD NOTES ON GOVERNANCE</p>
        </div>
      </section>

      <section className="bg-[#0a0a0b] p-20 text-[#f5f5f5]">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[12px] uppercase text-[#a6825e]">VERSION 4.2 · DEC 2026 · LONDON HQ</p>
          <div className="h-px w-[800px] bg-[#a6825e] opacity-30" />
        </div>
        <p className="mt-8 w-full font-serif text-[64px] leading-normal">
          A system is defined not by how it handles the routine, but by how it manages the unexpected.
        </p>
      </section>
    </div>
  );
}

function TabletThinkingPage() {
  return (
    <div className="bg-[#faf8f5] text-[#0f0f10]">
      <section className="px-12 pb-[120px] pt-[200px]">
        <p className="font-mono text-[11px] font-medium uppercase text-[#a6825e]">06 // OPERATIONAL PHILOSOPHY</p>
        <div className="mt-10 w-full font-serif text-[80px] leading-[0.9] tracking-[-2px]">
          <p>The Architecture</p>
          <p>of Thought.</p>
        </div>
        <div className="mt-10 flex flex-col gap-2 font-mono">
          <p className="text-[12px] text-[#a6825e]">FIELD NOTES ON GOVERNANCE</p>
          <p className="text-[10px] text-[#6b6b6b] opacity-50">VERSION 4.2 · DEC 2026 · LONDON HQ</p>
        </div>
      </section>

      <section className="px-12 pb-[160px]">
        <div className="mx-auto flex w-[560px] flex-col gap-8">
          <p className="font-sans text-[20px] leading-[1.6] text-[#1a1a1a]">
            Operational excellence is often mistaken for the absence of friction. In reality, it is the mastery of it. To build a system that manages a global sporting event is to build a living organism that must breathe under immense atmospheric pressure.
          </p>
          <p className="font-sans text-[17px] leading-[1.7] text-[#6b6b6b]">
            Complexity is not an enemy to be defeated; it is a geometry to be mapped. When I look at the governance of a production schedule involving 32 core partners and 16 host cities, I don&apos;t see a list of tasks. I see a network of dependencies-a series of decision nodes that require absolute clarity.
          </p>
          <p className="font-sans text-[17px] leading-[1.7] text-[#6b6b6b]">
            We must shift our perspective from &apos;project management&apos; to &apos;operational substrate design.&apos; The substrate is the invisible layer that makes confidence possible. It is the credential lane that never bottlenecks, the vendor who knows their route before they arrive, and the executive who sees the truth of the situation in a single dashboard view.
          </p>
        </div>
      </section>

      <section className="bg-[#0f0f10] px-12 py-[120px] text-center text-[#f5f2ed]">
        <div className="mx-auto flex w-[640px] flex-col items-center gap-10">
          <div className="h-px w-10 bg-[#a6825e]" />
          <p className="w-full font-serif text-[48px] leading-[1.1]">
            &quot;Complexity is not solved with more effort, but with more rigorous systems. We build the substrate for confidence.&quot;
          </p>
          <p className="font-mono text-[12px] uppercase text-[#a6825e]">— Ryan Morrow</p>
        </div>
      </section>

      <section className="relative h-[600px] overflow-hidden bg-[#0f0f10]">
        <img alt="Architectural still" className="size-full object-cover opacity-80" src={imgTabletArchitecturalStill} />
        <p className="absolute bottom-[42px] left-12 translate-y-full font-mono text-[8px] text-[#f5f2ed] opacity-30">REF. FIG_06.4 // SPATIAL OPERATIONAL FLOW</p>
      </section>

      <section className="px-12 py-[160px]">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-[11px] font-medium uppercase text-[#a6825e]">{'// THE AXIOMS'}</p>
          <h2 className="font-serif text-[44px] leading-none">Five Truths of Scale.</h2>
        </div>
        <div className="mt-20 flex flex-col gap-12">
          {axioms.map((axiom) => (
            <div className="flex gap-8" key={axiom.number}>
              <p className="font-mono text-[14px] text-[#a6825e]">{axiom.number}</p>
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <p className="font-serif text-[28px] text-[#1a1a1a]">{axiom.title}</p>
                <p className="w-[500px] font-sans text-[16px] leading-[1.6] text-[#6b6b6b]">{axiom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f0f10] px-12 pb-16 pt-[120px] text-[#f5f2ed]">
        <Link className="flex flex-col gap-6" href="/journey">
          <p className="font-mono text-[11px] font-medium uppercase text-[#f5f2ed] opacity-40">NEXT CHAPTER</p>
          <div className="flex items-center gap-6">
            <p className="font-serif text-[64px] leading-none">The Journey</p>
            <p className="font-serif text-[48px] text-[#a6825e] opacity-60">→</p>
          </div>
          <p className="w-[400px] font-sans text-[16px] text-[#f5f2ed] opacity-40">
            A career trajectory from theme park operations to global operational architecture.
          </p>
        </Link>

        <div className="mt-[120px] flex flex-col gap-6">
          <div className="h-px w-full bg-[#a6825e] opacity-20" />
          <div className="flex items-end justify-between font-mono text-[10px]">
            <div className="flex flex-col gap-2">
              <p className="text-[#a6825e]">© 2026 RYAN MORROW EXECUTIVE</p>
              <p className="text-[#f5f2ed] opacity-30">THINKING // MANIFESTO VOL. 1</p>
            </div>
            <div className="flex items-start gap-6 text-[#f5f2ed]">
              <a className="underline opacity-40" href="https://linkedin.com/in/ryanmorrow" rel="noreferrer" target="_blank">LINKEDIN</a>
              <Link className="underline opacity-40" href="/thinking">INDEX</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileThinkingPage() {
  return (
    <div className="bg-[#faf8f5] text-[#0f0f10]">
      <section className="px-6 pb-20 pt-[160px]">
        <p className="font-mono text-[11px] font-medium uppercase text-[#a6825e]">06 // OPERATIONAL PHILOSOPHY</p>
        <div className="mt-8 w-full font-serif text-[44px] leading-[0.95] tracking-[-1px]">
          <p>The Architecture</p>
          <p>of Thought.</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 font-mono">
          <p className="text-[10px] text-[#a6825e]">FIELD NOTES ON GOVERNANCE</p>
          <p className="text-[8px] text-[#6b6b6b] opacity-60">VERSION 4.2 · DEC 2026 · LONDON HQ</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="flex flex-col gap-8 font-sans">
          <p className="text-[18px] leading-[1.65] text-[#1a1a1a]">
            Operational excellence is often mistaken for the absence of friction. In reality, it is the mastery of it. To build a system that manages a global sporting event is to build a living organism that must breathe under immense atmospheric pressure.
          </p>
          <p className="text-[16px] leading-[1.7] text-[#6b6b6b]">
            Complexity is not an enemy to be defeated; it is a geometry to be mapped. When I look at the governance of a production schedule involving 32 core partners and 16 host cities, I don&apos;t see a list of tasks. I see a network of dependencies-a series of decision nodes that require absolute clarity.
          </p>
          <p className="text-[16px] leading-[1.7] text-[#6b6b6b]">
            We must shift our perspective from &apos;project management&apos; to &apos;operational substrate design.&apos; The substrate is the invisible layer that makes confidence possible. It is the decision node that require absolute clarity.
          </p>
        </div>
      </section>

      <section className="bg-[#0f0f10] px-6 py-[100px] text-center text-[#f5f2ed]">
        <div className="flex flex-col items-center gap-8">
          <div className="h-px w-10 bg-[#a6825e]" />
          <p className="w-full font-serif text-[24px] italic leading-[1.2]">
            &quot;Complexity is not solved with more effort, but with more rigorous systems. We build the substrate for confidence.&quot;
          </p>
          <p className="font-mono text-[11px] font-medium uppercase text-[#a6825e]">— RYAN MORROW</p>
        </div>
      </section>

      <section className="relative h-[480px] overflow-hidden bg-[#0f0f10]">
        <img alt="Architectural still" className="size-full object-cover opacity-80" src={imgMobileArchitecturalStill} />
        <p className="absolute bottom-[34px] left-6 translate-y-full font-mono text-[8px] text-[#f5f2ed] opacity-30">REF. FIG_06.4 // SPATIAL OPERATIONAL FLOW</p>
      </section>

      <section className="px-6 py-[100px]">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[11px] font-medium uppercase text-[#a6825e]">{'// THE AXIOMS'}</p>
          <h2 className="font-serif text-[28px] leading-[1.1]">Five Truths of Scale.</h2>
        </div>
        <div className="mt-16 flex flex-col gap-12">
          {axioms.map((axiom) => (
            <div className="flex gap-4" key={axiom.number}>
              <p className="w-6 font-mono text-[10px] text-[#a6825e]">{axiom.number}</p>
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <p className="w-full font-serif text-[22px] leading-[1.2] text-[#1a1a1a]">{axiom.title}</p>
                <p className="w-full font-sans text-[14px] leading-[1.7] text-[#6b6b6b]">{axiom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f0f10] px-6 pb-12 pt-[100px] text-[#f5f2ed]">
        <Link className="flex flex-col gap-6" href="/journey">
          <p className="font-mono text-[11px] font-medium uppercase text-[#f5f2ed] opacity-40">NEXT CHAPTER</p>
          <div className="flex items-center gap-4 leading-[0.95]">
            <p className="font-serif text-[56px]">The Journey</p>
            <p className="font-serif text-[40px] text-[#a6825e] opacity-60">→</p>
          </div>
          <p className="w-full font-sans text-[16px] leading-[1.7] text-[#f5f2ed] opacity-40">
            A career trajectory from theme park operations to global operational architecture.
          </p>
        </Link>

        <div className="mt-[100px] flex flex-col gap-8">
          <div className="h-px w-full bg-[#a6825e] opacity-20" />
          <div className="flex flex-col gap-6 font-mono">
            <div className="flex items-center justify-between text-[10px]">
              <p className="text-[#a6825e]">© 2026 RYAN MORROW</p>
              <div className="flex items-start gap-6 text-[#f5f2ed]">
                <a className="underline opacity-40" href="https://linkedin.com/in/ryanmorrow" rel="noreferrer" target="_blank">LINKEDIN</a>
                <Link className="underline opacity-40" href="/thinking">INDEX</Link>
              </div>
            </div>
            <p className="text-[8px] text-[#f5f2ed] opacity-20">THINKING // MANIFESTO VOL. 1</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ThinkingPage() {
  return (
    <main id="main-content" className="bg-[#faf8f5] pt-20">
      <GlobalNav />
      <div className="hidden lg:block">
        <DesktopThinkingPage />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabletThinkingPage />
      </div>
      <div className="md:hidden">
        <MobileThinkingPage />
      </div>
    </main>
  );
}