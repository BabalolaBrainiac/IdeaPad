import { ErrorCode } from "../constants/Errors";
import { ErrorName } from "../constants/Errors";
export interface ErrorParams {
  name?: ErrorName;
  code?: ErrorCode;
  description?: string;
  isOperational?: boolean;
}
