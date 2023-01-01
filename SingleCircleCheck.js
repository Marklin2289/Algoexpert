//   You're given an array of integers where each integer represents a jump of its
//   value in the array. For instance, the integer 2 represents a jump
//   of two indices forward in the array; the integer -3 represents a
//   jump of three indices backward in the array.

//   If a jump spills past the array's bounds, it wraps over to the other side. For
//   instance, a jump of -1 at index 0 brings us to the last index in
//   the array. Similarly, a jump of 1 at the last index in the array brings us to
//   index 0.

//   Write a function that returns a boolean representing whether the jumps in the
//   array form a single cycle. A single cycle occurs if, starting at any index in
//   the array and following the jumps, every element in the array is visited
//   exactly once before landing back on the starting index.

//[0]

// index 0 initial
// index 1 : 0+1 ||
// index 2 :
// index 3: +2 || -4
// index 4:
// index 5:
//Output= true

// sudo :
// array[index] = 0 , return false
// array[index] > 0 , index = index + array[index]
// array[index] < 0 , index = index - array[index] :
// if array[index] < 0 && index - array[index] < 0 => array.legnth -res

// let array = [0, 1, 1, 1, 1]; // -5 , -10, -16, i = 3

//Solution 1

// function hasSingleCycle(array) {
//   let hash = {};
//   for (let index in array) {
//     hash[index] = false;
//   }
//   //   console.log(Object.entries(hash));
//   for (let i = 0; i < array.length; i++) {
//     let index = array[i] + i; // - 1, -7  => abs 1

//     if (array[i] == 0 || array[index] + array[i] == 0) return false;

//     if (index > 0 && index > array.length) {
//       index = index % array.length; // 8%6 = 2 = array[2]
//     } else if (index < 0 && Math.abs(index) < array.length) {
//       index = array.length - Math.abs(index);
//     } else if (index < 0 && Math.abs(index) > array.length) {
//       index = array.length - Math.abs(index % array.length);
//     }

//     if (hash[index] == false) {
//       hash[index] = true;
//     } else if (hash[index] == true) {
//       return false;
//     }
//   }
//   console.log(Object.entries(hash));
//   return true;
// }

// // let i = 0;
// // while (i > 0) {
// //     let hash = {}
// // //   if (array[i + 1] == array[0]);
// //   array[array[i]] = hash[array[i]] = true //2 : true

// //   pointer--;
// // }
// //if pointer = array.length => true
// //

// console.log(hasSingleCycle(array));

// //Solution 2
function hasSingleCycle(array) {
  let p = 0;
  while (array[p] !== null) {
    const index = p;
    p = nextPosition(index, array);
    array[index] = null;
  }
  return p === 0 && !array.some((n) => n !== null);
}

function nextPosition(p, array) {
  const nextPos = (p + array[p]) % array.length;
  return nextPos >= 0 ? nextPos : array.length + nextPos;
}

//Solution
function hasSingleCycle(array) {
  let elementsVisited = 0;
  let currentIdx = 0;
  while (elementsVisited < array.length) {
    if (elementsVisited > 0 && currentIdx === 0) return false;
    elementsVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}

// function getNextIdx(currentIdx, array) {
//   const jump = array[currentIdx];
//   const nextIdx = (currentIdx + jump) % array.length;
//   return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
// }

let array = [2, 3, 1, -2, -4, 2];

function hasSingleCycle(array) {
  let hash = {};
  for (let index in array) {
    hash[index] = false;
  }
  console.log(Object.entries(hash));
  //   console.log(Object.entries(hash));
  for (let i = 0; i < array.length; i++) {
    let index = (array[i] + i) % array.length; // - 1, -7  => abs 1
    if (array[i] == 0 || array[index] + array[i] == 0) return false;
    index >= 0 ? index : index + array.length;
    console.log(`index is ${index}`);
    // if (index > 0 && index > array.length) {
    //   index = index % array.length; // 8%6 = 2 = array[2]
    // } else if (index < 0 && Math.abs(index) < array.length) {
    //   index = array.length - Math.abs(index);
    // } else if (index < 0 && Math.abs(index) > array.length) {
    //   index = array.length - Math.abs(index % array.length);
    // }

    if (hash[index] == false) {
      hash[index] = true;
    } else if (hash[index] == true) {
      return false;
    }
  }
  return true;
}

console.log(hasSingleCycle(array));
