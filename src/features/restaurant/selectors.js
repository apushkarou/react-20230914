export const selectRestaurantsModule = (store) => store.restaurants;

export const selectRestaurantsIds = (store) => store.restaurants.ids;

export const selectRestaurantById = (
  store,
  id = selectRestaurantsModule(store).ids[0]
) => selectRestaurantsModule(store).entities[id];

export const selectInitialRestaurantOnLoad = (store) =>
  selectRestaurantsModule(store).ids[0];

export const selectRestaurantNameById = (store, id) =>
  selectRestaurantById(store, id).name;
