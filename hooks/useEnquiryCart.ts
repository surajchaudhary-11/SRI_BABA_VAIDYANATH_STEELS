"use client";

import { useCallback, useEffect, useState } from "react";

export type EnquiryItem = {
  name: string;
  grade?: string;
  size?: string;
  qtyMt?: number;
};

const KEY = "bbs_enquiry_cart";

export function useEnquiryCart() {
  const [items, setItems] = useState<EnquiryItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setItems(JSON.parse(raw));
    const sync = () => {
      const next = localStorage.getItem(KEY);
      setItems(next ? JSON.parse(next) : []);
    };
    window.addEventListener("storage", sync);
    window.addEventListener("bbs-cart-sync", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("bbs-cart-sync", sync as EventListener);
    };
  }, []);

  const persist = useCallback((next: EnquiryItem[]) => {
    setItems(next);
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("bbs-cart-sync"));
  }, []);

  const add = useCallback((item: EnquiryItem) => persist([...items, item]), [items, persist]);
  const remove = useCallback((index: number) => persist(items.filter((_, i) => i !== index)), [items, persist]);
  const clear = useCallback(() => persist([]), [persist]);

  return { items, add, remove, clear, count: items.length };
}

