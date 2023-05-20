const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const publicRouter = require("./routes/publicRouter");
const privetRouter = require("./routes/privetRouter");
const mongoDBconnection = require("./confige/mongoDBconncetion");
const corsOption = require("./confige/corsSetup");
const errorHandeler = require("./middleware/errorHandeler");
const cookieParser = require("cookie-parser");

//========================== config dotenv
dotenv.config();
//========================== port
const port = process.env.PORT || 5000;
//========================== create app
const app = express();
//========================== use on json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//========================= cookieparser
app.use(cookieParser());
app.use(cors(corsOption));
//========================== use public folder as static
// app.use(express.static("public"));
//=========================== use router
app.use("/api/v1/user", publicRouter);
app.use("/api/v1/auth", privetRouter);
//===========================error handeler
app.use(errorHandeler);
//=========================== create server
app.listen(port, () => {
  mongoDBconnection();
  console.log(`Server running on port ${port}`.bgCyan.black);
});
