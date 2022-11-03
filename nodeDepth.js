//   The distance between a node in a Binary Tree and the tree's root is called the
//   node's depth.

//   Write a function that takes in a Binary Tree and returns the sum of its nodes'
//   depths.

//   tree =   1
//         /     \
//        2       3
//      /   \   /   \
//     4     5 6     7
//   /   \
//  8     9

function nodeDepths(root) {
  let counter = 0;
  let depth;
  if (value) {
    if (!this.left) {
      counter++;
      console.log(counter);
    }
    if (!this.right) {
      counter++;
    }
    depth = counter;
  }
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  //   check(value) {
  //     const newNode = new Node(value);
  //     if (this.value) {
  //       this.value = newNode;
  //       return this;
  //     }
  //   }
}

/**
  //  / A binary tree is a tree data structure in which each node has at most two children, 
  //  which are referred to as the left child and the right child.
  // // Left child is always less than it's parent and the right child is always bigger than it's parent.
  
  class Node {
      constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
      }
    }
    
    class BinarySearchTree {
      constructor() {
        this.root = null;
      }
      //inserts a number into the tree. Returns the entire tree.
      insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
          this.root = newNode;
          return this;
        }
        let current = this.root;
        const rnLoop = true;
        while (rnLoop) {
          if (value === current.value) return undefined;
          if (value < current.value) {
            if (!current.left) {
              current.left = newNode;
              return this;
            }
            current = current.left;
          } else {
            if (!current.right) {
              current.right = newNode;
              return this;
            }
            current = current.right;
          }
        }
      }
      //finds the given number and returns it. If its not found, returns `null` or `undefined`.
      find(value) {
        if (!this.root) return null;
        let current = this.root;
        const rnLoop = true;
        while (rnLoop) {
          if (!current) return undefined;
          if (value === current.value) return current;
          if (value < current.value) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
      }
      //checks if a given number exists in the tree. If its in the tree, returns `true`, otherwise `false`
      contains(value) {
        if (!this.root) return null;
        let current = this.root;
        const rnLoop = true;
        while (rnLoop) {
          if (!current) return false;
          if (value === current.value) return true;
          if (value < current.value) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
      }
    }
    
    
    
    
    //EXAMPLES==================================================================================
    
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10); //returns the entire list
    binarySearchTree.insert(6); //returns the entire list
    binarySearchTree.insert(2);
    binarySearchTree.insert(20);
    binarySearchTree.insert(34);
    binarySearchTree.insert(69);
    binarySearchTree.insert(4);
    binarySearchTree.find(4); //returns `Node {value: 2, right: Node, left: null}`
    binarySearchTree.find(20);
    binarySearchTree.find(123); //returns `undefined`
    binarySearchTree.contains(6); //returns `true`
    binarySearchTree.contains(123); //returns `false`
   * 
   */

function nodeDepths(root) {
  return sumDepths(root, 0);
}
function sumDepths(node, level) {
  if (!node) return 0;

  return (
    level + sumDepths(node.left, level + 1) + sumDepths(node.right, level + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
