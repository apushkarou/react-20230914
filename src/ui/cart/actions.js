import { createAction } from "@reduxjs/toolkit";
import { Actions } from "../../constants/matcher";

export const increment = createAction(Actions.Cart.increment);
export const decrement = createAction(Actions.Cart.decrement);
