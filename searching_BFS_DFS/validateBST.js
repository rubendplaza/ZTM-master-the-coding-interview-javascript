//left child of node at i = 2k + 1 where k is currentNode index
//right child of node at i = 2(k + 1) where k is currentNode index

//what if equal;

// const isValidBST = (root) => {
//   for (let i = 0; i < root.length; i++) {
//     const currentNode = root[i];
//     if (root[2 * i + 1]) {
//       const left = root[2 * i + 1];
//       if (left >= currentNode) {
//         return false;
//       }
//     }
//     if (root[2 * (i + 1)]) {
//       const right = root[2 * (i + 1)];
//       if (right <= currentNode) {
//         return false;
//       }
//     }
//     continue;
//   }
//   return true;
// };

const isValidBST = (root) => {
  if (!root) {
    return false;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    currentNode = queue.shift();
    console.log("Current:", currentNode);
    console.log("CurrentValue:", currentNode.val);
    console.log("Left:", currentNode.left);
    console.log("Right:", currentNode.right);
    if (currentNode.left) {
      console.log("There is a left.");
      if (currentNode.left.val >= currentNode.val) {
        console.log(currentNode.left.val, currentNode.val);
        return false;
      }
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      console.log("There is a right.");
      if (currentNode.right.val <= currentNode.val) {
        console.log(currentNode.right.val, currentNode.val);
        return false;
      }
      queue.push(currentNode.right);
    }
  }
  return true;
};

const isValidBST = (root) => {
  if (!root) {
    return;
  }
  if (root.left) {
    if (root.left.val >= root.val) {
      return false;
    }
    return isValidBST(root.left);
  }
  if (root.right) {
    if (root.right.val <= root.val) {
      return false;
    }
    return isValidBST(root.right);
  }
  return true;
};

const arr = [5, 1, 4, null, null, 3, 6];
console.log(isValidBST(arr));
