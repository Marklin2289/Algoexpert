//   Given two binary trees, merge them and return the resulting tree.
//   If two nodes overlap during the merger then sum the values, otherwise use the existing node.

//   Note that your solution can either mutate the existing trees or return a
//   new tree.

// let tree1 =   1
//             /   \
//            3     2
//          /   \
//         7     4

// let tree2  =   1
//              /   \
//             5     9
//            /      / \
//           2      7   6

//Output  =     2
//        /   \
//      8      11
//    /  \    /  \
//   9     4  7    6

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// null.value is ?  undefined ?

function mergeBinaryTrees(tree1, tree2) {
  if (tree1 == null && tree2 == null) return;

  if (tree1 && tree2) {
    tree1.value = tree1.value + tree2.value;
  }
  if (tree1 == null && tree2) {
    return tree2;
  }
  if (tree1 && tree2 == null) {
    return tree1;
  }

  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);

  return tree1;
}

//   var v1= 5+ null;
//   console.log(v1)  output: 5

// var v2= 5+ undefined;
// console.log(v2)   output: NaN
//Solution 1
function mergeBinaryTrees(tree1, tree2) {
  if (!tree1 || !tree2) return tree1 || tree2;
  tree1.value += tree2.value;

  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);

  return tree1;
}

//Solution 2
function mergeBinaryTrees(tree1, tree2) {
  if (!tree1 && !tree2) return null;
  if (!tree2) return tree1;
  if (!tree1) return tree2;
  const sum = tree1.value + tree2.value;
  const tree = new BinaryTree(sum);
  tree.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree.right = mergeBinaryTrees(tree1.right, tree2.right);
  return tree;
}

//Solution 3

function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) return tree2;
  if (tree2 === null) return tree1;

  tree1.value += tree2.value;
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);
  return tree1;
}
