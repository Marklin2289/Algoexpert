//   Write a function that takes in an n x m two-dimensional array (that can be
//     square-shaped when n == m) and returns a one-dimensional array of all the
//     array's elements in spiral order.

//   Spiral order starts at the top left corner of the two-dimensional array, goes
//   to the right, and proceeds in a spiral pattern all the way until every element
//   has been visited.

let array = [
  [1, 2, 3, 4], // 0  i j
  [12, 13, 14, 5], // 1
  [11, 16, 15, 6], // 2
  [10, 9, 8, 7], // 3
];

// array[0] - idx:  0 -> length
// array[1] - array[1].pop() : 5, array[0].push(array[1].pop()) : no
// console.log(array[0][0]); // 1

// let i = 0;

// let startingRow = 0; //array[i];
// let startingColumn = array[i].length - 1; //array[i][array[i].length - 1];
// let endingRow = array.lenth - 1; //array[array[i].length - 1];
// let endingColumn = array[i][0];

// let startingRow = 0;
// let startingColumn = array[startingRow][array[startingRow].length - 1];
// let endingRow = array.length - 1;
// let endingColumn = array[endingRow][startingColumn];

// function spiralTraverse(array) {
//   let result = [];
//   while (startingRow < endingRow && startingColumn > endingColumn) {
//     result.push(array[startingRow]);
//     // result.push(startingColumn);
//   }
//   console.log(result);
//   return result;
// }

spiralTraverse(array);

function spiralTraverse(array) {
  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
      console.log(result);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
      console.log(result);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (endRow > startRow) {
        result.push(array[endRow][col]);
        console.log(result);
      }
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (endCol > startCol) {
        result.push(array[row][startCol]);
        console.log(result);
      }
    }
    startRow += 1;
    endRow -= 1;
    startCol += 1;
    endCol -= 1;
  }
  //   console.log(result);
  return result;
}
