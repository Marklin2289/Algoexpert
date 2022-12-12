//   Write a function that takes in a Binary Tree and returns its diameter. The
//   diameter of a binary tree is defined as the length of its longest path, even
//   if that path doesn't pass through the root of the tree.

//   A path is a collection of connected nodes in a tree, where no node is
//   connected to more than two other nodes. The length of a path is the number of
//   edges between the path's first node and its last node.

// let tree =          1
//                   /   \
//                  3     2
//                /   \
//               7     4
//              / \      \
//             8   a      5
//            / \   \       \
//           9   a   a       6
//                    \
//                     a
// 1
// 3,2
// 7,4 => 5 > 6
// 8
// 9
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// let height = 0;
// let diameter = -1
// let leftSubtreeHeight= 0
// let rightSubtreeHeight = 0

// function binaryTreeDiameter(tree) {
//   if(tree == null) {
//     height = leftSubtreeHeight + rightSubtreeHeight;
//     return
//   }

//   if(tree.left){
//     binaryTreeDiameter(tree.left)
//     leftSubtreeHeight++
// }
//   if(tree.right){
//      binaryTreeDiameter(tree.right)
//      rightSubtreeHeight++
//     }

//   diameter = Math.max(diameter,height)
//   rightSubtreeHeight = 0

//   return diameter;
// }

function calcDiameter(tree, diameter) {
  if (!tree) return 0;

  const leftCount = calcDiameter(tree.left, diameter);
  const rightCount = calcDiameter(tree.right, diameter);
  diameter.max = Math.max(leftCount + rightCount, diameter.max);

  return Math.max(leftCount + 1, rightCount + 1);
}

function binaryTreeDiameter(tree) {
  const diameter = { max: -Infinity };
  calcDiameter(tree, diameter);
  return diameter.max;
}
