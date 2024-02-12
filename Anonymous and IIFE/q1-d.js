//ANANYMOUS PRIME NUMBER
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];
let primeNum = [];

for (j = 0; j < numbers.length; j++) {
  let isPrime = function (num) {
    if (num <= 1) {
      return false;
    } else {
      var maxFactor = Math.sqrt(num);
      for (var i = 2; i <= maxFactor; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  };

  if (isPrime(numbers[j])) {
    primeNum.push(numbers[j]);
  }
}
console.log(primeNum);

//IIFE  PRIME NUMBER

let numbersIIFE = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];
let primeNumIIFE = [];

for (j = 0; j < numbers.length; j++) {
  (function (num) {
    if (num <= 1) {
      return false;
    } else {
      var maxFactor = Math.sqrt(num);
      for (var i = 2; i <= maxFactor; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      primeNumIIFE.push(numbers[j]);
      return true;
    }
  })(numbersIIFE[j]);
}

console.log(primeNum);
