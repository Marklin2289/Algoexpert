//   A "special" array is a non-empty array that contains either integers or other
//   "special" arrays. The product sum of a "special" array is the sum of its
//   elements, where "special" arrays inside it are summed themselves and then
//   multiplied by their level of depth.
//   The depth of a "special" array is how far nested it is. For instance, the
//   depth of [] is 1 ; the depth of the inner array in [[]] is 2
//   ; the depth of the innermost array in  [[[]]]is 3

// console.log(number);
let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
// console.log(array[2] === number);
//5 index
//depth is 2 and 3
// if array[i] === number // true => +
// if array[i] !== number // true => ((productSum(array[i])))
// if array[2] === [] // false

function productSum(array, multiplier = 1) {
  //   let isNumber = new Number();

  //   let multiplier = 1;
  let sum = 0;
  //   // for loop
  //   // if array[i] === new Number()  array[i+1] === number// true => +
  //   // array[i] + array[i+1]
  //   for (let i = 0; i < array.length; i++) {
  //     if (typeof array[i] === "number") {
  //       sum = array[i] * multiplier + sum; //Sum = 14 ===> 14+(-2)
  //     } else {
  //       productSum(array[i]);
  //       multiplier++;
  //     }
  //   }
  //   console.log(sum);
  //   return sum;
  // return sum
  // if array[i] !== number // true => ((productSum(array[i])))
  //   [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
  for (let element in array) {
    if (typeof element !== "number") {
      sum += productSum(array, multiplier + 1);
    } else {
      sum = element + sum;
    }
  }
  return sum * multiplier;
}
console.log(productSum(array, 1));
// productSum(array, 1);

// if (typeof array[i] === "number") {
//   sum = array[i] * multiplier + sum;
//   i++;
// } else {
//   productSum(array[i]);
//   multiplier++;
// }
// console.log(sum);
// return sum;

function productSum(array, depth = 1) {
  let sum = 0;

  for (let item of array) {
    if (Array.isArray(item)) sum += productSum(item, depth + 1);
    else sum += item;
  }
  return sum * depth; //   A "special" array is a non-empty array that contains either integers or other
  //   "special" arrays. The product sum of a "special" array is the sum of its
  //   elements, where "special" arrays inside it are summed themselves and then
  //   multiplied by their level of depth.
  //   The depth of a "special" array is how far nested it is. For instance, the
  //   depth of [] is 1 ; the depth of the inner array in [[]] is 2
  //   ; the depth of the innermost array in  [[[]]]is 3

  // console.log(number);
  let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
  // console.log(array[2] === number);
  //5 index
  //depth is 2 and 3
  // if array[i] === number // true => +
  // if array[i] !== number // true => ((productSum(array[i])))
  // if array[2] === [] // false

  function productSum(array, multiplier = 1) {
    //   let isNumber = new Number();

    //   let multiplier = 1;
    let sum = 0;
    //   // for loop
    //   // if array[i] === new Number()  array[i+1] === number// true => +
    //   // array[i] + array[i+1]
    //   for (let i = 0; i < array.length; i++) {
    //     if (typeof array[i] === "number") {
    //       sum = array[i] * multiplier + sum; //Sum = 14 ===> 14+(-2)
    //     } else {
    //       productSum(array[i]);
    //       multiplier++;
    //     }
    //   }
    //   console.log(sum);
    //   return sum;
    // return sum
    // if array[i] !== number // true => ((productSum(array[i])))
    //   [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
    for (let element in array) {
      if (typeof element !== "number") {
        sum += productSum(array, multiplier + 1);
      } else {
        sum = element + sum;
      }
    }
    return sum * multiplier;
  }
  console.log(productSum(array, 1));
  // productSum(array, 1);

  // if (typeof array[i] === "number") {
  //   sum = array[i] * multiplier + sum;
  //   i++;
  // } else {
  //   productSum(array[i]);
  //   multiplier++;
  // }
  // console.log(sum);
  // return sum;

  function productSum(array, depth = 1) {
    let sum = 0;

    for (let item of array) {
      if (Array.isArray(item)) sum += productSum(item, depth + 1);
      else sum += item;
    }
    return sum * depth;
  }
}
