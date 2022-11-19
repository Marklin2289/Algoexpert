//   You're given a string of available characters and a string representing a
//   document that you need to generate. Write a function that determines if you
//   can generate the document using the available characters. If you can generate
//   the document, your function should return true; other wise it should return
//   false

//   You're only able to generate the document if the frequency of unique
//   characters in the characters string is greater than or equal to the frequency
//   of unique characters in the document string. For example, if you're given
//   characters = "abcabc" and document ="aabbccc". you can generate document
//   because you are missing 1 c

//   The document that you need to create may contain any characters, including
//   special characters, capital letters, numbers, and spaces.

//sudo :
// hash table {}
// for loop of document, get key value
// for loop of characters, - key value
//  , return false, else return true
// {
// a:3, b:2, c:1, d:0
// }
let characters = "Bste!hetsi ogEAxpelrt x ";
let document = "AlgoExpert is the Best!";

function generateDocument(characters, document) {
  const hash = {};
  //   let result = false;

  for (const char of document) {
    if (!(char in hash)) hash[char] = 0;
    hash[char]++;
  }

  for (const char of characters) {
    if (!(char in hash)) hash[char] = 0;
    if (char in hash && hash[char] === 0) return false;
    hash[char]--;
    // console.log(hash);
    // if(hash[char] > 0) return false;
  }
  return true;
  //   for (const char in hash) {
  //     if (hash[char] > 0) {
  //       result = false;
  //       break;
  //     } else {
  //       result = true;
  //     }
  //   }
  //   console.log(result);
  //   return result;
}

generateDocument(characters, document);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

function generateDocument(characters, document) {
  const hash = {};

  for (const char of characters) {
    if (!(char in hash)) hash[char] = 0;
    hash[char]++;
  }

  for (const char of document) {
    if (!(char in hash) || hash[char] === 0) return false;
    hash[char]--;
  }
  return true;
}
