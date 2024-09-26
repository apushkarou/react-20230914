import React from "react";
import { useSelector } from "react-redux";

import { selectUserNameById } from "rdx/features/users/selectors";

export const Review = ({ review }) => {
  const { text, rating, userId } = review;
  const userName = useSelector((store) => selectUserNameById(store, userId));

  return (
    <div>
      <h4>
        Name: {userName} | Rating: {rating}
      </h4>
      <div>{text}</div>
    </div>
  );
};
