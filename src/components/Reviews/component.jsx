import React from "react";
import { Review } from "../Review/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Review:</h3>
      {reviews.map(({ id, user, text, rating }) => (
        <Review key={id} user={user} text={text} rating={rating} />
      ))}
    </div>
  );
};
