//   The pre-order traversal of a Binary Tree is a traversal technique that starts
//   at the tree's root node and visits nodes in the following order:

//   1.current node
//   2.left subtree
//   3.right subtree

//   Given a non-empty array of integers representing the pre-order traversal of a
//   Binary Search Tree (BST), write a function that creates the relevant BST and
//   returns its root node.

//   The input array will contain the values of BST nodes in the order in which
//   these nodes would be visited with a pre-order traversal.

// let tree =     10
//              /    \
//             4      17
//           /   \      \
//          2     5     19
//         /           /
//        1           18

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const a = new Node();
const b = new Node();
const c = new Node();
const d = new Node();
const e = new Node();
const f = new Node();
const g = new Node();

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
d.left = g;
//                        i
let array = [10, 4, 2, 1, 5, 17, 19, 18];

function reconstructBstRecursive(
  array,
  i = 1,
  tree = new BST(array[0]),
  max = array[1]
) {
  while (i < array.length - 1 && array[i] < array[0]) {
    if (array[i] < array[i - 1]) {
      tree.left.value = array[i];
      return reconstructBstRecursive(
        array,
        i++,
        tree.left,
        Math.max(max, array[i])
      );
    }

    if (array[i] > max) {
      tree.right.value = array[i];
      return reconstructBstRecursive(
        array,
        i++,
        tree.right,
        Math.max(max, array[i])
      );
    }
  }
  while (i < array.length - 1 && array[i] > array[0]) {
    if (array[i] > max) {
      tree.right.value = array[i];
      return reconstructBstRecursive(
        array,
        i++,
        tree.right,
        Math.max(max, array[i])
      );
    }
    if (array[i] < max) {
      tree.left.value = array[i];
      return reconstructBstRecursive(
        array,
        i++,
        tree.left,
        Math.max(max, array[i])
      );
    }
  }
  return tree;
}

// 4 => left + right => 2 + right => 1 + right => 5
//            j
// function left(array[i-1], tree) {
//   if (!tree) return  i;
//   preOrderTraverse(tree.left, array);
//   preOrderTraverse(tree.right, array);
//   return array;
// }

function reconstructBst(array, tree) {
  let tree = new BST(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1] && array[i] < array[0]) {
      tree.left = array[i];
      currentMax = array[1];
    } else if (array[i] >= array[i - 1] && array[i] < array[0]) {
      tree.right = array[i];
    } else if (array[i] >= array[i - 1] && array[i] >= array[0]) {
      reconstructBst(array, tree.right);
    }
  }
  return BST;
  //   return tree.right;

  //   for (let i = 1; i < array.length - 1; i++) {
  //     if (array[i] < array[i - 1]) {
  //       tree.left = array[i];
  //     } else {
  //       tree.right = array[i];
  //     }
  //   }
}

// reconstructBst(array, a);

//let array = [10, 4, 2, 1, 5, 17, 19, 18];

let tree = new BST(array[0]);
let newRoot = -Infinity;
let i = 1;
while (i < array.length) {
  if (array[i] < array[i - 1] && array[i] < array[0]) {
    tree.left.value = array[i]; //10 => 4
    // tree = tree.left;
    currentMax = array[1];
    i++;
  } else if (array[i] > arra[i - 1] && array[i] > currentMax) {
    tree = newRoot;
    tree.right = array[i];
    i++;
  } else if (array[i] >= array[0]) {
    tree = newRoot;
    tree.right = array[i];
    tree = tree.right;
    i++;
  }
}

function reconstructBst(array, tree) {
  let tree = new BST(array[0]);
  let tempRoot;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1] && array[i] < array[0]) {
      tempRoot = new BST(array[1]);
      tree.left.value = array[i];
      tree = tree.left;
    } else if (array[i] >= array[i - 1] && array[i] > tempRoot.value) {
      tree.right.value = array[i];
    } else if (array[i] >= array[i - 1] && array[i] >= array[0]) {
      reconstructBst(array, tree.right);
    }
  }
  return BST;
}

////

let preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];
console.log(preOrderTraversalValues.filter((v) => v < value));

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length == 0) return null;
  let [bstNode, value] = [new BST(), preOrderTraversalValues.shift()];
  bstNode.value = value; // bstNode.value = 10
  bstNode.left = reconstructBst(
    preOrderTraversalValues.filter((v) => v < value)
  );
  bstNode.right = reconstructBst(
    preOrderTraversalValues.filter((v) => v >= value)
  );
  return bstNode;
}

// let preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];
// console.log(preOrderTraversalValues.filter((v) => v < 10));
//[ 4, 2, 1, 5 ]
