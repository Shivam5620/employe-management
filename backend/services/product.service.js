import productModel from "../models/product.model.js";
import AppError from "../utils/appError.js";

export const createProduct = async (data) => {
  if (!data.name || !data.price) {
    throw new AppError("Name and price are required", 400);
  }

  const product = await productModel.create(data);
  return product;
};

export const getAllProducts = async () => {
  return await productModel.find();
};

export const getProductById = async (id) => {
  const product = await productModel.findById(id);
  if (!product) throw new AppError("Product not found", 404);
  return product;
};

export const updateProduct = async (id, data) => {
  const product = await productModel.findById(id);
  if (!product) throw new AppError("Product not found", 404);

  return await productModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id) => {
  const product = await productModel.findByIdAndDelete(id);
  if (!product) throw new AppError("Product not found", 404);
};