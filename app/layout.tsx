import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import EnquiryCart from "@/components/EnquiryCart";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import PWARegister from "@/components/PWARegister";
import IntroScreen from "@/components/IntroScreen";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const barlow = Barlow({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-barlow" });
const condensed = Barlow_Condensed({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-barlow-condensed" });

export const metadata: Metadata = {
  title: "Bababaisnath Steels",
  description: "Premium steel distributor in Kanpur.",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${barlow.variable} ${condensed.variable} bg-[#080808] text-[#f8f8f8]`}>
        <IntroScreen />
        <PWARegister />
        <Nav />
        {children}
        <Footer />
        <EnquiryCart />
        <ScrollToTop />
        <WhatsAppFAB />
        <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-white/10 bg-black/92 md:hidden">
          <Link href="/" className="p-3 text-center text-[11px] uppercase tracking-[0.2em]">Home</Link>
          <Link href="/products" className="p-3 text-center text-[11px] uppercase tracking-[0.2em]">Products</Link>
          <Link href="/about" className="p-3 text-center text-[11px] uppercase tracking-[0.2em]">About</Link>
          <Link href="/quote" className="p-3 text-center text-[11px] uppercase tracking-[0.2em]">Quote</Link>
          <a href="tel:+919876543210" className="p-3 text-center text-[11px] uppercase tracking-[0.2em]">Call</a>
        </nav>
      </body>
    </html>
  );
}

