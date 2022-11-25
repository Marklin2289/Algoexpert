//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.

// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.

// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

// Sample Input
// Output
// [-1, 11];

// ================================================================================

// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length - 1; i++) {
//     const firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       const secondNum = array[j];
//       if (firstNum + secondNum === targetSum) {
//         console.log(firstNum, secondNum);
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// }

// // Do not edit the line below.
// // exports.twoNumberSum = twoNumberSum;
// twoNumberSum(array, targetSum);
// function twoSum(array, targetSum) {
// let numObj = {};
// for (let i = 0; i < array.length; i++) {
//   let complement = targetSum - array[i];
//   if (numObj[complement] !== undefined) {
//     return [numObj[complement], i];
//   }
//   numObj[array[i]] = i;
// }
// const numbers = {};
// for (let item of array) {
//   let potentialNum = targetSum - item;
//   if (potentialNum in numbers) return [potentialNum, item];
//   else numbers[item] = true;
//   console.log(numbers);
// }
// return [];

// }

// console.log(twoSum(array, targetSum));
let array = [2, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

let hashTwoSum = (array, targetSum) => {
  let storageHash = {};
  let nums = [];

  for (let i in array) {
    let addend = targetSum - array[i];

    if (addend in storageHash) {
      nums.push([addend, array[i]]);
    }
    storageHash[array[i]] = i;
    console.log(storageHash);
  }
  return nums;
};

console.log(hashTwoSum(array, targetSum));
