import type { Express } from "express";
import helmet from "helmet";

export function registerHelmet(app: Express): void {
  app.use(helmet());
}
