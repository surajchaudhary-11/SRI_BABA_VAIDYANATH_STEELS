"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { COMPANY_NAME, PHONE_SALES, WHATSAPP } from "@/lib/constants";

const links = [
  ["/", "Home"],
  ["/products", "Products"],
  ["/quote", "Quote"],
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/blog", "Blog"]
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/95 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="h-display text-[1.8rem] tracking-[0.25em]">{COMPANY_NAME.toUpperCase()}</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="font-[var(--font-barlow-condensed)] text-[0.75rem] uppercase tracking-[0.2em] text-white/50 hover:text-white">{label}</Link>
          ))}
        </nav>
        <div className="hidden gap-2 md:flex">
          <a href={`https://wa.me/${WHATSAPP}`} className="btn-secondary px-4 py-2 text-xs uppercase tracking-[0.2em]">WhatsApp</a>
          <a href={`tel:${PHONE_SALES}`} className="btn-secondary px-4 py-2 text-xs uppercase tracking-[0.2em]">Call Now</a>
        </div>
        <button onClick={() => setOpen(true)} className="md:hidden font-[var(--font-barlow-condensed)] uppercase tracking-[0.2em]">Menu</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 p-8">
            <button onClick={() => setOpen(false)} className="mb-8 uppercase tracking-[0.2em] text-white/70">Close</button>
            <div className="grid gap-4">
              {links.map(([href, label], i) => (
                <motion.div key={href} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link href={href} className="h-display text-5xl" onClick={() => setOpen(false)}>{label}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

