import React from "react";
import { restaurants } from "../../../materials/mock";

export const RestaurantTabs = ({ handleRestaurantClick }) => {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      {restaurants.map(({ name, id }) => (
        <button
          key={id}
          onClick={() => {
            handleRestaurantClick(id);
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
