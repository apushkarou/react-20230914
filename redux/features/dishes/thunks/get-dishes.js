import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantMenu } from "../../restaurant/selectors";
import { Thunks, Urls } from "../../../../src/constants/matcher";

export const fetchDishesByRestaurantId = createAsyncThunk(
  Thunks.fetchDishes,
  async (restaurantId) => {
    const response = await fetch(
      `${Urls.ServerBase}/dishes?restaurantId=${restaurantId}`
    );

    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const { dishes } = state;
      const restaurantMenu = selectRestaurantMenu(state, restaurantId);

      return (
        restaurantMenu &&
        restaurantMenu.some((dishId) => !dishes.ids.includes(dishId))
      );
    },
  }
);
