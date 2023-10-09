import React from "react";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.scss";
import { ModalReviewForm } from "../ModalReviewForm/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <ModalReviewForm
        titleOpen="Open Review Form"
        btnStyles={styles["modal-button"]}
      />
    </div>
  );
};
