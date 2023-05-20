const mongoose = require("mongoose");

const mongoDBconnection = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_SERVER);
    console.log(`Mongodb connected successfully`.bgMagenta.black);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongoDBconnection;
