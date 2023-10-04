import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { Order } from "../../constants/matcher";
import { Button } from "../Button/component";
import { ThemeContext } from "../../contexts/ThemeProvider";
import classNames from "classnames";

export const Product = ({ product }) => {
  const [amount, setAmount] = useState(0);
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.root}>
      {product.name} | {product.price}$ | Quantity:
      <Button
        className={classNames("btn-miniaction", `btn-miniaction-${theme}`)}
        disabled={amount === Order.MinOrder}
        title="-"
        onClick={() => {
          if (amount > 0 && amount <= 5) setAmount(amount - 1);
        }}
      />
      {amount}
      <Button
        className={classNames("btn-miniaction", `btn-miniaction-${theme}`)}
        disabled={amount === Order.MaxOrder}
        title="+"
        onClick={() => {
          setAmount(amount + 1);
        }}
      />
    </div>
  );
};
