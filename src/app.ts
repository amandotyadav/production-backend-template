import express, { type Express } from "express";

import { registerErrorHandler } from "@/core/errors/index.js";
import { registerMiddleware } from "@/core/middleware/index.js";
import { registerRoutes } from "@/core/routes/index.js";

export function createApp(): Express {
  const app = express();

  registerErrorHandler(app);
  registerMiddleware(app);
  registerRoutes(app);

  return app;
}
