
//   You're given two Linked Lists of potentially unequal length. Each Linked List
//   represents a non-negative integer, where each node in the Linked List is a
//   digit of that integer, and the first node in each Linked List always
//   represents the least significant digit of the integer. Write a function that
//   returns the head of a new Linked List that represents the sum of the integers
//   represented by the two input Linked Lists.
  
//   Each LinkedList node has an integer value as well as
//   a next node pointing to the next node in the list or to
//   None / null if it's the tail of the list. The
//   value of each LinkedList node is always in the range
//   of 0 - 9<.

// Note: your function must create and return a new Linked List, and you're not
// allowed to modify either of the input Linked Lists.

let linkedListOne = 2 -> 4 -> 7 -> 1
let linkedListTwo = 9 -> 4 -> 5

1742
0549

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let currentOne = linkedListOne
    let currentTwo = linkedListTwo

    let SumLinkedList = {}
    let sum = 0
    

    while(currentOne != null || currentTwo != null){

        if(currentOne == null && currentTwo !== null){
            SumLinkedList.value = currentTwo.value + sum
        } else if(currentOne != null && currentTwo == null){
            SumLinkedList.value = currentOne.value + sum
        }else{
            SumLinkedList.value = sum + currentOne.value + currentTwo.value
        }

        if(SumLinkedList.value >= 10){
            SumLinkedList.next = new LinkedList()
            SumLinkedList.value = SumLinkedList.value % 10
            sum = 1
            currentOne = currentOne.next
            currentTwo = currentTwo.next
        }else{
            SumLinkedList.next = new LinkedList()
            currentOne = currentOne.next
            currentTwo = currentTwo.next
            sum = 0 
        }
    }
    console.log(SumLinkedList)
    return SumLinkedList;
  }


  //======

  //Solution
  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let current1 = linkedListOne
    let current2 = linkedListTwo
    let tempHead = new LinkedList(0)
    let currentNode = tempHead
    let carry = 0
  
    while(current1 !== null || current2 !== null || carry !==0){
      let val1 = current1 === null ? 0 :current1.value
      let val2 = current2 === null ? 0 : current2.value
  
      let sum = val1 + val2 + carry
    //   let newValue = sum % 10
  
      let newSumNode = new LinkedList(sum % 10)
  
      currentNode.next = newSumNode
      currentNode = newSumNode
  
      carry = sum > 9 ? 1: 0
  
      if(current1 !== null) current1 = current1.next
      if(current2 !== null) current2 = current2.next
  
    }
    console.log(Object.entries(tempHead))
    return tempHead.next
  }