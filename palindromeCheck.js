//   Write a function that takes in a non-empty string and that returns a boolean
//   representing whether the string is a palindrome.

//   A palindrome is defined as a string that's written the same forward and
//   backward. Note that single-character strings are palindromes.

// let string = "abcdcba";
let string = "abcdefghihgfeddcba";

//output = true

function isPalindrome(string) {
  //   let i = Math.floor(string.length);
  let i = 0;
  let end = string.length - 1 - i;
  while (i <= string.length / 2) {
    if (string.charAt(i) === string.charAt(string.charAt(end))) {
      console.log(` i : ${string.charAt(i)} -- end : ${string.charAt(end)}`);
      result = true;
      i++;
    }
    result = false;
    return result;
  }
}
// console.log(string.charAt(1));
console.log(isPalindrome(string));
