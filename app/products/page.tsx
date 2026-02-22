import type { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "Products | Bababaisnath Steels Kanpur",
  description: "Filter and enquire steel products by category, grade and brand."
};

export default function Page() {
  return <ProductsClient />;
}

