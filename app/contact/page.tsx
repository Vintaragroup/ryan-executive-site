import Link from 'next/link';
import { GlobalNav } from '@/components/navigation';

function DesktopContactPage() {
  return (
    <div className="flex flex-col bg-[#f9f7f2] text-[#1a1a1a]">
      <section className="flex flex-col gap-12 bg-[#f9f7f2] p-40 leading-normal">
        <h1 className="font-serif text-[80px] not-italic">Let&apos;s discuss what&apos;s next.</h1>
        <div className="flex flex-col gap-6">
          <p className="w-[600px] font-sans text-[24px] text-[#888888]">
            Available for executive advisory, operational audit, and systemic brand transformation.
          </p>
          <div className="flex items-start gap-12 font-mono text-[14px] font-semibold text-[#1a1a1a]">
            <a className="underline" href="mailto:office@ryanmorrow.com">
              OFFICE@RYANMORROW.COM
            </a>
            <a
              className="underline"
              href="https://linkedin.com/in/ryanmorrow"
              rel="noreferrer"
              target="_blank"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 bg-[#0a0a0a] px-20 pb-20 pt-20 text-[#f5f5f5]">
        <div className="h-px w-full bg-[#333333]" />
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <p className="whitespace-nowrap font-serif text-[156px] leading-none text-[#f5f5f5] opacity-5">
              RYAN MORROW
            </p>
            <div className="flex items-center gap-8 font-mono text-[14px] text-[#888888]">
              <p>© 2026 RYAN MORROW EXECUTIVE</p>
              <div className="size-1 rounded-full bg-[#888888]" />
              <p>LONDON / NEW YORK</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-24 font-mono text-[14px]">
            <p className="text-[#a6825e]">STATUS: AVAILABILITY H2 2026</p>
            <p className="text-[#888888]">MASTER_INDEX_V.01</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function TabletContactPage() {
  return (
    <div className="flex flex-col bg-[#f9f7f2] text-[#1a1a1a]">
      <section className="flex flex-col gap-10 bg-[#f9f7f2] px-16 py-[120px] leading-normal">
        <h1 className="font-serif text-[64px] not-italic">Let&apos;s discuss what&apos;s next.</h1>
        <p className="w-[500px] font-sans text-[20px] text-[#888888]">
          Available for executive advisory, operational audit, and systemic brand transformation.
        </p>
        <div className="flex items-start gap-8 font-mono text-[14px] font-semibold text-[#1a1a1a]">
          <a className="underline" href="mailto:office@ryanmorrow.com">
            OFFICE@RYANMORROW.COM
          </a>
          <a
            className="underline"
            href="https://linkedin.com/in/ryanmorrow"
            rel="noreferrer"
            target="_blank"
          >
            LINKEDIN
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-12 bg-[#0a0a0a] px-16 pb-10 pt-20 text-[#f5f5f5]">
        <div className="h-px w-full bg-[#333333]" />
        <div className="flex flex-col gap-6">
          <p className="font-serif text-[80px] leading-none text-[#f5f5f5] opacity-5">RYAN MORROW</p>
          <div className="flex items-end justify-between font-mono text-[10px]">
            <div className="flex flex-col gap-3">
              <p className="text-[#888888]">© 2026 RYAN MORROW EXECUTIVE</p>
              <p className="text-[#a6825e]">STATUS: AVAILABILITY H2 2026</p>
            </div>
            <p className="text-[#888888]">LONDON / NYC / MASTER_INDEX_V.01</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileContactPage() {
  return (
    <div className="flex flex-col bg-[#f9f7f2] text-[#1a1a1a]">
      <section className="flex flex-col gap-10 bg-[#f9f7f2] px-6 py-20 leading-normal">
        <h1 className="w-full font-serif text-[48px] not-italic">Let&apos;s discuss what&apos;s next.</h1>
        <p className="w-full font-sans text-[20px] text-[#888888]">
          Available for executive advisory, operational audit, and systemic brand transformation.
        </p>
        <div className="flex flex-col items-start gap-8 font-mono text-[14px] font-semibold text-[#1a1a1a]">
          <a className="underline" href="mailto:office@ryanmorrow.com">
            OFFICE@RYANMORROW.COM
          </a>
          <a
            className="underline"
            href="https://linkedin.com/in/ryanmorrow"
            rel="noreferrer"
            target="_blank"
          >
            LINKEDIN
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-12 bg-[#0a0a0a] px-6 pb-10 pt-20 text-[#f5f5f5]">
        <div className="h-px w-full bg-[#333333]" />
        <div className="flex flex-col gap-6">
          <p className="font-serif text-[48px] leading-none text-[#f5f5f5] opacity-5">RYAN MORROW</p>
          <div className="flex flex-col gap-3 font-mono text-[10px]">
            <div className="flex flex-col gap-3">
              <p className="text-[#888888]">© 2026 RYAN MORROW EXECUTIVE</p>
              <p className="text-[#a6825e]">STATUS: AVAILABILITY H2 2026</p>
            </div>
            <p className="text-[#888888]">LONDON / NYC / MASTER_INDEX_V.01</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-[#f9f7f2] pt-20">
      <GlobalNav />
      <div className="hidden lg:block">
        <DesktopContactPage />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabletContactPage />
      </div>
      <div className="md:hidden">
        <MobileContactPage />
      </div>
      <Link className="sr-only" href="/">
        Home
      </Link>
    </main>
  );
}