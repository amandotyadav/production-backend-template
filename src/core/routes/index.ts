import type { Express } from "express";

import { healthRouter } from "@/modules/health/health.route.js";

export function registerRoutes(app: Express): void {
  app.use("/health", healthRouter);
}
