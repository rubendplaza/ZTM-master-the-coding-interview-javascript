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
    return this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  printStack() {
    console.log(this.array);
  }
}

class Queue {
  constructor() {
    this.queueStack = new Stack();
    this.tempStack = new Stack();
  }

  push(value) {
    this.queueStack.push(value);
    // console.log("Pushing:", this.queueStack.peek());
  }

  pop() {
    while (!this.queueStack.isEmpty()) {
      this.tempStack.push(this.queueStack.pop());
    }
    const nodeToRemove = this.tempStack.pop();
    while (!this.tempStack.isEmpty()) {
      this.queueStack.push(this.tempStack.pop());
    }
    return nodeToRemove;
  }
  peek() {
    this.queueStack.peek();
  }
}

const myQueue = new Queue();
myQueue.push("Google");
myQueue.push("Youtube");
myQueue.push("Discord");
myQueue.push("Udemy");
console.log(myQueue);

myQueue.pop();
myQueue.pop();

console.log(myQueue);
