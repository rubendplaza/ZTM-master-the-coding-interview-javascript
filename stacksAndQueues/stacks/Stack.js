class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // lets us see the top node
  peek() {
    return this.top;
  }

  //lets us add a node to the top of the stack
  push(value) {
    console.log("Pushing: ", value);
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return;
    }
    const tempNode = this.top;
    this.top = newNode;
    this.top.next = tempNode;
    this.length++;
    return;
  }

  //lets us remove a node from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const nodeToRemove = this.top;
    console.log("Popping: ", nodeToRemove.value);
    this.top = this.top.next;
    this.length--;
    return nodeToRemove;
  }

  //lets us see if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  printStack() {
    console.log("--STACK--");
    if (this.isEmpty()) {
      console.log("Empty.");
      return;
    }
    let currentNode = this.top;
    while (currentNode !== null) {
      console.log("Value:", currentNode.value);
      currentNode = currentNode.next;
    }
    return;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.printStack();
myStack.push("Udemy");
myStack.printStack();
myStack.push("Discord");
myStack.printStack();
myStack.push("Youtube");
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.pop();
myStack.printStack();
console.log(myStack);
myStack.pop();
myStack.printStack();
console.log(myStack);

//Discord
//Udemy
//google
