//   Write a function that takes in an integer matrix of potentially unequal height
//   and width and returns the minimum number of passes required to convert all
//   negative integers in the matrix to positive integers.

//   A negative integer in the matrix can only be converted to a positive integer
//   if one or more of its adjacent elements is positive. An adjacent element is an
//   element that is to the left, to the right, above, or below the current element
//   in the matrix. Converting a negative to a positive simply involves multiplying
//   it by -1

//   Note that the 0 value is neither positive nor negative, meaning
//   that a 0 can't convert an adjacent negative to a positive.

//   A single pass through the matrix involves converting all the negative integers
//   that can be converted at a particular point in time. For example,
//   consider the following input matrix:

//Output = 3

// function minimumPassesOfMatrix(matrix) {
//   let counter = 0;
//   let visited = new Set(); //{"i + j" : true}
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       node = matrix[i][j];
//       let index = [[i], [j]];

//       if (node > 0 && !visited) {
//         helper(i, j, matrix);
//         visited.add([i, j]);
//         counter++;
//         console.log(counter);
//       }
//     }
//   }
//   console.log(counter);
//   return counter >= 0 ? counter : -1;
// }

// function helper(i, j, matrix) {
//   if (matrix[i - 1][j] < 0 && matrix[i - 1][j]) {
//     matrix[i - 1][j] = matrix[i - 1][j].mul(-1);
//   }
//   if (matrix[i + 1][j] < 0 && matrix[i + 1][j]) {
//     matrix[i + 1][j] = matrix[i + 1][j].mul(-1);
//   }
//   if (matrix[i][j - 1] < 0 && matrix[i][j - 1]) {
//     matrix[i][j - 1] = matrix[i][j - 1].mul(-1);
//   }
//   if (matrix[i][j + 1] < 0 && matrix[i][j + 1]) {
//     matrix[i][j + 1] = matrix[i][j + 1].mul(-1);
//   }
// }

let matrix = [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1],
];

function minimumPassesOfMatrix(matrix) {
  let passes = 0;
  const queue = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > 0) queue.push([i, j]);
    }
  }
  console.log(queue);
  //   console.log(Object.entries(queue));

  let queueLength = queue.length;
  //3

  for (idx = 0; idx < queue.length; idx++) {
    const i = queue[idx][0];
    const j = queue[idx][1];
    dfs(i, j + 1, matrix, queue);
    dfs(i, j - 1, matrix, queue);
    dfs(i + 1, j, matrix, queue);
    dfs(i - 1, j, matrix, queue);

    if (idx === queueLength - 1) {
      queueLength = queue.length;
      console.log(queueLength);
      passes++;
      console.log(`passese = ${passes}`);
    }
  }

  //   for (i = 0; i < matrix.length; i++) {
  //     for (j = 0; j < matrix[0].length; j++) {
  //       if (matrix[i][j] < 0) return -1;
  //     }
  //   }
  console.log(passes - 1);
  return passes - 1;
}

function dfs(i, j, matrix, queue) {
  if (
    i < 0 ||
    j < 0 ||
    i >= matrix.length ||
    j >= matrix[0].length ||
    matrix[i][j] >= 0
  )
    return;
  queue.push([i, j]);
  console.log(matrix[i][j]);
  matrix[i][j] *= -1;
}

//Output = 3

minimumPassesOfMatrix(matrix);

//Note:
// "let" in for loop returns []
// without "let" in for loop returns object
