import type { Server } from "node:http";

import { shutdownServer } from "./shutdown-server.js";

export function registerProcessEvents(server: Server): void {
  process.once("SIGINT", () => {
    shutdownServer(server, "SIGINT");
  });

  process.once("SIGTERM", () => {
    shutdownServer(server, "SIGTERM");
  });
}
