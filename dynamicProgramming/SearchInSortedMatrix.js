// You're given a two-dimensional array (a matrix) of distinct integers and a
// target integer. Each row in the matrix is sorted, and each column is also sorted; the
// matrix doesn't necessarily have the same height and width.

//   Write a function that returns an array of the row and column indices of the
//   target integer if it's contained in the matrix, otherwise
//   [-1, -1].

let matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
];

const target = 1005;

//Output [3,3]

// function searchInSortedMatrix(matrix, target) {
//   let h = 0;
//   let w = 0;

//   while (h < matrix.length && w < matrix[0].length) {
//     if (matrix[h][w] == target) return [h, w];

//     if (matrix[h + 1][w] < target) {
//       h++;
//       console.log(h);
//     } else if (matrix[h + 1][w] > target) {
//       w++;
//       console.log(w);
//     }
//   }
//   return [-1, -1];
// }
// console.log(searchInSortedMatrix(matrix, target));

//
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return [-1, -1];

  let row = 0;
  let col = matrix[0].length - 1;
  console.log(`col is : ${col}`);

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return [row, col];
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return [-1, -1];
}

console.log(searchMatrix(matrix, target));
