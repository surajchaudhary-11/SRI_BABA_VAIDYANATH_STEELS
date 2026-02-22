"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyRod() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-58vw", "58vw"]);
  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 grid h-screen place-items-center overflow-hidden">
        <motion.img src="/steel-rod1.png" alt="Moving steel rod" style={{ x }} className="w-[70vw] max-w-5xl opacity-80 grayscale" />
        <div className="absolute text-center mix-blend-difference">
          <p className="section-tag justify-center">Process Integrity</p>
          <h2 className="h-display text-[clamp(3rem,6vw,7.5rem)]">PRECISION<br />IN EVERY BAR</h2>
        </div>
      </div>
    </section>
  );
}
