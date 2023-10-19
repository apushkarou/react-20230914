import { configureStore } from "@reduxjs/toolkit";
import restaurants from "../features/restaurant/restaurantSlice";
import dishes from "../features/dishes/dishesSlice";
import reviews from "../features/reviews/reviewsSlice";
import users from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    restaurants,
    dishes,
    reviews,
    users,
  },
});
