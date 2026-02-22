import type { Metadata } from "next";
import Link from "next/link";
import { blogData } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Knowledge Base | Bababaisnath Steels",
  description: "Steel knowledge articles for contractors and buyers."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="h-display text-[clamp(3rem,6vw,7rem)]">KNOWLEDGE BASE</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {blogData.map((a) => (
          <Link key={a.title} href={a.slug === "tmt-grade-selection" || a.slug === "hr-vs-cr-sheets" ? `/blog/${a.slug}` : "/blog/tmt-grade-selection"} className="group block">
            <div className="glass-card relative overflow-hidden p-6">
              <div className="absolute inset-0 -translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
              <div className="relative z-10 transition-colors duration-500 group-hover:text-black">
                <p className="font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-black/60">{a.number} · {a.category}</p>
                <h2 className="h-display mt-2 text-5xl">{a.title}</h2>
                <p className="mt-2 text-sm text-white/65 group-hover:text-black/65">{a.excerpt}</p>
                <p className="mt-4 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em]">Read More ?</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

