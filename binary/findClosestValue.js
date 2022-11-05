//   Write a function that takes in a Binary Search Tree (BST) and a target integer
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
const f = new Node(22);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const target = 12;

function findClosestValueInBst(tree, target, closestNumber = Infinity) {
  if (tree === null) {
    return closestNumber;
  } else {
    if (Math.abs(tree.val - target) < Math.abs(closestNumber - target)) {
      closestNumber = tree.val; // 10
    }
    if (target < tree.val) {
      return findClosestValueInBst(tree.left, target, closestNumber);
    } else {
      return findClosestValueInBst(tree.right, target, closestNumber);
    }
  }
}

//            3
//          /   \
//         11    4
//       /   \    \
//      4     2    1

console.log(findClosestValueInBst(10, 12, Infinity));
