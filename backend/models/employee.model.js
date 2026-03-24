import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    salary: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);