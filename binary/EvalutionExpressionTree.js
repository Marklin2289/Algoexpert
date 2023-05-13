// You're given a binary expression tree. Write a function to evaluate
// this tree mathematically and return a single resulting integer.

// All leaf nodes in the tree represent operands, which will always be positive
// integers. All of the other nodes represent operators. There are 4 operators
// supported, each of which is represented by a negative integer:

// -1: Addition operator, adding the left and right subtrees.
// -2: Subtraction operator, subtracting the right subtree from the left subtree.
// -3: Division operator, dividing the left subtree by the right subtree.
// If the result is a decimal, it should be rounded towards zero.

// -4: Multiplication operator, multiplying the left and right subtrees.

//   You can assume the tree will always be a valid expression tree. Each
//   operator also works as a grouping symbol, meaning the bottom of the tree is
//   always evaluated first, regardless of the operator.


let tree = -1
        /     \
      -2       -3
      /   \    /  \
    -4     2  8    3
   /   \
  2     3

//Output = 6

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  //1. Base case is when node does not have children node.
  //2. If not operator(-1,-2,-3,-4) return its node value
  //3. Recursively calculate each step from bottom up

  //Solution1
  //Time O(n) Space O(h)
  //n = number of nodes
  //h = height of binary tree
  function evaluateExpressionTree(tree) {
    if(tree === null) return
    if(tree.value >= 0) return tree.value;
    if(tree.value === -1) return evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right)
    if(tree.value === -2) return evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right) 
    if(tree.value === -3) return Math.trunc(evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right)) 
    if(tree.value === -4) return evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right) 
    
    return tree.value;
  }

  //Solution 2

  function evaluateExpressionTree(tree) {
    if(tree.value >= 0) return tree.value
  
    const leftValue = evaluateExpressionTree(tree.left)
    const rightValue = evaluateExpressionTree(tree.right)
  
    if(tree.value === -1) return leftValue + rightValue
    if(tree.value === -2) return leftValue - rightValue
    if(tree.value === -3) return Math.trunc(leftValue / rightValue)
  
    return leftValue * rightValue
  }