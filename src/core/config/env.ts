import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.coerce.number().int().min(1).max(65535),
  APP_NAME: z.string().min(1),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Invalid environment variables");
  console.error(z.prettifyError(result.error));

  process.exit(1);
}

export const env = result.data;
