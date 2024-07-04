import { configureStore } from "@reduxjs/toolkit";
import contact from "./contact/postSlice";

export const store = configureStore({
  reducer: {
    contact: contact,
  },
});
