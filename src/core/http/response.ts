import type { Response } from "express";

import type { ApiSuccessResponse } from "./response.types.js";
import { HttpStatus } from "./status-codes.js";

export function ok<T>(res: Response, data: T): void {
  const response: ApiSuccessResponse<T> = {
    success: true,
    data,
  };
  res.status(HttpStatus.OK).json(response);
}
