import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks/get-users";

const entityAdapter = createEntityAdapter();

export const { reducer } = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});

export default reducer;
