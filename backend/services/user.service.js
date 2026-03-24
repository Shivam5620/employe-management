import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import AppError from "../utils/appError.js";

// CREATE
export const createUser = async (data) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) throw new AppError("User already exists", 400);

  const hashed = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashed,
    role: data.role,
  });

  return user;
};

// GET ALL
export const getAllUsers = async () => {
  return await User.find().select("-password");
};

// GET BY ID
export const getUserById = async (id) => {
  const user = await User.findById(id).select("-password");
  if (!user) throw new AppError("User not found", 404);
  return user;
};

// UPDATE
export const updateUser = async (id, data) => {
  const user = await User.findById(id);
  if (!user) throw new AppError("User not found", 404);

  if (data.name) user.name = data.name;
  if (data.email) user.email = data.email;
  if (data.password) {
    user.password = await bcrypt.hash(data.password, 10);
  }

  if (data.role) {
    user.role = data.role;
  }
  return await user.save();
};

// DELETE
export const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new AppError("User not found", 404);
  return;
};
