import { getHealthStatus } from "@/modules/health/health.service.js";
import type { Request, Response } from "express";

import { ok } from "@/core/http/index.js";

export function healthController(_req: Request, res: Response): void {
  ok(res, getHealthStatus());
}
