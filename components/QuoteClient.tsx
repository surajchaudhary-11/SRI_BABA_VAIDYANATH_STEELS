"use client";

import { useMemo, useState } from "react";
import StepForm from "@/components/StepForm";
import { CATEGORIES, WHATSAPP } from "@/lib/constants";
import { isServiceablePincode } from "@/lib/pincodeData";

type Row = { product: string; grade: string; size: string; qtyMt: string; date: string };

export default function QuoteClient() {
  const [step, setStep] = useState(0);
  const [terms, setTerms] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", city: "", pincode: "" });
  const [rows, setRows] = useState<Row[]>([{ product: "TMT Bars", grade: "Fe500D", size: "16mm", qtyMt: "", date: "" }]);
  const [pinMsg, setPinMsg] = useState("");
  const [ref, setRef] = useState("");

  const totalMt = useMemo(() => rows.reduce((a, r) => a + Number(r.qtyMt || 0), 0), [rows]);

  const canStep1 = form.name && form.company && /^\d{10}$/.test(form.phone) && form.email && form.city && /^\d{6}$/.test(form.pincode);
  const canStep2 = rows.length >= 1 && rows.every((r) => r.product && r.grade && r.size && Number(r.qtyMt) > 0 && r.date);

  if (ref) {
    const msg = `RFQ ${ref} raised by ${form.name}, ${form.company}, total ${totalMt.toFixed(2)} MT.`;
    return (
      <main className="mx-auto max-w-5xl px-4 py-14">
        <div className="glass-card p-8 text-center">
          <h1 className="h-display text-[clamp(3rem,6vw,7rem)]">RFQ SUBMITTED</h1>
          <p className="mt-4 text-xl text-white/70">Reference: <span className="text-white">{ref}</span></p>
          <a className="btn-secondary mt-6 inline-block px-5 py-3 text-xs uppercase tracking-[0.2em]" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`}>WhatsApp Confirmation</a>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="h-display text-[clamp(3rem,6vw,7rem)]">REQUEST QUOTE</h1>
      <div className="mt-6">
        <StepForm step={step}>
          {step === 0 && (
            <div>
              <h2 className="h-display text-4xl">CONTACT DETAILS</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["name", "Name"], ["company", "Company"], ["phone", "Phone"], ["email", "Email"], ["city", "City"], ["pincode", "Pincode"]
                ].map(([k, l]) => <input key={k} className="border border-white/20 bg-black/40 p-3" placeholder={l} value={(form as any)[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />)}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button className="btn-secondary px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => setPinMsg(isServiceablePincode(form.pincode) ? "? Serviceable" : "? Outside delivery zone")}>Check Delivery Area</button>
                <p className="text-sm text-white/65">{pinMsg}</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="h-display text-4xl">PRODUCT REQUIREMENTS</h2>
              <div className="mt-4 grid gap-3">
                {rows.map((r, i) => (
                  <div key={i} className="grid gap-2 md:grid-cols-5">
                    <select className="border border-white/20 bg-black/40 p-3" value={r.product} onChange={(e) => setRows(rows.map((x, idx) => idx === i ? { ...x, product: e.target.value } : x))}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>
                    <input className="border border-white/20 bg-black/40 p-3" placeholder="Grade" value={r.grade} onChange={(e) => setRows(rows.map((x, idx) => idx === i ? { ...x, grade: e.target.value } : x))} />
                    <input className="border border-white/20 bg-black/40 p-3" placeholder="Size" value={r.size} onChange={(e) => setRows(rows.map((x, idx) => idx === i ? { ...x, size: e.target.value } : x))} />
                    <input className="border border-white/20 bg-black/40 p-3" placeholder="Quantity (MT)" value={r.qtyMt} onChange={(e) => setRows(rows.map((x, idx) => idx === i ? { ...x, qtyMt: e.target.value } : x))} />
                    <input type="date" className="border border-white/20 bg-black/40 p-3" value={r.date} onChange={(e) => setRows(rows.map((x, idx) => idx === i ? { ...x, date: e.target.value } : x))} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <button className="btn-secondary px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => rows.length < 10 && setRows([...rows, { product: "TMT Bars", grade: "", size: "", qtyMt: "", date: "" }])}>Add Row</button>
                <button className="btn-secondary px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => rows.length > 1 && setRows(rows.slice(0, -1))}>Remove Row</button>
                <p className="self-center text-sm text-white/60">Total: {totalMt.toFixed(2)} MT</p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="h-display text-4xl">REVIEW</h2>
              <div className="mt-4 glass-card p-4 text-sm text-white/70">
                <p><b className="text-white">{form.name}</b> · {form.company} · {form.phone}</p>
                <p>{form.email} · {form.city} · {form.pincode}</p>
                <hr className="my-3 border-white/15" />
                {rows.map((r, i) => <p key={i}>{i + 1}. {r.product} | {r.grade} | {r.size} | {r.qtyMt} MT | {r.date}</p>)}
                <p className="mt-2">Total: {totalMt.toFixed(2)} MT</p>
              </div>
              <label className="mt-4 flex items-center gap-2 text-sm text-white/70"><input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} /> I accept quotation terms and verification process.</label>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <button className="btn-secondary px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => setStep(Math.max(0, step - 1))}>Back</button>
            {step < 2 && <button className="btn-primary px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => (step === 0 ? canStep1 : canStep2) && setStep(step + 1)}>Next</button>}
            {step === 2 && <button className="btn-primary px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => terms && setRef(`RFQ-${new Date().getFullYear()}-${Math.random().toString().slice(2, 6)}`)}>Submit</button>}
          </div>
        </StepForm>
      </div>
    </main>
  );
}

