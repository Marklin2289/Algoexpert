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
const nodeDepthsRecursive = (root) => {
  let result;
  if (root === null) return [];
  const leftValues = nodeDepthsRecursive(root.left); // [b,d,e]
  const rightValues = nodeDepthsRecursive(root.right); // [c,f]
  result = [root.val, ...leftValues, ...rightValues];
  console.log(result);
  return result;
};
// ======================================================

const nodeDepths = (root) => {
  if (root === null) return [];
  // case of when root is null

  const result = [];
  const stack = [root]; // first in last out
  // we are gonna use .push() to add into stack
  // we are gonna use .pop() to remove from the top stack
  while (stack.length > 0) {
    const current = stack.pop(); // instance of Node
    result.push(current.val);

    if (current.right) stack.push(current.right); //same
    if (current.left) stack.push(current.left); //if left node exists, push
  }
  //   console.log(result);
  return result;
};

// This is the class of the input binary tree.
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//            a
//          /   \
//         b     c
//       /   \    \
//      d     e    f
nodeDepths(a);
nodeDepthsRecursive(a);

module.exports = { nodeDepths };

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
