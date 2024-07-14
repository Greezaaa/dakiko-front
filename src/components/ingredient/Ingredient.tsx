import React from "react";
import { getIngredientNames } from "@hooks/getIngredientName";

interface IngredientProps {
  ingredients: number[];
}

const IngredientComponent: React.FC<IngredientProps> = ({ ingredients }) => {
  return (
    <article className="ingredient">
      {ingredients.map((ingredient) => (
        <h6 key={ingredient} className="ingredient__name">
          {getIngredientNames(ingredient) + ` `}
        </h6>
      ))}
    </article>
  );
};

export default IngredientComponent;
