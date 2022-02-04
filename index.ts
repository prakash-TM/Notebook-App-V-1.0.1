const Mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
import noteBookRouter from "./src/api/notebooks/add/routes";
import notesRouter from "./src/api/notes/add/routes"
import userRouter from "./src/api/users/add/routes"
import cors from "cors"

// Creating db
const initConnection = async() => {
    await Mongoose.connect("mongodb://localhost/Coherence");
};
//127.0.0.1:27017
initConnection();

// For parsing application/json
app.use(express.json());
app.use(cors())
app.use("", noteBookRouter);
app.use("",notesRouter)
app.use("",userRouter)

app.listen(port, () => {
    console.log("server is running at localhost:", port);
});