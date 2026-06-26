import { getHealthStatus } from "@/modules/health/health.service.js";
import type { Request, Response } from "express";

export function healthController(_req: Request, res: Response): void {
  res.status(200).json(getHealthStatus());
}
