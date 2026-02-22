"use client";

import { useMemo } from "react";
import { ADDRESS, EMAIL, PHONE_ACCOUNTS, PHONE_LOGISTICS, PHONE_SALES, WHATSAPP } from "@/lib/constants";

function isOpenIST() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const day = now.getDay();
  const hour = now.getHours();
  return day >= 1 && day <= 6 && hour >= 9 && hour < 19;
}

export default function ContactClient() {
  const open = useMemo(() => isOpenIST(), []);
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="h-display text-[clamp(3rem,6vw,7rem)]">CONTACT</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <p className="font-[var(--font-barlow-condensed)] uppercase tracking-[0.2em] text-white/60">{ADDRESS}</p>
          <p className="mt-3">Sales: {PHONE_SALES}</p>
          <p>Accounts: {PHONE_ACCOUNTS}</p>
          <p>Logistics: {PHONE_LOGISTICS}</p>
          <p>Email: {EMAIL}</p>
          <p>WhatsApp: +{WHATSAPP}</p>
          <p className={`mt-3 font-[var(--font-barlow-condensed)] uppercase tracking-[0.2em] ${open ? "text-white" : "text-white/45"}`}>{open ? "Open Now" : "Closed Now"}</p>
          <table className="mt-4 w-full text-sm text-white/60"><tbody><tr><td>Mon-Sat</td><td>09:00 - 19:00</td></tr><tr><td>Sunday</td><td>Closed</td></tr></tbody></table>
        </div>
        <div className="glass-card p-3">
          <iframe title="map" className="h-72 w-full [filter:grayscale(1)_invert(1)_contrast(0.85)]" src="https://maps.google.com/maps?q=Kanpur&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          <form className="mt-4 grid gap-3">
            <input className="border border-white/20 bg-black/40 p-3" placeholder="Name" />
            <input className="border border-white/20 bg-black/40 p-3" placeholder="Phone" />
            <textarea className="border border-white/20 bg-black/40 p-3" placeholder="Message" />
            <button className="btn-primary px-5 py-3 text-xs uppercase tracking-[0.2em]">Submit</button>
          </form>
        </div>
      </div>
      <div className="mt-8 glass-card p-6">
        <h2 className="h-display text-5xl">GRIEVANCE</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <select className="border border-white/20 bg-black/40 p-3"><option>Delivery Delay</option><option>Quality Issue</option><option>Billing Problem</option><option>Other</option></select>
          <input className="border border-white/20 bg-black/40 p-3" placeholder="Reference / Order" />
          <textarea className="border border-white/20 bg-black/40 p-3 md:col-span-2" placeholder="Complaint details" />
          <button className="btn-secondary px-5 py-3 text-xs uppercase tracking-[0.2em] md:w-max">Submit Grievance</button>
        </div>
      </div>
    </main>
  );
}

