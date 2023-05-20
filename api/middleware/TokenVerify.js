const jwt = require("jsonwebtoken");
const asyencHandeler = require("express-async-handler");
const UserModel = require("../model/UserModel");
const tokenVerify = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;
  if (!token) {
    res.status(404).json({ message: "not authorize" });
  }
  const myToken = token.split(" ")[1];

  jwt.verify(
    myToken,
    process.env.JWT_SECRECT,
    asyencHandeler(async (err, decode) => {
      if (err) {
        res.status(404).json({ message: "Not user" });
      } else {
        const me = await UserModel.find({ email: decode.email });

        req.me = me;
        next();
      }
    })
  );
};

module.exports = tokenVerify;
