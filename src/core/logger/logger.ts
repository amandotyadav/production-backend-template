import pino from "pino";

import { config } from "@/core/config/index.js";

import { createTransport } from "./transport.js";

const transport = createTransport();

export const logger = pino({
  name: config.APP_NAME,
  level: config.LOG_LEVEL,
  ...(transport && { transport }),
});
