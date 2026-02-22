"use client";

import { useEffect, useMemo, useState } from "react";
import { CATEGORIES } from "@/lib/constants";
import { useEnquiryCart } from "@/hooks/useEnquiryCart";

const data = [
  { name: "TMT Bars", category: "TMT Bars", grade: "Fe500D", size: "8-32 mm", is: "IS 1786", stock: "In Stock", brand: "TATA" },
  { name: "MS Pipes", category: "MS Pipes", grade: "IS 1239", size: "15-150 NB", is: "IS 1239", stock: "In Stock", brand: "Jindal" },
  { name: "GI Pipes", category: "GI Pipes", grade: "IS 1239", size: "15-100 NB", is: "IS 1239", stock: "Limited", brand: "SAIL" },
  { name: "HR Sheets", category: "HR Sheets", grade: "E250", size: "1.6-25 mm", is: "IS 2062", stock: "In Stock", brand: "JSW" },
  { name: "CR Sheets", category: "CR Sheets", grade: "IS 1079", size: "0.5-3 mm", is: "IS 1079", stock: "On Order", brand: "RINL" },
  { name: "MS Plates", category: "MS Plates", grade: "E250", size: "6-80 mm", is: "IS 2062", stock: "In Stock", brand: "TATA" },
  { name: "Angles", category: "Angles", grade: "E250", size: "25x25 to 100x100", is: "IS 808", stock: "Limited", brand: "SAIL" },
  { name: "Channels", category: "Channels", grade: "E250", size: "75-300 mm", is: "IS 808", stock: "In Stock", brand: "JSW" },
  { name: "I-Beams", category: "I-Beams", grade: "E250", size: "100-600 mm", is: "IS 808", stock: "On Order", brand: "RINL" },
  { name: "Flat Bars", category: "Flat Bars", grade: "E250", size: "25x3 to 150x12", is: "IS 1730", stock: "In Stock", brand: "Jindal" },
  { name: "Binding Wire", category: "Binding Wire", grade: "Mild Steel", size: "18-22 gauge", is: "IS 280", stock: "In Stock", brand: "TATA" },
  { name: "Roofing Sheets", category: "Roofing Sheets", grade: "IS 277", size: "0.3-0.6 mm", is: "IS 277", stock: "Limited", brand: "JSW" }
];

const grades = ["Fe415", "Fe500", "Fe500D", "Fe550", "IS 1239"];
const brands = ["TATA", "JSW", "SAIL", "Jindal", "RINL"];

export default function ProductsClient() {
  const { add } = useEnquiryCart();
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState<string[]>([]);
  const [grade, setGrade] = useState<string[]>([]);
  const [brand, setBrand] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => data.filter((p) => {
    const s = `${p.name} ${p.grade} ${p.brand} ${p.is}`.toLowerCase();
    return (!search || s.includes(search.toLowerCase())) && (!cat.length || cat.includes(p.category)) && (!grade.length || grade.includes(p.grade)) && (!brand.length || brand.includes(p.brand));
  }), [search, cat, grade, brand]);

  const toggle = (arr: string[], set: (v: string[]) => void, value: string) => set(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  const active = [...cat, ...grade, ...brand];

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-12 lg:grid-cols-[290px_1fr]">
      <aside className="glass-card h-fit p-5">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" className="w-full border border-white/25 bg-black p-3 text-sm" />
        {[ ["Category", CATEGORIES, cat, setCat], ["Grade", grades, grade, setGrade], ["Brand", brands, brand, setBrand] ].map(([label, list, selected, set]) => (
          <div key={String(label)} className="mt-6">
            <p className="font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.3em] text-white/45">{String(label)}</p>
            <div className="mt-3 grid gap-2">
              {(list as string[]).map((item) => (
                <button key={item} onClick={() => toggle(selected as string[], set as (v: string[]) => void, item)} className="flex items-center gap-2 text-left text-sm text-white/70">
                  <span className={`inline-block h-4 w-4 border border-white/60 ${(selected as string[]).includes(item) ? "bg-white" : ""}`} />
                  <span className="font-[var(--font-barlow-condensed)] uppercase tracking-[0.18em]">{item}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>

      <section>
        <h1 className="h-display text-[clamp(3rem,6vw,7rem)]">PRODUCT CATALOGUE</h1>
        <div className="mt-4 flex flex-wrap gap-2">{active.map((a) => <span key={a} className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">{a}</span>)}</div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {loading && Array.from({ length: 6 }).map((_, i) => <div key={i} className="glass-card p-5"><div className="skeleton h-40" /><div className="mt-3 h-4 bg-white/10" /><div className="mt-2 h-4 bg-white/10" /></div>)}
          {!loading && filtered.map((p) => (
            <div key={p.name} className="glass-card p-5">
              <div className="relative grid h-40 place-items-center border border-white/10 bg-black">
                <p className="h-display text-6xl">?</p>
                <span className={`absolute right-2 top-2 rounded border px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${p.stock === "Limited" ? "border-white/60 text-white/70" : p.stock === "On Order" ? "border-white/30 text-white/45" : "border-white/70 text-white"}`}>{p.stock}</span>
              </div>
              <h2 className="h-display mt-3 text-4xl">{p.name}</h2>
              <div className="mt-2 flex gap-2"><span className="rounded border border-white/30 px-2 py-1 text-[10px] uppercase tracking-[0.2em]">{p.grade}</span></div>
              <p className="mt-2 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em] text-white/50">{p.size} · {p.is}</p>
              <div className="mt-4 flex gap-2">
                <button onClick={() => add({ name: p.name, grade: p.grade, size: p.size })} className="btn-secondary px-3 py-2 text-[10px] uppercase tracking-[0.2em]">Add to Enquiry</button>
                <a href="/quote" className="btn-primary px-3 py-2 text-[10px] uppercase tracking-[0.2em]">Get Price</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

