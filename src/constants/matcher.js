export const Theme = {
  Dark: "dark",
  Default: "light",
};

export const Order = {
  MaxOrder: 5,
  MinOrder: 0,
};

export const StatusCodes = {
  Idle: "idle",
  Pending: "pending",
  Fulfilled: "fulfilled",
  Rejected: "rejected",
};

export const Urls = {
  ServerBase: "http://localhost:3001/api",
};

export const Actions = {
  Cart: {
    increment: "cart/increment",
    decrement: "cart/decrement",
  },
};

export const Thunks = {
  fetchDishes: "restaurants/fetchDishesByRestaurantId",
};
