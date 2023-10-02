import { useState } from "react";
import { RestaurantTabs } from "../../components/RestarantTabs/component";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../../components/Restaurant/component";

export const MainPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  if (!restaurants?.length) {
    return false;
  }
  const handleRestaurantClick = (id) => {
    setActiveRestaurant(restaurants.find((rests) => rests.id === id));
  };

  return (
    <div>
      <RestaurantTabs handleRestaurantClick={handleRestaurantClick} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
