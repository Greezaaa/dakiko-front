import bacon from "@assets/images/icons/bacon.svg";
import basil from "@assets/images/icons/basil.svg";
import celery from "@assets/images/icons/celery.svg";
import cheese from "@assets/images/icons/cheese.svg";
import chiliGreen from "@assets/images/icons/chili_green.svg";
import chiliRed from "@assets/images/icons/chili_red.svg";
import garlic from "@assets/images/icons/garlic.svg";
import mushrooms from "@assets/images/icons/mushrooms.svg";
import olive from "@assets/images/icons/olive.svg";
import onionRed from "@assets/images/icons/onion_red.svg";
import peppers from "@assets/images/icons/peppers.svg";
import pepperoni from "@assets/images/icons/pepperoni.svg";
import sliceMushrooms from "@assets/images/icons/slice_mushrooms.svg";
import sliceTomato from "@assets/images/icons/slice_tomato.svg";
import tomato from "@assets/images/icons/tomato.svg";

const icons = [
  bacon,
  basil,
  celery,
  cheese,
  chiliGreen,
  chiliRed,
  garlic,
  mushrooms,
  olive,
  onionRed,
  peppers,
  pepperoni,
  sliceMushrooms,
  sliceTomato,
  tomato,
];

const BackgroundComponent = () => {
  const numRows = 4;
  const numCols = 4;
  const cellWidth = 100 / numCols;
  const cellHeight = 100 / numRows;

  return (
    <div className="background-container">
      {Array.from({ length: numRows * numCols }).map((_, index) => {
        const row = Math.floor(index / numCols);
        const col = index % numCols;
        const icon = icons[index % icons.length];

        return (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="background-icon"
            style={{
              top: `calc(${row * cellHeight}vh + ${
                Math.random() * cellHeight
              }vh)`,
              left: `calc(${col * cellWidth}vw + ${
                Math.random() * cellWidth
              }vw)`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundComponent;
