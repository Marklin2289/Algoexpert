//   Write a function that takes in a non-empty string and returns its run-length
//   encoding.

//   From Wikipedia, "run-length encoding is a form of lossless data compression in
//   which runs of data are stored as a single data value and count, rather than as
//   the original run." For this problem, a run of data is any sequence of
//   consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A"

//   To make things more complicated, however, the input string can contain all
//   sorts of special characters, including numbers. And since encoded data must be
//   decodable, this means that we can't naively run-length-encode long runs. For
//   example, the run "AAAAAAAAAAAA", can't naively be encoded as "12A", , since this
//   string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs
//     of 10 or more characters) should be encoded in a split fashion; the
//     aforementioned run should be encoded as "9A3A".

//Output = "9A4A2B4C2D"

// function runLengthEncoding(string) {
//   let result = "";
//   let maxLength = 9;
//   for (const char of string) {
//     while (!(char in hash)) hash[char] = 0;
//     hash[char]++;
//   }
//   console.log(hash);
//   return hash;
// }

// console.log(runLengthEncoding(string));

// let i = 0;
// let result = "";
// while (i < string.length - 1) {
//   if (string[i] === string[i + 1]) {
//     i++;
//   }
//   if (string[idx] !== string[i + 1]) {
//     result += i + 1;
//     result += string[i];
//   }
// }
// return result;

// i                           ^
// counter                      ^
let string = "AAAAAAAAAAAAAAAAAAA";
function runLengthEncoding(string) {
  let result = "";
  let i = 0;
  let counter = 0;
  while (i < string.length) {
    if (string[i] !== string[i + 1]) {
      result += counter + 1;
      result += string[i];
      counter = 0;
      i++;
    } else {
      counter++; // i = 8, no.9 a, counter = 9, i = 9, counter = 10 reset = 1, i = 11 , counter 2
      if (counter == 9) {
        result += 9 + string[i];
        console.log(result);
        counter = 0;
      }
      i++;
    }
  }
  console.log(result);
  return result;
}
console.log(runLengthEncoding(string));
