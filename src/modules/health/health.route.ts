import { healthController } from "@/modules/health/health.controller.js";
import { Router } from "express";

export const healthRouter: Router = Router();
healthRouter.get("/", healthController);
