import * as productService from "../services/product.service.js";
import ApiResponse from "../utils/apiResponse.js";

export const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);

    res
      .status(201)
      .json(new ApiResponse(201, "Product created successfully", product));
  } catch (err) {
    next(err);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();

    res
      .status(200)
      .json(new ApiResponse(200, "Products fetched successfully", products));
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);

    res
      .status(200)
      .json(new ApiResponse(200, "Product fetched successfully", product));
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );

    res
      .status(200)
      .json(
        new ApiResponse(200, "Product updated successfully", updatedProduct)
      );
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);

    res
      .status(200)
      .json(new ApiResponse(200, "Product deleted successfully"));
  } catch (err) {
    next(err);
  }
};