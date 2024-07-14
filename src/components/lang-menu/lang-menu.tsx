import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@data-assets/langs/langs";
import { f4x3 } from "@data-assets/flags/flags4x3";
import IconButton from "@components/button/icon-btn";
import { LangMenuProps } from "@interfaces/lang-menu-props";

export const LangMenu = (props: LangMenuProps) => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [t, i18n] = useTranslation("global");

  const handleLgnSwitch = (lang: string): void => {
    if (lang === i18n.language) {
      toggleOpen();
    } else {
      i18n.changeLanguage(lang);
      localStorage.setItem("i18lang", lang);
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const checkIfSelected = (lang: string): boolean => {
    return lang === i18n.language;
  };

  const selectedLanguage = languages.find((lang) => checkIfSelected(lang.code));
  const otherLanguages = languages.filter(
    (lang) => !checkIfSelected(lang.code)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="lang" ref={menuRef}>
      {selectedLanguage && (
        <IconButton
          className={`lang__item selected ${isOpen ? "open" : ""}`}
          key={selectedLanguage.code}
          text={selectedLanguage.name}
          imgSrc={f4x3[selectedLanguage.code as keyof typeof f4x3]}
          imgAlt={t("buttons.lang." + selectedLanguage.code)}
          imgWidth={20}
          selected={true}
          onClick={toggleOpen}
        />
      )}
      <ul
        className={`lang__content ${props.className} ${isOpen ? "open" : ""}`}
      >
        {otherLanguages.map((lang) => (
          <li key={lang.code}>
            <IconButton
              className="lang__item"
              text={lang.name}
              imgSrc={f4x3[lang.code as keyof typeof f4x3]}
              imgAlt={t("buttons.lang." + lang.code)}
              imgWidth={20}
              selected={checkIfSelected(lang.code)}
              onClick={() => handleLgnSwitch(lang.code)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangMenu;
