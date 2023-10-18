import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { Theme } from "../../constants/matcher";
import styles from "./styles.module.scss";
import { Button } from "../Button/component";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../features/restaurant/selectors";

export const Header = ({ restaurantId }) => {
  const name = useSelector((store) =>
    selectRestaurantNameById(store, restaurantId)
  );
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className={styles.root}>
      <h1 className={styles.name}>{name}</h1>
      <Button
        className={classNames("btn-primary", styles["theme-switcher"])}
        title={theme}
        onClick={() => {
          setTheme((prev) =>
            prev === Theme.Default ? Theme.Dark : Theme.Default
          );
        }}
      />
    </div>
  );
};
