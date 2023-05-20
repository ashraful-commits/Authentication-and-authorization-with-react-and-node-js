const express = require("express");
const { getAllUser, createUser } = require("../controllers/usercontroller");
const tokenVerify = require("../middleware/TokenVerify");

const publicRouter = express.Router();
publicRouter.use(tokenVerify);
publicRouter.route("/").get(getAllUser).post(createUser);
module.exports = publicRouter;
