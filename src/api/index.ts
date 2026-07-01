import { Router } from "express";
import { v1Router } from "./v1/index.js";

export const apiRouter: Router = Router();
apiRouter.use("/v1", v1Router);
