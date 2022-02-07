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
exports.updateAllUser = exports.updateSingleUser = exports.removeUser = exports.removeSingleUser = exports.getSingleUser = exports.getUser = exports.addNewUser = void 0;
const model_1 = require("./model");
const addNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, name, email, jobDetails: { title, designation, organization, isWorking }, contactNumber, dob, gender, password, isActive, isVerified, roles: [{ r_id, r_isActive }], group: [{ g_id, g_isActive }], lastActive } = req.body;
    const userPayload = {
        userName,
        name,
        email,
        jobDetails: {
            title,
            designation,
            organization,
            isWorking
        },
        contactNumber,
        dob,
        gender,
        password,
        isActive,
        isVerified,
        roles: [{
                r_id,
                r_isActive
            }],
        group: [{
                g_id,
                g_isActive
            }],
        lastActive
    };
    const response = yield model_1.userModel.create(userPayload);
    if (!response) {
        res.send({ message: "User is not created" });
    }
    res.send({ message: "User created successfully" });
});
exports.addNewUser = addNewUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.userModel.find({}, { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 });
    if (!response) {
        res.send({ message: "can't find user" });
    }
    res.send(response);
});
exports.getUser = getUser;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.userModel.findOne({ name: "prakash" });
    if (!response) {
        res.send({ message: "can't find user" });
    }
    res.send({ response });
});
exports.getSingleUser = getSingleUser;
const removeSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.userModel.findOneAndRemove({ name: "prakash" });
    if (!response) {
        res.send({ message: "not able to delete record" });
    }
    res.send({ message: "records deleted successfully" });
});
exports.removeSingleUser = removeSingleUser;
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.userModel.remove();
    if (!response) {
        res.send({ message: "not able to delete records" });
    }
    res.send({ message: "records deleted successfully" });
});
exports.removeUser = removeUser;
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myQuery = { name: "prakash" };
    const response = yield model_1.userModel.updateOne(myQuery, { name: "Tony stark" });
    if (!response) {
        res.send({ message: "not able to update" });
    }
    res.send({ response });
});
exports.updateSingleUser = updateSingleUser;
const updateAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield model_1.userModel.updateMany({}, { name: "Rock" });
    if (!response) {
        res.send({ message: "not able to update" });
    }
    res.send({ response });
});
exports.updateAllUser = updateAllUser;
//# sourceMappingURL=controller.js.map