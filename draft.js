// console.log(70000000 * 10 ** decimals());

// console.log(Math.floor(9 / 2));

// let array = [1, 2, 3, 4, 5, 6];
// let result = array.push(7);
// console.log(result);
// console.log(array);

// function nodeDepths(root) {
//   let stack = [[root, 0]],
//     depths = 0;
//   console.log(stack);
//   while (stack.length) {
//     let [node, depth] = stack.pop();
//     depths += depth;
//     node.left && stack.push([node.left, depth + 1]);
//     node.right && stack.push([node.right, depth + 1]);
//   }
//   return depths;
// }

// let USDC = 1000000000000000000;
// let DAI = 1000000;

// console.log(DAI / USDC);

// let array = [12, 3, 1, 2, -6, 5, -8, 6];
// let newArr = array.sort((a, b) => a - b);
// for (const idx in newArr) {
//   //   console.log(idx);
//   console.log(newArr[idx]);
// }

// console.log(`true  || false :${true || false}`);
// console.log(`false || true  :${false || true}`);
// console.log(`true  || true  :${true || true}`);
// console.log(`false || false :${false || false}`);

let preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];
console.log(preOrderTraversalValues.filter((v) => v < 10));
