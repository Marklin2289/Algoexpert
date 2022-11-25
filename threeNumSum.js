//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. The function should find all triplets in
//   the array that sum up to the target sum and return a two-dimensional array of
//   all these triplets. The numbers in each triplet should be ordered in ascending
//   order, and the triplets themselves should be ordered in ascending order with
//   respect to the numbers they hold.

//   If no three numbers sum up to the target sum, the function should return an
//   empty array.

let array = [12, 3, 1, 2, -6, 5, -8, 6];

let targetSum = 0;

//  output : [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

// function threeNumSum(array, targetSum) {
//   array.sort((a, b) => a - b);
//   console.log(array);
// }

// threeNumSum(array, targetSum);

// // sudo: 1
// // TargetSum = num1 + num2 + num3
// //TargetSum - num1 = num2 + num3
// //targetSum - num1 - num2 = num3

// const nums = {};
// for (const idx in array) {
//   let potentialMatch = targetSum - array[idx];
//   for (const num of array) {
//     // for (let j = 1; index < array.length -1; j++) {
//     const potentialMatch = array[1] + array[1 + j];

//     // }
//     //Potential match =  targetSum + i[0]
//     //Potential match =  num1 + num2
//     const potentialMatch = targetSum - num;
//     if (potentialMatch in nums) {
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return [];
// }

//[-8,-6,1,2,3,5,6,12] => length = 8

function threeNumSum(array, targetSum) {
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    let idx1 = array.shift();
    console.log(`idx1: ${idx1}`);
    let tempSum = targetSum - idx1;
    console.log(`tempSum: ${tempSum}`);
    console.log(array.length);
    return hashTwoSum(array, tempSum);
  }
}
//  0 - -8= 2 + 6
let hashTwoSum = (array, Sum) => {
  let storageHash = {};
  let nums = [];

  for (let i in array) {
    let addend = Sum - array[i];

    if (addend in storageHash) {
      nums.push([-Sum, addend, array[i]]);
    }
    storageHash[array[i]] = i;
    // console.log(storageHash);
  }
  return nums;
};
console.log(threeNumSum(array, targetSum));
