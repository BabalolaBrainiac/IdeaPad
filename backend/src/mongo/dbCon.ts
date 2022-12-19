import dotenv from "dotenv";
import mongoose from "mongoose";
import {config} from "../config/config";

dotenv.config();

const mongoURI: string = <string>config.database.mongoDBURI;

const mongoCon = mongoose.createConnection(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
export default mongoCon;
