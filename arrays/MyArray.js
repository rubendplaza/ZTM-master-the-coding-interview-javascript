class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shiftItemsRight(index) {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.length++;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItemsLeft(index);
    return item;
  }

  insert(item, index = 0) {
    this.shiftItemsRight(index);
    this.data[index] = item;
  }
}

const newArray = new MyArray();

newArray.push("HI");
newArray.push("HELLO");
newArray.push("!");

newArray.insert("BYE");

console.log(newArray);
