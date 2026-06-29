import { env } from "./env.js";

export const config = {
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT,
  APP_NAME: env.APP_NAME,
  LOG_LEVEL: env.LOG_LEVEL,
  CORS_ALLOWED_ORIGINS: env.CORS_ALLOWED_ORIGINS.split(",").map((origin) =>
    origin.trim(),
  ),
} as const;
