import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from "../selectors";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants");

    return await response.json();
  },
  {
    condition: (_, { getState }) => !selectRestaurantsIds(getState())?.length,
  }
);
