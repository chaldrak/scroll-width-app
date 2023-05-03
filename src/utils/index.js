import { DEFAULT_THEME_VALUE } from "../constants";

export const clearText = (string) => {
  const formattedText = string
    .trim() // supprime les espaces au début et à la fin de la chaîne
    .replace(/^\W+/, "") // supprime les caractères non alphabétiques au début de la chaîne
    .replace(/\s+/g, "-") // remplace les espaces par des tirets
    .replace(/[^\w-]/g, "") // supprime les caractères non alphanumériques et non -
    .replace(/-+$/, "") // supprime les tirets en fin de chaîne
    .toLowerCase(); // transforme le tout en minuscules
  return `${formattedText}`;
};

export const getSavedThemeConfig = () => {
  // le try-catch pour prévenir les cas d'erreur lors du parsing de la méthode `parse` de JSON.
  try {
    const savedValue = localStorage.getItem("mode");
    if (savedValue) {
      console.log(savedValue);
      return JSON.parse(savedValue);
    }
  } catch (_) {}
  return DEFAULT_THEME_VALUE;
};
