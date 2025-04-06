import User from "../models/user.schema.js";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  try {
    console.log(req.body, "req.body");
    const { name, email, password, confirmPassword } = req.body.userData;
    console.log(name, email, password, confirmPassword);

    if (!name || !email || !password || !confirmPassword) {
      return res.json({
        success: false,
        message: "please check if anything is missing ..",
      });
    }

    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Password is not matched ..",
      });
    }

    const isEmailExist = await User.find({ email: email });
    console.log(isEmailExist, "isEmailExist");

    if (isEmailExist?.length > 0) {
      return res.json({
        success: false,
        message: "Email already taken, please use another one ..",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    //mongoDB data store

    const newUser = User({
      name: name,
      email: email,
      password: hashPassword,
    });
    // console.log(newUser, "newUser");
    const responseFromDatabase = await newUser.save();
    console.log(responseFromDatabase, "responseFromDatabase");

    return res.json({ success: true, message: "register successfully .." });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "All fields are required ..",
      });
    }

    const isUserExists = await User.findOne({ email: email });

    if (!isUserExists) {
      return res.json({ success: false, message: "Email is wrong .." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserExists.password
    );

    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Password is wrong .." });
    }

    return res.json({
      success: true,
      message: "Login Successfully ..",
      userData: {
        user: { name: isUserExists.name, phone: isUserExists.phone },
        token: "token",
      },
    });
  } catch (error) {
    console.log(error, "error in register api call.");
    return res.json({ success: false, message: error });
  }
};
