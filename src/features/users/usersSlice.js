import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../constants/normolized-mock";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
});

export default usersSlice.reducer;
