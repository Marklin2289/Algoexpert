//   You're given an array of integers and another array of three distinct
//   integers. The first array is guaranteed to only contain integers that are in
//   the second array, and the second array represents a desired order for the
//   integers in the first array. For example, a second array of
//   [x, y, z] represents a desired order of
//   [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.

// Write a function that sorts the first array according to the desired order in
// the second array.

//   The function should perform this in place (i.e., it should mutate the input
//   array), and it shouldn't use any auxiliary space (i.e., it should run with
//   constant space: O(1) space).

// Note that the desired order won't necessarily be ascending or descending and
// that the first array won't necessarily contain all three integers found in the
// second array—it might only contain one or two.

//Output = [0,0,0,1,1,1,-1,-1]

// function threeNumberSort(array, order) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (array[i] == order[0]) {
//       array.splice(array[i], 1);
//       array.unshift(order[0]);
//     } else if (array[i] == order[order.length - 1]) {
//       array.splice(array[i], 1);
//       array.push(order[order.length - 1]);
//     }
//   }

//   return array;
// }

// function threeNumberSort(array, order) {
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] == order[0]) {
//       array.splice(i);
//       i++;
//       array.unshift(order[0]);
//       console.log(`array[i] = order[0]: ${array}`);
//     } else if (array[i] == order[order.length - 1]) {
//       array.splice(i);
//       console.log(array);
//       i++;
//       array.push(order[order.length - 1]);
//       console.log(array);
//     } else {
//       i++;
//     }
//   }
//   return array;
// }
// console.log(threeNumberSort(array, order));

//Solution
//Time O(n) space O(1) complexity
// function threeNumberSort(array, order) {
//   const firstValue = order[0];
//   const thirdValue = order[2];

//   let firstIdx = 0;
//   for (let idx = 0; idx < array.length; idx++) {
//     if (array[idx] === firstValue) {
//       swap(firstIdx, idx, array);
//       firstIdx++;
//     }
//   }
//   let thirdIdx = array.length - 1;
//   for (let idx = array.length - 1; idx > -1; idx--) {
//     if (array[idx] === thirdValue) {
//       swap(thirdIdx, idx, array);
//       thirdIdx--;
//     }
//   }
//   return array;
// }

// function swap(i, j, array) {
//   const temp = array[j];
//   array[j] = array[i];
//   array[i] = temp;
// }

let array = [1, 0, 0, -1, -1, 0, 1, 1];
let order = [0, 1, -1];
// ============
function threeNumberSort(array, order) {
  let low = 0,
    mid = 0,
    high = array.length - 1;

  while (mid <= high) {
    if (array[mid] == order[0]) {
      swap(low, mid);
      mid++;
      low++;
      //   console.log(array);
    } else if (array[mid] == order[1]) {
      mid++;
    } else if (array[mid] == order[2]) {
      swap(mid, high);
      high--;
    }
  }
  return array;
}
function swap(a, b) {
  [array[b], array[a]] = [array[a], array[b]];
}

console.log(threeNumberSort(array, order));
