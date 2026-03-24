import Joi from "joi";
export const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(500),
  price: Joi.number().positive().required(),
});

export const updateProductSchema = Joi.object({
    name: Joi.string().min(3).max(100),
    description: Joi.string().max(500),
    price: Joi.number().positive(),
});
