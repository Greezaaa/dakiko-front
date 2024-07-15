import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@data-assets/langs/langs";

const useLanguageSetup = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLang = navigator.language;
    const storedLang = localStorage.getItem("i18lang");
    let defaultLang = storedLang || userLang.split("-")[0];
    if (!languages.some((lang) => lang.code === defaultLang))
      defaultLang = "es";

    i18n.changeLanguage(defaultLang);
    localStorage.setItem("i18lang", defaultLang);
  }, [i18n]);
};

export default useLanguageSetup;
