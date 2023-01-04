// //   You're given a two-dimensional array (a matrix) of potentially unequal height
// //   and width containing only 0s and 1<s. Each
// //   0 represents land, and each 1 represents part of a
// //   river. A river consists of any number of 1s that are either
// //   horizontally or vertically adjacent (but not diagonally adjacent). The number
// //   of adjacent 1s forming a river determine its size.

// // Note that a river can twist. In other words, it doesn't have to be a straight
// // vertical line or a straight horizontal line; it can be L-shaped, for example.

// // Write a function that returns an array of the sizes of all rivers represented
// // in the input matrix. The sizes don't need to be in any particular order.

let matrix = [
  //j
  [0, 0, 0, 1, 0], //i
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

// //Output = [1,2,2,2,5]

// function riverSizes(matrix) {
//   let result = [];
//   let visited = false;

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] == visited) {
//         result.push(helper(i, j, matrix, 0, visited));
//         visited = true;
//       }
//     }
//   }
//   return result;
// }

// function helper(i, j, matrix, size = 0, visited) {
//   size++;
//   if (matrix[i][j] == 0) return;
//   if (helper(i - 1, j, matrix, size, visited)) {
//     size++, (visited = true);
//   }
//   if (helper(i + 1, j, matrix, size, visited)) {
//     size++, (visited = true);
//   }
//   if (helper(i, j - 1, matrix, size, visited)) {
//     size++, (visited = true);
//   }
//   if (helper(i, j + 1, matrix, size, visited)) {
//     size++, (visited = true);
//   }

//   return size;
// }

//Solution
function riverSizes(matrix) {
  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) arr.push(explore(i, j, 0, matrix));
      console.log(arr);
    }
  }
  return arr;
}

function explore(i, j, size, matrix) {
  size++;
  matrix[i][j] = 0;

  if (matrix[i][j + 1]) size = explore(i, j + 1, size, matrix);
  if (matrix[i][j - 1]) size = explore(i, j - 1, size, matrix);
  if (matrix[i + 1] && matrix[i + 1][j]) size = explore(i + 1, j, size, matrix);
  if (matrix[i - 1] && matrix[i - 1][j]) size = explore(i - 1, j, size, matrix);

  return size;
}

riverSizes(matrix);

console.log(0 == false); // true
console.log(0 == true); //false
