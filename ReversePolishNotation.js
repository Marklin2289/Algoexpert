//     You're given a list of string <span>tokens</span> representing a mathematical
//     expression using Reverse Polish Notation. Reverse Polish Notation is a
//     notation where operators come after operands, instead of between them. For
//     example 2 4 + would evaluate to 6.

//   Parenthesis are always implicit in Reverse Polish Notation, meaning an
//   expression is evaluated from left to right. All of the operators for this
//   problem take two operands, which will always be the two values immediately
//   preceding the operator. For example, 18 4 - 7 / would
//   evaluate to ((18 - 4) / 7) or 2.

//     Write a function that takes this list of tokens and returns
//     the result. Your function should support four operators: +,
//     -, *, and / for addition,
//     subtraction, multiplication, and division respectively.

//   Division should always be treated as integer division, rounding towards
//   zero. For example, 3 / 2 evaluates to 1 and
//   -3 / 2 evaluates to -1. You can assume the
//   input will always be valid Reverse Polish Notation, and it will always
//   result in a valid number. Your code should not edit this input list.

let tokens = ["50", "3", "17", "+", "2", "-", "/"];

function reversePolishNotation(tokens) {
  let stack = [];

  for (const token of tokens) {
    if (tokens === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens === "-") {
      const firstNum = stack.pop();
      stack.push(stack.pop() - firstNum);
    } else if (tokens === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens === "/") {
      const firstNum = stack.pop();
      stack.push(Math.trunc(stack.pop() / firstNum));
    } else {
      stack.push(Number(token));
    }
  }
}
