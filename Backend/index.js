import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AllRouters from "./routes/index.js";
import logger from "./log/logger.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to backend server");
});

app.use("/api/V1", AllRouters);

mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log("MongoDB Connected");
});

app.listen(8000, () => console.log("Server is running on port 8000"));
