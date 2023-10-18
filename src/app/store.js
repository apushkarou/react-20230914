import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "../features/restaurant/restaurantSlice";
import dishesReducer from "../features/dishes/dishesSlice";
import reviewsReducer from "../features/reviews/reviewsSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    dishes: dishesReducer,
    reviews: reviewsReducer,
  },
});
