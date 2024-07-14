import HomeComponent from "@layout/main/Home/HomeComponent";
import MenuComponent from "@layout/main/Menu/Menu.component";
import { Route, Routes } from "react-router-dom";

import HeaderComponent from "@layout/Header/Header.component";
import TopBannerComponent from "@layout/Header/TopBanner.component";
import FooterComponent from "@layout/Footer/Footer.component";
import BackgroundComponent from "@components/background/BackgroundComponent";
import CookieBanner from "@components/cookie-banner/CookieBanner";

const Main: React.FC = () => (
  <>
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

export default Main;
