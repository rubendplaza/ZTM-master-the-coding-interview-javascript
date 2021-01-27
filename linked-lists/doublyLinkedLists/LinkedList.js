class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index <= 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.traverseToIndex(index - 1);
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    this.length++;
    return;
  }

  traverseToIndex(index) {
    let ctr = 0;
    let current = this.head;
    while (ctr !== index) {
      current = current.next;
      ctr++;
    }
    return current;
  }

  remove(index) {
    if (index <= 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    if (index >= this.length) {
      const secondLastNode = this.traverseToIndex(this.length - 2);
      secondLastNode.next = null;
      this.length--;
      return;
    }

    const previousNode = this.traverseToIndex(index - 1);
    const nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;
    nodeToRemove.next.prev = previousNode;
    this.length--;
    return;
  }

  find(value) {
    let ctr = 0;
    let current = this.head;
    while (ctr < this.length) {
      if (current.value === value) {
        return {
          found: true,
          value: value,
          index: ctr,
        };
      }
      current = current.next;
      ctr++;
    }
    return {
      found: false,
      value: value,
      index: null,
    };
  }

  get(index) {
    if (index <= 0) {
      return this.head;
    }
    if (index >= this.length) {
      return this.tail;
    }
    return this.traverseToIndex(index);
  }

  //   display() {
  //     let current = this.head;
  //     while (current !== null) {
  //       console.log("\nValue:", current.value);
  //       if (current.prev) {
  //         console.log("Previous:", current.prev.value);
  //       }
  //       if (current.next) {
  //         console.log("Next:\n", current.next.value);
  //       }
  //       current = current.next;
  //     }
  //   }
  display() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(1);
console.log(myLinkedList.find(16));
console.log(myLinkedList.get(2));
console.log(myLinkedList.display());
