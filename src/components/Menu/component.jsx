import React from "react";
import { Dishes } from "../Dishes/component";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>

      {menu.map((id) => (
        <Dishes key={id} dishId={id} />
      ))}
    </div>
  );
};
