const userModel = require("../models/userModel");

// register user
const registerUser = (req, res) => {
  res.json({ message: "register" });
};

module.exports = {
  registerUser,
};
