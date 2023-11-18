import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StatusCodes } from "../../../src/constants/matcher";
import { fetchDishesByRestaurantId } from "./thunks/get-dishes";

const entityAdapter = createEntityAdapter();

export const { reducer } = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ status: StatusCodes.Idle }),
  extraReducers: (builder) => {
    builder.addCase(
      fetchDishesByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.status = StatusCodes.Fulfilled;
      }
    );
  },
});

export default reducer;
