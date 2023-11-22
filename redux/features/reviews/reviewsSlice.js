import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "src/constants/normolized-mock";
import { fetchReviewsByRestaurantId } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter();

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const { reducer } = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(
      fetchReviewsByRestaurantId.fulfilled,
      (state, { payload } = {}) => {
        console.log(payload);
        entityAdapter.setMany(state, payload);
      }
    );
  },
});

export default reducer;
