import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HR vs CR Steel Sheets | Bababaisnath Steels",
  description: "Understand process differences, finish, tolerance and applications."
};

export default function Page() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1fr_280px]">
      <article>
        <h1 className="h-display text-[clamp(3rem,6vw,7rem)]">HR VS CR STEEL SHEETS</h1>
        <p className="mt-5 text-lg leading-8 text-white/75 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-bold first-letter:leading-none">Hot rolled and cold rolled sheets serve different engineering priorities. HR is cost-effective for heavy fabrication while CR offers better finish and tighter dimensional tolerance.</p>
        <h2 className="h-display mt-10 text-5xl">When to Use HR</h2>
        <p className="text-white/70">Use HR for base plates, industrial fabrication, and non-cosmetic structural parts where thickness range and economy are primary concerns.</p>
        <h3 className="h-display mt-8 text-4xl">When to Use CR</h3>
        <p className="text-white/70">Use CR for cabinets, precision bends, appliance components, and painted surfaces requiring better finish and consistency.</p>
      </article>
      <aside className="glass-card h-fit p-5">
        <p className="font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.3em] text-white/50">Related</p>
        <div className="mt-3 grid gap-2 text-sm"><Link href="/blog/tmt-grade-selection">How to Choose TMT Grade</Link><Link href="/blog">Back to Knowledge Base</Link></div>
      </aside>
    </main>
  );
}

