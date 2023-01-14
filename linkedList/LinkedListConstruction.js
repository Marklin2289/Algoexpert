// Write a DoublyLinkedList class that has a head and a
// tail, both of which point to either a linked list
// Node or None / null. The class should
// support:

// Setting the head and tail of the linked list.

// Inserting nodes before and after other nodes as well as at given positions
// (the position of the head node is 1
// Removing given nodes and removing nodes with given values.
// Searching for nodes with given values.

//   Note that the setHead, setTail,
//   insertBefore, insertAfter,
//   insertAtPosition, and remove methods all take in
//   actual Nodes as input parameters—not integers (except for
//   insertAtPosition, which also takes in an integer representing the
//   position); this means that you don't need to create any new Nodes
//   in these methods. The input nodes can be either stand-alone nodes or nodes
//   that are already in the linked list. If they're nodes that are already in the
//   linked list, the methods will effectively be moving the nodes within
//   the linked list. You won't be told if the input nodes are already in the
//   linked list, so your code will have to defensively handle this scenario.

// If you're doing this problem in an untyped language like Python or JavaScript,
// you may want to look at the various function signatures in a typed language
// like Java or TypeScript to get a better idea of what each input parameter is.

//   Each Node has an integer value as well as a
//   prev node and a next node, both of which can point
//   to either another node or None/null.
class Node {
  //node(a),node(b)
  constructor(value) {
    this.value = value; //[[prev][value][next]] [[prev][value][next]]
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  //[[head][tail]]
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail == null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // node(c), node(b)
    if (nodeToInsert == this.head && nodeToInsert == this.tail) {
      return;
    }
    this.remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev == null) {
      this.head = nodeToInsert;
    } else node.prev.next = nodeToInsert;

    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert == this.head && nodeToInsert == this.tail) {
      return;
    }
    this.remove(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next == null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition !== position) {
      node = node.next;
      currentPosition++;
    }
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value == value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    if (node == this.head) {
      this.head = this.head.next;
    }
    if (node == this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
}
