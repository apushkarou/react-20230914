import { configureStore } from "@reduxjs/toolkit";
import restaurants from "rdx/features/restaurant/restaurantSlice";
import dishes from "rdx/features/dishes/dishesSlice";
import reviews from "rdx/features/reviews/reviewsSlice";
import users from "rdx/features/users/usersSlice";
import request from "src/ui/request";
import cart from "src/ui/cart";

export const store = configureStore({
  reducer: {
    restaurants,
    dishes,
    reviews,
    users,
    request,
    cart,
  },
});
