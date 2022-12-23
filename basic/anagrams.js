// given two strings to check if they are the same;

// length must be the same
// using hash
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i in first) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(`before : ${Object.entries(lookup)}`);
  for (let i in second) {
    let letter = second[i];
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }
  console.log(`after : ${Object.entries(lookup)}`);
  return true;
}

console.log(validAnagram("abbbc", "bbabc"));
