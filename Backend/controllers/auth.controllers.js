import User from "../models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    console.log(req.body, "req.body");
    const { name, email, password, confirmPassword, role } = req.body.userData;
    console.log(name, email, password, confirmPassword, role);

    if (!name || !email || !password || !confirmPassword || !role) {
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
      role: role,
    });
    // console.log(newUser, "newUser");
    const responseFromDatabase = await newUser.save();
    console.log(responseFromDatabase, "responseFromDatabase");

    return res.json({ success: true, message: "register successfully .." });
  } catch (error) {
    console.log(error, "error in register api call ..");
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

    const JwtToken = jwt.sign(
      { userId: isUserExists._id },
      process.env.TOKENSECRETKEY
    );

    return res.json({
      success: true,
      message: "Login Successfully ..",
      userData: {
        user: {
          userId: isUserExists._id,
          name: isUserExists.name,
          phone: isUserExists.phone,
          role: isUserExists.role,
        },
        token: JwtToken,
      },
    });
  } catch (error) {
    console.log(error, "error in login api call ..");
    return res.json({ success: false, message: error });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.json({ success: false });
    }

    const tokenData = jwt.verify(token, process.env.TOKENSECRETKEY);
    if (!tokenData) {
      return res.json({ success: false });
    }

    const isUserExists = await User.findById(tokenData.userId);
    if (!isUserExists) {
      return res.json({ success: false });
    }

    return res.json({
      success: true,
      userData: {
        user: {
          userId: isUserExists._id,
          name: isUserExists.name,
          phone: isUserExists.phone,
          role: isUserExists.role,
        },
      },
    });
  } catch (error) {
    console.log(error, "error in get-current-user api call ..");
    return res.json({ success: false, message: error });
  }
};
