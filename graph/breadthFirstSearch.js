//   You're given a Node class that has a name and an
//   array of optional children nodes. When put together, nodes form
//   an acyclic tree-like structure.

//   Implement the breadthFirstSearch method on the
//   <Node class, which takes in an empty array, traverses the tree
//   using the Breadth-first Search approach (specifically navigating the tree from
//   left to right), stores all of the nodes' names in the input array, and returns
//   it.

//   If you're unfamiliar with Breadth-first Search, we recommend watching the
//   Conceptual Overview section of this question's video explanation before
//   starting to code.

// let graph = A
//          /  |  \
//         B   C   D
//        / \     / \
//       E   F   G   H
//          / \   \
//        I   J   K

//Output = ["A","B", "C", "D", "E", "F", "G", "H","I", "J","K"]
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(root) {
    let queue = [this]; // [A] => [C,D, E, F]
    console.log(queue);
    // let result = []

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current);
      if (current === null) continue;
      root.push(current.name);

      for (const child of current.children) {
        queue.push(child);
      }
    }
    // console.log(root)
    return root;
  }
}

//Array does not have to be defined in Node
//Separate function, array needs to be defined

// let number = 3;
// let array = "";

// function testing(array) {
//   array.push(number);
//   console.log(array);
//   return array;
// }

// testing(array);

// let number = [1, 2, 3];
// let array;
// for (const num of number) {
//   array.push(num);
// }
// console.log(array);
// return array;
