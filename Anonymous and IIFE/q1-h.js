//ANONYMOUS ROTATE ARRAY
let arr = [1, 2, 3];
let k = 2;

for (i = 0; i < k; i++) {
  let rotate = function (arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
  };

  rotate(arr);
  console.log(arr);
}

//IIFE ROTATE ARRAY

let arrIIFE = [1, 2, 3];

for (i = 0; i < k; i++) {
  (function (arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
  })(arrIIFE);

  console.log(arrIIFE);
}
