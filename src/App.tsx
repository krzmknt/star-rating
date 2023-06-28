import { useState } from "react";
import colorData from "./color-data.json";
import { ColorList } from "./ColorList";

export interface colorProps {
  id: string;
  title: string;
  color: string;
  rating: number;
}

export const App = () => {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
};
