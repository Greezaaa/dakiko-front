import AllergensComponent from "@components/allergens/allergens";
import IngredientComponent from "@components/ingredient/Ingredient";
import PriceComponent from "@components/price/Price";
import { pizzas } from "@data-assets/menu/pizzas";
import { Pizza } from "@interfaces/menu.interface";
import categoryImagePizza from "@assets/images/5x5/pizza_diabola.webp";
import UseGetTranslationKey from "@hooks/getTranslationKey";

const PizzaComponent = () => {
  const pizzasList: Pizza[] = pizzas;
  const categoryDesc: string =
    "DaKiko Pasta e Pizza | Ibiza - Pizza Diabola: peperoni, guindas, queso mozzarella";
  const t = UseGetTranslationKey();

  return (
    <section id="pizza" className="category">
      <div className="wrapper">
        <header>
          <div className="title">
            <h2> {t(`menu.pizzas.name`)}</h2>
            <p>{t(`menu.pizzas.description`)}</p>
          </div>
          <div className="image">
            <img src={categoryImagePizza} alt={categoryDesc} />
          </div>
        </header>
        <div className="content">
          {pizzasList.map((pizza) => {
            return (
              <article className="item" key={pizza.id}>
                <header>
                  <h3 className="title">{pizza.name}</h3>
                  <div className="allergens">
                    {pizza.allergens && pizza.allergens.length > 0 && (
                      <AllergensComponent allergens={pizza.allergens} />
                    )}
                  </div>
                  <PriceComponent key={pizza.id}>{pizza.price}</PriceComponent>
                </header>
                <div className="ingredients">
                  {pizza.ingredients && pizza.ingredients.length > 0 && (
                    <IngredientComponent ingredients={pizza.ingredients} />
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

export default PizzaComponent;
