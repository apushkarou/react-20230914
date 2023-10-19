import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../features/restaurant/selectors";
import { RestaurantTab } from "../RestaurantTab/component";

export const RestaurantTabs = ({
  activeRestaurantId,
  handleRestaurantClick,
}) => {
  const restaurantIds = useSelector(selectRestaurantsIds);

  return (
    <div className={styles.root}>
      {restaurantIds.map((id) => (
        <RestaurantTab
          key={id}
          restaurantId={id}
          activeRestaurantId={activeRestaurantId}
          handleRestaurantClick={handleRestaurantClick}
        />
      ))}
    </div>
  );
};
