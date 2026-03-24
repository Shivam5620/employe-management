import express from "express";
import {
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/department.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { ROUTES } from "../utils/constants.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import { ROLES } from "../utils/roles.js";

const router = express.Router();

router.post(
  ROUTES.DEPARTMENTS.CREATE,
  protect,
  authorizeRoles(ROLES.ADMIN),
  createDepartment,
);
router.get(
  ROUTES.DEPARTMENTS.GET_ALL,
  protect,
  authorizeRoles(ROLES.MANAGER),
  getDepartments,
);
router.get(
  ROUTES.DEPARTMENTS.GET_BY_ID,
  protect,
  authorizeRoles(ROLES.MANAGER),
  getDepartment,
);
router.put(
  ROUTES.DEPARTMENTS.UPDATE,
  protect,
  authorizeRoles(ROLES.ADMIN),
  updateDepartment,
);
router.delete(
  ROUTES.DEPARTMENTS.DELETE,
  protect,
  authorizeRoles(ROLES.ADMIN),
  deleteDepartment,
);

export default router;
