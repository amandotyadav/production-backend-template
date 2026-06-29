import type { TransportSingleOptions } from "pino";

import { config } from "@/core/config/index.js";

export function createTransport(): TransportSingleOptions | undefined {
  if (config.NODE_ENV === "development") {
    return {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "HH:MM:ss",
        ignore: "pid,hostname",
      },
    };
  }

  return undefined;
}
