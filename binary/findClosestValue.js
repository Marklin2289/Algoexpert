//   Write a function that takes in a Binary Search root (BST) and a target integer
//   value and returns the closest value to that target value contained in the BST.

// tree=    10 12
//        /     \
//      5       15
//     /   \   /   \
//    2     5 13   22
//   /           \
//  1            14

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(10);
const b = new Node(5);
const c = new Node(15);
const d = new Node(2);
const e = new Node(5);
const f = new Node(11);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const target = 12;

function findClosestValueInBst(root, target, closestNumber = Infinity) {
  if (root === null) {
    return closestNumber;
  } else {
    if (Math.abs(root.val - target) < Math.abs(closestNumber - target)) {
      closestNumber = root.val; // 10
    }
    if (target < root.val) {
      return findClosestValueInBst(root.left, target, closestNumber);
    } else {
      return findClosestValueInBst(root.right, target, closestNumber);
    }
  }
}

//            10
//          /   \
//         5    15
//       /   \    \
//      2     5    11

console.log(findClosestValueInBst(a, 12, Infinity));
