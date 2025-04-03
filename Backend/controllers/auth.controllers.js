export const Register = (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    console.log(name, email, password, confirmPassword);

    if (!name || !email || !password || !confirmPassword) {
      return res.send("please check if anything is missing");
    }
    if (password !== confirmPassword) {
      return res.send("password not match");
    }

    return res.send("register successfully");
  } catch (error) {
    return res.send(error);
  }
};

export const Login = (req, res) => {
  try {
    return res.send("login");
  } catch (error) {
    return res.send(error);
  }
};
