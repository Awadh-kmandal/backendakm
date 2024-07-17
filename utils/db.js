const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database Connection Successful ...");
  } catch (error) {
    console.error("Database connection failed...!");
  }
};

module.exports = connectDB;
