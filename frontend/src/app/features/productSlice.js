import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as service from "../services/product";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

// 🔥 GET
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await service.fetchProducts();
    return response.data; // full ApiResponse
  },
);

// 🔥 ADD
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data) => {
    const response = await service.fetchAddProduct(data);
    return response.data;
  },
);

// 🔥 UPDATE
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, data }) => {
    const response = await service.fetchUpdateProduct(id, data);
    return response.data;
  },
);

// 🔥 DELETE
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await service.fetchDeleteProduct(id);
    return id; // 👈 return only id
  },
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data || []; // ✅ FIX
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.products = [];
      })

      // ADD
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload.data); // ✅ FIX
      })

      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (p) => p._id === action.payload.data._id, // ✅ FIX
        );
        if (index !== -1) {
          state.products[index] = action.payload.data;
        }
      })

      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (p) => p._id !== action.payload, // ✅ FIX
        );
      });
  },
});

export default productSlice.reducer;
