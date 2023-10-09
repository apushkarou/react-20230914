import React from "react";
import { restaurants } from "../../../materials/mock";
import { Button } from "../Button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RestaurantTabs = ({
  activeRestaurantId,
  handleRestaurantClick,
}) => {
  return (
    <div className={styles.root}>
      {restaurants.map(({ name, id }) => (
        <Button
          key={id}
          className={classNames("btn-primary", {
            ["active"]: activeRestaurantId === id,
          })}
          onClick={() => {
            handleRestaurantClick(id);
          }}
          title={name}
        />
      ))}
    </div>
  );
};
