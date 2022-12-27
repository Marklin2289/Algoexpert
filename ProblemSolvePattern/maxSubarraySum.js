// write a function that calculates the maximum sum of n consecutive elements
// in the array.

function maxSubarraySum(array, num) {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }
  maxSum = tempSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    } else {
      maxSum = maxSum;
    }
  }
  console.log(maxSum);
  return maxSum;
}
// this is SLIDING WINDOW
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 10
