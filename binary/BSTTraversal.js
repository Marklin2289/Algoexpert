//   Write three functions that take in a Binary Search Tree (BST) and an empty
//   array, traverse the BST, add its nodes' values to the input array, and return
//   that array. The three functions should traverse the BST using the in-order,
//   pre-order, and post-order tree-traversal techniques, respectively.

//   If you're unfamiliar with tree-traversal techniques, we recommend watching the
//   Conceptual Overview section of this question's video explanation before
//   starting to code.

//   Each BST node has an integer, a left child node and right child node. A node is
//   said to be a BST if and only if it satisfies the BST properties:

// let tree   =   11
//              /     \
//             7      15
//           /   \       \
//          6     9      22
//        / \   /   \
//      1 .  N 8     9

// Sudo:
//  [10,5,2,5,1,15,22]
// if(left && right === null) push current
// if left === null  && right !== null , push current
// if(right === null && ) push left then current
//  if(parent.right === null) push parent ==> update parent = current
//if (parent.right), push parent , check step 1

//Out
//InorderTraverse = [1, 2, 5, 5, 10, 15, 22]
//preOrderTraverse = [10, 5, 2, 1, 5, 15, 22]
//PostOrderTraverse = [1, 2, 5, 5, 22, 15, 10]

// function inOrderTraverse(tree, array) {
//   let array = [];
//   let currentNode = tree;
//   let parentNode;
//   if (currentNode === null) return [];
//   if (currentNode.left === null) {
//     array.push(currentNode);
//     // parentNode = currentNode; // 2
//     // currentNode = currentNode.left;
//   } else {
//   }
//   while (currentNode !== null) {
//     if (currentNode.left !== null) {
//       parentNode = currentNode;
//       currentNode = currentNode.left;
//     } else if (currentNode.left === null && currentNode.right === null) {
//       array.push(currentNode);
//       array.push(parentNode);
//     }
//   }
// }

// function preOrderTraverse(tree, array) {
//   if (tree === null) return [];
//   //   let currentNode;
//   let array = [];
//   let stack = [tree]; // [10]
//   while (stack.length > 0) {
//     let current = stack.pop(); // 10
//     array.push(current.val);

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return array;
// }

// function postOrderTraverse(tree, array) {}

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
// const i = new Node(19);
// const j = new Node(14);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = j;
c.right = f;
e.left = g;
e.right = h;

//            a
//          /   \
//         b     c
//       /   \    \
//      d     e    f
//           / \
//          g   h
//Preorder
// function test(root) {
//   let array = [];
//   if (root === null) return [];
//   const leftValues = test(root.left); // [b,d,e]
//   const rightValues = test(root.right); // [c,f]
//   array = [root.val, ...leftValues, ...rightValues];
//   console.log(array);
//   return array;
// }
let node = 2;
let array = [];
function inOrderTraverse(tree, array) {
  if (!tree) return array;
  console.log(inOrderTraverse(tree.left, array));
  array.push(tree.value);
  console.log(inOrderTraverse(tree.right, array));
  return array;
}
//InOrderTraversal
function findSuccessor(tree, node) {
  let successor = null;
  let found = false;

  function inOrderTraverse(tree) {
    if (tree.left) inOrderTraverse(tree.left);
    if (found) {
      successor = tree;
      console.log(successor);
      found = false;
    }
    if (tree === node) found = true;
    if (tree.right) inOrderTraverse(tree.right);
  }
  inOrderTraverse(tree);
  return successor;
}

function preOrderTraverse(tree, array) {
  if (!tree) return array;
  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);
  return array;
}

function postOrderTraverse(tree, array) {
  if (!tree) return array;
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}
// inOrderTraverse(a, array);
console.log(findSuccessor(a, node));
