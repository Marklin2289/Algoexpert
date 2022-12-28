//  search val in array and return index, else return -1. Time: log(N)
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let current = array[middle];
    console.log(`current is ${current}`);

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      console.log(`current index is  ${middle}, current val is ${current}`);
      return middle;
    }
  }
  return -1;
}
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
