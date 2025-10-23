import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertPatternSchema,
  insertCollectionSchema,
  insertCommissionSchema,
  insertNewsletterSubscriberSchema,
} from "@shared/schema";

// Seed initial data
async function seedData() {
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

  console.log("✓ Database seeded with initial data");
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Seed data on startup
  await seedData();
  // Patterns
  app.get("/api/patterns", async (_req, res) => {
    try {
      const patterns = await storage.getAllPatterns();
      res.json(patterns);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch patterns" });
    }
  });

  app.get("/api/patterns/:id", async (req, res) => {
    try {
      const pattern = await storage.getPattern(req.params.id);
      if (!pattern) {
        return res.status(404).json({ error: "Pattern not found" });
      }
      res.json(pattern);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch pattern" });
    }
  });

  app.post("/api/patterns", async (req, res) => {
    try {
      const parsed = insertPatternSchema.parse(req.body);
      const pattern = await storage.createPattern(parsed);
      res.status(201).json(pattern);
    } catch (error) {
      res.status(400).json({ error: "Invalid pattern data" });
    }
  });

  // Collections
  app.get("/api/collections", async (_req, res) => {
    try {
      const collections = await storage.getAllCollections();
      res.json(collections);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch collections" });
    }
  });

  app.get("/api/collections/:id", async (req, res) => {
    try {
      const collection = await storage.getCollection(req.params.id);
      if (!collection) {
        return res.status(404).json({ error: "Collection not found" });
      }
      res.json(collection);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch collection" });
    }
  });

  app.get("/api/collections/:id/patterns", async (req, res) => {
    try {
      const patterns = await storage.getPatternsByCollection(req.params.id);
      res.json(patterns);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch collection patterns" });
    }
  });

  app.post("/api/collections", async (req, res) => {
    try {
      const parsed = insertCollectionSchema.parse(req.body);
      const collection = await storage.createCollection(parsed);
      res.status(201).json(collection);
    } catch (error) {
      res.status(400).json({ error: "Invalid collection data" });
    }
  });

  // Commissions
  app.post("/api/commissions", async (req, res) => {
    try {
      const parsed = insertCommissionSchema.parse(req.body);
      const commission = await storage.createCommission(parsed);
      res.status(201).json(commission);
    } catch (error) {
      res.status(400).json({ error: "Invalid commission data" });
    }
  });

  app.get("/api/commissions", async (_req, res) => {
    try {
      const commissions = await storage.getAllCommissions();
      res.json(commissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch commissions" });
    }
  });

  // Newsletter
  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSubscriberSchema.parse(req.body);
      const subscriber = await storage.createNewsletterSubscriber(parsed);
      res.status(201).json(subscriber);
    } catch (error) {
      if (error instanceof Error && error.message === "Email already subscribed") {
        return res.status(409).json({ error: "Email already subscribed" });
      }
      res.status(400).json({ error: "Invalid email address" });
    }
  });

  app.get("/api/newsletter", async (_req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
