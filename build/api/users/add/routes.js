"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
// import {Router} from "express"
// import { Request,Response } from "express"
const controller_1 = require("./controller");
const router = Express.Router();
router.post("/user", controller_1.addNewUser);
router.get("/getUser", controller_1.getUser);
router.get("/getSingleUser", controller_1.getSingleUser);
router.delete("/removeSingleUser", controller_1.removeSingleUser);
router.delete("/removeUser", controller_1.removeUser);
router.put("/updateSingleUser", controller_1.updateSingleUser);
router.put("/updateAllUser", controller_1.updateAllUser);
exports.default = router;
//# sourceMappingURL=routes.js.map