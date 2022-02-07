"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
// import { Router } from "express"
const controller_1 = require("./controller");
const router = Express.Router();
router.post("/notes", controller_1.addNewNotes);
router.get("/getNotes", controller_1.getNotes);
router.get("/getSingleNotes", controller_1.getSingleNotes);
router.delete("/removeSingleNotes", controller_1.removeSingleNotes);
router.delete("/removeNotes", controller_1.removeNotes);
router.put("/updateSingleNotes", controller_1.updateSingleNotes);
router.put("/updateAllNotes", controller_1.updateAllNotes);
exports.default = router;
//# sourceMappingURL=routes.js.map