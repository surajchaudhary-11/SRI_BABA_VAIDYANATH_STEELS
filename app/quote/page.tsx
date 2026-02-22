import type { Metadata } from "next";
import QuoteClient from "@/components/QuoteClient";

export const metadata: Metadata = {
  title: "RFQ | Bababaisnath Steels",
  description: "Raise RFQ in 3 steps for bulk steel procurement in Kanpur and nearby districts."
};

export default function Page() {
  return <QuoteClient />;
}

