import type { Metadata } from "next";
import Link from "next/link";
import HeroGrid from "@/components/HeroGrid";
import SectionTag from "@/components/SectionTag";
import SteelRod from "@/components/SteelRod";
import { ADDRESS, BRANDS, GST, MSME, TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Bababaisnath Steels",
  description: "Company story, milestones, capabilities, coverage and compliance details."
};

export default function Page() {
  return (
    <>
      <HeroGrid className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="h-display text-[clamp(4rem,12vw,10rem)]">ABOUT<br />SRI BABA VAIDYANATH</h1>
          <p className="mt-5 max-w-3xl text-white/65">{TAGLINE}. We support contractors, fabricators, and infrastructure teams with dependable stock, transparent commercial terms, and scheduled dispatch.</p>
        </div>
      </HeroGrid>

      <main className="mx-auto max-w-7xl px-4 py-14">
        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionTag>Company Story</SectionTag>
            <p className="mt-4 text-white/70">Bababaisnath Steels started in 2004 as a local steel trading business in Kanpur and evolved into a disciplined supply partner for builders, contractors and infrastructure companies across Uttar Pradesh.</p>
            <p className="mt-4 text-white/55">Our operating focus is simple: maintain ready stock for core grades, keep billing and documentation clean, and deliver material as per site requirement.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[["20+", "Years"], ["500+", "B2B Clients"], ["12", "District Reach"], ["50K+", "MT Delivered"]].map((x) => (
                <div key={x[1]} className="glass-card p-4 text-center">
                  <p className="h-display text-4xl">{x[0]}</p>
                  <p className="font-[var(--font-barlow-condensed)] text-[10px] uppercase tracking-[0.25em] text-white/45">{x[1]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-4">
            <SteelRod direction="right" />
          </div>
        </section>

        <section className="mt-16">
          <SectionTag>Timeline</SectionTag>
          <div className="mt-6 border-l border-white/20 pl-6">
            {[
              "2004: Founded in Kanpur",
              "2008: MSME Registration",
              "2012: Expanded to 3 Districts",
              "2016: 10,000 MT cumulative dispatch",
              "2020: Digital enquiry and quote flow",
              "2024: 20 years and 500+ repeat clients"
            ].map((x) => (
              <p key={x} className="mb-4 font-[var(--font-barlow-condensed)] uppercase tracking-[0.2em] text-white/60">{x}</p>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            ["What We Supply", "TMT bars, pipes, sheets, plates, channels and allied structural products for civil and industrial projects."],
            ["How We Work", "Brand confirmation, clear quote, order lock, loading schedule, and dispatch updates till delivery."],
            ["Who We Serve", "Builders, contractors, fabricators, plant teams, and dealers with monthly or project-based requirements."]
          ].map((x) => (
            <div key={x[0]} className="glass-card scan-lines relative p-6">
              <div className="absolute left-4 top-4 h-4 w-4 border-l border-t border-white/30" />
              <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/30" />
              <p className="h-display text-5xl">{x[0]}</p>
              <p className="mt-3 text-white/60">{x[1]}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            ["GST Registered", `Compliant with GST invoicing norms (${GST})`],
            ["MSME Certified", `Registered under Udyam scheme (${MSME})`],
            ["Verified Procurement", "Material sourced from reputed domestic steel brands with grade traceability."]
          ].map((c) => (
            <div key={c[0]} className="glass-card p-6">
              <p className="h-display text-4xl">{c[0]}</p>
              <p className="text-white/60">{c[1]}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <SectionTag>Brands & Coverage</SectionTag>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="glass-card p-6">
              <p className="h-display text-5xl">Brands We Handle</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {BRANDS.map((b) => (
                  <span key={b} className="border border-white/20 px-3 py-1 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em] text-white/70">{b}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-6">
              <p className="h-display text-5xl">Service Coverage</p>
              <p className="mt-3 text-white/65">Primary operations in Kanpur with regular delivery support to nearby districts across Uttar Pradesh.</p>
              <p className="mt-3 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em] text-white/50">{ADDRESS}</p>
              <Link href="/quote" className="btn-secondary mt-6 inline-block px-6 py-3 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.22em]">Request Project Quote</Link>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="glass-card overflow-hidden p-3">
            <iframe title="map" className="h-80 w-full [filter:grayscale(1)_invert(1)_contrast(0.85)]" src="https://maps.google.com/maps?q=Kanpur&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
        </section>
      </main>
    </>
  );
}




