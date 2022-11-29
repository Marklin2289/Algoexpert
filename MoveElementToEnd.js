//   You're given an array of integers and an integer. Write a function that moves
//   all instances of that integer in the array to the end of the array and returns
//   the array.

//   The function should perform this in place (i.e., it should mutate the input
//     array) and doesn't need to maintain the order of the other integers.

let array = [2, 1, 2, 2, 2, 3, 4, 2];
let toMove = 2;

//Output = [1,3,4,2,2,2,2,2]

// let shift = array.shift();
// array.push(shift);
// console.log(shift);
// console.log(array);

// function moveElementToEnd(array, toMove) {
//   let pointer = 0;
//   let temp = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== toMove) {
//       temp = array[i];
//       array[i] = array[pointer];
//       array[pointer] = temp;

//       pointer++;
//       console.log(pointer);
//     }
//   }
//   console.log(array);
//   return array;
// }
function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[right] !== toMove) {
      if (array[left] === toMove) {
        [array[left], array[right]] = [array[right], array[left]];
      }
      left++;
    } else {
      right--;
    }
  }
  console.log(array);
  return array;
}
moveElementToEnd(array, toMove);
