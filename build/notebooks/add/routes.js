"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
//import { Router } from "express"; // Not required
const controller_1 = require("./controller");
// Initializing the router
//const router: Router = Express.Router();
const router = Express.Router();
router.post("/notebook", controller_1.addNewNotebook);
router.get("/getNotebook", controller_1.getNotebook);
router.get("/getSingleNotebook", controller_1.getSingleNotebook);
router.delete("/removeSingleNotebook", controller_1.removeSingleNotebook);
router.delete("/removeNotebook", controller_1.removeNotebook);
router.put("/updateSingleNotebook", controller_1.updateSingleNotebook);
router.put("/updateAllNotebook", controller_1.updateAllNotebook);
exports.default = router;
//# sourceMappingURL=routes.js.map