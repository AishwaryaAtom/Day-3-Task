//Ananymous MEDIAN FIND
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6, 7];

let findMedianSortedArrays = function (nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const n = merged.length;

  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
};

console.log(findMedianSortedArrays(nums1, nums2));

//IIFE  MEDIAN FIND
const nums1IIFE = [1, 3, 5];
const nums2IIFE = [2, 4, 6, 7];
let median = 0;

(function (nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const n = merged.length;

  if (n % 2 === 0) {
    median = (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    median = merged[Math.floor(n / 2)];
  }
})(nums1IIFE, nums2IIFE);
console.log(median);
