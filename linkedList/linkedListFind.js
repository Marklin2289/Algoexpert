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
const target = "c";
const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val !== target) {
      current = current.next;
      return false;
    }
    return true;
  }
};

console.log(linkedListFind(a, target));
