import type { NextFunction, Request, Response } from "express";

import { HttpStatus, fail } from "@/core/http/index.js";

import { ValidationError } from "@/core/validation/index.js";
import { AppError } from "./app-error.js";
import { ErrorCode } from "./error-codes.js";

import { logger } from "@/core/logger/index.js";

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof ValidationError) {
    fail(res, {
      statusCode: error.statusCode,
      code: error.code,
      message: error.message,
      details: error.details,
    });

    return;
  }

  if (error instanceof AppError) {
    logger.warn({ err: error }, error.message);

    fail(res, {
      statusCode: error.statusCode,
      code: error.code,
      message: error.message,
    });

    return;
  }

  logger.error({ err: error }, "Unhandled application error");

  fail(res, {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    code: ErrorCode.INTERNAL_SERVER_ERROR,
    message: "Internal Server Error",
  });
}
