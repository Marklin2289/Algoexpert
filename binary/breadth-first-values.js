class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstValues(root) {
  if (root === null) return [];
  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    values.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  console.log(values);
  return values;
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

//    queue
//            a
//          /   \
//         b     c
//       /   \    \
//      d     e    f

//   [a,b,c,d,e,f]

breadthFirstValues(a);
