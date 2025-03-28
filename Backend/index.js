import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/books", (req, res) => {
  res.send("my books.");
});
app.get("/products", (req, res) => {
  res.send("my products.");
});
app.get("/hello", (req, res) => {
  res.send("kasay madali");
});

app.listen(8000, () => console.log("server is running on port localhost:8000"));
