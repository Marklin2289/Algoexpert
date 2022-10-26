// Write a function that takes in an array of integers and returns a sorted
// version of that array. Use the Quick Sort algorithm to sort the array.
// If you're unfamiliar with Quick Sort, we recommend watching the Conceptual
// Overview section of this question's video explanation before starting to code.

let array = [8, 5, 2, 9, 5, 6, 3];
// current index i         ^
//                  [8, 5, 2, 9, 5, 6, 3]
//                  [3, 5, 2, 9, 5, 6, 8]
// swapmarker index      ^
// pivotIndex        ^ array[pivotIndex] = array[array.length -1]

//Output = [2,3,5,5,6,8,9]

// Quick Sort works by picking a "pivot" number from an array, positioning every other
//number in the array in sorted order with respect to the pivot (all smaller numbers to the pivot's left;
//all bigger numbers to the pivot's right), and then repeating the same two steps on both sides of the pivot until
//the entire array is sorted.

// function quickSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let itemFromLeft = i;
//     let itemFromRight = array.length - 2 - i;
//     let pivotIndex = i + 1;

//     [[array[pivotIndex]], [array[array.length - 1]]] = [
//       [array[array.length - 1]],
//       [array[pivotIndex]],
//     ];

//     if (itemFromLeft > array[pivotIndex] && itemFromRight < array[pivotIndex]) {
//       [itemFromLeft, itemFromRight] = [itemFromRight, itemFromLeft];
//       i++;
//     } else {
//       array[pivotIndex] = array[array.length - 1];
//     }
//   }
//   return array;
// }
// console.log(quickSort(array));

// // ==============================================================

// // current index i      ^
// //                  [8, 8, 2, 9, 5, 6, 5]
// //  swapMarker       ^
// if (array[i] > pivot) {
//   if (array[i + 1] < pivot) {
//     swapMarker = 0;
//   } else {
//     swapMarker = i;
//   }
// }

// // if (array[i] >= pivot && array[i + 1] < pivot) {
// //   swapMarker = i;
// // }

// //let array = [3, 8, 2, 9, 5, 6, 5];
// // comdition 1 : array[i] > pivot
// // comdition 2 : array[i] < pivot
// function quickSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let swapMarker;
//     let pivot = array[array.length - 1]; //3
//     if (i !== 0 && array[i] < pivot) {
//       //   [array[i + 1], array[pivotIndex]] = [array[pivotIndex], array[i + 1]];
//       swapMarker = 0;
//     } else {
//     }
//   }
// }

function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  let leftIdx = startIdx; //index 0
  let rightIdx = endIdx - 1; //second to last index
  let pivot = endIdx; //last index

  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > array[pivot] && array[rightIdx] < array[pivot]) {
      console.log(`pivot value is : ${array[pivot]}`);
      swap(array, leftIdx, rightIdx);
      //   console.log(swap(array, leftIdx, rightIdx));
      leftIdx++;
      console.log(`leftIdx is : ${leftIdx}`);
      rightIdx--;
      console.log(`RightIdx is : ${rightIdx}`);
    }
    if (array[leftIdx] <= array[pivot]) leftIdx++;
    if (array[rightIdx] >= array[pivot]) rightIdx--;
  }
  swap(array, pivot, leftIdx);
  console.log(`left Index value is: ${array[leftIdx]}`);
  //   console.log(swap(array, leftIdx, rightIdx));

  quickSortHelper(array, leftIdx - 1 - rightIdx, leftIdx - 1);
  //   console.log(quickSortHelper(array, leftIdx - 1 - rightIdx, leftIdx - 1));

  quickSortHelper(array, leftIdx + 1, endIdx);
  //   console.log(quickSortHelper(array, leftIdx + 1, endIdx));
}
function swap(array, leftIdx, rightIdx) {
  let temp = array[leftIdx];
  array[leftIdx] = array[rightIdx];
  array[rightIdx] = temp;
}
console.log(quickSort(array));
