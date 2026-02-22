import type { Metadata } from "next";
import ContactClientV2 from "@/components/ContactClientV2";

export const metadata: Metadata = {
  title: "Contact | Bababaisnath Steels",
  description: "Contact sales, accounts and logistics team in Kanpur."
};

export default function Page() {
  return <ContactClientV2 />;
}

