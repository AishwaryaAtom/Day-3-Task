//ANONYMOUS UPPERCASE

let str = ["apple", "orange", "mango"];
let upperCase = [];

for (let i = 0; i <= str.length - 1; i++) {
  let Ucase = function (word) {
    upperCase.push(word.charAt(0).toUpperCase() + word.slice(1));
  };

  Ucase(str[i]);
}
console.log(upperCase);

//IIFE SUM UPPERCASE

let strIIFE = ["apple", "orange", "mango"];
let upperCaseIIFE = [];

for (let i = 0; i <= strIIFE.length - 1; i++) {
  (function (word) {
    upperCaseIIFE.push(word.charAt(0).toUpperCase() + word.slice(1));
  })(strIIFE[i]);
}
console.log(upperCaseIIFE);
