/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.BASE_URL;

// Action
export const postContact = createAsyncThunk("postContact", async (obj) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/contact`, obj);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

const postSlice = createSlice({
  name: "postContact",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(postContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(postContact.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default postSlice.reducer;
