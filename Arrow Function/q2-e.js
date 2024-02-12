//ARROW PALINDROME

let str = ["madam", "maths", "malayalam", "amma"];
let palindromes = [];
for (i = 0; i < str.length; i++) {
  let palindromFunc = (pstr) => {
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
