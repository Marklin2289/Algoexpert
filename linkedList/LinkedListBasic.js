class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //adds an element at the end of the list
  add(element) {
    // create a new node
    let node = new Node(element);

    // to store current node
    let current;

    // if list is empty add element and make it head
    if (this.head === null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the list
      while (current.next) {
        current = current.next;
      } // at the end of the list now
      // add node
      current.next = node;
    }
    this.size++;
  }

  //insert element at the position index
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("outbound, enter a valid index.");
    else {
      //create a new node
      let node = new Node(element);
      let curr, prev;

      curr = this.head;

      // if index is 0, add element as head
      if (index == 0) {
        node.next = this.head; //add node in front of this.head
        this.head = node; // set this.head to be node
      } else {
        curr = this.head;
        let currentPosition = 0;

        //iterate through the list to find the position to insert
        while (currentPosition < index) {
          currentPosition++; // update current position each time
          prev = curr; // set prev pointer to current
          curr = curr.next; // set current to current.next
        } // when currentPosition = index, get out of the while loop
        //adding element, using curr and prev pointer to add element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  //remove an element from the specified index
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("outbound, enter a valid index.");
    } else {
      let curr,
        prev,
        currentPosition = 0;
      curr = this.head;
      prev = curr;

      //delete the first element if index = 0
      if (index === 0) {
        this.head = curr.next; // move the current pointer to curr.next
      } else {
        //iterate through the list to the position and remove the element
        while (currentPosition < index) {
          // index : 1
          currentPosition++; // 1
          prev = curr; // this.head
          curr = curr.next; // 2
        } //when currentPosition = index, get out while loop, but currentPosition + 1
        prev.next = curr.next; // 1.next = 2.next = 3, 2 removed
      }
      this.size--;
      //return the remove element
      return curr.element; // the value of the element
    }
  }

  //remove a given element from the list
  removeElement(element) {
    let current = this.head;
    let prev = null;

    //iterate through the list
    while (current !== null) {
      // comparing element with current.element
      if (element === current.element) {
        if (prev == null) {
          //if its this.head, remove
          this.head = current.next;
        } else {
          // if its not this.head, remove
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current; // update prev pointer
      current = current.next; // update current pointer
    }
    return -1; // if no matched, return -1
  }
}
