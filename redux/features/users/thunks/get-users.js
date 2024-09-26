import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersModule } from "../selectors";
import { Urls } from "../../../../src/constants/matcher";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch(`${Urls.ServerBase}/users`);

    return await response.json();
  },
  {
    condition: (_, { getState }) => !selectUsersModule(getState())?.length,
  }
);
