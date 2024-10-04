const User = require("../models/user");
const catchAsync = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/sendToken");

const signUpUser = catchAsync(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return next(new ErrorHandler("User Already Exists", 400));
    }

    const hashedPass = await bcrypt.hash(password, 10);

    // Create a new user
    user = await User.create({ name, email, password: hashedPass });

    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const loginUser = catchAsync(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("User not found", 400));
    }
    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return next(
        new ErrorHandler("Password didn't match, Please Try Again", 400)
      );
    }
    sendToken(user, 202, res, "Login Successfull");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const getUser = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return next(new ErrorHandler("Please Login First", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
const getEmployeeDetails = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return next(new ErrorHandler("Please Login First", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
const getAdminDetails = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return next(new ErrorHandler("Please Login First", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

const logoutUser = catchAsync(async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({
      success: true,
      message: "Log out successful!",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

module.exports = {
  signUpUser,
  loginUser,
  getUser,
  logoutUser,
};
