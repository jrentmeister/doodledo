import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Collection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Collections() {
  const { data: collections, isLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections"],
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-6">
              Pattern Collections
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our curated collections of coordinating patterns. Each collection tells a story
              through harmonious designs perfect for your creative projects.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <div className="text-center text-muted-foreground">
                Loading collections...
              </div>
            ) : collections && collections.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collections.map((collection) => (
                  <Card
                    key={collection.id}
                    className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={collection.imageUrl}
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-medium mb-2">
                        {collection.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {collection.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Link href={`/collections/${collection.id}`}>
                          <Button variant="ghost" size="sm">
                            View Collection
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                No collections available yet. Check back soon!
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-light mb-6">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Can't find exactly what you're looking for? Commission a custom pattern
              designed specifically for your project.
            </p>
            <Link href="/commission">
              <Button size="lg" className="text-lg px-8">
                Start a Commission
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
