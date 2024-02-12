//Ananymous PANLINDROME
let str = ["madam", "maths", "malayalam", "amma"];
let palindromes = [];
for (i = 0; i < str.length; i++) {
  let palindromFunc = function (pstr) {
    let rev = pstr.split("").reverse().join("");

    if (pstr == rev) {
      palindromes.push(pstr);
    } else {
      return false;
    }
  };
  palindromFunc(str[i]);
}
console.log(palindromes);

//IIFE PANLINDROME
let strIIFE = ["madam", "maths", "malayalam", "amma"];
let palindromesIIFE = [];
for (i = 0; i < strIIFE.length; i++) {
  (function (pstr) {
    let rev = pstr.split("").reverse().join("");

    if (pstr == rev) {
      palindromesIIFE.push(pstr);
    } else {
      return false;
    }
  })(strIIFE[i]);
}
console.log(palindromesIIFE);
