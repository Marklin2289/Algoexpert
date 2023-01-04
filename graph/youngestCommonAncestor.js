//   You're given three inputs, all of which are instances of an
//   AncestralTree class that have an ancestor property
//   pointing to their youngest ancestor. The first input is the top ancestor in an
//   ancestral tree (i.e., the only instance that has no ancestor--its
//   ancestor property points to None /null, and the other two inputs are 
//   descendants in the ancestral
//   tree.

//   Write a function that returns the youngest common ancestor to the two
//   descendants.

//   Note that a descendant is considered its own ancestor. So in the simple
//   ancestral tree below, the youngest common ancestor to nodes A and B is node A.

let topAncestor = node A
let descendantOne = node E
let descendantTwo = node I

let = node      A
             /     \
            B       C
          /   \   /   \
        D     E F     G
      /   \
     H     I
//Output = Node B
// A,B,C,D,E,F,G,H,I
// A,B,D,H,I,E,C,F,G

//[[[A][0]], [B][1][C][1], [D][2][E][2][E][2][G][2], [H][3][I][3]]

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}
//Solution 1: Time 0(N) Space 0(N)
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    const map = {}
    let current = descendantOne
    while(current){
      map[current.name] = true
      console.log(map)
      current = current.ancestor
    }
    current = descendantTwo
    while(current){
    if(map[current.name]) return current
      else current = current.ancestor
    }
    return false
  }

//Solution2: Time 0(N) Space 0(N)
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let currentOne= descendantOne
    let currentTwo = descendantTwo
  
    while(currentOne !== currentTwo){
      currentOne = currentOne === topAncestor ? descendantTwo : currentOne.ancestor
      currentTwo = currentTwo === topAncestor ? descendantOne : currentTwo.ancestor
    }
    return currentOne
  }
  