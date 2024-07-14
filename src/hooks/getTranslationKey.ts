import { useTranslation } from "react-i18next";

function UseGetTranslationKey() {
  const { t } = useTranslation("global");
  return (key: string) => t(key);
}

export default UseGetTranslationKey;
