import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishesByRestaurantId = createAsyncThunk(
  "restaurants/fetchDishesByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const { restaurants, dishes } = getState();

      if (
        dishes.ids.some(
          (id) => id === restaurants.entities[restaurantId].menu[0]
        )
      ) {
        return false;
      }
    },
  }
);
