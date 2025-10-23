import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count?: number;
}

export default function CategoryCard({ title, description, icon: Icon, count }: CategoryCardProps) {
  const handleClick = () => {
    console.log(`Navigate to ${title} category`);
  };

  return (
    <Card
      className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={handleClick}
      data-testid={`card-category-${title.toLowerCase()}`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-xl font-medium mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          {count !== undefined && (
            <p className="text-xs text-muted-foreground mt-2">
              {count} patterns
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
