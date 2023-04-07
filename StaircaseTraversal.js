// You're given two positive integers representing the height of a staircase and
// the maximum number of steps that you can advance up the staircase at a time.
// Write a function that returns the number of ways in which you can climb the
// staircase.
//   For example, if you were given a staircase of height = 3 and
//   maxSteps = 2 you could climb the staircase in 3 ways. You could
//   take 1 step, 1 step, then 1 step, you could also take
//   1 step, then 2 steps, and you could take 2 steps, then 1 step.

// Note that maxSteps &lt;= height will always be true.

//Break down problem into graph (dynamic programming)
//2 ways to solve: Top-down approach or bottom-up approach
//Break into sub problems until all values are 0 or 1 (meaning theres only 1 way)
//Add previous solutions together
//Memoization can save time space complexcity

//O(n) time O(n)space

// function staircaseTraversal(height, maxSteps) {
//   let currentNumberOfWays = 0;
//   const waysToTop = [1];

//   for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
//     const startOfWindow = currentHeight - maxSteps - 1;
//     console.log(`startOfWindow : ${startOfWindow}`);
//     const endOfWindow = currentHeight - 1;
//     console.log(`endOfWindow : ${endOfWindow}`);
//     if (startOfWindow >= 0) {
//       console.log(`startOfWindow >=0`);
//       currentNumberOfWays -= waysToTop[startOfWindow];
//     }
//     console.log(`startOfWindow < 0`);
//     currentNumberOfWays += waysToTop[endOfWindow];
//     console.log(`currentNumberOfWays : ${currentNumberOfWays}`);
//     waysToTop.push(currentNumberOfWays);
//   }
//   console.log(waysToTop[height]);
//   return waysToTop[height];
// }
// staircaseTraversal(height, maxSteps);

// ///

// function memoisedFibonacci(n, cache) {
//   cache = cache || [1, 1];
//   if (cache[n]) return cache[n];
//   return (cache[n] =
//     memoisedFibonacci(n - 1, cache) + memoisedFibonacci(n - 2, cache));
// }

// ///Not dynamic
// var climbStairs = function (height, maxSteps) {
//   let cache = {
//     0: 1,
//     1: 1,
//   };

//   if (height <= 1) return cache[height];

//   for (let i = 2; i <= Math.min(height, maxSteps); i++) {
//     cache[i] = cache[i - 1] + cache[i - 2];
//   }

//   return cache[height];
// };
let height = 5;
let maxSteps = 3;

//dynamic solution without memoization
function staircaseTraversal(height, maxSteps) {
  if (height <= 1) return 1;
  let num = 0;

  for (let i = 1; i < Math.min(height, maxSteps) + 1; i++) {
    console.log(`i is : ${i}`);
    num += staircaseTraversal(height - i, maxSteps);
    console.log(`num is : ${num}`);
  }

  return num;
}

console.log(staircaseTraversal(height, maxSteps));
// //Height = 5
// //2 previous amount combine

// 1 , 1 ,1 , 1 ,1
// 1 , 1 ,1 ,2
// 1, 1,2,1
// 1,2,1,1
// 2,1,1,1
// 2,1,2
// 2,2,1
// 1,2,2
//                                 // 3x8 + 1
// // heigh = 5 maxSteps =3 =====13 : 3x4 + 1
// 1,1,1,1,1
// 1,1,1,2
// 1,1,2,1
// 1,1,3
// 1,2,1,1
// 1,2,2
// 1,3,1
// 2,1,1,1
// 2,1,2
// 2,2,1
// 2,3
// 3,1,1
// 3,2

// // heigh = 4 maxSteps =3 =====7 : 3x2 + 1
// 1,1,1,1
// 1,1,2
// 1,2,1
// 1,3
// 2,1,1
// 2,2
// 3,1

// //hieght =3  maxstep=3  =====4 : 3x1 + 1

// 1,1,1
// 1,2
// 2,1
// 3
