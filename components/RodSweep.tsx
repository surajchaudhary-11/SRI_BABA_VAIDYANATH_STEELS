"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function RodSweep({ direction = "left" }: { direction?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.25 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative h-[110px] overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />
      <motion.img
        src="/steel-rod2.png"
        alt="Rod sweep"
        initial={{ x: direction === "left" ? "-120%" : "120%" }}
        animate={{ x: active ? "0%" : direction === "left" ? "-120%" : "120%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 my-auto h-20 w-full object-cover opacity-80"
      />
    </div>
  );
}
