import {ApplicationError} from "../../helpers/ErrorHandler";
import {IPagination} from "../../helpers/Pagination";

export interface CrudInterface<T> {


    create(item: Partial<T>): Promise<T | ApplicationError>;

    findOne(item: Partial<T>): Promise<T | ApplicationError>;

    findById(id: Pick<T, keyof T>): Promise<T | ApplicationError>

    findAll(item: Partial<T>, page: any, size: any): Promise<IPagination | ApplicationError>

    delete(item: T): Promise<void | ApplicationError>;

    //
    // update(id: A.Either<string, Partial<T>>): Promise<T | ApplicationError>
    //
    // isExist(item: A.Either<string, Partial<T>>): Promise<Boolean> | Promise<ApplicationError>;

}

export type BaseRepository<T> = CrudInterface<T>;