//   Write a function that takes in a sorted array of integers as well as a target
//   integer. The function should use the Binary Search algorithm to determine if
//   the target integer is contained in the array and should return its index if it
//   is, otherwise -1

//   If you're unfamiliar with Binary Search, we recommend watching the Conceptual
//   Overview section of this question's video explanation before starting to code.
// right                                       ^
// mid                      ^
// left                        ^
let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]; //10
const target = 33;

function binarySearch(array, target) {
  //   let result = -1;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] == target) {
  //       //   console.log("i value :", -1);
  //       result = i;
  //     }
  //   }
  //   return result;

  let left = 0;
  let right = array.length - 1;
  let mid;
  console.log(array, target);
  while (left <= right) {
    mid = Math.floor((left + right) / 2); //4.5 => 4
    console.log(`mid index = ${mid}`);
    console.log(`mid value is : ${array[mid]}`);
    if (array[mid] == target) {
      //   console.log(`if ${array[mid]} = ${target}`);
      //   console.log(`${(array[mid] = target)}`);
      return mid;
    } else if (array[mid] > target) {
      right = mid - 1;
      console.log(`right index changed to ${right}`);
    } else if (array[mid] < target) {
      left = mid + 1;
      console.log(`left index changed to ${left}`);
    }
  }
  return -1;
}

console.log(binarySearch(array, target));

// def binary_search(array, target):
// left = 0
// right = len(array) - 1

// while (left <= right):
//     mid = (right + left) // 2

//     if array[mid] == target:
//         return mid
//     elif array[mid] < target:
//         left = mid + 1
//     else:
//         right = mid - 1

// return -1

// struct node
// {
//  int data;
//  struct node *left;
//  struct node *right;
// };

// # Binary Tree in Python

// class Node:
//     def __init__(self, key):
//         self.left = None
//         self.right = None
//         self.val = key

//     # Traverse preorder
//     def traversePreOrder(self):
//         print(self.val, end=' ')
//         if self.left:
//             self.left.traversePreOrder()
//         if self.right:
//             self.right.traversePreOrder()

//     # Traverse inorder
//     def traverseInOrder(self):
//         if self.left:
//             self.left.traverseInOrder()
//         print(self.val, end=' ')
//         if self.right:
//             self.right.traverseInOrder()

//     # Traverse postorder
//     def traversePostOrder(self):
//         if self.left:
//             self.left.traversePostOrder()
//         if self.right:
//             self.right.traversePostOrder()
//         print(self.val, end=' ')

// root = Node(1)

// root.left = Node(2)
// root.right = Node(3)

// root.left.left = Node(4)

// print("Pre order Traversal: ", end="")
// root.traversePreOrder()
// print("\nIn order Traversal: ", end="")
// root.traverseInOrder()
// print("\nPost order Traversal: ", end="")
// root.traversePostOrder()

// # Checking if a binary tree is a full binary tree in Python

// # Creating a node
// class Node:

//     def __init__(self, item):
//         self.item = item
//         self.leftChild = None
//         self.rightChild = None

// # Checking full binary tree
// def isFullTree(root):

//     # Tree empty case
//     if root is None:
//         return True

//     # Checking whether child is present
//     if root.leftChild is None and root.rightChild is None:
//         return True

//     if root.leftChild is not None and root.rightChild is not None:
//         return (isFullTree(root.leftChild) and isFullTree(root.rightChild))

//     return False

// root = Node(1)
// root.rightChild = Node(3)
// root.leftChild = Node(2)

// root.leftChild.leftChild = Node(4)
// root.leftChild.rightChild = Node(5)
// root.leftChild.rightChild.leftChild = Node(6)
// root.leftChild.rightChild.rightChild = Node(7)

// if isFullTree(root):
//     print("The tree is a full binary tree")
// else:
//     print("The tree is not a full binary tree")
