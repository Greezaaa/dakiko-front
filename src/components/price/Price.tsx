import { ReactNode } from "react";

interface PriceProps {
  children: ReactNode | null;
}

const PriceComponent: React.FC<PriceProps> = ({ children = 0 }) => {
  if (children === null) return;
  const formattedPrice =
    typeof children === "number"
      ? parseFloat(children.toFixed(2)).toString()
      : children.toString();

  const hasOnlyOneDigitAfterDecimal = /\.(\d?)\d$/.test(formattedPrice);

  return (
    <div className="item__price">
      {hasOnlyOneDigitAfterDecimal
        ? formattedPrice + "0€"
        : formattedPrice.replace(".", ",") + "€"}
    </div>
  );
};

export default PriceComponent;
