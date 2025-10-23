import FeaturedCollections from '../FeaturedCollections';
import image1 from '@assets/generated_images/Patterned_pillows_lifestyle_photo_ca727c70.png';
import image2 from '@assets/generated_images/Watercolor_floral_pattern_design_e2755a1b.png';
import image3 from '@assets/generated_images/Botanical_leaves_pattern_design_6e0bf3e3.png';

export default function FeaturedCollectionsExample() {
  const collections = [
    {
      id: "spring-garden",
      title: "Spring Garden",
      description: "Fresh botanical patterns perfect for spring and summer designs",
      image: image1,
      patternCount: 8,
    },
    {
      id: "watercolor-dreams",
      title: "Watercolor Dreams",
      description: "Soft, dreamy patterns with delicate watercolor textures",
      image: image2,
      patternCount: 6,
    },
    {
      id: "minimal-nature",
      title: "Minimal Nature",
      description: "Clean, modern interpretations of natural elements",
      image: image3,
      patternCount: 10,
    },
  ];

  return <FeaturedCollections collections={collections} />;
}
