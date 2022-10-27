//   Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one.
//   A subsequence of an array is a set of numbers that aren't necessarily adjacent
//   in the array but that are in the same order as they appear in the array. For
//   instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4]
//   , and so do the numbers [2,4] . Note that a single number in an array and the array itself are both valid
//   subsequences of the array.
//                                    ^
let array = [5, 1, 22, 25, 6, -1, 8, 10]; //I
let sequence = [5, 1, 22, 23, 6, -1, 8, 10]; //J if (J < sequence.length){return false}
//                         ^
// sudo:
// let trueCount = 0;
// for(x of y){
//  if(x in array){return true};
// }
//
// sequence index  (j) < array index (i)

// while(sequence.length <= array.length){

// }

function ValidateSubsequence(array, sequence) {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == sequence[j]) {
      j++;
      console.log(j);
    }
  }
  if (j == sequence.length) {
    return true;
  } else {
    return false;
  }
  //   let idx = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (idx === sequence.length) {
  //       //idx should be -1 from sequence.length
  //       break;
  //     }
  //     if (array[i] === sequence[idx] && idx < sequence.length) {
  //       idx++;
  //       console.log(idx);
  //     }
  //   }
  //   return idx === sequence.length;
}

console.log(ValidateSubsequence(array, sequence));

//JS
// === returns bool result(true/false)
// ==
