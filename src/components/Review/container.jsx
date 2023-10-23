import React, { useEffect } from "react";
import { Review } from "./component";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/features/users/thunks/get-users";

export default function ReviewContainer({ reviewId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <Review reviewId={reviewId} />;
}
