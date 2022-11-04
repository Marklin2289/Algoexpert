//   Write a function that takes in a Binary Tree and returns a list of its branch
//   sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.

//Each BinaryTree node has an integer value, a left child node, and a
//right child node. Children nodes can either be BinaryTree nodes themselves or none/null

//          1
//       /     \
//      2       3
//     /   \    /  \
//    4     5  6    7
//   /   \  /
// 8    9 10

// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
function branchSums(root, sum = 0, sums = []) {
  const currentSum = root.value + sum;

  if (!root.left && !root.right) {
    sums.push(currentSum);
  }
  if (root.left) {
    branchSums(root.left, currentSum, sums);
  }
  if (root.right) {
    branchSums(root.right, currentSum, sums);
  }
  console.log(sums);
  return sums;
}

//output = [15,16,18,10,11]

// function branchSums(root) {
//   let result = [];

//   if (root === null) return [];
//   return helperSum(node, 0);
// }

// function helperSum(node, totalSum) {
//   if (node.left) {
//     totalSum = totalSum + helperSum(node.left, totalSum + this.value);
//   } else result.push(totalSum);

//   if (node.right) {
//     totalSum = totalSum + helperSum(node.right, totalSum + this.value);
//   } else result.push(totalSum);

//   // totalSum = totalSum + helperSum(node.left, totalSum + node.value);
// }

// =======================================================================

//   The distance between a node in a Binary Tree and the tree's root is called the
//   node's depth.

//   Write a function that takes in a Binary Tree and returns the sum of its nodes'
//   depths.

//   tree =   1
//         /     \
//        2       3
//      /   \   /   \
//     4     5 6     7
//   /   \
//  8     9
//        4

// ======================================================
// const nodeDepthsRecursive = (root) => {
//   let result;
//   if (root === null) return [];
//   const leftValues = nodeDepthsRecursive(root.left); // [b,d,e]
//   const rightValues = nodeDepthsRecursive(root.right); // [c,f]
//   result = [root.val, ...leftValues, ...rightValues];
//   console.log(result);
//   return result;
// };
// ======================================================

// const nodeDepths = (root) => {
//   if (root === null) return [];
//   // case of when root is null
//   let sum = 0;
//   let sumResult = [];
//   const result = [];
//   const stack = [root]; // first in last out
//   // we are gonna use .push() to add into stack
//   // we are gonna use .pop() to remove from the top stack
//   while (stack.length > 0) {
//     const current = stack.pop(); // instance of Node
//     result.push(current.val);
//     // sum += current.val

//     if (current.right) {
//       stack.push(current.right);
//     } else sumResult.push(sum); //same
//     if (current.left) {
//       stack.push(current.left);
//     } else sumResult.push(sum); //if left node exists, push
//   }
//   console.log(sumResult);
//   return sumResult;
// };

// This is the class of the input binary tree.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);
const h = new Node(8);
const i = new Node(9);
const j = new Node(10);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;
e.left = j;
//            1
//        /      \
//      2         3
//     /   \     /  \
//    4      5   6    7
//   /   \   /
// 8      9 10
function branchSumRecursive(root) {
  if (root === null) return 0;
  return (
    root.value + branchSumRecursive(root.left) + branchSumRecursive(root.right)
  );
}

// console.log(branchSumRecursive(a));
console.log(branchSums(a, (sum = 0), (sums = [])));

// nodeDepths(a);
// nodeDepthsRecursive(a);

// module.exports = { nodeDepths, branchSums };

// function nodeDepths(root) {
//   return sumDepths(root, 0);
// }
// function sumDepths(node, level) {
//   if (!node) return 0;

//   return (
//     level + sumDepths(node.left, level + 1) + sumDepths(node.right, level + 1)
//   );
// }

// This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
