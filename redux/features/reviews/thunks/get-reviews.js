import { createAsyncThunk } from "@reduxjs/toolkit";
import { Urls } from "../../../../src/constants/matcher";
import { selectReviewById, selectReviewIds } from "../selectors";

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
      const state = getState();
      const restaurantReviews = selectReviewById(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return (
        restaurantReviews &&
        restaurantReviews.some((reviewId) => reviewIds.includes(reviewId))
      );
    },
  }
);
