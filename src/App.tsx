import { StarRating } from "./StarRating";

export const App = () => {
  return (
    <StarRating
      selectedStars={5}
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={() => alert("double click")}
    />
  );
};
