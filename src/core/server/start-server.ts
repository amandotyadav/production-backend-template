import type { Server } from "node:http";

import { createApp } from "@/app.js";
import { config } from "@/core/config/index.js";
import { logger } from "@/core/logger/index.js";

import { registerProcessEvents } from "./process-events.js";

export function startServer(): Server {
  const app = createApp();

  const server = app.listen(config.PORT, () => {
    logger.info(
      {
        port: config.PORT,
        environment: config.NODE_ENV,
      },
      `Server is running on port ${config.PORT} in ${config.NODE_ENV} mode at http://localhost:${config.PORT}`,
    );
  });

  registerProcessEvents(server);

  return server;
}
