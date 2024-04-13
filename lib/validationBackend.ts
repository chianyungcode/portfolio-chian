import { z, ZodError, ZodType } from "zod";

export class Validator {
  static validateContactMessage<T>(schema: ZodType, data: T): T {
    return schema.parse(data);
  }
}
