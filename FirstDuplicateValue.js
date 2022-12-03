//   Given an array of integers between 1 and n ,
//   inclusive, where n  is the length of the array, write a function
//   that returns the first integer that appears more than once (when the array is
//   read from left to right).

//   In other words, out of all the integers that might occur more than once in the
//   input array, your function should return the one whose first duplicate value
//   has the minimum index.

//   If no integer appears more than once, your function should return -1

//   Note that you're allowed to mutate the input array.
// [2,1,5,3,3,2,4] output : 3
// 2:5 . 3:4
//                    p
//                 i
let array = [2, 1, 5, 3, 3, 2, 4];
//output = 2

//Solution 1
function firstDuplicateValue(array) {
  let index = Infinity;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[i] == array[j]) {
        // index = j; //3
        index = Math.min(index, j);
        console.log(index);
      }
    }
  }
  console.log(index);
  if (index == Infinity) return -1;
  return array[index];
}

//Solution 2
function firstDuplicateValue(array) {
  let hash = new Map();
  for (let i = 0; i < array.length; i++) {
    if (hash.has(array[i])) {
      return array[i];
    } else {
      hash.set(array[i], true);
    }
  }
  return -1;
}

//Not useful
// function firstDuplicateValue(array) {
//   for (i = 0; i < array.length; i++) {
//     let num = Math.abs(array[i]); //num =2
//     console.log(`num is : ${num}`);
//     console.log(`array[num-1] : ${array[num - 1]}`);
//     if (array[num - 1] < 0) return num;
//     console.log(`num is after if statement: ${num}`);
//     array[num - 1] *= -1;
//     console.log(`array[num-1] after * -1: ${array[num - 1]}`);
//     console.log(`array is : ${array}`);
//   }
//   return -1;
// }

firstDuplicateValue(array);
