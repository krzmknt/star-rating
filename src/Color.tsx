import { StarRating } from "./StarRating";
import { colorProps } from "./App";

export function Color({ title, color, rating }: colorProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  );
}

