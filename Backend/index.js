import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("welcome to backend server");
});

app.get("/hello", (req, res) => {
  return res.send("kasay madali");
});

app.get("/books", (req, res) => {
  return res.send("my books");
});

app.get("/products", (req, res) => {
  return res.send("my products");
});

app.post("/register", (req, res) => {
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
});

app.listen(8000, () => console.log("server is running on port localhost:8000"));
