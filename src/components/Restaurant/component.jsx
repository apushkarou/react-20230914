import React from "react";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.scss";
import { ModalReviewForm } from "../ModalReviewForm/component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../features/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );

  if (!restaurant) return false;

  const { menu, reviews } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      {menu && <Menu dishesIds={menu} />}
      {reviews && <Reviews reviewsIds={reviews} />}
      <ModalReviewForm
        titleOpen="Open Review Form"
        btnStyles={styles["modal-button"]}
      />
    </div>
  );
};
