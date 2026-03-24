import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import AppError from "../utils/appError.js";

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new AppError("Invalid credentials", 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError("Invalid credentials", 401);

  return {
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token: generateToken(user),
  };
};

export const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) throw new AppError("User not found", 404);
  return user;
};
