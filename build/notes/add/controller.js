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
exports.updateAllNotes = exports.updateSingleNotes = exports.removeNotes = exports.removeSingleNotes = exports.getSingleNotes = exports.getNotes = exports.addNewNotes = void 0;
const model_1 = require("./model");
const addNewNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, authorId, authorName, email, tags: [{ name }], place, location: { type, coordinates, required }, content, category, thumbnails: [{ path, createdAt, updatedAt, deviceType }], video: { titleV, creditedByV }, soundClips: { titleS, creditedByS }, status, isActive, accessType, isPrivate, contributors: [{ userId, userAccess }], noteBookId } = req.body;
    const requestPayload = {
        title,
        authorId,
        authorName,
        email,
        tags: [{ name }],
        place,
        location: { type, coordinates, required },
        content,
        category,
        thumbnails: [{ path, createdAt, updatedAt, deviceType }],
        video: { titleV, creditedByV },
        soundClips: { titleS, creditedByS },
        status,
        isActive,
        accessType,
        isPrivate,
        contributors: [{ userId, userAccess }],
        noteBookId
    };
    const response = yield model_1.notesModel.create(requestPayload);
    if (!response) {
        res.send({ message: "Notes is not created" });
    }
    res.send({ message: "Notes created successfully" });
});
exports.addNewNotes = addNewNotes;
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.notesModel.find({}, { __v: 0, createdAt: 0, updatedAt: 0, });
    if (!response) {
        res.send({ message: "can't find user" });
    }
    res.send(response);
});
exports.getNotes = getNotes;
const getSingleNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.notesModel.findOne({ title: "iron man" });
    if (!response) {
        res.send({ message: "can't find user" });
    }
    res.send({ response });
});
exports.getSingleNotes = getSingleNotes;
const removeSingleNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.notesModel.findOneAndRemove({ title: "iron man" });
    if (!response) {
        res.send({ message: "not able to delete record" });
    }
    res.send({ message: "records deleted successfully" });
});
exports.removeSingleNotes = removeSingleNotes;
const removeNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.notesModel.remove();
    if (!response) {
        res.send({ message: "not able to delete records" });
    }
    res.send({ message: "records deleted successfully" });
});
exports.removeNotes = removeNotes;
const updateSingleNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myQuery = { title: "iron man" };
    const response = yield model_1.notesModel.updateOne(myQuery, { title: "spider man" });
    if (!response) {
        res.send({ message: "not able to update" });
    }
    res.send({ response });
});
exports.updateSingleNotes = updateSingleNotes;
const updateAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.notesModel.updateMany({}, { title: "iron man" });
    if (!response) {
        res.send({ message: "not able to update" });
    }
    res.send({ response });
});
exports.updateAllNotes = updateAllNotes;
//# sourceMappingURL=controller.js.map