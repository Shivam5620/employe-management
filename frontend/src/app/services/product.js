import ax from "../../lib/axios";
import { endpoints } from "../../lib/constants";

export const fetchProducts = () => {
  return ax.get(endpoints.products.index);
};

export const fetchAddProduct = (data) => {
  return ax.post(endpoints.products.index, data);
};

export const fetchUpdateProduct = (id, data) => {
  const url = endpoints.products.id.replace(":id", id);
  return ax.put(url, data);
};

export const fetchDeleteProduct = (id) => {
  const url = endpoints.products.id.replace(":id", id);
  return ax.delete(url);
};