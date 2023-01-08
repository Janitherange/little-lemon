import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice.js";

export const store = configureStore({
  reducer: {
    booking: BookSlice,
  },
});
