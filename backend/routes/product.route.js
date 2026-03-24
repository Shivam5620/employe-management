// define product routes

import express from "express";
import { ROUTES } from "../utils/constants.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../validators/product.validator.js";

const router = express.Router();

// all routes protected
router.use(protect);

router.post(
  ROUTES.PRODUCTS.CREATE,
  validate(createProductSchema),
  createProduct,
);
router.get(ROUTES.PRODUCTS.GET_ALL, getAllProducts);
router.get(ROUTES.PRODUCTS.GET_BY_ID, getProductById);
router.put(
  ROUTES.PRODUCTS.UPDATE,
  validate(updateProductSchema),
  updateProduct,
);
router.delete(ROUTES.PRODUCTS.DELETE, deleteProduct);

export default router;
