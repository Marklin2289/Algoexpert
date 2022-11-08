//   It's photo day at the local school, and you're the photographer assigned to
//   take class photos. The class that you'll be photographing has an even number
//   of students, and all these students are wearing red or blue shirts. In fact,
//   exactly half of the class is wearing red shirts, and the other half is wearing
//   blue shirts. You're responsible for arranging the students in two rows before
//   taking the photo. Each row should contain the same number of the students and
//   should adhere to the following guidelines:
//   All students wearing red shirts must be in the same row.
//   All students wearing blue shirts must be in the same row.
//   Each student in the back row must be strictly taller than the student
//   directly in front of them in the front row.
//   You're given two input arrays: one containing the heights of all the students
//   with red shirts and another one containing the heights of all the students
//   with blue shirts. These arrays will always have the same length, and each
//   height will be a positive integer. Write a function that returns whether or
//   not a class photo that follows the stated guidelines can be taken.
//   <p>Note: you can assume that each class has at least 2 students.</p>

let redShirtHeights = [1, 3, 4, 5, 8];
let blueShirtHeights = [2, 4, 4, 6, 9];

function classPhoto(redShirtHeights, blueShirtHeights) {
  let red = redShirtHeights.sort((a, b) => a - b);
  let blue = blueShirtHeights.sort((a, b) => a - b);

  let front;
  let back;
  let result;

  if (red[red.length - 1] > blue[blue.length - 1]) {
    front = blue;
    back = red;
  } else {
    front = red;
    back = blue;
  }

  for (let i = front.length - 1; i >= 0; i--) {
    if (front[i] < back[i]) {
      result = true;
    } else if (front[i] > back[i]) {
      result = false;
      break;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

// let n = 0;

// while (n < 3) {
//   n++;
// }
console.log(classPhoto(redShirtHeights, blueShirtHeights));
