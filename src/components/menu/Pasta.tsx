import AllergensComponent from "@components/allergens/allergens";
import IngredientComponent from "@components/ingredient/Ingredient";
import PriceComponent from "@components/price/Price";
import { pasta } from "@data-assets/menu/pasta";
import { sauces } from "@data-assets/menu/sauces";
import { getPastaImage } from "@hooks/getPastaData";
import UseGetTranslationKey from "@hooks/getTranslationKey";
import { Pasta, Sauce } from "@interfaces/menu.interface";

const PastaComponent = () => {
  const pastaList: Pasta[] = pasta;
  const saucesList: Sauce[] = sauces;
  const t = UseGetTranslationKey();
  return (
    <section id="pasta" className="category">
      <div className="wrapper">
        <header>
          <div className="title">
            <h2>
              {t(`menu.pasta.name`)} & {t(`menu.salsa.name`)}
            </h2>
            <p>{t(`menu.pasta.description`)}</p>
          </div>
        </header>

        <div className="content col__pasta">
          {pastaList.map((pasta) => (
            <article key={pasta.id} className="item">
              <header>
                <h2 className="title">{pasta.name}</h2>
                <div className="allergens">
                  {pasta.allergens && pasta.allergens.length > 0 && (
                    <AllergensComponent allergens={pasta.allergens} />
                  )}
                </div>
              </header>

              <img
                src={getPastaImage(pasta.name)}
                width="200px"
                alt={pasta.name}
              />
            </article>
          ))}
        </div>
        <div className="content col_souse">
          {saucesList.map((sauce) => (
            <article key={sauce.id} className="item">
              <header>
                <h3 className="title">{sauce.name}</h3>
                <div className="allergens">
                  {sauce.allergens && sauce.allergens.length > 0 && (
                    <AllergensComponent allergens={sauce.allergens} />
                  )}
                </div>
                <PriceComponent>{sauce.price}</PriceComponent>
              </header>
              <div className="ingredients">
                {sauce.ingredients && sauce.ingredients.length > 0 && (
                  <IngredientComponent ingredients={sauce.ingredients} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PastaComponent;
