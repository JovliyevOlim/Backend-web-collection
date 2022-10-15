const User = require("../model/UserModel");

const validateUser = require("../validators/user-validator");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  //checking input data
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send("Invalid user");
  }

  //checking if email is already in the database
  const username =await  User.findOne({username: req.body.username})
  if (username) return res.status(400).json({
    success:false,
    message:"Username already exist"
  });
  const email = await User.findOne({ email: req.body.email });
  if (email) return res.status(400).json({
    success:false,
    message:"Email already exist"
  });

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({ ...req.body, password: hashPassword });

  try {
    const savedUser = await user.save();
    res.status(201).json({
      success:true,
      savedUser
    })
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  //Checking if user is already in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email or Password is error");
  }
  // Password is Correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or Password is error");

  //Create and assing a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.status(200).send({
    message: "success",
    token: token,
    user
  });
};

module.exports = {
  login,
  register,
};
