let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(instructor));
// [ 'firstName', 'isInstructor', 'favoriteNumbers' ]
console.log(Object.entries(instructor));
// [
//     [ 'firstName', 'Kelly' ],
//     [ 'isInstructor', true ],
//     [ 'favoriteNumbers', [ 1, 2, 3, 4 ] ]
//   ]
console.log(instructor.hasOwnProperty("firstName"));
// true
console.log(instructor);
// {
//   firstName: 'Kelly',
//   isInstructor: true,
//   favoriteNumbers: [ 1, 2, 3, 4 ]
// }
