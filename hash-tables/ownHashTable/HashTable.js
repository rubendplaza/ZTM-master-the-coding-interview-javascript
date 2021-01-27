class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  //hash functions are fast O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //no looping, O(1)
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  //with few or no collisions, this is O(1)
  //with many collisions, this can become O(n)
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  //O(n)
  keys() {
    if (!this.data.length) {
      return undefined;
    }

    const keysArray = [];
    //looping over every memory space in the hash table
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //covering the non collided case
        if (this.data[i].length === 1) {
          keysArray.push(this.data[i][0][0]);
          //continue next iteration if only single key value pair
          continue;
        }
        //covering for the collided key value pairs
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
// console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
// console.log(myHashTable.get("apples"));
myHashTable.set("oranges", 3);
console.log(myHashTable.data);
console.log(myHashTable.keys());
