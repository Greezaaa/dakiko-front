import { useTranslation } from "react-i18next";
import pizza_capri from "@assets/images/3x3/pizza_caprichosa.webp";
import tagliatele_carbonara from "@assets/images/3x3/tagliatele_carbonara.webp";
import pizza_salmon from "@assets/images/3x3/pizza_salmon.webp";
import gnochi_napolitana from "@assets/images/3x3/gnochi_napolitana.webp";
const AboutComponent: React.FC = () => {
  const [t] = useTranslation("global");
  const imgWidth = 294;
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="left">
            <img src={`${pizza_capri}`} width={imgWidth} alt="" />
          </div>
          <div className="right">
            <h3>{t("home.about.passion.title")}</h3>
            <p>{t("home.about.passion.desc")}</p>
            <p>{t("home.about.passion.desc_2")}</p>
            <p>{t("home.about.passion.desc_3")}</p>
          </div>
        </article>
        <article>
          <div className="left">
            <img src={`${tagliatele_carbonara}`} width={imgWidth} alt="" />
          </div>
          <div className="right">
            <h3>{t("home.about.quality.title")}</h3>
            <p>{t("home.about.quality.desc")}</p>
            <p>{t("home.about.quality.desc_2")}</p>
          </div>
        </article>
        <article>
          <div className="left">
            <img src={`${pizza_salmon}`} width={imgWidth} alt="" />
          </div>
          <div className="right">
            <h3>{t("home.about.place.title")}</h3>
            <p>{t("home.about.place.desc")}</p>
            <p>{t("home.about.place.desc_2")}</p>
            <p>{t("home.about.place.desc_3")}</p>
          </div>
        </article>
        <article>
          <div className="left">
            <img src={`${gnochi_napolitana}`} width={imgWidth} alt="" />
          </div>
          <div className="right">
            <h3>{t("home.about.callAction.title")}</h3>
            <p>{t("home.about.callAction.desc")}</p>
            <p>{t("home.about.callAction.desc_2")}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutComponent;
