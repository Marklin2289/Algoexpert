//   Write a function that takes in an array of positive integers and returns the
//   maximum sum of non-adjacent elements in the array.

let array = [75, 105, 120, 75, 90, 135];
//           [75, 120, 135] =330
//           [105, 75, 135] =315
//           [120, 75, 135] =330
//           [75, 105, 135] =315
//           [90, 75, 120] = 285
//           [135, 120, 75] =330
// (13)
// 80 , 75 , 120 , 90 == 365

//Output = 330
//Solution
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    console.log(`current is: ${current}`);
    second = first;
    console.log(`second is: ${second}`);
    first = current;
    console.log(`first is: ${first}`);
  }
  return first;
}

//Note:
//Array length does not matter (even or odd)
//Do start looking for highest number first
//set up 2 cases

// dp[i] = Max(pb[i] + dp[i - 2], dp[i - 1]);

// let array = [75, 105, 120, 75, 90, 135];

//Solution 2
function maxSubsetSumNoAdjacent(array) {
  let prev = 0;
  let current = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(`i is : ${i}`);
    console.log(`array[i] is ${array[i]}`);
    let temp = current;
    console.log(`temp is : ${temp}`);
    if (array[i] + prev > current) {
      current = array[i] + prev;
      console.log(`current is: ${current}`);
    }
    prev = temp;
    console.log(`prev is: ${prev}`);
  }
  return current;
}
//This is DYNAMIC programming, so lets solve this dynamically! (Start off with smallest subset and work your way up from there.)

// Lets say we have the array :
// [7, 3, 19, 4, 28, 33, 27, 26, 49]

// 1. We'll start off by pretending that we have an array of 1: [7].

// Well, 7 is the only choice. So, our current biggest is 7.
// Return the current biggest.

// 2. Now lets pretend we have an array of 2: [7, 3].
// We only have two to choose from: 7 and 3. We choose 7. But lets carry over what we did in the previous step.

// At index 0, value 7, we do what we did above. Current biggest is 7. Previous biggest is 0. When we get to index 1, value 3, we compare. Is 3+0 (0 is our previous biggest value) bigger than 7? No.

// Current biggest is 7. Previous biggest is ALSO 7, because it was the biggest value before we got to index 1, value 3.  We can use the following to keep track of our variables.

// prev = 7
// current = 7

// We return current, which again, is the current biggest.

// 3. Lets move to the next one. We have an array of [7, 3, 19].

// Is 19 +7 bigger than 7? Yes, so our variables now look like this:
// prev= 7   (this was the biggest before we got to 19)
// current = 26 (the value of 19 plus the previous biggest, which was also 7).
// Note that we completely ignore 3 by doing this.

// 4. We have an array of [7, 3, 19, 4].
// Ok, previous biggest is 7, so we add 4 and 7 to get 11. Is that bigger than our current biggest, 26? No. So our previous biggest is 26, and our current biggest is STILL 26.
// Note that we're still ignoring 3. This all stems from our decision to exclude it from any previous sums because we know that it can't be bigger than adding something to 7. We will, in fact, ignore 3 for the rest of the operation, no matter how big the array gets.

// prev = 26
// current = 26

// 4. We have an array of [7, 3, 19, 4, 28]
//  At this point, we don't have to think about it, because prev and current are both 26. Adding ANY number to 26 will be bigger.
// prev = 26
// current = 54 (i.e. 28 +26)

// 5. We have an array of [7, 3, 19, 4, 28,33]
// prev = 54
// current = 59 (product of 33+26, our previous biggest before this step)

// I think you get the picture, and I encourage you to write the rest of this array's solution out so you can see how this works on your own. Doing this makes more sense from a dynamic programming perspective, and it is also pretty neat to see how this works.

maxSubsetSumNoAdjacent(array);
