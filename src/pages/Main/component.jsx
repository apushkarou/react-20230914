import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import "./base.scss";
import "./components.scss";
import { useSelector } from "react-redux";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { selectInitialRestaurantOnLoad } from "../../features/restaurant/selectors";

export const MainPage = () => {
  const initialRestaurant = useSelector(selectInitialRestaurantOnLoad);
  const [activeRestaurantId, setActiveRestaurant] = useState(initialRestaurant);

  const handleRestaurantClick = (id) => setActiveRestaurant(id);

  return (
    <ThemeProvider>
      <Header restaurantId={activeRestaurantId} />
      <RestaurantTabs
        activeRestaurantId={activeRestaurantId}
        handleRestaurantClick={handleRestaurantClick}
      />

      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
      <Footer />
    </ThemeProvider>
  );
};
