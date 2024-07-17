const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to home page from controller");
  } catch (error) {
    console.log(error);
  }
};

//Registration page
const register = async (req, res) => {
  try {
    //console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "email already exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg: "Registration scessfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    //res.status(500).json("Internalserver error");
    next(error);
  }
};

//Login page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
      console.log("Login successfull");
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// to get user data
const user = (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };
