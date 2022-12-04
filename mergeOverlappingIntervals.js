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
// let array = [
//   [9, 12], // 3
//   [12, 54], //0 [9,54] =>45
//   [43, 49], // 34
//   [45, 90], // 36 [9,90]
//   [91, 93],
// ];

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

// mergeOverlappingIntervalsSolution(array);

// let array = [
//     [9, 12], // 3
//     [12, 54], //0 [9,54] =>45
//     [43, 49], // 34
//     [45, 90], // 36 [9,90]
//     [91, 93],
//   ];

//Solution 1
// function mergeOverlappingIntervals(array) {
//   array.sort((a, b) => a[0] - b[0]);

//   const mergedIntervals = [array[0]];
//   let mergedIntervalPointer = 0;

//   for (let index = 1; index < array.length; index++) {
//     const [start, end] = mergedIntervals[mergedIntervalPointer];
//     // const [start, end] = mergedIntervals;
//     console.log(`1 : [${mergedIntervals[1]}]`);
//     // console.log([start, end]);
//     const [nextStart, nextEnd] = array[index];
//     const isOverlapping = end >= nextStart;
//     if (isOverlapping) {
//       const biggerEnd = Math.max(end, nextEnd);
//       mergedIntervals[mergedIntervalPointer] = [start, biggerEnd];
//     } else {
//       mergedIntervals.push(array[index]);
//       console.log(`mergedIntervals.push : ${array[index]}`);
//       console.log(`mergedIntervalPointer : ${mergedIntervalPointer}`);
//       mergedIntervalPointer++;
//       console.log(`mergedIntervalPointer : ${mergedIntervalPointer}`);
//     }
//   }
//   console.log(`mergedIntervals[0] is ${mergedIntervals[0]}`);
//   console.log(`mergedIntervals[1] is ${mergedIntervals[1]}`);
//   return mergedIntervals;
// }
// console.log(mergeOverlappingIntervals(array));

let array = [
  [9, 12], // 3
  [12, 54], //0 [9,54] =>45
  [43, 49], // 34
  [45, 90], // 36 [9,90]
  [91, 93],
];
// console.log(array[5]);
function mergeOverlappingIntervalsSolutionTwo(array) {
  array.sort((a, b) => a[0] - b[0]);
  let result = array[0];
  let output = [];
  for (let i = 1; i < array.length; i++) {
    if (result[1] >= array[i][0]) {
      result = [result[0], Math.max(result[1], array[i][1])];
    } else {
      output.push(result);
      output.push(array[i]);
    }
  }
  console.log(output);
  return output;
}

console.log(mergeOverlappingIntervalsSolutionTwo(array));
