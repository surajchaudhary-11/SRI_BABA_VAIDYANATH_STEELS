import Link from "next/link";
import { ADDRESS, COMPANY_NAME, EMAIL, PHONE_SALES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-[#0f0f0f]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm font-[var(--font-barlow-condensed)] uppercase tracking-[0.16em] text-white/45 md:grid-cols-4">
        <div><p className="text-white">{COMPANY_NAME}</p><p className="mt-2">{PHONE_SALES}<br />{EMAIL}</p></div>
        <div><p className="text-white">Links</p><div className="mt-2 grid gap-1"><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/quote">Quote</Link><Link href="/contact">Contact</Link></div></div>
        <div><p className="text-white">Products</p><p className="mt-2">TMT Bars, Pipes, Sheets, Plates, Angles, Channels, I-Beams</p></div>
        <div><p className="text-white">Contact</p><p className="mt-2">{ADDRESS}<br />{PHONE_SALES}<br />{EMAIL}</p></div>
      </div>
      <div className="border-t border-white/5 px-4 py-4 text-center font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em] text-white/50">SRI BABA VAIDYANATH STEELS © 2024 · PROUDLY SERVING KANPUR SINCE 2004</div>
    </footer>
  );
}






