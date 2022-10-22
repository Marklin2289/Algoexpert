//Write a function that takes in an array of integers and returns a sorted
//version of that array. Use the Selection Sort algorithm to sort the array.

// If you're unfamiliar with Selection Sort, we recommend watching the Conceptual
//Overview section of this question's video explanation before starting to code.

// const pointer = 0
//                 ^
let array = [8, 5, 2, 9, 5, 6, 3];

//output = [2,3,5,5,6,8,9]

function selectionSort(array) {
  let left = 0;
  let right = 1;
  let indexMin = 0;

  while (left < array.length - 1) {
    if (array[right] < array[indexMin]) {
      indexMin = right;
    }
    if (right === array.length - 1) {
      [array[left], array[indexMin]] = [array[indexMin], array[left]];
      left++;
      indexMin = left;
      right = left + 1;
    } else {
      right++;
    }
  }
  return array;
}
