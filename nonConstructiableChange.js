//   Given an array of positive integers representing the values of coins in your
//   possession, write a function that returns the minimum amount of change (the
//   minimum sum of money) that you cannont create.  create. The given coins can have
//   any positive integer value and aren't necessarily unique (i.e., you can have
//   multiple coins of the same value).

//coins = [1,2,4] => 4
//set minimumPossible = 2 - 1
// [1, {3},4, {}]
// minimumSum = 4 - 1 = 3
// [1,{1},2,{2},{3},4,{},{3},7{11}]
/**
 * 3 =1+2
 * 4
 * 5 = 4 +1
 * 6 = 4+2
 * 7
 * 8 = 7 +1
 * 9 = 7 + 2
 * 10 = 7 + (1+2)
 * 11 = 7 + 4
 * 12 = 7 + 4 + 1
 * 13 = 7 + 4 + 2
 * 14 = 7 + 4 + 2 + 1
 */

// console.log(
//   coins.sort(function (a, b) {
//     return a - b;
//   })
// );

//  [1,1,2,3,5,7,22]
//[1,2,4,7]  =>15
/**
 * [1,1] min = 2, max = 2
 * [1,1,2] min = 3, max = 2 + [1,1] = 4,
 * [1,1,2,3] min = 4, max = 3 + [1,1,2] = 7
 * [1,1,2,3,5] min = 6, max = 5 + 7 = 12
 * [1,1,2,3,5,7] min = 8, max = 7 + [1,1,2,3,5].max = 19
 * [1,1,2,3,5,7,22] min = 23
 * 5 = 4 + minimumPossible
 * 6
 * 7
 * 8
 * 9
 * 10
 * 11
 * 12
 * 13
 * 14
 */
// array[i],array[i+1] =>  array[i+1] - array[i] = minimumPossible ,
// if minimumPossible <= 1, minimumSum = minimumPossible + 1
// array[i+1] + array[i] = maxumumPossible
//Output: 20
//Possible output: 1, < last index , > last index

// function nonConstructibleChange(coins) {
//   let minimumSum = 2;
//   let sortedCoins = coins.sort(function (a, b) {
//     return a - b;
//   });
//   for (let i = 0; i < sortedCoins.length; i++) {
//     if (coins[i] !== 1) {
//       return 1;
//     }
//     if (sortedCoins[i] + sortedCoins[i + 1] == minimumSum) {
//       minimumSum++;
//     } else {
//       return minimumSum;
//     }
//     return minimumSum;
//   }

// }

// [1,2,4,7]
// [1,2] minimumPoss = 3, 3
// [1,2,4] 5, 4 + [1,2] = 7
//[1,2,4,7] = 8, 7 + [1,2,4] = 14

// for(i in coins) {
//     const sum = coins[i] + coins[i+1]
// }
/**
 * [1,2] = [1,2],3
 * [1,2,4] = [1,2,4],3,[5,6,7]
 * [1,2,4,7] = [1,2,4,5,6,7]
 */
//[]
let coins = [1, 1, 1, 5];

// [1]
// [1,2,3]
// [1,2,3,4,5,6,7]
// [1,....,14]

function nonConstructibleChange(coins) {
  if (!coins.length) return 1;
  coins.sort((a, b) => a - b);
  let minChange = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minChange + 1) break;
    minChange += coins[i]; // 1, 3,7,14
  }
  return minChange + 1;
}

console.log(nonConstructibleChange(coins));
