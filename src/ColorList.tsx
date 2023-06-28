import { Color } from "./Color";
import { colorProps } from "./App";

interface colors_props {
  colors: colorProps[];
}

export const ColorList = ({ colors = [] }: colors_props) => {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

