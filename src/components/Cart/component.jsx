import React from "react";
import styles from "./styles.module.scss";
import CartItem from "../CartItem/component";
import { useSelector } from "react-redux";
import { selectCartModule } from "../../ui/cart/selectors";

export function Cart() {
  const cart = useSelector((state) => selectCartModule(state));
  console.log("cc", cart);

  return (
    <div className={styles.root}>
      {Object.keys(cart).length ? (
        <div className={styles.root}>
          Cart
          <div>
            {Object.entries(cart).map(([id, amount]) => {
              return <CartItem key={id} id={id} amount={amount} />;
            })}
          </div>
        </div>
      ) : (
        "Cart empty"
      )}
    </div>
  );
}
