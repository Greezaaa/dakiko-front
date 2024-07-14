import { getAllergenIcon, getAllergenName } from "@hooks/getAllergenData";
import React from "react";

interface AllergensProps {
  allergens: number[];
}

const AllergensComponent: React.FC<AllergensProps> = ({ allergens }) => {
  return (
    <>
      {allergens.map((allergen) => (
        <article className="allergen" key={allergen}>
          <h6>
            <i className="allergen__icon" title={getAllergenName(allergen)}>
              {getAllergenIcon(allergen)}
            </i>
          </h6>
        </article>
      ))}
    </>
  );
};

export default AllergensComponent;
