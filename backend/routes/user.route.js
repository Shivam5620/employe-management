import express from "express";
import { ROUTES } from "../utils/constants.js";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createUserSchema,
  updateUserSchema,
} from "../validators/user.validator.js";

const router = express.Router();

// all routes protected
router.use(protect);

router.post(ROUTES.USERS.CREATE, validate(createUserSchema), createUser);
router.get(ROUTES.USERS.GET_ALL, getAllUsers);
router.get(ROUTES.USERS.GET_BY_ID, getUserById);
router.put(ROUTES.USERS.UPDATE, validate(updateUserSchema), updateUser);
router.delete(ROUTES.USERS.DELETE, deleteUser);

export default router;
