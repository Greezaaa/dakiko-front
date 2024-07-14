import React from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import MenuComponent from "@layout/main/Menu/Menu.component";
import HeaderComponent from "@layout/Header/Header.component";
import TopBannerComponent from "@layout/Header/TopBanner.component";
import FooterComponent from "@layout/Footer/Footer.component";

import BackgroundComponent from "@components/background/BackgroundComponent";
import CookieBanner from "@components/cookie-banner/CookieBanner";
import HomeComponent from "../Home/HomeComponent";

const Main: React.FC = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <Helmet>
        <title>{t("global.seo.openGraph.title")}</title>
        <meta
          name="description"
          content={t("global.seo.metaTags.description")}
        />
        <meta name="keywords" content={t("global.seo.metaTags.keywords")} />
        <meta property="og:title" content={t("global.seo.openGraph.title")} />
        <meta
          property="og:description"
          content={t("global.seo.openGraph.description")}
        />
        <meta property="og:image" content={t("global.seo.openGraph.image")} />
        <meta property="og:url" content={t("global.seo.openGraph.url")} />
        <meta property="og:type" content={t("global.seo.openGraph.type")} />
      </Helmet>
      <BackgroundComponent />
      <TopBannerComponent />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="*" element={<HomeComponent />} />
      </Routes>
      <CookieBanner />
      <FooterComponent />
    </>
  );
};

export default Main;
