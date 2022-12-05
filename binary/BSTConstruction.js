// Write a BST class for a Binary Search Tree. The class should
// support:

// Inserting values with the insert method

// Removing values with the remove  method; this method should
// only remove the first instance of a given value.

// Searching for values with the contrain method

// Note that you can't remove values from a single-node tree. In other words,
// calling the remove  method on a single-node tree should simply not
// do anything.

// let tree =   10
//            /     \
//           5      15
//         /   \    /   \
//        2       13    22
//       / \   /\  / \    /\
//      1       n 12  14  n n

// let value = 12;
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node, value) {
    if (node === null) return (node.value = value); // base case
    if (value >= node.value) return insert(node.right, value);
    if (value < node.value) return insert(node.left, value);
    return node;
  }

  contains(node, value) {
    if (node.value === value) return true;
    if (value >= node.value) return contains(node.right, value);
    if (value < node.value) return contains(node.left, value);
  }

  remove(node, value) {
    if (node.value === value) node.value = insert(node);
    // if(node.right > value) => node = node.left
    return this;
  }
}
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
g.left = i;
g.right = j;

//            a
//          /    \
//         b      c
//       /   \    / \
//      d     e   g  f
//     /         / \
//    h         i   j

// insert(value);
console.log(BST.insert(12));

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }

//   // This will return "John Doe":
//   person.fullName();

// recursively :

const searchBST = (root, val) => {
  if (!root) return null; //base case
  if (root.val === val) {
    return root;
  } else {
    if (root.val > val) {
      return searchBST(root.left, val);
    } else {
      return searchBST(root.right, val);
    }
  }
};

const insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};

// simplfy:
const searchBST = (root, val) => {
  if (!root || root.val === val) return root;
  return searchBST(root.left, val) || searchBST(root.right, val);
};

const insertIntoBST = (root, val) => {
  if (!root || root.val === val) return new TreeNode(val);
  if (val < root.val) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);
  return root;
};

//
// Javascript program to demonstrate
// delete operation in binary
// search tree
class Node {
  constructor(item) {
    this.key = item;
    this.left = this.right = null;
  }
}

// Root of BST
let root = null;

// This method mainly calls deleteRec()
function deleteKey(key) {
  root = deleteRec(root, key);
}

/* A recursive function to
      delete an existing key in BST
      */
function deleteRec(root, key) {
  /* Base Case: If the tree is empty */
  if (root == null) return root;

  /* Otherwise, recur down the tree */
  if (key < root.key) root.left = deleteRec(root.left, key);
  else if (key > root.key) root.right = deleteRec(root.right, key);
  // if key is same as root's
  // key, then This is the
  // node to be deleted
  else {
    // node with only one child or no child
    if (root.left == null) return root.right;
    else if (root.right == null) return root.left;

    // node with two children: Get the inorder
    // successor (smallest in the right subtree)
    root.key = minValue(root.right);

    // Delete the inorder successor
    root.right = deleteRec(root.right, root.key);
  }

  return root;
}

function minValue(root) {
  let minv = root.key;
  while (root.left != null) {
    minv = root.left.key;
    root = root.left;
  }
  return minv;
}

// This method mainly calls insertRec()
function insert(key) {
  root = insertRec(root, key);
}

/* A recursive function to
      insert a new key in BST */
function insertRec(root, key) {
  /* If the tree is empty,
          return a new node */
  if (root == null) {
    root = new Node(key);
    return root;
  }

  /* Otherwise, recur down the tree */
  if (key < root.key) root.left = insertRec(root.left, key);
  else if (key > root.key) root.right = insertRec(root.right, key);

  /* return the (unchanged) node pointer */
  return root;
}

// This method mainly calls InorderRec()
function inorder() {
  inorderRec(root);
}

// A utility function to do inorder traversal of BST
function inorderRec(root) {
  if (root != null) {
    inorderRec(root.left);
    document.write(root.key + " ");
    inorderRec(root.right);
  }
}

// Driver Code
/* Let us create following BST
              50
          /	 \
          30	 70
          / \ / \
          20 40 60 80 */
insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

document.write("Inorder traversal of the given tree<br>");
inorder();

document.write("<br>Delete 20<br>");
deleteKey(20);
document.write("Inorder traversal of the modified tree<br>");
inorder();

document.write("<br>Delete 30<br>");
deleteKey(30);
document.write("Inorder traversal of the modified tree<br>");
inorder();

document.write("<br>Delete 50<br>");
deleteKey(50);
document.write("Inorder traversal of the modified tree<br>");
inorder();

// This code is contributed by avanitrachhadiya2155
