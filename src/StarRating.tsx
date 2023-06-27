import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f: unknown) => f }) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);

export const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars] = useState(5);

  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={i < selectedStars} onSelect={() => true} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};
