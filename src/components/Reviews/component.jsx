import React from "react";
import { Review } from "../Review/component";
import { useSelector } from "react-redux";
import { selectReviewsModule } from "../../features/reviews/selectors";

export const Reviews = ({ reviewsIds }) => {
  const reviews = useSelector(selectReviewsModule);

  return (
    <div>
      <h3>Review:</h3>
      {reviewsIds.map((id) => (
        <Review key={id} review={reviews.entities[id]} />
      ))}
    </div>
  );
};
