//   Write a function that takes in a non-empty array of integers and returns an
//   array of the same length, where each element in the output array is equal to
//   the product of every other number in the input array.

//   In other words, the value at output[i]  is equal to the product of
//   every number in the input array other than output[i]

//   Note that you're expected to solve this problem without using division.
//                          t
//                          i
//                          j
let array = [5, 1, 4, 2];
//output =  [8,40,10,20]

// // loop {
// // let temp = 1;
// // array[i] = temp
// // }
// let total = 1;
// let temp = 1;
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i == j) {
//       total = total * temp;
//     } else {
//       total = total * array[j];
//     }
//   }
//   result.push(total);
//   total = 1;
// }
// return result;

function arrayOfProducts(array) {
  let result = [];
  let total = 1;
  let temp = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i == j) {
        total = total * temp;
      } else {
        total = total * array[j];
      }
    }
    result.push(total);
    total = 1;
  }
  console.log(result);
  return result;
}

//   //   let i = 1;
//   //   while (i > 0 && i < array.lenght - 1) {
//   //     array[i] = 1;
//   //     sum1 = array[i] * array[i - 1];
//   //     let j = i + 1;
//   //     for (j = array.length - 1; j > 0; j++) {
//   //       let sum2 = array[j];
//   //       sum2 = sum2 * array[j + 1];
//   //       totalSum = sum1 * sum2;
//   //       result.push(totalSum);
//   //     }
//   //     i++;
//   //   }
//   //   console.log(result);
//   //   return result;
// }
// arrayOfProducts(array);

// // let i = 1;
// // let j = i + 1;
// // while (i > 0 && i < array.lenght - 1) {
// //   array[i] = 1;
// //   sum1 = array[i] * array[i - 1];
// //   while (j < array.length) {
// //     let sum2 = array[j];
// //     sum2 = sum2 * array[j + 1];
// //     totalSum = sum1 * sum2;
// //     j++;
// //     result.push(totalSum);
// //   }
// //   i++;
// // }
// // return result;

// // let total = array[0];
// // for (let i = 0; i < array.length - 1; i++) {
// //   total = total * array[i + 1];
// //   console.log(total);
// // }
// function arrayOfProducts(array) {
//   let result = [];
//   let total = array[array.length - 1]; // 2
//   for (let i = 0; i < array.length; i++) {
//     for (let j = array.length - 1; j >= 1; j--) {
//       if (j - 1 == i) {
//         total = total * 1;
//         console.log(`total * 1 : ${total}`);
//       } else {
//         total = total * array[j - 1];
//         console.log(`total * j-1 : ${total}`);
//         result.push(total);
//       }
//     }
//     console.log(result);
//     return result;
//   }
// }
// arrayOfProducts(array);
// .       i
// 1
//           1  5  5  5
//         4  4  1  1
//         2  2  2  4

// function arrayOfProducts(array) {
//   const arrayLength = array.length;
//   const left = [1];
//   const right = [1];
//   const result = [];

//   let leftProduct = 1;
//   for (i = 0, j = arrayLength - 1; i < arrayLength - 1; i++, j--) {
//     leftProduct *= array[i];
//     console.log(`leftProduct : ${leftProduct}`);
//     left.push(leftProduct);
//     console.log(`left[] : ${left}`);
//   }

//   let rightProduct = 1;
//   for (i = arrayLength - 1; i >= 0; i--) {
//     console.log(`left[i] : ${left[i]}`);
//     result[i] = left[i] * rightProduct;
//     console.log(`result[i] : ${result[i]}`);
//     rightProduct *= array[i];
//     console.log(`rightProduct *= array[i] : ${rightProduct}`);
//   }
//   console.log(`result : ${result}`);
//   return result;
// }

arrayOfProducts(array);
