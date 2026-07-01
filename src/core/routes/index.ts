import type { Express } from "express";

import { apiRouter } from "@/api/index.js";

export function registerRoutes(app: Express): void {
  app.use("/api", apiRouter);
}
