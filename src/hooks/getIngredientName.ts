import { ingredients } from "@data-assets/menu/ingredients";
import UseGetTranslationKey from "./getTranslationKey";

export const getIngredientNames = (id: number) => {
  const t = UseGetTranslationKey();
  const ingredient = ingredients.find((ingredient) => ingredient.id === id);
  return ingredient ? t(`menu.ingredients.${ingredient.name}`) : null;
};
