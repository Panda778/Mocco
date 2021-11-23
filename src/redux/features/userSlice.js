import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../store";
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const res = await axios.get(`${base_url}users`);
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idel",
    data: [],
  },
  reducers: {
    getUserData: (state, action) => {
      state.data = action.payload;
      state.status = "success";
      console.log(action);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        console.log(action);
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "fail";
      });
  },
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
