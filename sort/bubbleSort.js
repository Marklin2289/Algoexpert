//   Write a function that takes in an array of integers and returns a sorted
//   version of that array. Use the Bubble Sort algorithm to sort the array.

// If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
// Overview section of this question's video explanation before starting to code.

// Sample Input
let array = [8, 5, 2, 9, 5, 6, 3];
// [5, 2, 8, 5, 6, 3, 9]

// [2, 5, 5, 6 , 3 , 9]

// Sample Output
// [2, 3, 5, 5, 6, 8, 9];

// solution 1
function bubbleSort(array) {
  //   let isSorted = false;
  //   let counter = 0;
  //   while (!isSorted) {
  //     isSorted = true;
  //     for (let i = 0; i < array.length - 1 - counter; i++) {
  //       let j = i + 1;
  //       let temp = 0;
  //       if (array[i] > array[j]) {
  //         temp = array[j];
  //         array[j] = array[i];
  //         array[i] = temp;
  //         isSorted = false;
  //       }
  //     }
  //     counter++;
  //   }
  //   return array;

  //   solution 2
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      swaps++;
    }
  }
  return swaps === 0 ? array : bubbleSort(array);
}
console.log(bubbleSort(array));
