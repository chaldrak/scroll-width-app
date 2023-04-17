export const clearText = (string) => {
  string = string.toLocaleLowerCase();
  string = string.replaceAll(" ", "-");
  return string;
};

console.log(clearText("What is Lorem Ipsum ?"));
console.log(clearText("Some examples..."));
