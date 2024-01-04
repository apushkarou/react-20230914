import { createSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "./actions";
import { Order } from "../../constants/matcher";

const { reducer } = createSlice({
  name: "cart",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(increment.type, (state, { payload }) => {
        state[payload] = (state[payload] || 0) + 1;
      })
      .addCase(decrement.type, (state, { payload }) => {
        state[payload] =
          state[payload] || 0 > Order.MinOrder ? state[payload] - 1 : 0;
      });
  },
});

export default reducer;
