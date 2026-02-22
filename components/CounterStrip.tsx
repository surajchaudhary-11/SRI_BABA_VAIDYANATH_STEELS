"use client";

import { useEffect, useRef, useState } from "react";
import { useCounter } from "@/hooks/useCounter";

function Item({ target, label, suffix = "+" }: { target: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const v = useCounter(target, active, 2000);
  return <div ref={ref} className="text-center"><p className="h-display text-5xl">{v.toLocaleString()}{suffix}</p><p className="font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.3em] text-white/45">{label}</p></div>;
}

export default function CounterStrip() {
  return (
    <section className="border-y border-white/10 bg-[#0f0f0f] py-8">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <Item target={20} label="Years" />
        <Item target={500} label="Clients" />
        <Item target={50000} label="MT Supplied" />
        <Item target={12} label="Districts Served" />
      </div>
    </section>
  );
}

