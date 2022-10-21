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
array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;
// Output
// [-1, 11];

// ================================================================================

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        console.log(firstNum, secondNum);
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;
twoNumberSum();

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
