// You're given two positive integers representing the height of a staircase and
// the maximum number of steps that you can advance up the staircase at a time.
// Write a function that returns the number of ways in which you can climb the
// staircase.
//   For example, if you were given a staircase of height = 3 and
//   maxSteps = 2 you could climb the staircase in 3 ways. You could
//   take 1 step, 1 step, then 1 step, you could also take
//   1 step, then 2 steps, and you could take 2 steps, then 1 step.

// Note that maxSteps &lt;= height will always be true.

let height = 4;
let maxSteps = 2;

function staircaseTraversal(height, maxSteps) {
  let currentNumberOfWays = 0;
  const waysToTop = [1];
  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;

    if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];
    currentNumberOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumberOfWays);

    return waysToTop[height];
  }
}

//Height = 5
//2 previous amount combine

1, 1, 1, 1, 1;
1, 1, 1, 2;
1, 1, 2, 1;
1, 2, 1, 1;
2, 1, 1, 1;
2, 1, 2;
2, 2, 1;
1, 2, 2;
// 3x8 + 1
// heigh = 5 maxSteps =3 =====13 : 3x4 + 1
1, 1, 1, 1, 1;
1, 1, 1, 2;
1, 1, 2, 1;
1, 1, 3;
1, 2, 1, 1;
1, 2, 2;
1, 3, 1;
2, 1, 1, 1;
2, 1, 2;
2, 2, 1;
2, 3;
3, 1, 1;
3, 2;

// heigh = 4 maxSteps =3 =====7 : 3x2 + 1
1, 1, 1, 1;
1, 1, 2;
1, 2, 1;
1, 3;
2, 1, 1;
2, 2;
3, 1;

//hieght =3  maxstep=3  =====4 : 3x1 + 1

1, 1, 1;
1, 2;
2, 1;
3;
