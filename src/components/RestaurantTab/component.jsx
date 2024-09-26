import React from "react";
import { Button } from "../Button/component";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "rdx/features/restaurant/selectors";

export const RestaurantTab = ({
  restaurantId,
  activeRestaurantId,
  handleRestaurantClick,
}) => {
  const name = useSelector((store) =>
    selectRestaurantNameById(store, restaurantId)
  );
  return (
    <>
      <Button
        className={classNames("btn-primary", {
          ["active"]: activeRestaurantId === restaurantId,
        })}
        onClick={() => {
          handleRestaurantClick(restaurantId);
        }}
        title={name}
      />
    </>
  );
};
