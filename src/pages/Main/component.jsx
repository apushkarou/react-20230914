import { useEffect, useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import "./base.scss";
import "./components.scss";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { selectInitialRestaurantOnLoad } from "rdx/features/restaurant/selectors";
import { fetchRestaurants } from "../../../redux/features/restaurant/thunks/get-restaurants";
import styles from "./styles.module.scss";
import { Cart } from "../../components/Cart/component";

export const MainPage = () => {
  const initialRestaurant = useSelector(selectInitialRestaurantOnLoad);
  const [activeRestaurantId, setActiveRestaurant] = useState(initialRestaurant);
  const dispatch = useDispatch();
  const handleRestaurantClick = (id) => setActiveRestaurant(id);

  useEffect(() => {
    dispatch(fetchRestaurants());
    setActiveRestaurant(initialRestaurant);
  }, [initialRestaurant]);

  return (
    <ThemeProvider>
      <Header restaurantId={activeRestaurantId} />
      <RestaurantTabs
        activeRestaurantId={activeRestaurantId}
        handleRestaurantClick={handleRestaurantClick}
      />
      <div className={styles["main-wrapper"]}>
        {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
        <Cart />
      </div>
      <Footer />
    </ThemeProvider>
  );
};
