const User = require("../models/user");
const catchAsync = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

// Helper function to check roles and handle token
const verifyTokenAndRole = async (req, role) => {
  const { token } = req.cookies;

  if (!token) {
    throw new ErrorHandler("Please Login First", 401);
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decodedToken.id);

  if (!user) {
    throw new ErrorHandler("User not found", 404);
  }

  if (user.role !== role) {
    throw new ErrorHandler(`Only ${role} can access this route`, 403);
  }

  req.user = user; // Attach user to request object
};

// Authentication middleware for all users
exports.isAuthenticated = catchAsync(async (req, res, next) => {
  await verifyTokenAndRole(req, "user");
  next();
});

// Authentication middleware for employees
exports.isEmployee = catchAsync(async (req, res, next) => {
  await verifyTokenAndRole(req, "employee");
  next();
});

// Authentication middleware for admin
exports.isAdmin = catchAsync(async (req, res, next) => {
  await verifyTokenAndRole(req, "admin");
  next();
});
