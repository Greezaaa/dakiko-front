import { Bruschetta } from "@interfaces/menu.interface";
import { bruschettas } from "@data-assets/menu/bruschettas";
import { getBruschettaName } from "@hooks/getBruschtetaData";
import AllergensComponent from "@components/allergens/allergens";
import IngredientComponent from "@components/ingredient/Ingredient";
import PriceComponent from "@components/price/Price";
import UseGetTranslationKey from "@hooks/getTranslationKey";
const BruschettasComponent = () => {
  const bruschettasList: Bruschetta[] = bruschettas;
  const t = UseGetTranslationKey();
  return (
    <section id="bruschettas" className="category">
      <div className="wrapper">
        <header>
          <div className="title">
            <h2> {t(`menu.bruschettas.name`)}</h2>
            <p>{t(`menu.bruschettas.description`)}</p>
          </div>
        </header>
        <div className="content">
          {bruschettasList.map((bruschetta) => {
            return (
              <article key={bruschetta.id} className="item">
                <header className="title">
                  <h3 className="name">{getBruschettaName(bruschetta.id)}</h3>
                  <div className="allergens">
                    {bruschetta.allergens &&
                      bruschetta.allergens.length > 0 && (
                        <AllergensComponent allergens={bruschetta.allergens} />
                      )}
                  </div>
                  <PriceComponent key={bruschetta.id}>
                    {bruschetta.price}
                  </PriceComponent>
                </header>
                <div className="ingredients">
                  {bruschetta.ingredients &&
                    bruschetta.ingredients.length > 0 && (
                      <IngredientComponent
                        ingredients={bruschetta.ingredients}
                      />
                    )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BruschettasComponent;
