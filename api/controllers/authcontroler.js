const asyencHandeler = require("express-async-handler");
const UserModel = require("../model/UserModel");
const makeToken = require("../helper/MakeToken");
const bcrypt = require("bcryptjs");

//================ user login

const userLogin = asyencHandeler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({ message: "All fields are required!" });
  }

  const LoginUser = await UserModel.findOne({ email });
  if (!LoginUser) {
    res.status(404).json({ message: "User not found" });
  }
  const passCompare = bcrypt.compareSync(password, LoginUser.password);
  if (!passCompare) {
    res.status(404).json({ message: "Password not matched!" });
  }
  console.log(passCompare);

  const Token = makeToken(
    {
      email: passCompare.email,
      password: passCompare.password,
    },
    "15s"
  );
  res.cookie("accessToken", Token, {
    httponly: true,
    secure: false,
    maxage: 1000 * 60 * 60 * 24 * 7,
  });
  res.status(200).json({ token: Token });
});

const me = asyencHandeler(async (req, res, next) => {
  !req.me && res.status(401).json({ message: "User not logged in" });
  res.status(200).json({ message: req.me });
});
const userLogout = (req, res) => {
  res
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
    })
    .json({ message: "Logout success" });
};

module.exports = {
  userLogin,
  me,
  userLogout,
};
