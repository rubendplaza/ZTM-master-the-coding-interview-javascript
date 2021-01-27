class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // get first item in queue
  peek() {
    return this.first;
  }

  //add to the end of the enqueue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return;
  }

  //remove from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const nodeToRemove = this.first;
    this.first = this.first.next;
    this.length--;
    return nodeToRemove;
  }
  isEmpty() {
    return this.first === null;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
