import "./assets/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import i18next from "i18next";

import global_en from "./data-assets/translations/en/global.json";
import global_es from "./data-assets/translations/es/global.json";
import global_bg from "./data-assets/translations/bg/global.json";
import global_it from "./data-assets/translations/it/global.json";
import global_de from "./data-assets/translations/de/global.json";
import global_ua from "./data-assets/translations/ua/global.json";
import global_fr from "./data-assets/translations/fr/global.json";
import Main from "@layout/main/Main.component";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const savedLanguage = localStorage.getItem("i18lang") || "es";

i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLanguage,
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    bg: {
      global: global_bg,
    },
    it: {
      global: global_it,
    },
    de: {
      global: global_de,
    },
    ua: {
      global: global_ua,
    },
    fr: {
      global: global_fr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18next}>
        <Router>
          <Main />
        </Router>
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
