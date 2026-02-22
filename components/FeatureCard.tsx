import ProductCard from "./ProductCard";

export default function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
  return <ProductCard number={number} title={title} description={description} />;
}

