import type { NextFunction, Request, Response } from "express";

import { ValidationError } from "./validation-error.js";

import { ZodType } from "zod";
import type { ValidationSchemas, ValidationTarget } from "./types.js";

const VALIDATION_TARGETS: ValidationTarget[] = [
  "body",
  "query",
  "params",
] as const;

type RequestValidationData = Pick<Request, ValidationTarget>;

function validateTarget(
  request: RequestValidationData,
  target: ValidationTarget,
  schema: ZodType,
): void {
  const result = schema.safeParse(request[target]);

  if (!result.success) {
    throw new ValidationError(
      result.error.issues.map((issue) => ({
        field: issue.path.length > 0 ? issue.path.join(".") : target,
        message: issue.message,
      })),
    );
  }
}

export function validate(schemas: ValidationSchemas) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const validationRequest = req as RequestValidationData;

    for (const target of VALIDATION_TARGETS) {
      const schema = schemas[target];
      if (!schema) {
        continue;
      }

      validateTarget(validationRequest, target, schema);
    }

    next();
  };
}
