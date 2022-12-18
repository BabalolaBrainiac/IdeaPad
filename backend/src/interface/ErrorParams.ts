import {ErrorCode, ErrorName} from "../constants/Errors";

export interface ErrorParams {
    name?: ErrorName;
    code?: ErrorCode;
    message?: string;
    isOperational?: boolean;
}
