const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["User", "admin"],
      default: "User",
    },
    photo: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
