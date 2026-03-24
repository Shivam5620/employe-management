import mongoose from "mongoose";
import { ROLES } from "../utils/roles.js";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.USER,
    },
  },

  { timestamps: true },
);

export default mongoose.model("User", userSchema);
