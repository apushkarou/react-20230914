import React, { useEffect } from "react";
import { Review } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../redux/features/users/thunks/get-users";
import { selectReviewById } from "../../../redux/features/reviews/selectors";
import { selectUserNameById } from "../../../redux/features/users/selectors";

export default function ReviewContainer({ reviewId }) {
  const dispatch = useDispatch();
  const review = useSelector((store) => selectReviewById(store, reviewId));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return review && <Review reviewId={reviewId} review={review} />;
}
