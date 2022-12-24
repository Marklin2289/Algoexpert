//   Given an array of distinct positive integers representing coin denominations and a
//   single non-negative integer n representing a target amount of
//   money, write a function that returns the number of ways to make change for
//   that target amount using the given coin denominations.

//   Note that an unlimited amount of coins is at your disposal.

//           [5, 5, 2, 1]

// let n = 7
// [1,2,4,7]  224,34,7
// [,3,2,2]

//Output = 12 way

// function numberOfWaysToMakeChange(n, denoms) {
//   let NumOfWays = 0;
//   for (let i = 0; i < denoms.length; i++) {
//     if (denoms[i] + denoms[i + 1] == n) {
//       NumOfWays++;
//     }
//     if (n / denoms[i]) {
//       NumOfWays++;
//     }
//   }
//   return NumOfWays;
// }

// console.log([1, 2, 3].fill(4)); // [4, 4, 4]
// console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
// console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
// console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
// console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
// console.log(Array(3).fill(4)); // [4, 4, 4]

let n = 7;
let denoms = [2, 3, 4, 7];
//Output = 13 way

function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);

  ways[0] = 1;
  console.log(`ways[0]is : ${ways[0]}`);
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        console.log(`ways at the beginning is ${ways}`);
        console.log(`denom : ${denom}`);
        console.log(`amount : ${amount}`);
        console.log(`ways[amount - denom] : ${ways[amount - denom]}`);
        ways[amount] += ways[amount - denom];
        console.log(`ways[amount] after += is ${ways[amount]}`);
        console.log(`ways at the     after is ${ways}`);
      }
    }
  }
  return ways[n];
}

console.log(numberOfWaysToMakeChange(n, denoms));
