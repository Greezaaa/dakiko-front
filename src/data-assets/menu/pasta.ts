import { Category } from "@enums/category.enum";
import { Pasta } from "@interfaces/menu.interface";

export const pasta: Pasta[] = [
  {
    id: 1,
    name: "Spaghetti",
    category: Category.PASTA,
    description: "",
    special: false,
    allergens: [1, 8],
  },
  {
    id: 2,
    name: "Tagliatelle",
    category: Category.PASTA,
    description: "",
    special: false,
    allergens: [1, 8],
  },
  {
    id: 3,
    name: "Gnocchi",
    category: Category.PASTA,
    description: "",
    special: false,
    allergens: [1, 8],
  },
];
