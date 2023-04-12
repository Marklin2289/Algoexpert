//   Write a MinMaxStack class for a Min Max Stack. The class should
//   support:

// Pushing and popping values on and off the stack.
// Peeking at the value at the top of the stack.

//     Getting both the minimum and the maximum values in the stack at any given
//     point in time.

//   All class methods, when considered independently, should run in constant time
//   and with constant space.

// MinMaxStack(): -
// push(5): -
// getMin(): 5
// getMax(): 5
// peek(): 5
// push(7): -
// getMin(): 5
// getMax(): 7
// peek(): 7
// push(2): -
// getMin(): 2
// getMax(): 7
// peek(): 2
// pop(): 2
// pop(): 7
// getMin(): 5
// getMax(): 5
// peek(): 5

class MinMaxStack {
  constructor() {
    this.stack = [];
    this.min = null;
    this.max = null;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    let num = this.stack.pop();

    if (num === this.max) {
      this.max = Math.max(...this.stack);
    }

    if (num === this.min) {
      this.min = Math.min(...this.stack);
    }

    return num;
  }

  push(number) {
    this.stack.push(number);

    if (this.stack.length === 1) {
      this.max = number;
      this.min = number;
    }
    if (number <= this.min) {
      this.min = number;
    }
    if (number >= this.max) {
      this.max = number;
    }
  }

  getMin() {
    return this.min;
  }

  getMax() {
    return this.max;
  }
}

//Solution
// O(1) time O(1) Space

class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }

    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
