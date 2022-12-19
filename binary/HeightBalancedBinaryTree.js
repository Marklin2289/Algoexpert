//   You're given the root node of a Binary Tree. Write a function that returns
//   true if this Binary Tree is height balanced and false if it isn't.

//   A Binary Tree is height balanced if for each node in the tree, the difference
//   between the height of its left subtree and the height of its right subtree is
//   at most

// let tree  = 1
//           /   \
//          2     3
//        /   \     \
//       4     5     6
//           /   \
//          7     8

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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

// let leftHeight = 0;
// let rightHeight = 0;

// function heightBalancedBinaryTree(tree) {
//   if (tree == null) return;
//   console.log(`tree.value is ${tree.value ? tree.value : null}`);
//   //   if (Math.abs(leftHeight - rightHeight) > 1) return false;

//   if (tree.left) {
//     leftHeight++;
//     console.log(`leftHeight is ${leftHeight}`);
//     return heightBalancedBinaryTree(tree.left);
//   }
//   if (tree.right) {
//     rightHeight++;
//     console.log(`rightHeight is ${rightHeight}`);
//     return heightBalancedBinaryTree(tree.right);
//   }

//   if (Math.abs(leftHeight - rightHeight) > 1) return false;

//   return true;
// }

// function heightHelper(tree) {
//   if (!tree) return 0;
//   return Math.max(heightHelper(tree.left), heightHelper(tree.right)) + 1;
// }

// console.log(heightBalancedBinaryTree(a));

// let tree  = 1
//           /   \
//          2     3
//        /   \     \
//       4     5     6
//           /   \
//          7     8

//Solution
function heightBalancedBinaryTree(tree) {
  if (tree == null) return true;
  //   console.log(`tree.value is ${tree.value ? tree.value : null}`);
  //   if (Math.abs(leftHeight - rightHeight) > 1) return false;

  let leftHeight = heightHelper(tree.left);
  // console.log(`tree.left is ${tree.left.value}`);
  console.log(`leftHeight is ${leftHeight}`);
  let rightHeight = heightHelper(tree.right);
  console.log(`rightHeight is ${rightHeight}`);
  // console.log(`tree.right is ${tree.right.value}`);

  if (
    Math.abs(leftHeight - rightHeight) <= 1 && // -1, 0 ,1
    heightBalancedBinaryTree(tree.left) &&
    heightBalancedBinaryTree(tree.right)
  ) {
    return true;
  } else {
    return false;
  }
}

function heightHelper(tree) {
  // console.log(`tree.value is ${tree.value ? tree.value : null}`);
  if (!tree) return 0;
  return Math.max(heightHelper(tree.left), heightHelper(tree.right)) + 1;
}

console.log(heightBalancedBinaryTree(a));

//Solution 2 (optinmal)
function calcHeight(tree, height, balance) {
  if (!tree) return height;

  const leftHeight = calcHeight(tree.left, height + 1, balance);
  const rightHeight = calcHeight(tree.right, height + 1, balance);

  if (Math.abs(leftHeight - rightHeight) > 1) balance.isBalanced = false;

  return Math.max(leftHeight, rightHeight);
}
function heightBalancedBinaryTree(tree) {
  const balance = { isBalanced: true };

  calcHeight(tree, 0, balance);

  return balance.isBalanced;
}
