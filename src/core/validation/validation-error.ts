import { AppError } from "@/core/errors/app-error.js";
import { ErrorCode } from "@/core/errors/error-codes.js";
import { HttpStatus } from "@/core/http/index.js";

export interface ValidationErrorDetails {
  field: string;
  message: string;
}

export class ValidationError extends AppError {
  public readonly details: ValidationErrorDetails[];

  constructor(details: ValidationErrorDetails[]) {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      code: ErrorCode.VALIDATION_ERROR,
      message: "Validation failed",
    });

    this.details = details;
  }
}
