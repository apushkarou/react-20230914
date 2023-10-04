import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { Theme } from "../../constants/matcher";
import styles from "./styles.module.scss";
import { Button } from "../Button/component";
import classNames from "classnames";

export const Header = ({ restaurantName }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className={styles.root}>
      <h1 className={styles.name}>{restaurantName}</h1>
      <Button
        className={classNames(`btn-primary-${theme}`, styles["theme-switcher"])}
        title={theme}
        onClick={() => {
          setTheme((prev) => (prev === Theme.Light ? Theme.Dark : Theme.Light));
        }}
      />
    </div>
  );
};
