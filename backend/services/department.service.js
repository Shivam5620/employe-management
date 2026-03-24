import Department from "../models/department.model.js";

export const createDepartmentService = async (data) => {
  return await Department.create(data);
};

export const getDepartmentsService = async () => {
  return await Department.find().populate("employees");
};

export const getDepartmentByIdService = async (id) => {
  return await Department.findById(id).populate("employees");
};

export const updateDepartmentService = async (id, data) => {
  return await Department.findByIdAndUpdate(id, data, { new: true });
};

export const deleteDepartmentService = async (id) => {
  return await Department.findByIdAndDelete(id);
};