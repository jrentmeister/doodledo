import CategoryCard from "./CategoryCard";
import { Flower, Shapes, Sparkles, Leaf, Heart, Waves } from "lucide-react";

const categories = [
  {
    title: "Botanical",
    description: "Nature-inspired florals and leaves",
    icon: Flower,
    count: 24,
  },
  {
    title: "Geometric",
    description: "Modern shapes and clean lines",
    icon: Shapes,
    count: 18,
  },
  {
    title: "Abstract",
    description: "Artistic and expressive designs",
    icon: Sparkles,
    count: 15,
  },
  {
    title: "Organic",
    description: "Flowing natural forms",
    icon: Leaf,
    count: 12,
  },
  {
    title: "Whimsical",
    description: "Playful and charming patterns",
    icon: Heart,
    count: 20,
  },
  {
    title: "Minimalist",
    description: "Simple and elegant designs",
    icon: Waves,
    count: 16,
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect style for your project
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
