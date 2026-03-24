// services/employee.service.js
import Employee from "../models/employee.model.js";
import Department from "../models/department.model.js";

export const createEmployeeService = async (data) => {
  const emp = await Employee.create(data);

  // sync department
  await Department.findByIdAndUpdate(emp.department, {
    $push: { employees: emp._id },
  });

  return emp;
};

export const getEmployeesService = async () => {
  return await Employee.find().populate("department");
};

export const getEmployeeByIdService = async (id) => {
  return await Employee.findById(id).populate("department");
};

export const updateEmployeeService = async (id, data) => {
  const oldEmp = await Employee.findById(id);

  const updated = await Employee.findByIdAndUpdate(id, data, {
    new: true,
  });

  // handle department change
  if (data.department && oldEmp.department.toString() !== data.department) {
    await Department.findByIdAndUpdate(oldEmp.department, {
      $pull: { employees: oldEmp._id },
    });

    await Department.findByIdAndUpdate(data.department, {
      $push: { employees: oldEmp._id },
    });
  }

  return updated;
};

export const deleteEmployeeService = async (id) => {
  const emp = await Employee.findById(id);

  await Department.findByIdAndUpdate(emp.department, {
    $pull: { employees: emp._id },
  });

  return await Employee.findByIdAndDelete(id);
};
