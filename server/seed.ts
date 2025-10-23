import { storage } from "./storage";

async function seed() {
  console.log("🌱 Seeding database...");

  // Create collections
  const springGarden = await storage.createCollection({
    title: "Spring Garden",
    description: "Fresh botanical patterns perfect for spring and summer designs",
    imageUrl: "/attached_assets/generated_images/Patterned_pillows_lifestyle_photo_ca727c70.png",
  });

  const watercolorDreams = await storage.createCollection({
    title: "Watercolor Dreams",
    description: "Soft, dreamy patterns with delicate watercolor textures",
    imageUrl: "/attached_assets/generated_images/Watercolor_floral_pattern_design_e2755a1b.png",
  });

  const minimalNature = await storage.createCollection({
    title: "Minimal Nature",
    description: "Clean, modern interpretations of natural elements",
    imageUrl: "/attached_assets/generated_images/Botanical_leaves_pattern_design_6e0bf3e3.png",
  });

  console.log("✓ Collections created");

  // Create patterns
  const patterns = [
    {
      title: "Watercolor Florals",
      description: "Delicate watercolor flowers in soft pastels, perfect for spring textiles and stationery",
      category: "Botanical",
      price: 24,
      imageUrl: "/attached_assets/generated_images/Watercolor_floral_pattern_design_e2755a1b.png",
      etsyUrl: "https://etsy.com",
      collectionId: watercolorDreams.id,
    },
    {
      title: "Geometric Circles",
      description: "Modern minimalist circles in soft mint and cream, ideal for contemporary designs",
      category: "Geometric",
      price: 28,
      imageUrl: "/attached_assets/generated_images/Geometric_circles_pattern_design_9ebf2f64.png",
      etsyUrl: "https://etsy.com",
      collectionId: null,
    },
    {
      title: "Abstract Shapes",
      description: "Artistic organic shapes with painterly texture in lavender and pink",
      category: "Abstract",
      price: 26,
      imageUrl: "/attached_assets/generated_images/Abstract_organic_shapes_pattern_b878de45.png",
      etsyUrl: "https://etsy.com",
      collectionId: null,
    },
    {
      title: "Botanical Leaves",
      description: "Natural botanical elements in soft sage green and cream",
      category: "Botanical",
      price: 24,
      imageUrl: "/attached_assets/generated_images/Botanical_leaves_pattern_design_6e0bf3e3.png",
      etsyUrl: "https://etsy.com",
      collectionId: minimalNature.id,
    },
    {
      title: "Hearts & Stars",
      description: "Whimsical hand-drawn hearts and stars in blush pink and lavender",
      category: "Whimsical",
      price: 22,
      imageUrl: "/attached_assets/generated_images/Hearts_and_stars_pattern_834a7f90.png",
      etsyUrl: "https://etsy.com",
      collectionId: null,
    },
    {
      title: "Wave Motion",
      description: "Flowing organic wave shapes in soft mint green, calm and soothing",
      category: "Organic",
      price: 26,
      imageUrl: "/attached_assets/generated_images/Wave_pattern_design_f5ded2c8.png",
      etsyUrl: "https://etsy.com",
      collectionId: minimalNature.id,
    },
    {
      title: "Vintage Damask",
      description: "Elegant vintage-inspired damask in soft lavender and cream",
      category: "Classic",
      price: 28,
      imageUrl: "/attached_assets/generated_images/Vintage_damask_pattern_cc419bd1.png",
      etsyUrl: "https://etsy.com",
      collectionId: null,
    },
    {
      title: "Spring Bloom",
      description: "Fresh floral patterns with delicate petals and leaves",
      category: "Botanical",
      price: 24,
      imageUrl: "/attached_assets/generated_images/Watercolor_floral_pattern_design_e2755a1b.png",
      etsyUrl: "https://etsy.com",
      collectionId: springGarden.id,
    },
  ];

  for (const pattern of patterns) {
    await storage.createPattern(pattern);
  }

  console.log("✓ Patterns created");
  console.log("🎉 Seeding complete!");
}

seed().catch(console.error);
