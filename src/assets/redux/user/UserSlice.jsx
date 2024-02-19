import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {

        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const response = await axios.post("http://127.0.0.1:3000/api/user/get_user");

    return response.data;

  } catch (error) {
    throw new Error(error.message);
  }
});

export default userSlice.reducer;
