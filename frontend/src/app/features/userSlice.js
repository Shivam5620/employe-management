import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as service from "../services/user";

// Initial state
const initialState = {
  users: [],
  loading: false,
  error:null
};

// Fetch all users
export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const response = await service.fetchUsers();
  return response.data;
});

// Add a user
export const fetchAddUser = createAsyncThunk("users/add", async (data) => {
  const response = await service.fetchAddUser(data);
  return response.data;
});

// Update a user
export const fetchUpdateUser = createAsyncThunk(
  "users/update",
  async ({ id, data }) => {
    const response = await service.fetchUpdateUser(id, data);
    return response.data;
  },
);

// Delete a user (optional, can be used later)
export const fetchDeleteUser = createAsyncThunk("users/delete", async (id) => {
  const response = await service.fetchDeleteUser(id);
  return response.data; // return deleted id
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload || [];
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.users = [];
      })

      // Add user
      .addCase(fetchAddUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...state.users, action.payload.data];
      })
      .addCase(fetchAddUser.rejected, (state) => {
        state.loading = false;
      })

      // Update user
      .addCase(fetchUpdateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (user) => user._id === action.payload.data._id,
        );
        if (index !== -1) {
          state.users[index] = action.payload.data;
        }
      })
      .addCase(fetchUpdateUser.rejected, (state) => {
        state.loading = false;
      })

      // Delete user
      .addCase(fetchDeleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((u) => u._id !== action.payload.id);
      })
      .addCase(fetchDeleteUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
