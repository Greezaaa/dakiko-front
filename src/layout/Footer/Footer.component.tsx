import { useRef, useState } from "react";
import { address } from "@data-assets/address/address";
import { Address } from "@interfaces/address.interface";
import PhoneIcon from "@components/Icons/PhoneIcon";
import PlacesIcon from "@components/Icons/PlacesIcon";
import { Link, useLocation } from "react-router-dom";
import UseGetTranslationKey from "@hooks/getTranslationKey";
import CookieBanner from "@components/cookie-banner/CookieBanner";
import useScroll from "@hooks/useScroll";
import ThemeToggle from "@components/theme-toggle/theme-toggle";

const FooterComponent = () => {
  const t = UseGetTranslationKey();
  const actualAddress: Address = address;
  const location = useLocation();
  const menu = location.pathname === "/menu";
  const cookieBannerRef = useRef(null);
  const [isScrolled, setScrolled] = useState(false);
  useScroll((scrolled) => setScrolled(scrolled), 550);

  const handleCookiesClick = () => {
    if (cookieBannerRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (cookieBannerRef.current as any).openModal();
    }
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="menu">
          <ul>
            <li>
              <Link to="/#hero">{t("header.nav.home")}</Link>
            </li>
            <li>
              <Link to="/#about">{t("header.nav.about")}</Link>
            </li>
            {!menu && (
              <li>
                <Link to="/menu">{t("header.nav.menu")}</Link>
              </li>
            )}
            {menu && (
              <>
                <li>
                  <a href="#pizza">{t("header.nav.pizza")}</a>
                </li>
                <li>
                  <a href="#pasta">{t("header.nav.pasta")}</a>
                </li>
                <li>
                  <a href="#bruschettas">{t("header.nav.bruschettas")}</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div id="contact">
          <ul>
            <li>
              <a
                className="direction"
                href={actualAddress.url}
                target="_blank"
                title={actualAddress.desc}
              >
                <PlacesIcon />
                <div>
                  <span className="banner__text">{actualAddress.street}</span>
                  <span className="banner__text">{actualAddress.locality}</span>
                  <span className="banner__text">
                    {actualAddress.island}, {actualAddress.region}
                  </span>
                  <span className="banner__text">{actualAddress.country}</span>
                </div>
              </a>
            </li>

            <li>
              <a
                className="direction"
                href={`tel:+${actualAddress.phoneNumber}`}
                target="_blank"
                title={actualAddress.phone}
              >
                <PhoneIcon />
                <span className="banner__text">{actualAddress.phone}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="author">
          with &#129505; by
          <a
            href="http://greezaaa.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Jeka
          </a>
        </div>
        <div className="policy" onClick={handleCookiesClick}>
          &#127850;
        </div>
      </div>
      <CookieBanner ref={cookieBannerRef} />
      {!isScrolled && <ThemeToggle></ThemeToggle>}
    </footer>
  );
};

export default FooterComponent;
