import type { Metadata } from "next";
import HeroGrid from "@/components/HeroGrid";
import SectionTag from "@/components/SectionTag";
import SteelRod from "@/components/SteelRod";
import CounterStrip from "@/components/CounterStrip";
import Ticker from "@/components/Ticker";
import RodSweep from "@/components/RodSweep";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import StickyRod from "@/components/StickyRod";
import Link from "next/link";
import { BRANDS, COMPANY_NAME, TAGLINE, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bababaisnath Steels | TMT Bar & Steel Distributor Kanpur",
  description: "Leading steel distributor in Kanpur since 2004. TMT bars, MS pipes, HR sheets from TATA, JSW, SAIL. Bulk supply across UP.",
  openGraph: { title: "Bababaisnath Steels", description: "Luxury industrial steel supply platform in Kanpur." }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  description: TAGLINE,
  telephone: "+91-9876543210",
  address: { "@type": "PostalAddress", streetAddress: "123, Naveen Market", addressLocality: "Kanpur", addressRegion: "Uttar Pradesh", postalCode: "208001", addressCountry: "IN" }
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HeroGrid className="min-h-[100svh]">
        <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2">
          <div className="glass-card p-8">
            <SectionTag>Industrial Supply Platform</SectionTag>
            <h1 className="h-display mt-5 text-[clamp(2.7rem,8.2vw,7.2rem)]">SRI BABA VAIDYANATH</h1>
            <h1 className="h-display h-outline text-[clamp(2.7rem,8.2vw,7.2rem)]">STEELS</h1>
            <p className="mt-5 max-w-xl text-white/58">{TAGLINE}. Strategic bulk steel support for contractors, builders, infrastructure companies, and fabricators across Uttar Pradesh.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary px-6 py-3 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.22em]">Request a Quote</Link>
              <a href={`https://wa.me/${WHATSAPP}`} className="btn-secondary px-6 py-3 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.22em]">WhatsApp Us</a>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-4 text-center">
              {[["20+", "Years"], ["500+", "Clients"], ["12", "Districts"]].map((i) => <div key={i[0]} className="border border-white/10 p-3"><p className="h-display text-4xl">{i[0]}</p><p className="font-[var(--font-barlow-condensed)] text-[10px] uppercase tracking-[0.3em] text-white/45">{i[1]}</p></div>)}
            </div>
          </div>
          <div className="glass-card scan-lines relative p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 p-3">
              <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-white/30" />
              <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-white/30" />
              <SteelRod direction="left" scrollParallax />
            </div>
            <div className="relative mt-4 inline-block border border-white/20 px-3 py-2 font-[var(--font-barlow-condensed)] text-[10px] uppercase tracking-[0.3em] text-white/70">Fe - TMT/MS Steel · IS 1786 · GST Verified</div>
          </div>
        </div>
      </HeroGrid>

      <CounterStrip />
      <Ticker items={BRANDS.map((b) => b.toUpperCase())} />
      <RodSweep direction="left" />

      <section className="relative mx-auto max-w-7xl px-4 py-20">
        <SectionTag>Our Products</SectionTag>
        <h2 className="h-display mt-4 text-[clamp(3rem,6vw,7.5rem)]">WHAT WE<br /><span className="h-outline">SUPPLY</span></h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["01", "TMT Bars", "Fe500/Fe500D/Fe550 bars for RCC structures", "/products?category=TMT%20Bars"],
            ["02", "MS Pipes", "Industrial and structural pipes in multiple NB sizes", "/products?category=MS%20Pipes"],
            ["03", "GI Pipes", "Galvanized pipes for utility and fabrication", "/products?category=GI%20Pipes"],
            ["04", "HR Sheets", "Hot rolled sheets for fabrication and base frames", "/products?category=HR%20Sheets"],
            ["05", "MS Plates", "Heavy duty plates for industrial applications", "/products?category=MS%20Plates"],
            ["06", "Angles & Channels", "Structural profiles for sheds and supports", "/products?category=Angles"]
          ].map((x) => <ProductCard key={x[1]} number={x[0]} title={x[1]} description={x[2]} href={x[3]} />)}
        </div>
      </section>

      <RodSweep direction="right" />

      <section className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="pointer-events-none absolute -bottom-[4%] right-[-2%] select-none h-display text-[28vw] text-white/[0.018]">TRUSTED</div>
        <SectionTag>Why Choose Us</SectionTag>
        <h2 className="h-display mt-4 text-[clamp(3rem,6vw,7.5rem)]">BUILT ON<br /><span className="h-outline">TRUST</span></h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Genuine Branded Steel",
            "IS-Certified Products",
            "Fast Delivery",
            "Competitive Pricing",
            "20 Years Experience",
            "Kanpur Warehouse Stock"
          ].map((f, i) => <FeatureCard key={f} number={String(i + 1).padStart(2, "0")} title={f} description="Commercially optimized supply with transparent documentation." />)}
        </div>
      </section>

      <StickyRod />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTag>Testimonials</SectionTag>
        <h2 className="h-display mt-4 text-[clamp(3rem,6vw,7.5rem)]">CLIENT<br /><span className="h-outline">VOICES</span></h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["R. Mishra", "Mishra Infra Pvt Ltd", "Kanpur", "Reliable dispatch and commercial clarity for each order."],
            ["Vikas Srivastava", "VS Fabrication Works", "Unnao", "Consistent quality and immediate load readiness."],
            ["A. Tandon", "Tandon Buildtech", "Fatehpur", "Best partner for structural steel schedules."]
          ].map((t) => (
            <div key={t[0]} className="glass-card p-6"><p className="text-white">★★★★★</p><p className="mt-4 text-white/70">{t[3]}</p><p className="mt-4 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em] text-white/45">{t[0]} · {t[1]} · {t[2]}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 text-black">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-4">
          {["24h Quote Turnaround", "500+ B2B Accounts", "50000 MT Delivered", "12 District Coverage"].map((s, i) => <div key={s} className={`${i === 1 ? "bg-black text-white" : "bg-white"} border border-black/10 p-6 text-center`}><p className="h-display text-5xl">{i === 2 ? "50K" : i === 1 ? "500" : i === 0 ? "24" : "12"}</p><p className="mt-2 text-xs uppercase tracking-[0.2em]">{s}</p></div>)}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-64 w-64 rounded-full border border-white/20 animate-ping" />
          <div className="absolute h-80 w-80 rounded-full border border-white/10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h2 className="h-display text-[clamp(3rem,6vw,7.5rem)]">LET&apos;S BUILD<br /><span className="h-outline">TOGETHER</span></h2>
          <Link href="/quote" className="btn-secondary mt-8 inline-block px-7 py-4 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.3em]">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}





