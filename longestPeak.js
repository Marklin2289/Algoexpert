//   Write a function that takes in an array of integers and returns the length of
//   the longest peak in the array.

//   A peak is defined as adjacent integers in the array that are strictly
//   increasing until they reach a tip (the highest value in the peak), at which
//   point they become stricly decreasing. At least 3 integers are required to form a peak.

//  peak pointer //current peak count:
//                      top
//                              i
let array = [0, 1, 2, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
//         c
//Output = 6

//[3,2,3,4,3,2,1]

function longestPeak(array) {
  let topPointer = 1;
  let leftPointer = topPointer - 1;
  let rightPointer = topPointer + 1;

  let longestPeak;
  if (array.length < 3) return 0;
  for (let i = 1; i < array.length - 1; i++) {
    while (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      longestPeak = 3;
      topPointer = i;
      while (array[leftPointer] < array[leftPointer - 1]) {
        leftPointer--;
        longestPeak++;
      }

      while (array[rightPointer] > array[rightPointer + 1]) {
        rightPointer++;
        longestPeak++;
      }
      console.log(`longestPeak: ${longestPeak}`);
      return longestPeak;
    }
  }
}

longestPeak(array);
