import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import AllRouters from "./routes/index.js";

const app = express();

// Ensure the "log" directory exists
const logDirectory = path.join(process.cwd(), "log");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Create a write stream in append mode
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

// Use Morgan to log requests to the file
app.use(morgan("combined", { stream: accessLogStream }));

// Also log to console
// app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Welcome to backend server");
});

app.use("/api/V1", AllRouters);

app.listen(8000, () => console.log("Server is running on port 8000"));
