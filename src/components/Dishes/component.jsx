import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Order } from "src/constants/matcher";
import { Button } from "components/Button/component";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectDishById } from "rdx/features/dishes/selectors";

export const Dishes = ({ dishId }) => {
  const dish = useSelector((store) => {
    return selectDishById(store, dishId);
  });
  const [amount, setAmount] = useState(0);

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
          if (amount > 0 && amount <= 5) setAmount(amount - 1);
        }}
      />
      {amount}
      <Button
        className={classNames("btn-miniaction", "btn-miniaction")}
        disabled={amount === Order.MaxOrder}
        title="+"
        onClick={() => {
          setAmount(amount + 1);
        }}
      />
    </div>
  );
};
