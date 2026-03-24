// controllers/employee.controller.js
import * as empService from "../services/employee.service.js";

export const createEmployee = async (req, res) => {
  try {
    const data = await empService.createEmployeeService(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEmployees = async (req, res) => {
  const data = await empService.getEmployeesService();
  res.json(data);
};

export const getEmployee = async (req, res) => {
  const data = await empService.getEmployeeByIdService(req.params.id);
  res.json(data);
};

export const updateEmployee = async (req, res) => {
  const data = await empService.updateEmployeeService(req.params.id, req.body);
  res.json(data);
};

export const deleteEmployee = async (req, res) => {
  await empService.deleteEmployeeService(req.params.id);
  res.json({ message: "Deleted successfully" });
};
