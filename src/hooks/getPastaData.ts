import Tagliatelle from "@assets/images/Tagliatelle.webp";
import Gnocchi from "@assets/images/Gnocchi.webp";
import Spaghetti from "@assets/images/Spaghetti.webp";

export const getPastaImage = (value: string): string => {
  const pastaImages: { [key: string]: string } = {
    Tagliatelle: Tagliatelle,
    Gnocchi: Gnocchi,
    Spaghetti: Spaghetti,
  };
  return pastaImages[value];
};
