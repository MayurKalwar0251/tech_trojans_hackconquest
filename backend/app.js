const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const ErrorHandler = require("./middleware/error");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// add routes below here only 😂

const userRouter = require("./router/user");

app.use("/api/v2/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello ",
  });
});

app.use(ErrorHandler);

module.exports = app;
