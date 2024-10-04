const express = require("express");
const {
  loginUser,
  signUpUser,
  getUser,
  logoutUser,
} = require("../controller/user");
const {
  isAuthenticated,
  isEmployee,
  isAdmin,
} = require("../middleware/auth.js");

const userRouter = express.Router();

userRouter.post("/signup", signUpUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-user", isAuthenticated, getUser);
userRouter.get("/get-employee", isEmployee, getUser);
userRouter.get("/get-admin", isAdmin, getUser);
userRouter.get("/logout", logoutUser);

module.exports = userRouter;
