class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Base Case
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    // If Root not null, traverse and insert
    let currentNode = this.root;
    while (currentNode) {
      if (value >= currentNode.value) {
        //Go Right
        if (!currentNode.right) {
          //If empty, insert
          currentNode.right = new Node(value);
          return;
        }
        //Keep iterating right
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        //Go Left
        if (!currentNode.left) {
          //If empty, insert
          currentNode.left = new Node(value);
          return;
        }
        //Keep iterating left
        currentNode = currentNode.left;
      }
    }
  }
  lookup(value) {
    //Code here: return node if found, null if not
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        //Value found condition
        return currentNode;
      }
      //Value searching for is greater than current value
      if (value > currentNode.value) {
        //Go right
        currentNode = currentNode.right;
        continue;
      }
      //Value searching for is less than current value
      if (value < currentNode.value) {
        //Go left
        currentNode = currentNode.left;
        continue;
      }
    }
    return null;
  }
  remove(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
        
      if (value === currentNode.value) {

        //Option 1: current has no right child
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (parentNode.value > currentNode.value) {
              //Current node is to left of parent node
              parentNode.left = currentNode.left;
            }

            //if parent < current value, make left child a right child of parent
            else if (parentNode.value < currentNode.value) {
              //Current node is to right of parent node
              parentNode.right = currentNode.left;
            }
          }
        }

        //Option 2: current has right child which has no left child
        else if (!currentNode.right.left) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            //if parent > current, make right child of the left the parent
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.right;
            }

            //if parent < current, make right child a right child of the parent
            else if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }

        //Option 3: current has right child that has a left child
        else {
          //find the right child's left most child
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return this;

      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        continue;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        continue;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(20);
console.log(tree.lookup(170));
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
