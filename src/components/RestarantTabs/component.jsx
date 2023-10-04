import React, { useContext } from "react";
import { restaurants } from "../../../materials/mock";
import { Button } from "../Button/component";
import styles from "./styles.module.scss";
import { ThemeContext } from "../../contexts/ThemeProvider";
import classNames from "classnames";

export const RestaurantTabs = ({
  activeRestaurantId,
  handleRestaurantClick,
}) => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.root}>
      {restaurants.map(({ name, id }) => (
        <Button
          key={id}
          className={classNames(`btn-primary-${theme}`, {
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
