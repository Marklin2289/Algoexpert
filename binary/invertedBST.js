//   Write a function that takes in a Binary Tree and inverts it. In other words,
//   the function should swap every left node in the tree for its corresponding
//   right node.

// let tree =  1
//          /     \
//         2       3
//       /   \   /   \
//      4     5 6     7
//    /   \
//   8     9

//Output =           1
//        /     \
//       3       2
//     /   \   /   \
//    7     6 5     4
//                /   \
//               9     8

// sudu:

// let tree =     10(a)
//              /    \
//            4(b)    17(c)
//           /   \      \
//         2(d)  5(e)   19(f)
//         /           /
//       1(g)        18(h)

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const a = new BinaryTree(10);
const b = new BinaryTree(4);
const c = new BinaryTree(17);
const d = new BinaryTree(2);
const e = new BinaryTree(5);
const f = new BinaryTree(19);
const g = new BinaryTree(1);
const h = new BinaryTree(18);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
d.left = g;
f.left = h;

// function invertBinaryTree(tree) {
//   if (!tree.left && !tree.right) return tree;

//   if (tree.left && !tree.right) tree.right = tree.left;
//   if (!tree.left && tree.right) tree.left = tree.right;

//   invertBinaryTree(tree.right);
//   invertBinaryTree(tree.left)[(tree.left, tree.right)] = [
//     tree.right,
//     tree.left,
//   ];
// }

//Solution

function invertBinaryTree(tree) {
  if (tree == null) return;

  [tree.left, tree.right] = [tree.right, tree.left];

  console.log(
    `left: ${tree.left == null ? "null" : tree.left.value}, right: ${
      tree.right == null ? "null" : tree.right.value
    }`
  );
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  console.log(`tree: ${tree.value == null ? "null" : tree.value}`);
  //   return tree;
}

invertBinaryTree(a);

// A function immediately stops at the point where return is called.

// function counter() {
//   for (let count = 1; ; count++) {
//     // infinite loop
//     console.log(`${count}A`); // until 5
//     if (count === 5) return;
//     console.log(`${count}B`); // until 4
//   }
//   console.log(`${count}C`); // never appears
// }

// counter();

// Logs:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
