import PatternGrid from '../PatternGrid';
import pattern1 from '@assets/generated_images/Watercolor_floral_pattern_design_e2755a1b.png';
import pattern2 from '@assets/generated_images/Geometric_circles_pattern_design_9ebf2f64.png';
import pattern3 from '@assets/generated_images/Abstract_organic_shapes_pattern_b878de45.png';
import pattern4 from '@assets/generated_images/Botanical_leaves_pattern_design_6e0bf3e3.png';

export default function PatternGridExample() {
  const patterns = [
    { id: "1", title: "Watercolor Florals", image: pattern1, price: "$24", category: "Botanical" },
    { id: "2", title: "Geometric Circles", image: pattern2, price: "$28", category: "Geometric" },
    { id: "3", title: "Abstract Shapes", image: pattern3, price: "$26", category: "Abstract" },
    { id: "4", title: "Botanical Leaves", image: pattern4, price: "$24", category: "Botanical" },
  ];

  return (
    <PatternGrid
      patterns={patterns}
      title="Featured Patterns"
      subtitle="Explore our curated collection of unique designs"
    />
  );
}
