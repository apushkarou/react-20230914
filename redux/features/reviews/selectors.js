const selectReviewsModule = (store) => store.reviews;

export const selectReviewById = (store, id) =>
  selectReviewsModule(store).entities[id];

export const selectReviewIds = (store) => selectReviewsModule(store).ids;
