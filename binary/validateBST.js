//   Write a function that takes in a potentially invalid Binary Search Tree (BST)
//   and returns a boolean representing whether the BST is valid.

//   Each BST node has an integer value, a left child node and a right child node.
//   A node is said to be valid BST node if and only if satisfy BST property: Its
//   value is strictly greater than the values of every node to its left: Its value
//   is less than or equal to the values of every node on its right; and its children
//   node are either valud BST themselves or null/none.

// requirements for binary tree:
// binary tree = at most 2 children , less than 2 children node including 0 , 1 , 2
//             - at most 2 children per node
//             - exactly 1 root
//             - exactly 1 path b/w root and any node (example: only one path from root 1 to node 7)

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  //   if (tree === null) return true;
  //   if (tree.value < min || tree.value >= max) return false;
  //   if (tree.value >= max) return false;

  //   let result = tree.value < min || tree.value >= max;
  //   console.log(`result: ${result}`);
  //   console.log(
  //     `result === {result} : ${result === tree.value < min || tree.value >= max}`
  //   );
  //   console.log(`result is : ${tree.value < min || tree.value >= max}`);

  //   return (
  //     validateBst(tree.left, min, tree.value) &&
  //     validateBst(tree.right, tree.value, max)
  //   );

  let currentNode = tree;
  //   if (currentNode === null) return true;
  while (currentNode !== null) {
    if (currentNode.left && currentNode.value > currentNode.left.value) {
      currentNode = currentNode.left;
    } else if (
      currentNode.right &&
      currentNode.value <= currentNode.right.value
    ) {
      currentNode = currentNode.right;
    } else {
      return false;
    }
  }
  return true;
  //   console.log(tree.left.value);
  //   console.log(tree === null);
  //   console.log(tree.value > tree.left.value);
}

// let tree =   10
//            /     \
//           5      15
//         /   \   /   \
//        2     5 13   22
//      /         /  \
//     1          12  14
const a = new BST(10);
const b = new BST(5);
const c = new BST(15);
const d = new BST(2);
const e = new BST(5);
const f = new BST(13);
const g = new BST(22);
const h = new BST(1);
const i = new BST(12);
const j = new BST(14);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
f.left = i;
f.right = j;

console.log(validateBst(a));
