"use client";

import { useMouseSpotlight } from "@/hooks/useMouseSpotlight";

export default function HeroGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { x, y } = useMouseSpotlight();

  return (
    <section className={`relative overflow-hidden grid-hero ${className}`}>
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ left: x, top: y, background: "radial-gradient(circle, rgba(255,255,255,0.055) 0%, transparent 70%)", transition: "left 80ms linear, top 80ms linear" }}
      />
      <div className="relative">{children}</div>
    </section>
  );
}
