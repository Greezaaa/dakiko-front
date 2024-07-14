import { sauces } from "@data-assets/menu/sauces";
import UseGetTranslationKey from "./getTranslationKey";

export const getSauceName = (id: number) => {
  const t = UseGetTranslationKey();
  const sauce = sauces.find((sauce) => sauce.id === id);
  return sauce ? t(`menu.sauces.${sauce.name}`) : null;
};
