"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT;
const server = app_1.default.listen(port, () => {
    console.log('DB Connection established');
    return console.log(`Express is listening at http://localhost:${port}`);
});
process.once('SIGUSR2', function () {
    server.close(function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
//# sourceMappingURL=index.js.map