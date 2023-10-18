import React from "react";
import { Button } from "../Button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantsModule } from "../../features/restaurant/selectors";

export const RestaurantTabs = ({
  activeRestaurantId,
  handleRestaurantClick,
  restaurantIds,
}) => {
  const restaurants = useSelector(selectRestaurantsModule);

  return (
    <div className={styles.root}>
      {restaurantIds.map((id) => (
        <Button
          key={id}
          className={classNames("btn-primary", {
            ["active"]: activeRestaurantId === id,
          })}
          onClick={() => {
            handleRestaurantClick(id);
          }}
          title={restaurants.entities[id].name}
        />
      ))}
    </div>
  );
};
