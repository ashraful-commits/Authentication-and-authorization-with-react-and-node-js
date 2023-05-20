const asyencHandeler = require("express-async-handler");
const UserModel = require("../model/UserModel");
const makeHash = require("../helper/MakeHash");

//========================= user controller

const getAllUser = asyencHandeler(async (req, res) => {
  const user = await UserModel.find();
  console.log(user);
  if (user) {
    res.status(200).json({ message: "all user found", user: user });
  } else {
    res.status(200).json({ message: "all user found" });
  }
});
const createUser = asyencHandeler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserModel.create({
    name,
    email,
    password: await makeHash(password),
  });

  if (user) {
    res.status(200).json({ message: "all user found", user: user });
  } else {
    res.status(200).json({ message: "User not found" });
  }
});

module.exports = {
  getAllUser,
  createUser,
};
