//   You're given the head of a Singly Linked List whose nodes are in sorted order
//   with respect to their values. Write a function that returns a modified version
//   of the Linked List that doesn't contain any nodes with duplicate values. The
//   Linked List should be modified in place (i.e., you shouldn't create a brand
//   new list), and the modified Linked List should still have its nodes sorted
//   with respect to their values.

//Each LinkedList node has an integer value as well as the next node pointing
//to the next node in the list or to none/null if its the tail of the list.

// const linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6

//output= 1 -> 3 -> 4 -> 5 -> 6

// Since the linked list's nodes are sorted, you can loop through them and, at
// each iteration, simply remove all successive nodes that have the same value as
// the current node. For each node, change its next pointer to the next node in
// the linked list that has a different value. This will remove all
// duplicate-value nodes.

//  1 -> 2 -> 2 -> 3
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(3);

a.next = b;
b.next = c;
c.next = d;

// function removeDuplicatesFromLinkedList(head) {
//   // base case head.val === head.next.val  => recursive call
//   //   let nextNode = head.next; //1
//   let current = head;
//   while (current !== null) {
//     nextNode = current.next;
//     if (current.val === nextNode.val) current.next = nextNode.next;

//     // head = nextNode.next;
//     removeDuplicatesFromLinkedList(current.next);
//   }
//   return head;
// }

function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;

  while (current.next) {
    //checking if next node has value
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else current = current.next;
  }
  return linkedList;
}

console.log(removeDuplicatesFromLinkedList(a));

// function removeDuplicatesFromLinkedList(linkedList){
//     let current = linkedList;
//     let next = current.next;
//     for (element in linkedList){
//         if(linkedList[element] == linkedList[element + 1]){

//         }
//         console.log(linkedList[element]);
//     }
// }

// class LinkedList {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
