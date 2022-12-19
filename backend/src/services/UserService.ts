import {CrudInterface} from "../repositories/interface/CrudInterface";
import IUser from "../interface/IUser";
import {ApplicationError} from "../helpers/ErrorHandler";
import {MongoUUIDHelper} from "../helpers/UUIDHandler";
import {ErrorCode, ErrorName} from "../constants/Errors";
import Logger from "../helpers/Logger";
import {IPagination, paging} from "../helpers/Pagination";
import {Users} from "../mongo/schema/User";

type UserRepository<IUser> = CrudInterface<IUser>;

export class UserService implements UserRepository<IUser> {

    async create(item: Partial<IUser>): Promise<IUser | ApplicationError> {

        try {
            let isExist = await Users.findOne(item.userId)
            if (isExist) {
                Logger.error(new Error("A User already exists with the following data" + item.email))
                return new ApplicationError({
                    name: ErrorName.INTERNAL_SERVER_ERROR,
                    code: ErrorCode.INTERNAL_SERVER_ERROR,
                    message: "User already exist."
                })
            }

            const newUser = await Users.create(item)
            Logger.info("User successfully created", newUser)
            return newUser
        } catch (err) {
            Logger.error(new Error("User could not be created") + err);
            return new ApplicationError({
                name: err.name || ErrorName.INTERNAL_SERVER_ERROR,
                code: err?.code || ErrorCode.INTERNAL_SERVER_ERROR,
                message: err.message || "Unable to create new user"
            })
        }

    }

    async delete(item: IUser): Promise<void | ApplicationError> {
        const {userId} = item;

        try {
            await Users.deleteOne(MongoUUIDHelper.juuidStringToBin(userId)).then(() => {
                Logger.info(`User with ID ${userId} has been deleted`)
            });

        } catch (err) {
            return new ApplicationError({
                name: err.name || ErrorName.INTERNAL_SERVER_ERROR,
                code: err?.code || ErrorCode.INTERNAL_SERVER_ERROR,
                message: err.message || "Unable to Delete user"
            })
        }
    }

    async findAll(item: Partial<IUser>, page: any, size: any): Promise<IPagination | ApplicationError> {

        try {
            const params = {
                $or: [
                    {userId: `+${item}`},
                    {email: {$regex: item, $options: 'i'}},
                    {userIdd: item},
                ],
            };

            let [users, total] = await Promise.all([
                await Users.find(params),
                await Users.count(params)
            ]);

            return {
                ...paging(users.length, users.length, page, size),
                totalItems: total,
            }

        } catch (err) {
            return new ApplicationError({
                name: err.name || ErrorName.INTERNAL_SERVER_ERROR,
                code: err?.code || ErrorCode.INTERNAL_SERVER_ERROR,
                message: err?.message || "Unable to find all users"
            })
        }
    }


    async findById(id: Pick<IUser, "userId">): Promise<IUser | ApplicationError> {

        try {

            let user = await Users.findOne({userId: id});
            if (!user) {
                Logger.error(new Error("User does not exist"))
            }

            return user as IUser;

        } catch (err) {
            return new ApplicationError({
                name: err.name || ErrorName.INTERNAL_SERVER_ERROR,
                code: err?.code || ErrorCode.INTERNAL_SERVER_ERROR,
                message: err.message || "Unable to find all users"
            })

        }
    }

    async findOne(item: Partial<IUser>): Promise<IUser | ApplicationError> {

        try {
            const params = {
                $or: [
                    {userId: {$regex: item, $options: 'i'}},
                    {phoneNumber: {$regex: item, $options: 'i'}},
                    {firstName: {$regex: item, $options: 'i'}},
                    {lastName: {$regex: item, $options: 'i'}}

                ],
            };

            let user = await Users.findOne(params);
            if (!user) {
                Logger.error(new Error("User does not exist"))
            }

            return user as IUser;
        } catch (err) {
            return new ApplicationError({
                name: err.name || ErrorName.INTERNAL_SERVER_ERROR,
                code: err?.code || ErrorCode.INTERNAL_SERVER_ERROR,
                message: err.message || "Unable to find all users"
            })
        }
    }

    // isExist(item: Either<string, Partial<IUser>>): Promise<Boolean> | Promise<typeof ApplicationError> {
    //     return Promise.resolve(undefined);
    // }
    //
    // update(id: Either<string, Partial<IUser>>): Promise<null> | Promise<typeof ApplicationError> {
    //     return Promise.resolve(undefined);
    // }

}