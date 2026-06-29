import { env } from "./env.js";

export const config = {
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT,
  APP_NAME: env.APP_NAME,
  LOG_LEVEL: env.LOG_LEVEL,
} as const;
