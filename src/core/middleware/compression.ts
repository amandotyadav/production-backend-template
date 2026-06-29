import compression from "compression";
import { type Express } from "express";

export function registerCompression(app: Express): void {
  app.use(compression());
}
