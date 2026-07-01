import type { Request, Response } from "express";

import { ErrorCode } from "@/core/errors/error-codes.js";
import { HttpStatus, fail } from "@/core/http/index.js";

export function notFoundMiddleware(req: Request, res: Response): void {
  fail(res, {
    statusCode: HttpStatus.NOT_FOUND,
    code: ErrorCode.NOT_FOUND,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
}
