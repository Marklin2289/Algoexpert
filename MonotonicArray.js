//   Write a function that takes in an array of integers and returns a boolean
//   representing whether the array is monotonic.

//   An array is said to be monotonic if its elements, from left to right, are
//   entirely non-increasing or entirely non-decreasing.

//   Non-increasing elements aren't necessarily exclusively decreasing; they simply
//   don't increase. Similarly, non-decreasing elements aren't necessarily
//   exclusively increasing; they simply don't decrease.
//   Note that empty arrays and arrays of one element are monotonic.

// let array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// -1 - -5 >= 0; // -5 - - 10 >= 0
// 1 - 5 <= 0; // 5 - 10 <= 0 // 10 - 1 <= 0 ? false : true
//outout = true

// function isMonotonic(array) {
//   let i = 0;
//   let result = true;

//   while (i < array.length - 1 && array[i] >= array[i + 1]) {
//     if (array[i] >= array[i + 1]) {
//       i++;
//     } else {
//       result = false;
//     }
//   }
//   while (i < array.length - 1 && array[i] <= array[i + 1]) {
//     if (array[i] <= array[i + 1]) {
//       i++;
//     } else {
//       result = false;
//     }
//   }
//   console.log(result);
//   return result;
// }

let array = [-1, 5, -10, -1100, -1100, -1101, -1102, -9001];
isMonotonic(array);

function isMonotonic(array) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (isIncreasing(array[i], array[i - 1])) decreasing = false;
    console.log(
      `array[i]: ${array[i]},array[i - 1]: ${
        array[i - 1]
      }, decreasing : ${decreasing} `
    );
    // console.log(decreasing);
    if (isDecreasing(array[i], array[i - 1])) increasing = false;
    console.log(
      `array[i]: ${array[i]},array[i - 1]: ${
        array[i - 1]
      }, increasing : ${increasing} `
    );
  }
  console.log(`final result : ${increasing || decreasing}`);
  return increasing || decreasing;
}

function isIncreasing(a, b) {
  return a > b;
}
function isDecreasing(a, b) {
  return a < b;
}
