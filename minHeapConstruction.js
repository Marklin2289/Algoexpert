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

// ==================================================================
// Array Representation

// heap array [null , 48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
// index      [ 0   , 1 , 2 , 3 , 4 ,5 , 6,  7,  8,   9, 10, 11,12,13,14]

// left child :  i*2
// right child : i*2 + 1
// parent:       i/2

let MinHeap = function () {
  let heap = [null]; // heap array = [null]

  this.insert = function (num) {
    heap.push(num); // heap array = [null, num]
    if (heap.length > 2) {
      // more than 2 elements in heap array [null, num, moreNum]
      let idx = heap.length - 1; // idx = last element in heap array
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        // last element < parent element
        if (idx >= 1) {
          [
            ([heap[Math.floor(idx / 2)], heap[idx]] = [
              heap[idx],
              heap[Math.floor(idx / 2)],
            ]), // swap
          ];
          if (Math.floor(idx / 2) > 1) {
            // 1 is the root node in the array,
            // parent node > root node then update its parents node index
            idx = Math.floor(idx / 2);
          } else {
            // if parent node <= 1 means reached the root node already, then break
            break;
          }
        }
      }
    }
  };
  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {}
    }
  };
};
