import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes';

// Create Express app instance
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize routes
let routesInitialized = false;

async function initializeRoutes() {
  if (!routesInitialized) {
    await registerRoutes(app);
    routesInitialized = true;
  }
}

// Vercel serverless handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  await initializeRoutes();

  // Convert Vercel request to Express request format
  const expressReq = req as any;
  const expressRes = res as any;

  // Handle the request with Express
  app(expressReq, expressRes);
}
