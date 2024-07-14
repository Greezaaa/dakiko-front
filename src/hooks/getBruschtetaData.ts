import { bruschettas } from "@data-assets/menu/bruschettas";
import UseGetTranslationKey from "./getTranslationKey";

export const getBruschettaName = (id: number) => {
  const t = UseGetTranslationKey();
  const bruschetta = bruschettas.find((bruschetta) => bruschetta.id === id);
  return bruschetta ? t(`menu.bruschettas.${bruschetta.name}`) : null;
};
