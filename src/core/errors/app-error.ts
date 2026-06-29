import { HttpStatus } from "@/core/http/index.js";
import type { ErrorCode } from "./error-codes.js";

interface AppErrorOptions {
  statusCode: number;
  code: ErrorCode;
  message: string;
  isOperational?: boolean;
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: ErrorCode;
  public readonly isOperational: boolean;

  constructor(options: AppErrorOptions) {
    super(options.message);

    this.name = this.constructor.name;

    this.statusCode = options.statusCode;
    this.code = options.code;
    this.isOperational = options.isOperational ?? true;

    Error.captureStackTrace(this, this.constructor);
  }

  static internal(message = "Internal Server Error"): AppError {
    return new AppError({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      code: "INTERNAL_SERVER_ERROR",
      message,
      isOperational: false,
    });
  }
}
