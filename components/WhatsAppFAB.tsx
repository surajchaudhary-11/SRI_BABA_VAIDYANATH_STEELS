import { WHATSAPP } from "@/lib/constants";

export default function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hello%20Bababaisnath%20Steels,%20I%20need%20a%20bulk%20steel%20quote.`}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_0_0_0_rgba(37,211,102,0.7)] animate-pulse"
      aria-label="WhatsApp"
    >
      WA
    </a>
  );
}

