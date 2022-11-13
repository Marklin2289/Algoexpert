//   Given a non-empty string of lowercase letters and a non-negative integer
//   representing a key, write a function that returns a new string obtained by
//   shifting every letter in the input string by k positions in the alphabet,
//   where k is the key.

// const alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

let string = "xyz";
let key = 2;
//output = "zab"

function caesarCipherEncryptor(string, key) {
  let result = "";
  let returnChar;
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    console.log(code);
    code = code + key;
    if (code % 122 == 0) {
      //   returnChar = String.fromCharCode(code);
      code = 122;
    } else {
      code = (code % 122) + 96;
    }

    returnChar = String.fromCharCode(code);
    console.log(returnChar);
    result += returnChar;
  }
  console.log(result);
  return result;
}
console.log(caesarCipherEncryptor(string, key));
// console.log(String.fromCharCode(97));

// console.log(String.fromCharCode(pode
// String.fromCharCode(65, 66, 67); // returns "ABC"
// small : 97 - 122
// Cap : 65 - 90

// let string = "HELLO WORLD";
// let code = string.charCodeAt();
// console.log(code);
//  string.concat("")

// let temp = "Good Morning";
// let message = temp.concat(", ", "Have a nice day!");
// console.log(message);

function caesarCipherEncryptor(string, key) {
  var StrArr = [];
  for (let i = 0; i < string.length; i++) {
    var charCode = (string.charCodeAt(i) - 97 + key) % 26;
    StrArr.push(String.fromCharCode(charCode + 97));
  }
  return StrArr.join("");
}
