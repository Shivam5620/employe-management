import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  },
  { timestamps: true },
);

export default mongoose.model("Department", departmentSchema);
