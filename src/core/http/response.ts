import type { Response } from "express";

import type { ApiErrorResponse, ApiSuccessResponse } from "./response.types.js";
import { HttpStatus } from "./status-codes.js";

interface FailOptions {
  statusCode: number;
  code: string;
  message: string;
}

export function ok<T>(res: Response, data: T): void {
  const response: ApiSuccessResponse<T> = {
    success: true,
    data,
  };
  res.status(HttpStatus.OK).json(response);
}

export function fail(res: Response, options: FailOptions): void {
  const response: ApiErrorResponse = {
    success: false,
    error: {
      code: options.code,
      message: options.message,
    },
  };

  res.status(options.statusCode).json(response);
}
