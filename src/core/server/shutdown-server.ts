import type { Server } from "node:http";

import { logger } from "@/core/logger/index.js";

export function shutdownServer(server: Server, signal: NodeJS.Signals): void {
  logger.info({ signal }, "Received shutdown signal. Closing HTTP server...");

  server.close((error) => {
    if (error) {
      logger.error(
        { err: error },
        "Error occurred while shutting down the server",
      );
      process.exit(1);
    }

    logger.info("HTTP server shut down successfully.");
    process.exit(0);
  });
}
