import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import classNames from "classnames";
import { Theme } from "../../constants/matcher";

export const Button = ({ className, title, onClick, disabled }) => {
  const [theme] = useContext(ThemeContext);

  return (
    <button
      className={classNames(className, {
        ["dark"]: theme === Theme.Dark,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
