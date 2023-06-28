import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f: unknown) => f }) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);

export const StarRating = ({ totalStars = 5, selectedStars = 0 }) => {
  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={i < selectedStars} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};
