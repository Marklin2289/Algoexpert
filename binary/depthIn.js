// You are given a Node class that has a name and an array of optional
// children nodes. When put together, nodes form an acyclic-like structure.

//Implement the depthFirstSearch method on the Node  class, which takes in an empty array, traverses the tree
//using the Depth-first Search approach (specifically navigating the tree from
//left to right), stores all of the nodes' names in the input array, and returns
//it.
// If you're unfamiliar with Depth-first Search, we recommend watching the
// Conceptual Overview section of this question's video explanation before
// starting to code.

// The Depth-first Search algorithm works by traversing a graph branch by branch.
//In other words, before traversing any Node's sibling Nodes, its children nodes
//must be traversed. How can you simply and effectively keep track of Nodes' sibling
//Nodes as you traverse them, all the while retaining the order in which you must traverse them?

//Start at the root Node and try simply calling the depthFirstSearch method on all of
//its children Nodes. Then, call the depthFirstSearch method on all children Nodes of
//each child node. Keep applying this logic until the entire graph has been traversed.
//Don't forget to add the current Node's name to the input array at every call of depthFirstSearch.

// graph=    A
//        /  |  \
//       B   C   D
//      / \     / \
//     E   F   G   H
//    /    / \   \
//        I   J   K

//Output= ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

// A
//[B, C, D]
// B = [E,F]
// F =[I,J]
// C
// D = [G, H]
// G = [K]

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearchTwo(array = [], self = this) {
    array.push(self.name);
    for (const child of self.children) {
      this.depthFirstSearch(array, child);
    }
    return array;
  }
}

// depthFirstSearch(array = [], node = this) {
//     array.push(node.name);
//     node.children.forEach((child) => this.depthFirstSearch(array, child));
//     return array;
// };
