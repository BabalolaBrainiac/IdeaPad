import express, {Router} from 'express';
import userRoutes from "../routes/userRoutes";
import {invalidRouteError} from "../helpers/ErrorHandler";

const router: Router = express.Router();

const moduleRoutes = [
    userRoutes,
    invalidRouteError
];

moduleRoutes.forEach((routes) => router.use(routes));

export default router;
