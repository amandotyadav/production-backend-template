import type { NextFunction, Request, Response } from "express";

import { HttpStatus, fail } from "@/core/http/index.js";

import { AppError } from "./app-error.js";
import { ErrorCode } from "./error-codes.js";

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof AppError) {
    fail(res, {
      statusCode: error.statusCode,
      code: error.code,
      message: error.message,
    });

    return;
  }

  console.error(error);

  fail(res, {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    code: ErrorCode.INTERNAL_SERVER_ERROR,
    message: "Internal Server Error",
  });
}
