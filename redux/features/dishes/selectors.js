const selectDishesModule = (store) => store.dishes;

export const selectDishesIds = (store) => selectDishesModule(store).ids;

export const selectDishById = (store, id) =>
  selectDishesModule(store).entities[id];
