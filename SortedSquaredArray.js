//   Write a function that takes in a non-empty array of integers that are sorted
//   in ascending order and returns a new array of the same length with the squares
//   of the original integers also sorted in ascending order.

// Use two pointers to keep track of the smallest and largest values in the input
// array. Compare the absolute values of these smallest and largest values,
// square the larger absolute value, and place the square at the end of the
// output array, filling it up from right to left. Move the pointers accordingly,
// and repeat this process until the output array is filled.

// Math.abs()
// Math.pow(number, 2)

// let array = [1, 2, 3, 5, 6, 8, 9];

let array = [5, 2, 4, 1, 6, 9, 8];

//output array = [1,4,9,25,36,64,81]

function sortedSquaredArray(array) {
  let result = [];
  let largestNum;

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && Math.abs(array[j]) < Math.abs(array[j - 1])) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j -= 1;
    }
  }
  for (let k = array.length - 1; k >= 0; k--) {
    largestNum = array[k] * array[k];
    result.unshift(largestNum);
  }

  //   return array;

  return result;
}

// // Build an array of test data.
// var data = [ "X" ];

// // Unshift data onto the array. Unshift() prepends elements to
// // the beginning of the given array. Note that it can take more
// // than one argument. In the output, notice that when unshift()
// // takes multiple arguments, they are prepended in a right-to-left
// // order (mimicing their appearence in the arguments list).
// data.unshift( "A" );
// data.unshift( "B", "C" );

// // Output resultant array.
// console.log( data );

// // ["B", "C", "A", "X"]

//Optimal answer

const last = array.length - 1;

let startPointer = 0;
let endPointer = last;

const newArry = new Array(array.length);

for (let i = last; i > 0; i--) {
  const start = Math.abs(array[startPointer] ** 2);
  const end = Math.abs(array[endPointer] ** 2);

  if (end > start) {
    newArry[i] = end;
    endPointer--;
  } else {
    newArry[i] = start;
    startPointer++;
  }
  return newArry;
}
