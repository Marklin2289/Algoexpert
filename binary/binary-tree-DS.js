//           root: no parents node
//   tree =   1
//         /     \
//        2       3 : we can storage anything into node: integer, string, object,etc
//      /   \   /   \ : edges
//     4     5 6     7
//   /   \     leaf  leaf: 0 children
//  8     9
// leaf   leaf

// a tree can contain many nodes
// a node can point to other node, we draw a circle for a node

// root that has no parents node
// leaf node that has no children node on different level
// parent child relationship

// requirements for binary tree:
// binary tree = at most 2 children , less than 2 children node including 0 , 1 , 2
//             - at most 2 children per node
//             - exactly 1 root
//             - exactly 1 path b/w root and any node (example: only one path from root 1 to node 7)

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//            a
//          /    \
//         b      c
//       /   \     \
//      d     e     f

// depth-first-values:   a,b,d,e,c,f

// breadth-first-values: a,b,c,d,e,f
//
