import cors, { type CorsOptions } from "cors";
import type { Express } from "express";

import { config } from "@/core/config/index.js";

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (config.CORS_ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true,
};

export function registerCors(app: Express): void {
  app.use(cors(corsOptions));
}
