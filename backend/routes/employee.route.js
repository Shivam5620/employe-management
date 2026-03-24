import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employee.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { ROUTES } from "../utils/constants.js";

const router = express.Router();

router.post(ROUTES.EMPLOYEES.CREATE, protect, createEmployee);
router.get(ROUTES.EMPLOYEES.GET_ALL, protect, getEmployees);
router.get(ROUTES.EMPLOYEES.GET_BY_ID, protect, getEmployee);
router.put(ROUTES.EMPLOYEES.UPDATE, protect, updateEmployee);
router.delete(ROUTES.EMPLOYEES.DELETE, protect, deleteEmployee);

export default router;
