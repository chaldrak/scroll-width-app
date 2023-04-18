export const clearText = (string) => {
  const formattedText = string
    .trim() // supprime les espaces au début et à la fin de la chaîne
    .replace(/^\W+/, "") // supprime les caractères non alphabétiques au début de la chaîne
    .replace(/\s+/g, "-") // remplace les espaces par des tirets
    .replace(/[^\w-]/g, "") // supprime les caractères non alphanumériques et non -
    .replace(/-+$/, "") // supprime les tirets en fin de chaîne
    .toLowerCase(); // transforme le tout en minuscules
  return `#${formattedText}`;
};
