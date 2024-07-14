import { allergens } from "@data-assets/menu/allergens";
import UseGetTranslationKey from "./getTranslationKey";

export const getAllergenName = (id: number) => {
  const t = UseGetTranslationKey();
  const allergen = allergens.find((allergen) => allergen.id === id);
  return allergen ? t(`menu.allergens.${allergen.name}`) : "";
};

export const getAllergenIcon = (id: number) => {
  const allergen = allergens.find((allergen) => allergen.id === id);
  return allergen ? allergen.icon : "";
};
