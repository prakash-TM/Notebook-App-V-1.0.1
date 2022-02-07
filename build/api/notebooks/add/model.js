"use strict";
// import { ObjectId } from "mongodb";
// import { Schema } from "mongoose";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteBookModel = exports.noteBookSchema = void 0;
const Mongoose = require("mongoose");
// Defining a schema
const noteBookSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
}, { timestamps: true });
exports.noteBookSchema = noteBookSchema;
const noteBookModel = Mongoose.model("Notebook", noteBookSchema);
exports.noteBookModel = noteBookModel;
//# sourceMappingURL=model.js.map