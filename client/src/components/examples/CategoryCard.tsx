import CategoryCard from '../CategoryCard';
import { Flower } from 'lucide-react';

export default function CategoryCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <CategoryCard
        title="Botanical"
        description="Nature-inspired patterns with flowers and leaves"
        icon={Flower}
        count={12}
      />
    </div>
  );
}
