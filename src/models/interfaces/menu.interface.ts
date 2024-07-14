import { Category } from "../enums/category.enum";

export interface MenuItem {
  id: number;
  name: string;
  category: Category;
  ingredients?: number[];
  description: string;
  special: boolean;
  allergens: number[];
}

export interface Pizza extends MenuItem {
  price: number;
}

export interface Bruschetta extends MenuItem {
  price: number;
}

export interface Sauce extends MenuItem {
  price: number;
}
export type Pasta = MenuItem;

export interface Extra {
  name: string;
  price: number;
  category: Category;
}

export interface Menu {
  pizzas: Pizza[];
  pasta: Pasta[];
  sauces: Sauce[];
  bruschettas: Bruschetta[];
  extras: Extra;
}
