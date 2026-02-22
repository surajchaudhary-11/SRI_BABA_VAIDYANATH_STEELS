"use client";

import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

type ProductCardProps = {
  number: string;
  title: string;
  description: string;
  href?: string;
};

export default function ProductCard({ number, title, description, href }: ProductCardProps) {
  const card = (
    <GlassCard className="relative overflow-hidden p-6 transition-colors">
      <div className="absolute inset-0 -translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
      <div className="relative z-10 transition-colors duration-500 group-hover:text-black">
        <p className="font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.3em] text-white/60 group-hover:text-black/70">{number}</p>
        <h3 className="h-display mt-2 text-4xl">{title}</h3>
        <hr className="my-3 border-white/20 group-hover:border-black/30" />
        <p className="text-sm text-white/70 group-hover:text-black/70">{description}</p>
      </div>
    </GlassCard>
  );

  if (!href) {
    return (
      <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="group block">
        {card}
      </motion.div>
    );
  }

  return (
    <motion.a href={href} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="group block">
      {card}
    </motion.a>
  );
}

