import { useState } from "react";

// import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../../components/Restaurant/component";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";

import "./base.scss";
import "./components.scss";
import { useSelector } from "react-redux";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { selectRestaurantsModule } from "../../features/restaurant/selectors";

export const MainPage = () => {
  const restaurants = useSelector(selectRestaurantsModule);
  const [activeRestaurant, setActiveRestaurant] = useState(
    restaurants.entities[restaurants.ids[0]]
  );

  if (!restaurants?.ids?.length) {
    return false;
  }

  const handleRestaurantClick = (id) => {
    setActiveRestaurant(restaurants.entities[id]);
  };

  return (
    <ThemeProvider>
      <Header restaurantName={activeRestaurant.name} />
      <RestaurantTabs
        activeRestaurantId={activeRestaurant.id}
        handleRestaurantClick={handleRestaurantClick}
        restaurantIds={restaurants.ids}
      />
      <Restaurant restaurant={activeRestaurant} />
      <Footer />
    </ThemeProvider>
  );
};
