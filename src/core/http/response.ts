import type { Response } from "express";

import { HttpStatus } from "./status-codes.js";

export function ok<T>(res: Response, data: T): void {
  res.status(HttpStatus.OK).json({
    success: true,
    data,
  });
}
