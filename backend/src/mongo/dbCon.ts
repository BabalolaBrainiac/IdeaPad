import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {config} from '../config/config';

dotenv.config();

const mongoCon = mongoose.createConnection(<string>config.database.mongoDBURI, {
    connectTimeoutMS: 2000,
    keepAlive: true
});

export default mongoCon;
