import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  patternCount: number;
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export default function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  const handleViewCollection = (id: string) => {
    console.log(`View collection ${id}`);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
            Featured Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated sets of coordinating patterns for cohesive design projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
              data-testid={`card-collection-${collection.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={collection.image}
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
                  <span className="text-xs text-muted-foreground">
                    {collection.patternCount} patterns
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleViewCollection(collection.id)}
                    data-testid={`button-view-${collection.id}`}
                  >
                    View Collection
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
