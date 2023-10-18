import React from "react";
import { Dishes } from "../Dishes/component";

export const Menu = ({ dishesIds }) => {
  return (
    <div>
      <h3>Menu</h3>

      {dishesIds.map((id) => (
        <Dishes key={id} dishId={id} />
      ))}
    </div>
  );
};
