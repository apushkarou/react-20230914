const selectDishesModule = (store) => store.dishes;

export const selectDishById = (store, id) =>
  selectDishesModule(store).entities[id];
