import { useTranslation } from "react-i18next";
import hero_pizza_capri from "@assets/images/general/hero-pizza_capri.webp";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useScroll from "@hooks/useScroll";

const HeroComponent: React.FC = () => {
  const [t] = useTranslation("global");
  const location = useLocation();
  const [isScrolled, setScrolled] = useState(false);

  useScroll((scrolled) => setScrolled(scrolled), 550);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="hero">
      <div className="content">
        <div className="card">
          <div className="card__text">
            <h2>
              <span className="prefix">{t(`home.hero.welcome`)}</span> <br />
              <span className="name">{t(`home.hero.name`)}</span>
            </h2>
            <p>{t(`home.hero.subtitle`)}</p>
          </div>
          <div className="card__image">
            <img src={`${hero_pizza_capri}`} width="400" alt="" />
          </div>
        </div>
        {!isScrolled && (
          <nav className="hero__menu">
            <Link to="/#about">{t(`header.nav.about`)}</Link>
            <Link to="/menu">{t(`header.nav.menu`)}</Link>
            <Link to="/#contact">{t(`header.nav.contact`)}</Link>
          </nav>
        )}
      </div>
    </section>
  );
};

export default HeroComponent;
