import React, { useEffect } from "react";

import ReviewContainer from "../Review/container";
import { useDispatch } from "react-redux";
import { fetchReviewsByRestaurantId } from "../../../redux/features/reviews/thunks/get-reviews";

export const Reviews = ({ reviewsIds, restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewsByRestaurantId(restaurantId));

    // return () => {
    //   second
    // }
  }, [restaurantId]);

  return (
    <div>
      <h3>Review:</h3>
      {reviewsIds.map((id) => (
        <ReviewContainer key={id} reviewId={id} />
      ))}
    </div>
  );
};
