import HomeComponent from "@layout/main/Home/HomeComponent";
import MenuComponent from "@layout/main/Menu/Menu.component";
import { Route, Routes } from "react-router-dom";

import HeaderComponent from "@layout/Header/Header.component";
import TopBannerComponent from "@layout/Header/TopBanner.component";
import FooterComponent from "@layout/Footer/Footer.component";
import BackgroundComponent from "@components/background/BackgroundComponent";
import useLanguageSetup from "@hooks/useLanguageSetup";
import useVisitCounter from "@hooks/useFirstVisit";
import useSystemThemeSetup from "@hooks/useSystemThemeSetup";
import BackToTopButton from "@components/backToTopButton/BackToTopButton";

const Main: React.FC = () => {
  useLanguageSetup();
  useSystemThemeSetup();
  useVisitCounter();
  return (
    <>
      <BackgroundComponent />
      <TopBannerComponent />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="*" element={<HomeComponent />} />
      </Routes>

      <BackToTopButton />
      <FooterComponent />
    </>
  );
};

export default Main;
