import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchRestaurants } from "./thunks/get-restaurants";
import { StatusCodes } from "../../../src/constants/matcher";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
      state.status = StatusCodes.Fulfilled;
    });
  },
});

export default restaurantSlice.reducer;
