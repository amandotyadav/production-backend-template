import { type ZodType } from "zod";

export interface ValidationSchemas {
  body?: ZodType;
  query?: ZodType;
  params?: ZodType;
}

export type ValidationTarget = keyof ValidationSchemas;
