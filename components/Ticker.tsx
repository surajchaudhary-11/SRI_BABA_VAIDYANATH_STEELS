import { BRANDS } from "@/lib/constants";

export default function Ticker({ items = BRANDS, speed = 22 }: { items?: string[]; speed?: number }) {
  const full = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 py-3">
      <div className="ticker-track whitespace-nowrap font-[var(--font-barlow-condensed)] text-[0.68rem] uppercase tracking-[0.3em] text-white/35" style={{ animationDuration: `${speed}s` }}>
        {full.map((item, i) => <span key={`${item}-${i}`} className="mx-4">{item} ?</span>)}
      </div>
    </div>
  );
}

