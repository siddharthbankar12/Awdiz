import User from "../models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { name, email, role, password, confirmPassword } = req.body;

    if (!name || !email || !role) {
      return res.json({ success: true, message: "all fields are required" });
    }

    if (password !== confirmPassword) {
      return res.json({ success: false, message: "Password not match" });
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.json({
        success: false,
        message: "email already exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      role,
      password: hashPassword,
    });

    await newUser.save();

    return res.json({ success: true, message: "register successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({ success: false, message: "email required" });
    }
    if (!password) {
      return res.json({ success: false, message: "password required" });
    }

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.json({
        success: false,
        message: "user not found, please register",
      });
    }

    console.log(password, userExist.password);

    const checkPassword = await bcrypt.compare(password, userExist.password);

    if (!checkPassword) {
      return res.json({ success: false, message: "password wrong" });
    }

    const token = jwt.sign({ userId: userExist._id }, process.env.SECREATKEY);

    return res.json({
      success: true,
      message: "login successful",
      userData: userExist,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};
