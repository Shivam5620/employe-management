import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../app/features/authSlice";
import userReducer from "../app/features/userSlice";
import productReducer from "../app/features/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users:userReducer,
    products:productReducer,
  },
});
