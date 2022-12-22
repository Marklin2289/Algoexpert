//   Write a function that takes in a Binary Tree and returns if that tree is
//   symmetrical. A tree is symmetrical if the left and right subtrees are
//   mirror images of each other.

// let tree  =             1
// /     \
// 2       2
// /   \   /   \
// 3     4 4     3
// /   \          /  \
// 5     6        6    5

// class BinaryTree {
// constructor(value) {
// this.value = value;
// this.left = null;
// this.right = null;
// }
// }

// function symmetricalTree(tree) {
// if(tree == null) return
// if(tree.left !== tree.right) return false

// tree.left = symmetricalTree(tree.right)
// tree.right = symmetricalTree(tree.left)

// return true;
// }

// // helper function

// function symmetricalTree(tree){
// if(tree == null) return true
// return isMirror(tree.left, tree.right)
// }

// function isMirror(tree1, tree2){
// if(tree1 == null && tree2 == null){ return true}
// else if(tree1 == null || tree2 == null) {return false}
// else {return tree1.value === tree2.value && isMirror(tree1.left, tree2.right) &&
// isMirror(tree1.right, tree2.left)}

// }

//Solution

function symmetricalTree(tree) {
  if (tree == null) return true;
  return isMirror(tree.left, tree.right);
}

function isMirror(tree1, tree2) {
  if (tree1 == null && tree2 == null) {
    return true;
  } else if (tree1 == null || tree2 == null) {
    return false;
  } else {
    return (
      tree1.value === tree2.value &&
      isMirror(tree1.left, tree2.right) &&
      isMirror(tree1.right, tree2.left)
    );
  }
}
