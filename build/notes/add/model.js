"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesSchema = exports.notesModel = void 0;
// import { Schema } from "mongoose";
const Mongoose = require("mongoose");
const notesSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    authorId: { type: String, required: true },
    authorName: { type: String, required: false },
    email: { type: String, required: false },
    tags: [{
            name: { type: String, required: false },
        }],
    place: { type: String, required: false },
    location: {
        type: { type: String },
        coordinates: [Number],
        required: false
    },
    content: { type: String, required: false, text: true },
    category: { type: String, required: false },
    thumbnails: [{
            path: { type: String, required: false },
            createdAt: { type: String, required: false },
            updatedAt: { type: String, required: false },
            deviceType: { type: String, required: false, enum: ["web", "mobile", "tablet"] }
        }],
    video: {
        titleV: { type: String, required: false },
        creditedByV: { type: String, required: false }
    },
    soundClips: {
        titleS: { type: String, required: false },
        creditedByS: { type: String, required: false }
    },
    status: { type: String, required: true, default: "active", enum: ["active", "inactive"] },
    isActive: { type: Boolean, required: true, default: true },
    accessType: { type: String, required: true, default: "private", enum: ["public", "private"], },
    isPrivate: { type: Boolean, required: true, default: true },
    contributors: [{
            userId: { type: String, required: true },
            userAccess: { type: String, required: true, enum: ["viewer", "editor"] },
        }],
    noteBookId: { type: String, required: false },
}, { timestamps: true });
exports.notesSchema = notesSchema;
const notesModel = Mongoose.model("Notes", notesSchema);
exports.notesModel = notesModel;
/***
 * Title
 * Author Name
 * Email
 * Place
 * Location
 * Category
 * Pictures
 * Sound Clips
 * Videos
 *
 *
 */ 
//# sourceMappingURL=model.js.map