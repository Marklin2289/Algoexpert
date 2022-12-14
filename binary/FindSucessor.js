// Write a function that takes in a Binary Tree (where nodes have an additional
//  pointer to their parent node) as well as a node contained in that tree and
// returns the given node's successor.

//  A node's successor is the next node to be visited (immediately after the given
// node) when traversing its tree using the in-order tree-traversal technique. A
// node has no successor if it's the last node to be visited in the in-order
// traversal.

// let tree =
//         1
//       /   \
//      2     3
//    /   \
//   4     5
//  /
// 6

// let node = 5

//Output = 1

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node, next) {
  if (tree == null) return (next = tree);

  findSuccessor(tree.left, node, tree);

  findSuccessor(tree.right, node, (tree.parent = next));

  return next == tree ? tree.value : next.value;
}
