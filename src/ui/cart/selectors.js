const selectCartModule = (state) => state.cart;

export const selectDishQty = (state, dishId) =>
  selectCartModule(state)[dishId] || 0;
