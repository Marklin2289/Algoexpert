//   Write a function that takes a positive integer represented as a string
//   numberand an integer numDigits. Remove{" "}
//   numDigits from the string so that the number represented by the
//   string is as large as possible afterwards.

//   Note that the order of the remaining digits cannot be changed. You can assume
//   numDigits will always be less than the length of{" "}
//   number
//   and greater than or equal to 0.
// [1, 8, 9, 2, 4, 7, 5, 6, 3]; //4 ->2
let number = "462839";
let numDigits = 2;

//Output 6839

function bestDigits(number, numDigits) {
  let highest = 0;
  let res = "";
  let index = 0;
  for (let i = 0; i <= numDigits; i++) {
    if (number[i] > highest) {
      highest = number[i];
      index = i;
    }
  }
  let stack = [highest];
  //stack = ["6"]
  //index = 1

  let indexLeft = numDigits - index; //1
  while (indexLeft > 0 && index < number.length) {
    if (stack[stack.length - 1] < number[index + 1]) {
      stack.pop();
      stack.push(number[index + 1]);
      indexLeft--;
    } else {
      stack.push(number[index + 1]); //[6,]
    }
    index++; // 2
  }
  console.log(index);

  for (let i = index + 1; i < number.length; i++) {
    stack.push(number[i]);
  }

  return stack;
}
console.log(bestDigits(number, numDigits));

let stack = [number[0]];

let i = 1;
while (i < number.length && numDigits > 0) {
  if (stack[stack.length - 1] < number[i]) {
    stack.pop();
    stack.push(number[i]);
    numDigits--;
  } else {
    stack.push(number[i]);
  }
  i++;
}

//Solution
//1. sort from left to right looking for highest number first
//2. Numbers on the left will always be greater number on the right
//3. if numdigits is still greater than 0 after sorting
//4. pop from end of stack

//time O(n) space O(n)

function bestDigits(number, numDigits) {
  const stack = [];

  for (const digit of number) {
    while (
      numDigits > 0 &&
      stack.length > 0 &&
      digit > stack[stack.length - 1]
    ) {
      numDigits--;
      stack.pop();
    }
    stack.push(digit);
  }

  while (numDigits > 0) {
    numDigits--;
    stack.pop();
  }
  return stack.join("");
}
