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
exports.updateAllNotebook = exports.updateSingleNotebook = exports.removeNotebook = exports.removeSingleNotebook = exports.getSingleNotebook = exports.getNotebook = exports.addNewNotebook = void 0;
const model_1 = require("./model");
/**
 * Add / Create a new Notebbok
 */
/**
 *
 * @param _req
 * @param res
 *
 * Step 1 - Obtain payload from the request / Obtaning a data from the request
 * Step 2 - Prepare request for creating a notebook / What we need to insert in the database
 * Step 3 - Create a new Notebook
 * Step 3.1 - Handle if it's getting failed
 * Step 4 - Return success response
 */
// Defining a routes
const addNewNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, userId } = req.body;
    // To store in the db
    const requestPayload = {
        title,
        description,
        userId,
    };
    // Calling the noteBookModel
    const response = yield model_1.noteBookModel.create(requestPayload);
    if (!response) {
        res.send({ message: "Notebook is not created" });
    }
    res.send({ message: "Notebook created successfully" });
});
exports.addNewNotebook = addNewNotebook;
//find all
const getNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.noteBookModel.find({}, { userId: 0, _id: 0, createdAt: 0, updatedAt: 0, __v: 0 });
    if (!response) {
        res.send({ message: "can't find user" });
    }
    res.send(response);
});
exports.getNotebook = getNotebook;
// find single 
const getSingleNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.query;
    const search = { title };
    const response = yield model_1.noteBookModel.findOne(search);
    if (!response) {
        res.send({ message: "can't find user" });
    }
    res.send([response]);
});
exports.getSingleNotebook = getSingleNotebook;
//remove single
const removeSingleNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.query;
    const search = { title };
    const response = yield model_1.noteBookModel.findOneAndRemove(search);
    if (!response) {
        res.send({ message: "not able to delete record" });
    }
    res.send({ message: "records deleted successfully" });
});
exports.removeSingleNotebook = removeSingleNotebook;
//remove all
const removeNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.noteBookModel.remove();
    if (!response) {
        res.send({ message: "not able to delete records" });
    }
    res.send({ message: "records deleted successfully" });
});
exports.removeNotebook = removeNotebook;
// update single
const updateSingleNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myQuery = { title: "fixtion" };
    const response = yield model_1.noteBookModel.updateOne(myQuery, { title: "thriller" });
    if (!response) {
        res.send({ message: "not able to update" });
    }
    res.send(response);
});
exports.updateSingleNotebook = updateSingleNotebook;
// update all 
const updateAllNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.noteBookModel.updateMany({}, { title: "fixtion" });
    if (!response) {
        res.send({ message: "not able to update" });
    }
    res.send(response);
});
exports.updateAllNotebook = updateAllNotebook;
//# sourceMappingURL=controller.js.map