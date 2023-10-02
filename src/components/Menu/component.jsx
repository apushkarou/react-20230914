import React from "react";
import { Product } from "../Product/component";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map(({ id, ...product }) => (
        <Product key={id} product={product} />
      ))}
    </div>
  );
};
