// head
//  A -> B -> C -> D -> E
// curr

// target = C
// return bool

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d
const target = "g";
const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

const linkedListFindRecursive = (head, target) => {
  let current = head;
  if (current === null) return false;
  if (current.val === target) return true;
  return linkedListFindRecursive(current.next, target);
};
console.log(linkedListFind(a, target));
console.log(linkedListFindRecursive(a, target));
