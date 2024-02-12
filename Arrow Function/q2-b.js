//ARROW FUNC UPPERCASE

let str = ["apple", "orange", "mango", "banana"];
let upperCase = [];

let Ucase = (str) => {
  for (let i = 0; i <= str.length - 1; i++) {
    upperCase.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
  console.log(upperCase);
};
Ucase(str);
