//   Write a function that takes in two non-empty arrays of integers, finds the
//   pair of numbers (one from each array) whose absolute difference is closest to
//   zero, and returns an array containing these two numbers, with the number from
//   the first array in the first position.

//   Note that the absolute difference of two integers is the distance between
//   them on the real number line. For example, the absolute difference of -5 and 5
//   is 10, and the absolute difference of -5 and -4 is 1.

//   You can assume that there will only be one pair of numbers with the smallest
//   difference.

let arrayOne = [-1, 5, 10, 20, 28, 3]; //==> [-1, 3, 5, 10, 20, 28]
let arrayTwo = [26, 134, 135, 15, 17]; //==> [15, 17, 26, 134, 135]

//Output  = [28, 26]
//Solution 1
// function smallestDifference(arrayOne, arrayTwo) {
//   let smallestDifference;
//   let difference;
//   smallestDifference = Math.abs(arrayOne[0] - arrayTwo[0]); // 27,16
//   let result = [];
//   for (let i = 0; i < arrayOne.length; i++) {
//     for (let j = 0; j < arrayTwo.length; j++) {
//       difference = Math.abs(arrayOne[i] - arrayTwo[j]);
//       if (difference < smallestDifference) {
//         smallestDifference = difference;
//         result = [arrayOne[i], arrayTwo[j]];
//       }
//     }
//   }
//   console.log(result);
//   return result;
// }

// smallestDifference(arrayOne, arrayTwo);

// //Solution 2

// //[-1, 3, 5, 10, 20, 28]
// //[15, 17, 26, 134, 135]

// function smallestDifference(arrayOne, arrayTwo) {
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let result;
//   let smallestDifference;
//   let difference;

//   while (pointer1 < arrayOne.length) {
//     difference = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2]); // 16
//     for (let i = 1; i < arrayTwo.length - 1; i++) {
//       if (difference < Math.abs(arrayOne[pointer1] - arrayTwo[pointer2])) {
//         smallestDifference = difference;
//       }
//     }
//   }
// }

///
//[-1, 3, 5, 10, 20, 28]
//[15, 17, 26, 29, 135] . => 13 => 11 = 2 => ???
//   difference1 : 16 => 12 => 10 => 5 => 5 => 3 => 6(skip)
//   difference2 : 6

// function smallestDifference(arrayOne, arrayTwo) {
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);
//   let pointer1 = arrayOne.length - 1;
//   let pointer2 = 0;
//   let smallestDifference = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2]); // 13
//   let difference;
//   while (arrayOne[pointer1] > arrayTwo[pointer2]) {
//     pointer2++;
//     console.log(pointer2);
//     if (
//       smallestDifference > Math.abs(arrayOne[pointer1] - arrayTwo[pointer2])
//     ) {
//       smallestDifference = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2]);
//       console.log(smallestDifference);
//     }
// if (
//   arrayOne[pointer1] == arrayTwo[pointer2] ||
//   arrayOne[pointer1] < arrayTwo[pointer2]
// ) {
//   return [arrayOne[pointer1], arrayTwo[pointer2]];
// } else {
//   pointer2++;
//   console.log(pointer2);
// }
//   }
// }

//   =============
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let smallestDifference;
//   let differenceBefore;
//   let differenceAfter;

//   while (pointer1 < arrayOne.length) {
//     smallestDifference = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2]);
//     if (arrayOne[pointer1] == arrayTwo[pointer2]) {
//       return [arrayOne[pointer1], arrayTwo[pointer2]];
//     } else if (
//       arrayOne[pointer1] < arrayTwo[pointer2] &&
//       point1 < arrayOne.length
//     ) {
//       differenceBefore = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2]); //16
//       pointer1++;
//       differenceAfter = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2]);
//       smallestDifference = differenceAfter;
//     }
//     console.log(pointer1, pointer2);
//     return smallestDifference;
//   }
// }
// smallestDifference(arrayOne, arrayTwo);

//
// let afterDifference; // 13
//   let beforeDifference;
//   while (arrayOne[pointer1] > arrayTwo[pointer2]) {
//     pointer2++;
//     console.log(pointer2);
//     beforeDifference = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2 - 1]);
//     afterDifference = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2]);
//     if (afterDifference < beforeDifference)
//       return [arrayOne[pointer1], arrayTwo[pointer2]];
//     else return [arrayOne[pointer1], arrayTwo[pointer2 - 1]];
// if (
//   arrayOne[pointer1] == arrayTwo[pointer2] ||
//   arrayOne[pointer1] < arrayTwo[pointer2]
// ) {
//   return [arrayOne[pointer1], arrayTwo[pointer2]];
// } else {
//   pointer2++;
//   console.log(pointer2);
// }
//   }

//[-1, 3, 5, 10, 20, 28]
//[15, 17, 26, 134, 135] . => 13 => 11 = 2 => ???

function smallestDifference(arrayOne, arrayTwo) {
  let pointerOne = 0;
  let pointerTwo = 0;
  let difference = Infinity;
  let result;

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let firstVal = arrayOne[pointerOne];
    let secondVal = arrayTwo[pointerTwo];
    if (firstVal === secondVal) {
      return [firstVal, secondVal];
    }

    let currDiff = Math.abs(firstVal - secondVal);
    if (currDiff < difference) {
      difference = currDiff;
      console.log(difference);
      result = [firstVal, secondVal];
      console.log(result);
    }

    secondVal > firstVal ? pointerOne++ : pointerTwo++;
  }
  console.log(result);
  return result;
}

smallestDifference(arrayOne, arrayTwo);
