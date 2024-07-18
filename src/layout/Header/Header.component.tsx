import UseGetTranslationKey from "@hooks/getTranslationKey";
import logo from "@assets/images/logo_da_kiko.svg";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import LangMenu from "@components/lang-menu/lang-menu";
import useClickOutsideAndEscape from "@hooks/useClickOutsideAndEscape";
import useScroll from "@hooks/useScroll";
import ThemeToggle from "@components/theme-toggle/theme-toggle";

const HeaderComponent: React.FC = () => {
  const t = UseGetTranslationKey();
  const location = useLocation();
  const menu = location.pathname === "/menu";
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useClickOutsideAndEscape(navRef, menuBtnRef, () => setOpen(false));
  useScroll((scrolled) => setScrolled(scrolled), 550);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <section id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="main-logo">
        <Link to="/#hero" title={t("global.common.logoLink")}>
          <img src={logo} alt={t("global.common.logo")} />
        </Link>
      </div>
      <header ref={navRef} className={` ${isOpen ? "open" : "close"}`}>
        <nav className="main-menu">
          <ul>
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                title={t("header.nav.home")}
              >
                {t("header.nav.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/#schedules"
                onClick={handleLinkClick}
                title={t("header.nav.schedules")}
              >
                {t("header.nav.schedules")}
              </Link>
            </li>
            {!menu && (
              <li>
                <Link
                  to="/menu#pizza"
                  onClick={handleLinkClick}
                  title={t("header.nav.menu")}
                >
                  {t("header.nav.menu")}
                </Link>
              </li>
            )}
            {menu && (
              <>
                <li>
                  <a
                    href="#pizza"
                    onClick={handleLinkClick}
                    title={t("header.nav.pizza")}
                  >
                    {t("header.nav.pizza")}
                  </a>
                </li>
                <li>
                  <a
                    href="#pasta"
                    onClick={handleLinkClick}
                    title={t("header.nav.pasta")}
                  >
                    {t("header.nav.pasta")}
                  </a>
                </li>
                <li>
                  <a
                    href="#bruschettas"
                    onClick={handleLinkClick}
                    title={t("header.nav.bruschettas")}
                  >
                    {t("header.nav.bruschettas")}
                  </a>
                </li>
              </>
            )}
            <li>
              <Link
                to="/#contact"
                onClick={handleLinkClick}
                title={t("header.nav.contacto")}
              >
                {t("header.nav.contact")}
              </Link>
            </li>
          </ul>
        </nav>

        {isScrolled && (
          <div className="extras">
            <button
              className={`menu__btn ${isOpen ? "open" : ""}`}
              ref={menuBtnRef}
              onClick={handleToggleMenu}
              title={t("header.nav.menu")}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ThemeToggle />
            <LangMenu />
          </div>
        )}
      </header>
    </section>
  );
};

export default HeaderComponent;
