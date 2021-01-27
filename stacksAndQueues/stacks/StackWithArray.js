class Stack {
  constructor() {
    this.array = [];
  }
  // lets us see the top node
  peek() {
    return this.array[this.array.length - 1];
  }

  //lets us add a node to the top of the stack
  push(value) {
    this.array.push(value);
  }

  //lets us remove a node from the top of the stack
  pop() {
    this.array.pop();
  }

  printStack() {
    console.log(this.array);
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
myStack.pop();
myStack.printStack();
