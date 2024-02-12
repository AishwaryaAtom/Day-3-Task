//Ananymous Function ODD NUMBERS
let numbers = [1, 2, 3, 4, 5, 6];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  // Check if the current number is odd
  let ODD = function (num) {
    if (num % 2 !== 0) {
      // If it's odd, add it to the oddNumbers array
      oddNumbers.push(num);
    }
  };
  ODD(numbers[i]);
}
console.log(oddNumbers);

//IIFE ODD NUMBERS

// Iterate through the array using a for loop
let numbersIIFE = [1, 2, 3, 4, 5, 6];
let oddNumbersIIFE = [];
for (let i = 0; i < numbersIIFE.length; i++) {
  // Check if the current number is odd
  (function (num) {
    if (num % 2 !== 0) {
      // If it's odd, add it to the oddNumbers array
      oddNumbersIIFE.push(num);
    }
  })(numbersIIFE[i]);
}

// Print the odd numbers
console.log(oddNumbersIIFE);
