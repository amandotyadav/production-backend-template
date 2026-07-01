import { Router } from "express";

import { healthRouter } from "@/modules/health/health.route.js";

export const v1Router: Router = Router();
v1Router.use("/health", healthRouter);
