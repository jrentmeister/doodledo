import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PatternGrid from "@/components/PatternGrid";
import FeaturedCollections from "@/components/FeaturedCollections";
import HowItWorks from "@/components/HowItWorks";
import ArtistBio from "@/components/ArtistBio";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import pattern1 from "@assets/generated_images/Watercolor_floral_pattern_design_e2755a1b.png";
import pattern2 from "@assets/generated_images/Geometric_circles_pattern_design_9ebf2f64.png";
import pattern3 from "@assets/generated_images/Abstract_organic_shapes_pattern_b878de45.png";
import pattern4 from "@assets/generated_images/Botanical_leaves_pattern_design_6e0bf3e3.png";
import pattern5 from "@assets/generated_images/Hearts_and_stars_pattern_834a7f90.png";
import pattern6 from "@assets/generated_images/Wave_pattern_design_f5ded2c8.png";
import pattern7 from "@assets/generated_images/Vintage_damask_pattern_cc419bd1.png";
import collectionImage from "@assets/generated_images/Patterned_pillows_lifestyle_photo_ca727c70.png";

export default function Home() {
  const featuredPatterns = [
    { id: "1", title: "Watercolor Florals", image: pattern1, price: "$24", category: "Botanical" },
    { id: "2", title: "Geometric Circles", image: pattern2, price: "$28", category: "Geometric" },
    { id: "3", title: "Abstract Shapes", image: pattern3, price: "$26", category: "Abstract" },
    { id: "4", title: "Botanical Leaves", image: pattern4, price: "$24", category: "Botanical" },
    { id: "5", title: "Hearts & Stars", image: pattern5, price: "$22", category: "Whimsical" },
    { id: "6", title: "Wave Motion", image: pattern6, price: "$26", category: "Organic" },
    { id: "7", title: "Vintage Damask", image: pattern7, price: "$28", category: "Classic" },
    { id: "8", title: "Spring Garden", image: pattern1, price: "$24", category: "Botanical" },
  ];

  const collections = [
    {
      id: "spring-garden",
      title: "Spring Garden",
      description: "Fresh botanical patterns perfect for spring and summer designs",
      image: collectionImage,
      patternCount: 8,
    },
    {
      id: "watercolor-dreams",
      title: "Watercolor Dreams",
      description: "Soft, dreamy patterns with delicate watercolor textures",
      image: pattern1,
      patternCount: 6,
    },
    {
      id: "minimal-nature",
      title: "Minimal Nature",
      description: "Clean, modern interpretations of natural elements",
      image: pattern4,
      patternCount: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCollections collections={collections} />
        <PatternGrid
          patterns={featuredPatterns}
          title="New Arrivals"
          subtitle="Fresh designs added weekly to inspire your creative projects"
        />
        <HowItWorks />
        <ArtistBio />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
