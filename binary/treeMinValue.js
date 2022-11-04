class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//            3
//          /   \
//         11    4
//       /   \    \
//      4     2    1

function treeMinValue(root) {
  const stack = [root];
  let smallest = Infinity;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }
  return smallest;
}
console.log(`treeMinValue() using stack : ${treeMinValue(a)}`);

function treeMinValueQueue(root) {
  const queue = [root];
  let smallest = Infinity;

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return smallest;
}
console.log(`treeMinValueQueue() using queue : ${treeMinValueQueue(a)}`);

function treeMinValueRecursive(root) {
  if (root === null) return Infinity;
  const leftMin = treeMinValueRecursive(root.left);
  const rightMin = treeMinValueRecursive(root.right);
  return Math.min(root.val, leftMin, rightMin);
}
console.log(
  `treeMinValueRecursive() using recursive call : ${treeMinValueRecursive(a)}`
);
