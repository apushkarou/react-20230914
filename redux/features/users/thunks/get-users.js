import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersModule } from "../selectors";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("http://localhost:3001/api/users");

    return await response.json();
  },
  {
    condition: (_, { getState }) => !selectUsersModule(getState())?.length,
  }
);
