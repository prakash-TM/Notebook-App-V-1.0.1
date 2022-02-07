"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const routes_1 = require("./api/notebooks/add/routes");
const routes_2 = require("./api/notes/add/routes");
const routes_3 = require("./api/users/add/routes");
const cors = require("cors");
// Creating db
const initConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Mongoose.connect("mongodb://localhost/Coherence");
});
//127.0.0.1:27017
initConnection();
// For parsing application/json
app.use(express.json());
app.use(cors());
app.use("", routes_1.default);
app.use("", routes_2.default);
app.use("", routes_3.default);
app.listen(port, () => {
    console.log("server is running at localhost:", port);
});
//# sourceMappingURL=index.js.map