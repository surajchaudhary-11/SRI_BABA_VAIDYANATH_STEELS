import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose TMT Grade | Bababaisnath Steels",
  description: "Choosing Fe500D and other grades for safe and economical structures."
};

export default function Page() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1fr_280px]">
      <article>
        <h1 className="h-display text-[clamp(3rem,6vw,7rem)]">HOW TO CHOOSE TMT GRADE</h1>
        <p className="mt-5 text-lg leading-8 text-white/75 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-bold first-letter:leading-none">Selecting TMT grade is a structural and commercial decision. For most residential and mid-rise RCC projects in Uttar Pradesh, Fe500D gives a balanced combination of strength and ductility.</p>
        <h2 className="h-display mt-10 text-5xl">Fe500 vs Fe500D</h2>
        <p className="text-white/70">The D variant has better elongation and seismic behavior. It is more forgiving in dynamic loading and generally preferred by structural consultants for durability and safety margins.</p>
        <h3 className="h-display mt-8 text-4xl">Checklist Before Purchase</h3>
        <p className="text-white/70">Verify grade embossing, test certificate values, heat number traceability, and weight tolerance. Always compare landed cost with freight and unloading terms.</p>
      </article>
      <aside className="glass-card h-fit p-5">
        <p className="font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.3em] text-white/50">Related</p>
        <div className="mt-3 grid gap-2 text-sm"><Link href="/blog/hr-vs-cr-sheets">HR vs CR Steel Sheets</Link><Link href="/blog">Back to Knowledge Base</Link></div>
      </aside>
    </main>
  );
}

