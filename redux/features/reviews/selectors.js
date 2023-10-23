const selectReviewsModule = (store) => store.reviews;

export const selectReviewById = (store, id) =>
  selectReviewsModule(store).entities[id];
