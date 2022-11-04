class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function treeIncludes(root, target) {
  if (root === null) return false;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    if (current.val === target) {
      return true;
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
}
// ===================================================
function treeIncludesRecursive(root, target) {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    treeIncludesRecursive(root.left, target) ||
    treeIncludesRecursive(root.right, target)
  );
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

// console.log(treeIncludes(a, "e"));
console.log(treeIncludesRecursive(a, "e"));
