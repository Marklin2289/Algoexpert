// //Write a function that takes in an array of integers and returns a sorted
// //version of that array. Use the Insertion Sort algorithm to sort the array.

// //If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual
// //Overview section of this question's video explanation before starting to code.

let array = [8, 5, 2, 9, 5, 6, 3];

//output [2,3,5,5,6,8,9]

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    //start looping from index 1
    let j = i; // j = pointer
    while (j > 0 && array[j] < array[j - 1]) {
      //condition statement loop
      [array[j], array[j - 1]] = [array[j - 1], array[j]]; // swap
      j -= 1; //pointer to left
    }
  }
  return array;
}

console.log(insertionSort(array));
