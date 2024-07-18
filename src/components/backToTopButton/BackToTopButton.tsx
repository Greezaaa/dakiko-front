import UseGetTranslationKey from "@hooks/getTranslationKey";
import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = UseGetTranslationKey();
  const toggleVisibility = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} title={t("header.nav.goTop")}>
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
