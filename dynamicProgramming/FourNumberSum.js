let array = [7, 6, 4, -1, 1, 2, 9, 4];
let targetSum = 16;
// return [[],[]] / []

function fourNumberSum(array, targetSum) {
  let result = [];
  let hash = {};
  let counterK = 0;
  let counterJ = 0;
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      counterJ++;
      console.log("counterJ ++ : ", counterJ);
      let tempSum = array[i] + array[j];
      console.log("tempSum is :", tempSum);
      let diff = targetSum - tempSum;
      console.log("diff is :", diff);
      if (hash[diff]) {
        console.log("hash[diff] is :", hash[diff] === true);
        for (const pair of hash[diff]) {
          result.push(pair.concat([array[i], array[j]]));
        }
      }
      //   console.log(Object.entries(hash));
    }
    for (let k = 0; k < i; k++) {
      counterK++;
      console.log("counterK ++ : ", counterK);
      let tempSum = array[i] + array[k];
      console.log("array[k] is :", array[k]);
      console.log("tempSum[i+k] is :", tempSum);
      if (!hash[tempSum]) {
        console.log("!hash[tempSum] is :", !hash[tempSum]);
        hash[tempSum] = [[array[k], array[i]]];
        console.log("hash[tempSum] is :", hash[tempSum]);
      } else {
        console.log("hash[tempSum] is :", hash[tempSum]);
        hash[tempSum].push([array[k], array[i]]);
        console.log("hash.push :", Object.entries(hash));
      }
    }
  }
  return result;
}

console.log(fourNumberSum(array, targetSum));
