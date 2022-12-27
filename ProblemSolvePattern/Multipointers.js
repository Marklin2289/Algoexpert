// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.
let array = [1, 1, 1, 2];

function countUniqueValues(array, count = 0) {
  if (array.length === 0) return 0;
  for (let i = 0; i < array.length - 1; i++) {
    console.log(`array[${i}] = ${array[i]}`);
    console.log(`array[${i + 1}] = ${array[i + 1]}`);
    if (array[i] !== array[i + 1]) count++;
    count = count;
    console.log(`count is ${count}`);
  }
  console.log(count + 1);
  return count + 1;
}

countUniqueValues(array);

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
