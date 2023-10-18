import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../features/reviews/selectors";
import { selectUserNameById } from "../../features/users/selectors";

export const Review = ({ reviewId }) => {
  const review = useSelector((store) => selectReviewById(store, reviewId));
  const userName = useSelector((store) =>
    selectUserNameById(store, review.userId)
  );

  if (!review) return false;

  const { text, rating } = review;

  return (
    <div>
      <h4>
        Name: {userName} | Rating: {rating}
      </h4>
      <div>{text}</div>
    </div>
  );
};
