import {ErrorCode, ErrorName} from "../constants/Errors";
import {ErrorParams} from "../interface/ErrorParams";
import {Request, Response} from 'express';

export class ApplicationError extends Error {
    public readonly name: ErrorName | string;
    public readonly errorCode: ErrorCode | undefined;
    public readonly message: string | any;
    public readonly isOperational: boolean = true;

    constructor(args: ErrorParams) {
        super(args.message);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = args.name || ErrorCode.UNDEFINED;
        this.errorCode = args.code;
        this.message = args.message || ErrorName.INTERNAL_SERVER_ERROR;

        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }

    }
}

export async function invalidRouteError(req: Request, res: Response): Promise<Response> {
    return res.status(404).json({
        message: 'The route your are calling does not exist',
        error: {
            status: 404,
        },
    });
}
