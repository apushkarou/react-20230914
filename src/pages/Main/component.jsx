import { useState } from "react";
import { RestaurantTabs } from "../../components/RestarantTabs/component";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../../components/Restaurant/component";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";

import "./base.scss";
import "./components.scss";

export const MainPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  if (!restaurants?.length) {
    return false;
  }

  const handleRestaurantClick = (id) => {
    setActiveRestaurant(restaurants.find((rests) => rests.id === id));
  };

  return (
    <ThemeProvider>
      <Header restaurantName={activeRestaurant.name} />
      <RestaurantTabs
        activeRestaurantId={activeRestaurant.id}
        handleRestaurantClick={handleRestaurantClick}
      />
      <Restaurant restaurant={activeRestaurant} />
      <Footer />
    </ThemeProvider>
  );
};
