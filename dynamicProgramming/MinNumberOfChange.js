//   Given an array of positive integers representing coin denominations and a
//   single non-negative integer n representing a target amount of
//   money, write a function that returns the smallest number of coins needed to
//   make change for (to sum up to) that target amount using the given coin
//   denominations.

//   Note that you have access to an unlimited amount of coins. In other words, if
//   the denominations are [1,5,10] , you have access to an unlimited
//   amount of 1s, 5s 10s.

// let n = 7;
// let denoms = [1, 5, 10];

//Output = 3 coins

// function minNumberOfCoinsForChange(n, denoms) {
//   const coins = new Array(n + 1).fill(Infinity);
//   console.log(coins);

//   coins[0] = 0;

//   for (let denom of denoms) {
//     for (let amount = 1; amount < n + 1; amount++) {
//       if (denom <= amount) {
//         // if (n / denom == 1) return 1;
//         // console.log(`ways at the beginning is ${ways}`);
//         // console.log(`denom : ${denom}`);
//         // console.log(`amount : ${amount}`);
//         // console.log(`ways[amount - denom] : ${ways[amount - denom]}`);
//         coins[amount] = amount / denom;
//         // console.log(`ways[amount] after += is ${ways[amount]}`);
//         // console.log(`ways at the     after is ${ways}`);
//       }
//     }
//   }
//   console.log(coins[n]);
//   return coins[n];
// }

let n = 7;
let denoms = [1, 5, 10];

function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      console.log("before : " + numOfCoins);
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
        console.log("after : " + numOfCoins);
        console.log(numOfCoins[amount]);
      }
    }
  }
  console.log(numOfCoins[n]);
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

minNumberOfCoinsForChange(n, denoms);
//https://www.youtube.com/watch?v=jgiZlGzXMBw&ab_channel=BackToBackSWE

// let n = 10;
// let denoms = [1, 7, 10];

// denom : 10
// amount : 10
// ways[amount - denom] : 1
// ways[amount] after += is 3
// ways at the     after is 1,1,1,1,1,1,1,2,2,2,3
