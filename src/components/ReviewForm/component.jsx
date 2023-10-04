import React, { useContext, useReducer } from "react";
import styles from "./styles.module.scss";
import { Button } from "../Button/component";
import { ThemeContext } from "../../contexts/ThemeProvider";

const initialForm = {
  name: "",
  review: "",
  rating: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "reset":
      return payload;
    case "input:name":
      return {
        ...state,
        name: payload,
      };
    case "input:review":
      return {
        ...state,
        review: payload,
      };

    case "input:rating":
      return {
        ...state,
        rating: payload,
      };
    default:
      return state;
  }
};

export const ReviewForm = ({ onClose }) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.root}>
      ReviewForm
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "input:name", payload: e.target.value })
          }
          value={state.name}
        />
        <div>Name entered: {state.name}</div>
      </div>
      <div>
        <label>Review</label>
        <input
          type="textarea"
          placeholder="input text"
          onChange={(e) =>
            dispatch({ type: "input:review", payload: e.target.value })
          }
          value={state.review}
        />
        <div>New review: {state.review}</div>
      </div>
      <div>
        <label>Rating</label>{" "}
        <input
          type="number"
          onChange={(e) =>
            dispatch({ type: "input:rating", payload: e.target.value })
          }
          value={state.rating}
        />
        <div>New Rating: {state.rating}</div>
      </div>
      <div className={styles["button-wrapper"]}>
        <Button
          title="Save"
          className={`btn-primary-${theme}`}
          onClick={() => {
            dispatch({ type: "reset", payload: initialForm });
          }}
        />
        <Button
          title="Cancel"
          onClick={onClose}
          className={`btn-primary-${theme}`}
        />
      </div>
    </div>
  );
};
