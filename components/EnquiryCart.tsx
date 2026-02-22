"use client";

import Link from "next/link";
import { useState } from "react";
import { useEnquiryCart } from "@/hooks/useEnquiryCart";

export default function EnquiryCart() {
  const { items, remove, clear, count } = useEnquiryCart();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen((v) => !v)} className="fixed bottom-5 left-5 z-50 rounded-full border border-white/30 bg-black/70 px-4 py-3 text-xs uppercase tracking-[0.2em]">Enquiry {count}</button>
      {open && (
        <div className="fixed bottom-20 left-5 z-50 w-[92vw] max-w-md glass-card p-4">
          <p className="font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em] text-white/70">Enquiry Cart</p>
          <div className="mt-2 max-h-56 overflow-auto">
            {items.length === 0 && <p className="text-sm text-white/55">No products added.</p>}
            {items.map((item, i) => (
              <div key={`${item.name}-${i}`} className="mb-2 flex items-center justify-between border-b border-white/10 pb-2 text-sm">
                <span>{item.name}</span>
                <button onClick={() => remove(i)} className="text-white/60">Remove</button>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={clear} className="btn-secondary px-3 py-2 text-xs uppercase tracking-[0.2em]">Clear</button>
            <Link href="/quote" className="btn-primary px-3 py-2 text-xs uppercase tracking-[0.2em]">Send Enquiry</Link>
          </div>
        </div>
      )}
    </>
  );
}

