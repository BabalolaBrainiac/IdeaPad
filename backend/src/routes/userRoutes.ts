import express, {Router} from "express";
import {UserController} from "../controllers/UserController";
import {body} from "express-validator";

const router: Router = express.Router();
// router.get("/", UserController.getAllUsers);

router.post(
    "/create",
    [
        body("user.firstName")
            .isString()
            .withMessage("Please enter a valid first name"),
        body("user.lastName").isString().withMessage("Please enter a last name"),
        body("user.email")
            .isEmail()
            .withMessage("Please enter a valid email"),
        body("user.phoneNumber")
            .isString()
            .withMessage("Please enter a phone number"),
        body("user.password").isLength({min: 4, max: 20}).withMessage('Please enter a valid password' +
            'Password must have a minimum of 4 characters and a maximum of 20'),
    ],
    UserController.createNewUser
);
export default router;
