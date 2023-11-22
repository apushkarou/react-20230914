import { createAsyncThunk } from "@reduxjs/toolkit";
import { Urls } from "../../../../src/constants/matcher";

export const fetchReviewsByRestaurantId = createAsyncThunk(
  "reviews/fetchReviewsByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `${Urls.ServerBase}/reviews?restaurantId=${restaurantId}`
    );

    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      return true;

      const state = getState();
      // const restaurantReviews =
    },
  }
);
