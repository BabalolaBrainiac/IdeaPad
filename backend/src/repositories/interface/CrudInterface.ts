import {ApplicationError} from "../../handlers/ErrorHandler";
import * as A from "fp-ts/Either";

export interface CrudInterface<T> {

    isExist(item: A.Either<string, Partial<T>>): Promise<Boolean> | Promise<ApplicationError>;

    create(item: Partial<T>): Promise<T | ApplicationError>;

    findOne(item: A.Either<string, Partial<T>>): Promise<T | ApplicationError>;

    findById(id: Pick<T, keyof T>): Promise<T | ApplicationError>

    findAll(item: Partial<T>): Promise<T | ApplicationError>

    update(id: A.Either<string, Partial<T>>): Promise<T | ApplicationError>

    delete(item: T): Promise<void | ApplicationError>;

}

export type BaseRepository<T> = CrudInterface<T>;

//
// create(item: Partial<T>): Promise<A.Either<T, typeof ApplicationError>>;
//
// findOne(id: A.Either<string, Partial<T>>):  Promise<A.Either<T, typeof ApplicationError>>;
//
// findAll():  Promise<A.Either<T, typeof ApplicationError>>
//
// update(item: Partial<T>): Promise<A.Either<T, typeof ApplicationError>>;
//
// delete(item: T):  Promise<A.Either<T, typeof ApplicationError>>;