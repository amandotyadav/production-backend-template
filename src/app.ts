import express, { type Express } from "express";

import { registerErrorHandler } from "@/core/errors/index.js";
import {
  notFoundMiddleware,
  registerMiddleware,
} from "@/core/middleware/index.js";
import { registerRoutes } from "@/core/routes/index.js";

export function createApp(): Express {
  const app = express();

  registerMiddleware(app);
  registerRoutes(app);
  app.use(notFoundMiddleware);
  registerErrorHandler(app);

  return app;
}
