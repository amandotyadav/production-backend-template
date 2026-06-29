import type { Express } from "express";

import { errorHandler } from "./error-handler.js";

export function registerErrorHandler(app: Express): void {
  app.use(errorHandler);
}
