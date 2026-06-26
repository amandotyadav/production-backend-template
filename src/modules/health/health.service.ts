import { config } from "@/core/config/index.js";

type HealthStatus = {
  status: string;
  service: string;
  environment: string;
  timestamp: string;
  uptime: number;
};

export function getHealthStatus(): HealthStatus {
  return {
    status: "ok",
    service: config.APP_NAME,
    environment: config.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
}
