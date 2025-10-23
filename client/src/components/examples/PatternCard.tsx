import PatternCard from '../PatternCard';
import patternImage from '@assets/generated_images/Watercolor_floral_pattern_design_e2755a1b.png';

export default function PatternCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PatternCard
        id="1"
        title="Watercolor Florals"
        image={patternImage}
        price="$24"
        category="Botanical"
      />
    </div>
  );
}
