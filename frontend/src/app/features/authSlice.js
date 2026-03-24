import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as service from "../services/auth";

// LOGIN
export const fetchLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
      const response = await service.fetchLogin({ email, password });
      return response;
  },
);

// LOGOUT
export const fetchLogout = createAsyncThunk("auth/logout", async () => {
  const response = await service.fetchLogout();
  return response;
});

// =====================
// INITIAL STATE
// =====================

const initialState = {
  user: null,
  logged_in: false,
  loading: false,
  error: false,
};

// =====================
// SLICE
// =====================

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ================= LOGIN =================
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.logged_in = true;
        state.loading = false;

        // save token
        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      // ================= LOGOUT =================
      .addCase(fetchLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = null;
        state.logged_in = false;
        state.loading = false;

        localStorage.removeItem("token");
      })
      .addCase(fetchLogout.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
