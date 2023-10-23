import React from "react";
import { Review } from "../Review/component";
import ReviewContainer from "../Review/container";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Review:</h3>
      {reviewsIds.map((id) => (
        <ReviewContainer key={id} reviewId={id} />
      ))}
    </div>
  );
};
