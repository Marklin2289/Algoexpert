// Implement a MinHeap class that supports:
// Building a Min Heap from an input array of integers.
// Inserting integers in the heap.
// Removing the heap's minimum / root value.
// Peeking at the heap's minimum / root value.

// Sifting integers up and down the heap, which is to be used when inserting
// and removing values.
// Note that the heap should be represented in the form of an array.

// If you're unfamiliar with Min Heaps, we recommend watching the
// Conceptual Overview section of this question's video explanation before
// starting to code.

let array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

//[-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41]

// [-5, 2, 6, 7, 8, 8, 12, 24, 24, 24, 41, 48, 56, 391] sorted a-b
// [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41] minHeap

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getChildrenIndices(index) {
    return { childOneInd: 2 * index + 1, childTwoInd: 2 * index + 2 };
  }

  buildHeap(array) {
    this.heap = array;
    for (let i = 0; i < array.length; i++) {
      this.siftUp(i);
    }
    return this.heap;
  }

  siftDown(index) {
    while (true) {
      let { childOneInd, childTwoInd } = this.getChildrenIndices(index);
      let curValue = this.heap[index];
      let smallestIndex =
        Math.min(this.heap[childOneInd], this.heap[childTwoInd]) ==
        this.heap[childOneInd]
          ? childOneInd
          : childTwoInd;
      let smallestValue = this.heap[smallestIndex];
      if (curValue > smallestValue) {
        this.heap[index] = smallestValue;
        this.heap[smallestIndex] = curValue;
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  siftUp(index) {
    while (true) {
      let parIndex = this.getParentIndex(index);
      let curValue = this.heap[index];
      let parValue = this.heap[parIndex];
      if (parValue > curValue) {
        this.heap[parIndex] = curValue;
        this.heap[index] = parValue;
        index = parIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    const element = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.siftDown(0);
    return element;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }
}
let testCase = new MinHeap(array);
console.log(testCase);
