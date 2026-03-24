import * as deptService from "../services/department.service.js";

export const createDepartment = async (req, res) => {
  try {
    const data = await deptService.createDepartmentService(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getDepartments = async (req, res) => {
  const data = await deptService.getDepartmentsService();
  res.json(data);
};

export const getDepartment = async (req, res) => {
  const data = await deptService.getDepartmentByIdService(req.params.id);
  res.json(data);
};

export const updateDepartment = async (req, res) => {
  const data = await deptService.updateDepartmentService(
    req.params.id,
    req.body
  );
  res.json(data);
};

export const deleteDepartment = async (req, res) => {
  await deptService.deleteDepartmentService(req.params.id);
  res.json({ message: "Deleted successfully" });
};