"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
dotenv_1.default.config();
const mongoCon = mongoose_1.default.createConnection(config_1.config.database.mongoDBURI).asPromise();
exports.default = mongoCon;
//# sourceMappingURL=dbCon.js.map