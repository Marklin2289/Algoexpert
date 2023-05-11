const words = ["dog", "god", "cat", "tac", "aaa"];
function semordnilap(words) {
  const hash = {};
  const result = [];
  for (word of words) {
    if (!hash.hasOwnProperty(word)) {
      hash[word] = 1; // if word is not in hash, set to 1
    }
    console.log("before", hash);

    const reversedWord = ReverseString(word);
    if (hash.hasOwnProperty(reversedWord) && hash[reversedWord] === 1) {
      hash[word] = 0;
      if (hash[reversedWord] !== 0) {
        hash[reversedWord] = 0;
        result.push([word, reversedWord]);
      }
      hash[reversedWord] = 0;
    }
  }
  console.log(result);
  return result;
}

function ReverseString(str) {
  return str.split("").reverse().join("");
}

semordnilap(words);
