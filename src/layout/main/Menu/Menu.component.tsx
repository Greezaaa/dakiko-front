import { Helmet } from "react-helmet-async";
import PizzaComponent from "@components/menu/Pizza";
import BruschettasComponent from "@components/menu/Bruschettas";
import PastaComponent from "@components/menu/Pasta";
import pastaImage from "@assets/images/5x5/pasta_pesto.webp";

const MenuComponent = () => {
  const title = "Menu | Pasta e Pizza - Da Kiko";
  const description = "Your page description here.";
  const imageUrl = pastaImage;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="description" content={description} />
      </Helmet>
      <div id="menu" className="content">
        <PizzaComponent />
        <PastaComponent />
        <BruschettasComponent />
      </div>
    </>
  );
};

export default MenuComponent;
