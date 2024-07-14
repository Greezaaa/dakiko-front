import { Category } from "@enums/category.enum";
import { Bruschetta } from "@interfaces/menu.interface";

export const bruschettas: Bruschetta[] = [
  {
    id: 1,
    name: "salmon",
    category: Category.BRUSCHETTA,
    ingredients: [1, 2, 3, 4],
    price: 9.0,
    description: "",
    special: false,
    allergens: [1, 2, 8],
  },
  {
    id: 2,
    name: "jamon",
    category: Category.BRUSCHETTA,
    ingredients: [1, 2, 3, 5],
    price: 9.0,
    description: "",
    special: false,
    allergens: [1, 8],
  },
];
