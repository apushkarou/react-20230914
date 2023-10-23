import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "src/constants/normolized-mock";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
});

export default reviewsSlice.reducer;
