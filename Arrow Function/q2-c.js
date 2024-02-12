//ARROWFUNCTION SUM OF NUMBERS
let numbers = [1, 2, 3, 4, 5];

let sum = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

console.log(sum(numbers));
