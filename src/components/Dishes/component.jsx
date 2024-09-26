import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Order } from "src/constants/matcher";
import { Button } from "components/Button/component";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "rdx/features/dishes/selectors";
import { decrement, increment } from "../../ui/cart/actions";
import { selectDishQty } from "../../ui/cart/selectors";

export const Dishes = ({ dishId }) => {
  const dish = useSelector((store) => {
    return selectDishById(store, dishId);
  });

  const dispatch = useDispatch();
  const amount = useSelector((state) => selectDishQty(state, dishId));

  if (!dish) return false;

  const { name, price } = dish;

  return (
    <div className={styles.root}>
      {name} | {price}$ | Quantity:
      <Button
        className={classNames("btn-miniaction", "btn-miniaction")}
        disabled={amount === Order.MinOrder}
        title="-"
        onClick={() => {
          dispatch(decrement(dishId));
        }}
      />
      {amount}
      <Button
        className={classNames("btn-miniaction", "btn-miniaction")}
        disabled={amount === Order.MaxOrder}
        title="+"
        onClick={() => {
          dispatch(increment(dishId));
        }}
      />
    </div>
  );
};
