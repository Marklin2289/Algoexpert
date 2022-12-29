//   Write a function that takes in a non-empty array of integers and returns the
//   maximum sum that can be obtained by summing up all of the integers in a
//   non-empty subarray of the input array. A subarray must only contain adjacent
//   numbers (numbers next to each other in the input array).

// let array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

//Output = 19

//Solution 1
function kadanesAlgorithm(array) {
  let max = 0;
  let finalMax = -Infinity;

  for (let i = 0; i < array.length; i++) {
    max = Math.max(array[i], array[i] + max);
    if (max > finalMax) finalMax = max;
  }
  console.log(finalMax);
  return finalMax;
}

let array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

//Solution 2
function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    console.log(`maxEndingHere is : ${maxEndingHere}`);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
    console.log(`maxSoFar is : ${maxSoFar}`);
  }
  return maxSoFar;
}

kadanesAlgorithm(array);

//Solution 3
function kadanesAlgorithm(array) {
  let maxEnding = array[0];
  let curSum = 0;

  for (let num of array) {
    if (curSum < 0) curSum = 0;
    curSum += num;
    maxEnding = Math.max(maxEnding, curSum);
  }
  return maxEnding;
}
