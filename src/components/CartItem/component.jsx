import React from "react";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/features/dishes/selectors";

export default function CartItem({ id, amount }) {
  const { name, price } = useSelector((state) => selectDishById(state, id));

  return (
    <div>
      {name} - {amount} - {price * amount}
    </div>
  );
}
