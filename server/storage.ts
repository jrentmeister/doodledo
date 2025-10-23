import {
  type Pattern,
  type InsertPattern,
  type Collection,
  type InsertCollection,
  type Commission,
  type InsertCommission,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Patterns
  getAllPatterns(): Promise<Pattern[]>;
  getPattern(id: string): Promise<Pattern | undefined>;
  getPatternsByCollection(collectionId: string): Promise<Pattern[]>;
  createPattern(pattern: InsertPattern): Promise<Pattern>;
  
  // Collections
  getAllCollections(): Promise<Collection[]>;
  getCollection(id: string): Promise<Collection | undefined>;
  createCollection(collection: InsertCollection): Promise<Collection>;
  
  // Commissions
  createCommission(commission: InsertCommission): Promise<Commission>;
  getAllCommissions(): Promise<Commission[]>;
  
  // Newsletter
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
}

export class MemStorage implements IStorage {
  private patterns: Map<string, Pattern>;
  private collections: Map<string, Collection>;
  private commissions: Map<string, Commission>;
  private newsletterSubscribers: Map<string, NewsletterSubscriber>;

  constructor() {
    this.patterns = new Map();
    this.collections = new Map();
    this.commissions = new Map();
    this.newsletterSubscribers = new Map();
  }

  // Patterns
  async getAllPatterns(): Promise<Pattern[]> {
    return Array.from(this.patterns.values());
  }

  async getPattern(id: string): Promise<Pattern | undefined> {
    return this.patterns.get(id);
  }

  async getPatternsByCollection(collectionId: string): Promise<Pattern[]> {
    return Array.from(this.patterns.values()).filter(
      (pattern) => pattern.collectionId === collectionId
    );
  }

  async createPattern(insertPattern: InsertPattern): Promise<Pattern> {
    const id = randomUUID();
    const pattern: Pattern = {
      ...insertPattern,
      id,
      description: insertPattern.description ?? null,
      etsyUrl: insertPattern.etsyUrl ?? null,
      collectionId: insertPattern.collectionId ?? null,
    };
    this.patterns.set(id, pattern);
    return pattern;
  }

  // Collections
  async getAllCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values());
  }

  async getCollection(id: string): Promise<Collection | undefined> {
    return this.collections.get(id);
  }

  async createCollection(insertCollection: InsertCollection): Promise<Collection> {
    const id = randomUUID();
    const collection: Collection = { ...insertCollection, id };
    this.collections.set(id, collection);
    return collection;
  }

  // Commissions
  async createCommission(insertCommission: InsertCommission): Promise<Commission> {
    const id = randomUUID();
    const commission: Commission = {
      ...insertCommission,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.commissions.set(id, commission);
    return commission;
  }

  async getAllCommissions(): Promise<Commission[]> {
    return Array.from(this.commissions.values());
  }

  // Newsletter
  async createNewsletterSubscriber(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const existing = Array.from(this.newsletterSubscribers.values()).find(
      (sub) => sub.email === insertSubscriber.email
    );
    
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = randomUUID();
    const subscriber: NewsletterSubscriber = {
      ...insertSubscriber,
      id,
      subscribedAt: new Date(),
    };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletterSubscribers.values());
  }
}

export const storage = new MemStorage();
