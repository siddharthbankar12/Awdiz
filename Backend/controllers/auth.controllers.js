import User from "../models/user.schema.js";

export const Register = async (req, res) => {
  try {
    console.log(req.body, "req.body");
    const { name, email, password, confirmPassword } = req.body.userData;
    console.log(name, email, password, confirmPassword);

    if (!name || !email || !password || !confirmPassword) {
      return res.json({
        success: false,
        message: "please check if anything is missing",
      });
    }
    if (password !== confirmPassword) {
      return res.json({ success: false, message: "password not match" });
    }

    const isEmailExist = await User.find({ email: email });
    console.log(isEmailExist, "isEmailExist");

    if (isEmailExist?.length > 0) {
      return res.json({
        success: false,
        message: "Email already taken, please use another one.",
      });
    }

    //mongoDB data store

    const newUser = User({
      name: name,
      email: email,
      password: password,
    });
    // console.log(newUser, "newUser");
    const responseFromDatabase = await newUser.save();
    console.log(responseFromDatabase, "responseFromDatabase");

    return res.json({ success: true, message: "register successfully" });
  } catch (error) {
    return res.send(error);
  }
};

export const Login = (req, res) => {
  try {
    return res.send("login");
  } catch (error) {
    console.log(error, "error in register api call.");
    return res.send(error);
  }
};
