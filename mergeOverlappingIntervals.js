//   Write a function that takes in a non-empty array of arbitrary intervals,
//   merges any overlapping intervals, and returns the new intervals in no
//   particular order.

//   Each interval  is an array of two integers, with interval[0]
//   as the start of the interval and interval[1]  as the end of the interval.

//   Note that back-to-back intervals aren't considered to be overlapping. For
//   example, [1,5] and [6,7]  aren't overlapping: however, [1,6] and [6,7] are
//   indeed overlapping.

//   Also note that the start of any particular interval will always be less than
//   or equal to the end of that interval.

// let array = [
//   [9, 12], // 34 [9,49] //40
//   [12, 54], // 3 [9,54] //45
//   [43, 49], // 6
//   [45, 90], // 36 [9,90]
//   [91, 93],
// ];
// result = [array[1,2],]
//Output = [[1,2],[3,8],[9,10]]

// function mergeOverlappingIntervals(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i][0] > array[i + 1][0]) {
//       [array[i], array[i + 1]] = [array[i + 1], array[i]];
//     }
//   }

//   let updatedResultArrayI = array[0];
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i + 1 < array.length) {
//       if (
//         updatedResultArrayI[1] >= array[i + 1][0] &&
//         updatedResultArrayI[1] < array[i + 1][1]
//       ) {
//         updatedResultArrayI = [updatedResultArrayI[0], array[i + 1][1]]; //[3,7]
//       } else {
//         result.push(updatedResultArrayI);
//         updatedResultArrayI = array[i + 1]; // [3,5]
//       }
//     } else {
//       result.push(array[i]);
//     }
//   }
//   console.log(result);
//   return result;
// }
// mergeOverlappingIntervals(array);

// while (i < array.length - 1) {
//   if (
//     updatedResultArrayI[1] >= array[i + 1][0] &&
//     updatedResultArrayI[1] < array[i + 1][1]
//   ) {
//     updatedResultArrayI = [updatedResultArrayI[0], array[i + 1][1]];
//   } else {
//     result.push(updatedResultArrayI);
//     updatedResultArrayI = array[i + 1];
//   }
// }

// function mergeOverlappingIntervals(array) {
//   let updatedResultArrayI = array[0];
//   let result = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i][0] > array[i + 1][0]) {
//       [array[i], array[i + 1]] = [array[i + 1], array[i]];
//     }
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (i + 1 < array.length) {
//       if (
//         updatedResultArrayI[1] >= array[i + 1][0] &&
//         updatedResultArrayI[1] < array[i + 1][1]
//       ) {
//         updatedResultArrayI = [updatedResultArrayI[0], array[i + 1][1]];
//       } else if (
//         updatedResultArrayI[1] >= array[i + 1][0] &&
//         updatedResultArrayI[1] > array[i + 1][1]
//       ) {
//         updatedResultArrayI = [updatedResultArrayI[0], updatedResultArrayI[1]];
//       } else if (updatedResultArrayI[1] < array[i + 1][0]) {
//         result.push(updatedResultArrayI);
//       }
//     } else {
//       result.push(array[i]);
//     }
//   }
//   console.log(result);
//   return result;
// }

let array = [
  [1, 10],
  [11, 20],
  [21, 30],
  [31, 40],
  [41, 50],
  [51, 60],
  [61, 70],
  [71, 80],
  [81, 90],
  [91, 100],
];

mergeOverlappingIntervals(array);

//Solution
function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [array[0]];
  //   console.log(mergedIntervals) => [[9,12]]
  //   console.log(`mergedIntervals is : ${mergedIntervals}`);
  let mergedIntervalPointer = 0;

  for (let index = 1; index < array.length; index++) {
    const [start, end] = mergedIntervals[mergedIntervalPointer];
    console.log(mergedIntervals[mergedIntervalPointer]);
    // console.log([start, end]); [[start : 9, end : 12]]
    const [nextStart, nextEnd] = array[index];
    const isOverlapping = end >= nextStart;
    if (isOverlapping) {
      const biggerEnd = Math.max(end, nextEnd);
      mergedIntervals[mergedIntervalPointer] = [start, biggerEnd]; //=> [[9,54]] => [[9,90], [91,93]]
    } else {
      mergedIntervals.push(array[index]);
      mergedIntervalPointer++;
    }
  }
  return mergedIntervals;
}
