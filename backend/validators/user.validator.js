import Joi from "joi";
import { ROLES } from "../utils/roles.js";


export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
   role: Joi.string()
    .valid(...Object.values(ROLES))
    .required(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  role: Joi.string().valid(...Object.values(ROLES)),
});