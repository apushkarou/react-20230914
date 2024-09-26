import React from "react";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.scss";
import { ModalReviewForm } from "../ModalReviewForm/component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "rdx/features/restaurant/selectors";
import MenuContainer from "../Menu/container";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );

  if (!restaurant) return false;

  const { menu, reviews } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      {menu && <MenuContainer menu={menu} restaurantId={restaurantId} />}
      {reviews && <Reviews reviewsIds={reviews} restaurantId={restaurantId} />}
      <ModalReviewForm
        titleOpen="Open Review Form"
        btnStyles={styles["modal-button"]}
      />
    </div>
  );
};
