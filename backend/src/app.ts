import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import compression from "compression";
import methodOverride from "method-override";
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

const app = express();

app.set("PORT", process.env.APP_PORT);
app.set("ENV", process.env.APP_ENVIROMENT);

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

app.use(
    compression({
        filter: (req: Request, res: Response) => {
            if (req.headers["x-no-compression"]) {
                return false;
            }

            return compression.filter(req, res);
        },
    })
);

app.disable("x-powered-by");

app.use(methodOverride());

const router = express.Router();
router.use('/api', routes);

app.use(router);
export default app;
