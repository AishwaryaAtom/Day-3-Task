//Ananymous REMOVE DUPLICATE

let arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
let newArr = [];
for (i = 0; i <= arr.length; i++) {
  let removeDup = function (a) {
    if (a == arr[i + 1]) {
      return false;
    } else {
      newArr.push(a);
    }
  };
  removeDup(arr[i]);
}
console.log(newArr);

//IIFE REMOVE DUPLICATE
let arrIIFE = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 15];
let newArrIIFE = [];
for (i = 0; i <= arrIIFE.length; i++) {
  (function (a) {
    if (a == arrIIFE[i + 1]) {
      return false;
    } else {
      newArrIIFE.push(a);
    }
  })(arrIIFE[i]);
}
console.log(newArrIIFE);
