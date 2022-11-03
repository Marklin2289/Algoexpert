// console.log(70000000 * 10 ** decimals());

// console.log(Math.floor(9 / 2));

// let array = [1, 2, 3, 4, 5, 6];

function nodeDepths(root) {
  let stack = [[root, 0]],
    depths = 0;
  console.log(stack);
  while (stack.length) {
    let [node, depth] = stack.pop();
    depths += depth;
    node.left && stack.push([node.left, depth + 1]);
    node.right && stack.push([node.right, depth + 1]);
  }
  return depths;
}
