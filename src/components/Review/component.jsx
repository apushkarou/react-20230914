import React from "react";

export const Review = ({ user, text, rating }) => {
  return (
    <div>
      <h4>
        Name: {user} | Rating: {rating}
      </h4>
      <div>{text}</div>
    </div>
  );
};
