let array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

function subarraySort(array) {
  let smallest = Infinity;
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (isOutOfOrder(i, number, array)) {
      smallest = Math.min(smallest, number);
      largest = Math.max(largest, number);
    }
  }
  if (smallest === Infinity) {
    return [-1, -1];
  }
  let start = 0;
  while (smallest >= array[start]) {
    start++;
  }
  let end = array.length - 1;
  while (largest <= array[end]) {
    end--;
  }
  return [start, end];
}

function isOutOfOrder(i, number, array) {
  // when at the beginning of the array, check if the number is greater than the next number
  if (i === 0) return number > array[i + 1];
  // when at the end of the array, check if the number is smaller than the previous number
  if (i === array.length - 1) return number < array[i - 1];
  // otherwise, check if the number is smaller than the previous number or greater than the next number
  return number > array[i + 1] || number < array[i - 1];
}

console.log(subarraySort(array));
