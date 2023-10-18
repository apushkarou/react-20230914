import React from "react";
import { Review } from "../Review/component";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Review:</h3>
      {reviewsIds.map((id) => (
        <Review key={id} reviewId={id} />
      ))}
    </div>
  );
};
