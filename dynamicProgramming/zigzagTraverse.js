let array = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];

function zigzagTraverse(array) {
  //only going in 2 directions.  down or up
  //outer bounds are always on the permiter

  //in the middle you always go either up/right or down/left

  //at col 0 if we're going diagonally down we can't go left
  //so we have to go down

  //at row M-1 and going diagonally down, go right

  //at row 0 and going diagonally up, we have to go right
  const result = [];
  let goingDown = true;
  const height = array.length;
  const width = array[0].length;

  let h = 0;
  let w = 0;
  while (result.length < height * width) {
    result.push(array[h][w]);

    if (goingDown === true) {
      // if goingDown === true
      if (h === height - 1 || w === 0) {
        // if at the bottom or at the left edge
        goingDown = false;
        if (h === height - 1) {
          w++; // to the right
        } else {
          h++; // going down by 1
        }
      } else {
        // if not at the bottom or at the left edge
        // going down, also to the left
        h++;
        w--;
      }
    } else {
      // goingDown === false
      if (h === 0 || w === width - 1) {
        // if at the top or at the right edge
        goingDown = true;
        if (w === width - 1) {
          // if at the right edge
          h++; // going down by 1
        } else {
          w++; // to the right
        }
      } else {
        // if not at the top or at the right edge
        // going up, also to the right
        h--;
        w++;
      }
    }
  }
  return result;
}

console.log(zigzagTraverse(array));
