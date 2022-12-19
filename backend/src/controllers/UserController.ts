import {UserService} from "../services/userService";
import {IExpressRequest, IResponse} from "../interface/IExpressReq";
import Logger from "../helpers/Logger";
import {validationResult} from "express-validator";

const userService = new UserService();

export const UserController = {

    async createNewUser(
        req: IExpressRequest,
        res: IResponse
    ): Promise<any> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            Logger.error(`Validation error`, errors)
            res.send({
                message: "Validation Error",
                errors,
            });
        }

        const {user} = <any>req.body;
        await userService.create(user)
            .then((response) => {
                res.send({
                    response
                });
            })
            .catch((err) => {
                Logger.error(`An error occured` + err)
                return err
            });
    },
};