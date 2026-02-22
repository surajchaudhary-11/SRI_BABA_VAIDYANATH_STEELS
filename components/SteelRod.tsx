"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SteelRod({ direction, scrollParallax = false }: { direction: "left" | "right"; scrollParallax?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, scrollParallax ? -120 : 0]);

  return (
    <div ref={ref} className="relative h-40 w-full overflow-hidden rounded-xl bg-black/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_62%)]" />
      <motion.img
        src="/steel-rod2.png"
        alt="Steel rod"
        initial={{ x: direction === "left" ? "-16%" : "16%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.96 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ y, scaleX: direction === "right" ? -1 : 1, filter: "brightness(1.15) contrast(1.15)" }}
        className="absolute inset-0 h-full w-full object-cover object-center drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
    </div>
  );
}
