import React from "react";
import { Dishes } from "../Dishes/component";
import { useSelector } from "react-redux";
import { selectDishesModule } from "../../features/dishes/selectors";

export const Menu = ({ dishesIds }) => {
  const dishes = useSelector(selectDishesModule);

  return (
    <div>
      <h3>Menu</h3>

      {dishesIds.map((id) => (
        <Dishes key={id} product={dishes.entities[id]} />
      ))}
    </div>
  );
};
