import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileText, Palette } from "lucide-react";
import { useState } from "react";

interface PatternCardProps {
  id: string;
  title: string;
  image: string;
  price?: string;
  category?: string;
}

export default function PatternCard({ id, title, image, price, category }: PatternCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleBuy = () => {
    console.log(`Buy pattern ${id}`);
  };

  const handleLicense = () => {
    console.log(`License pattern ${id}`);
  };

  const handleCommission = () => {
    console.log(`Commission similar to ${id}`);
  };

  return (
    <Card
      className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-pattern-${id}`}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="h-12 w-12"
            onClick={handleBuy}
            data-testid={`button-buy-${id}`}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-12 w-12"
            onClick={handleLicense}
            data-testid={`button-license-${id}`}
          >
            <FileText className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-12 w-12"
            onClick={handleCommission}
            data-testid={`button-commission-${id}`}
          >
            <Palette className="h-5 w-5" />
          </Button>
        </div>

        {category && (
          <div className="absolute top-2 right-2">
            <span className="text-xs px-2 py-1 bg-background/90 backdrop-blur-sm rounded-full text-foreground">
              {category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-display text-lg font-medium mb-1" data-testid={`text-title-${id}`}>
          {title}
        </h3>
        {price && (
          <p className="text-muted-foreground text-sm" data-testid={`text-price-${id}`}>
            From {price}
          </p>
        )}
      </div>
    </Card>
  );
}
