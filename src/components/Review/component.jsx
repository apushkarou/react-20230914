import React from "react";

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <div>
      <h4>
        Name: {user} | Rating: {rating}
      </h4>
      <div>{text}</div>
    </div>
  );
};
