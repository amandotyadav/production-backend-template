import express, { type Express } from "express";

import { registerCompression } from "./compression.js";
import { registerCors } from "./cors.js";
import { registerHelmet } from "./helmet.js";

export function registerMiddleware(app: Express): void {
  registerHelmet(app);
  registerCors(app);
  registerCompression(app);

  app.use(express.json());
}

export { notFoundMiddleware } from "./not-found.js";
