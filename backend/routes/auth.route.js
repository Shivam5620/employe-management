import express from "express";
import  {ROUTES}  from "../utils/constants.js";
import {  login, logout } from "../controllers/auth.controller.js";
import {validate} from "../middlewares/validate.middleware.js";
import { loginSchema } from "../validators/auth.validator.js";

const router = express.Router();

router.post(ROUTES.AUTH.LOGIN, validate(loginSchema), login);
router.post(ROUTES.AUTH.LOGOUT, logout);

export default router;