import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../constants/normolized-mock";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
});

export default dishesSlice.reducer;
