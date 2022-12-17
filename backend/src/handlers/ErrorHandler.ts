import { ErrorCode, ErrorName } from "../constants/Errors";
import { ErrorParams } from "../interface/ErrorParams";
import { Response } from "express";

export class ApplicationError extends Error {
  public readonly name: ErrorName | string;
  public readonly errorCode: ErrorCode | undefined;
  public readonly isOperational: boolean = true;

  constructor(args: ErrorParams) {
    super(args.description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || ErrorCode.UNDEFINED;
    this.errorCode = args.code;

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }
    Error.captureStackTrace(this);
  }
}
