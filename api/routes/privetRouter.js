const express = require("express");
const { userLogin, me, userLogout } = require("../controllers/authcontroler");
const tokenVerify = require("../middleware/TokenVerify");

const privetRouter = express.Router();

privetRouter.route("/login").post(userLogin);
privetRouter.route("/me").get(tokenVerify, me);
privetRouter.route("/logout").post(userLogout);
module.exports = privetRouter;
