import { createSlice } from "@reduxjs/toolkit";
import { StatusCodes } from "../../constants/matcher";

const { reducer } = createSlice({
  name: "request",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: StatusCodes.Pending,
          };
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: StatusCodes.Fulfilled,
          };
        }
      );
  },
});

export default reducer;
