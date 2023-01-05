//   You're given a two-dimensional array (a matrix) of potentially unequal height
//   and width containing only 0s and 1s. The matrix
//   represents a two-toned image, where each 1 represents black and
//   each 0 represents white. An island is defined as any number of
//   1s that are horizontally or vertically adjacent (but not
//   diagonally adjacent) and that don't touch the border of the image. In other
//   words, a group of horizontally or vertically adjacent 1s isn't an
//   island if any of those 1s are in the first row, last row, first
//   column, or last column of the input matrix.

// Note that an island can twist. In other words, it doesn't have to be a
// straight vertical line or a straight horizontal line; it can be L-shaped, for
// example.

// You can think of islands as patches of black that don't touch the border of
// the two-toned image.

// Write a function that returns a modified version of the input matrix, where
// all of the islands are removed. You remove an island by replacing it with 0s

// Naturally, you're allowed to mutate the input matrix.

// let matrix = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ];

//Output: [
//   [1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ]

// i = 0
// i matrix.length - 1
//j = 0
// j = matrix[i].length - 1

// [1, 0, 0, 0, 0, 0]:
// let i = 0
//let j = 0
//  while(j < matrix[i].length) {
// do sth
// j++
// }
// function removeIslands(matrix) {
//   for (let i = 0; i < matrix.length - 1; i++) {
//     for (let j = 0; j < matrix[i].length - 1; j++) {
//       if (matrix[0][j] == 1) removeIslands(i, j, matrix);
//       if (matrix[i][0] == 1) removeIslands(i, j, matrix);
//     }
//   }

//   for (let i = 0; i < matrix.length - 1; i++) {
//     for (let j = 0; j < matrix[i].length - 1; j++) {
//       if (matrix[i][j] == 1) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   return matrix;
// }

// function removeIslands(i, j, matrix) {
//   if (matrix[i][j] == 1) {
//     matrix[i][j] = 2;
//   }

//   if (matrix[i - 1][j] && matrix[i - 1][j] == 1)
//     matrix[i][j] = removeIslands(i - 1, j, matrix);
//   if (matrix[i + 1][j] && matrix[i - 1][j] == 1)
//     matrix[i][j] = removeIslands(i + 1, j, matrix);
//   if (matrix[i][j - 1] && matrix[i - 1][j] == 1)
//     matrix[i][j] = removeIslands(i, j - 1, matrix);
//   if (matrix[i][j + 1] && matrix[i - 1][j] == 1)
//     matrix[i][j] = removeIslands(i, j + 1, matrix);
// }

let matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

//Solution
function removeIslands(matrix) {
  for (let j = 0; j < matrix.length; j++) {
    traverseNeighbors(j, 0, matrix);
    traverseNeighbors(j, matrix[0].length - 1, matrix);
  }
  for (let i = 0; i < matrix[0].length; i++) {
    traverseNeighbors(0, i, matrix);
    traverseNeighbors(matrix.length - 1, i, matrix);
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[0].length; i++) {
      const value = matrix[j][i];

      if (value == 1) {
        matrix[j][i] = 0;
      } else if (value == 2) {
        matrix[j][i] = 1;
      }
    }
  }
  console.log(matrix);
  return matrix;
}

function traverseNeighbors(j, i, matrix) {
  const current = matrix[j][i];

  if (current == 1) {
    matrix[j][i] = 2;

    if (j + 1 < matrix.length) {
      traverseNeighbors(j + 1, i, matrix);
    }
    if (j - 1 >= 0) {
      traverseNeighbors(j - 1, i, matrix);
    }
    if (i + 1 < matrix[0].length) {
      traverseNeighbors(j, i + 1, matrix);
    }
    if (i - 1 >= 0) {
      traverseNeighbors(j, i - 1, matrix);
    }
  }
}

removeIslands(matrix);
