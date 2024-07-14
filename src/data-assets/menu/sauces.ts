import { Category } from "@enums/category.enum";
import { Sauce } from "@interfaces/menu.interface";

export const sauces: Sauce[] = [
  {
    id: 1,
    name: "Napolitana",
    category: Category.SALSA,
    ingredients: [17, 6, 7],
    price: 11.0,
    description: "",
    special: false,
    allergens: [11], // Assuming allergens for garlic and basil
  },
  {
    id: 2,
    name: "Quattro Formaggi",
    category: Category.SALSA,
    ingredients: [38, 8],
    price: 11.0,
    description: "",
    special: false,
    allergens: [8], // Dairy from cheeses
  },
  {
    id: 3,
    name: "Sienna",
    category: Category.SALSA,
    ingredients: [17, 18, 9, 10, 11, 6],
    price: 12.0,
    description: "",
    special: false,
    allergens: [3, 11], // Crustaceans and herbs
  },
  {
    id: 4,
    name: "Siciliana",
    category: Category.SALSA,
    ingredients: [17, 3, 12, 13, 11],
    price: 12.0,
    description: "",
    special: false,
    allergens: [8, 13], // Dairy and spicy ingredients
  },
  {
    id: 5,
    name: "Bolognese",
    category: Category.SALSA,
    ingredients: [17, 14],
    price: 12.0,
    description: "",
    special: false,
    allergens: [8], // Meat
  },
  {
    id: 6,
    name: "Carbonara",
    category: Category.SALSA,
    ingredients: [15, 9, 16],
    price: 12.0,
    description: "",
    special: false,
    allergens: [4, 8], // Eggs and dairy from bechamel
  },
  {
    id: 7,
    name: "Salmón y Gambas",
    category: Category.SALSA,
    ingredients: [17, 4, 18, 6, 11],
    price: 13.0,
    description: "",
    special: false,
    allergens: [2, 3], // Fish and shellfish
  },
  {
    id: 8,
    name: "Al Pesto",
    category: Category.SALSA,
    ingredients: [7, 19, 20, 21],
    price: 13.0,
    description: "",
    special: false,
    allergens: [12], // Nuts from pine nuts and cheese
  },
  {
    id: 9,
    name: "Gorgonzola",
    category: Category.SALSA,
    ingredients: [8, 22],
    price: 13.0,
    description: "",
    special: false,
    allergens: [8, 7], // Dairy and nuts
  },
  {
    id: 10,
    name: "Kiko",
    category: Category.SALSA,
    ingredients: [9, 23, 24],
    price: 13.0,
    description: "",
    special: true,
    allergens: [8, 15], // Dairy from bechamel and spicy ingredients
  },
];
