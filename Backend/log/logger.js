import morgan from "morgan";
import fs from "fs";
import path from "path";

// Ensure the "log" directory exists
const logDirectory = path.join(process.cwd(), "log");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Create a write stream in append mode
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "./access.log"),
  { flags: "a" }
);

// Create the morgan middleware
const logger = morgan("combined", { stream: accessLogStream });

export default logger;
