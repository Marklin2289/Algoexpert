// //   Write a function that takes in a string of lowercase English-alphabet letters
// //   and returns the index of the string's first non-repeating character.

// //   The first non-repeating character is the first character in a string that
// //   occurs only once.

// //   If the input string doesn't have any non-repeating characters, your function
// //   should return -1

let string = "abcdcaf";
// let hashResult = {};

// //           "aabcdf"
// // temp  :        ^
// //             abcdcaf
// //    i :          ^
// //  final:       ^

// //output = b at index 1

// function firstNonRepeatingCharacter(string) {
//   let tempIndex = 0;
//   let final;
//   let result = -1;

//   let counter = 0;
//   let j = 0;
//   for (let i = 1; i < array.length - 1; i++) {
//     if (string[j] !== string[i]) {
//       j = i;
//       counter++;
//     } else {
//       j = i;
//       i++;
//     }
//   }
//   //
//   let j = i;
//   let i = 0;
//   let result = -1;
//   while (i < string.length - 1) {
//     if (string[i] !== string[j + 1]) {
//       result = i;
//       i++;
//     } else {
//       string[i] = string[i + 1];
//     }
//   }
//   return result;
// }
//

function firstNonRepeatingCharacter(string) {
  const hash = {};
  for (const char of string) {
    if (!(char in hash)) hash[char] = 0;
    console.log(hash[char]);
    hash[char]++;
    console.log(hash[char]);

    console.log(char);
    console.log(hash);
  }

  // for (let idx = 0; idx < string.length; idx++)
  //   if (hash[string[idx]] === 1) return idx;

  for (const char of string) {
    if (hash[char] === 1) {
      return string.indexOf(char);
    }
  }
  return -1;
}
console.log(firstNonRepeatingCharacter(string));
