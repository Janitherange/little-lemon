import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    date: "",
    time: "",
    gusts: "",
    occasion: "",
  },
};

const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setValues: (state, action) => {
      const { date, time, gusts, occasion } = action.payload;
      state.date = date;
      state.time = time;
      state.gusts = gusts;
      state.occasion = occasion;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
