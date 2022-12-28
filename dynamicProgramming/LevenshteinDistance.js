//   Write a function that takes in two strings and returns the minimum number of
//   edit operations that need to be performed on the first string to obtain the
//   second string.

//   There are three edit operations: insertion of a character, deletion of a
//   character, and substitution of a character for another.

// At any position (i, j) in the two-dimensional array, if str2[i] is equal to str1[j],
// then the edit distance at position (i, j) is equal to the one at position (i - 1, j - 1),
// since adding str2[i] and str1[j] to the substrings represented at position (i - 1, j - 1)
// does not require any additional edit operation. If str2[i] is not equal to str1[j] however,
// then the edit distance at position (i, j) is equal to 1 + the minimum of the edit distances at
// positions (i - 1, j), (i, j - 1), and (i - 1, j - 1). Why is that the case?
// i = 5 , j = 4 => (4,4)0, (5,3)2, (4,3)1

let str1 = "abc";
let str2 = "yabd";
console.log("str2".charAt(0)); // s
// str2[1](i)(0) = str1[0](j)(-1)
//Output = 2

// sudo:

function levenshteinDistance(str1, str2) {
  const track = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator
      );
    }
  }
  return track[str2.length][str1.length];
}

//https://www.tutorialspoint.com/levenshtein-distance-in-javascript#:~:text=The%20Levenshtein%20distance%20is%20a,one%20word%20into%20the%20other.&text=We%20are%20required%20to%20write,the%20Levenshtein%20distance%20between%20them
//https://stackoverflow.com/questions/4057513/levenshtein-distance-algorithm-better-than-onm
//https://people.cs.pitt.edu/~kirk/cs1501/Pruhs/Spring2006/assignments/editdistance/Levenshtein%20Distance.htm#:~:text=What%20is%20Levenshtein%20Distance%3F,to%20transform%20s%20into%20t.
