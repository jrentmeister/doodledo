import { useQuery } from "@tanstack/react-query";
import { type Pattern, type Collection } from "@shared/schema";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PatternGrid from "@/components/PatternGrid";
import FeaturedCollections from "@/components/FeaturedCollections";
import HowItWorks from "@/components/HowItWorks";
import ArtistBio from "@/components/ArtistBio";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  const { data: patterns = [], isLoading: patternsLoading } = useQuery<Pattern[]>({
    queryKey: ["/api/patterns"],
  });

  const { data: collections = [], isLoading: collectionsLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections"],
  });

  const formattedPatterns = patterns.map((pattern) => ({
    id: pattern.id,
    title: pattern.title,
    image: pattern.imageUrl,
    price: `$${pattern.price}`,
    category: pattern.category,
  }));

  const formattedCollections = collections.map((collection) => ({
    id: collection.id,
    title: collection.title,
    description: collection.description,
    image: collection.imageUrl,
    patternCount: patterns.filter((p) => p.collectionId === collection.id).length,
  }));

  if (patternsLoading || collectionsLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <p className="text-muted-foreground">Loading patterns...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        {formattedCollections.length > 0 && (
          <FeaturedCollections collections={formattedCollections} />
        )}
        {formattedPatterns.length > 0 && (
          <PatternGrid
            patterns={formattedPatterns}
            title="New Arrivals"
            subtitle="Fresh designs added weekly to inspire your creative projects"
          />
        )}
        <HowItWorks />
        <ArtistBio />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
